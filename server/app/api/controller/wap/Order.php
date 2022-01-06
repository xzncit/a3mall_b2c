<?php
// +----------------------------------------------------------------------
// | A3Mall
// +----------------------------------------------------------------------
// | Copyright (c) 2020 http://www.a3-mall.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: xzncit <158373108@qq.com>
// +----------------------------------------------------------------------
namespace app\api\controller\wap;

use app\common\model\goods\GoodsModel;
use mall\basic\Area;
use mall\basic\Bonus;
use mall\basic\Distribution;
use mall\basic\Payment;
use mall\basic\Promotion;
use mall\basic\Store;
use mall\library\delivery\aliyun\Aliyun;
use mall\utils\Check;
use mall\utils\Tool;
use think\facade\Db;
use think\facade\Request;
use mall\basic\Shopping;
use mall\basic\Users;

class Order extends Base {

    public function confirm(){
        $id = Request::param("id","","trim,strip_tags");
        $bonus_id = Request::param("bonus_id","0","trim,strip_tags");
        $address_id = Request::param("address_id","0","trim,strip_tags");
        $product_id = Request::param("sku_id","0","trim,strip_tags");
        $type = Request::param("type","","trim,strip_tags");
        $num = Request::param("num","1","intval");

        $array = array_map("intval",explode(",",$id));
        $array = array_filter($array,function ($res){
            return $res != 0;
        });

        if(count($array) <= 0){
            return $this->returnAjax("请选择需要购买的商品",0);
        }else if(empty($type) || !in_array($type,["buy","cart"])){
            return $this->returnAjax("非法操作",0);
        }

        $cart = [];
        if($type == "cart"){
            $rs = Db::name("cart")
                ->where("user_id",Users::get("id"))
                ->where("id","in", implode(",",$array))
                ->select()->toArray();

            if(empty($rs)){
                return $this->returnAjax("请选择商品后在提交订单",0);
            }

            foreach($rs as $k=>$v){
                $cart[$k] = [
                    "activity_id"=>0,
                    "type"=>0,
                    "goods_id"=>$v["goods_id"],
                    "product_id"=>$v["product_id"],
                    "spec_key"=>$v["spec_key"],
                    "nums"=>$v["goods_nums"]
                ];
            }
        }else{
            if($num <= 0){
                $num = 1;
            }

            try{
                $promotion = Promotion::checkOrderType($id,$product_id,$num,$type);
            }catch (\Exception $e){
                return $this->returnAjax($e->getMessage(),0);
            }

            array_push($cart,$promotion);
        }

        try {
            $data = Shopping::get($cart);
        }catch (\Exception $e){
            return $this->returnAjax($e->getMessage(),$e->getCode() > 0 ? 1 : 0,$e->getCode());
        }

        $bonus = Db::name("users_bonus")
            ->alias("u")
            ->field("b.*,u.id as users_bonus_id")
            ->join("promotion_bonus b","u.bonus_id=b.id","LEFT")
            ->where("u.user_id",Users::get("id"))
            ->where("u.status",0)
            ->where("b.end_time > " . time())
            ->where('order_amount <= 0 OR ' . $data["real_amount"] . ' >= order_amount')
            ->select()->toArray();

        $coupon = [];
        foreach($bonus as $key=>$value){
            $coupon[$key] = [
                "id"=>$value["users_bonus_id"],
                "name"=>$value["name"],
                "condition"=>$value["order_amount"] <= 0 ? "无门槛" : "满".$value["order_amount"].'可用',
                "startAt"=>date("Y-m-d",$value["start_time"]),
                "endAt"=>date("Y-m-d",$value["end_time"]),
                "price"=>(int)$value["amount"],
                "valueDesc"=>number_format($value["amount"]),
                "unitDesc"=>"元",
                "reason"=>""
            ];
        }

        $data["bonus"] = $coupon;

        $address = Db::name("users_address")
            ->where("user_id",Users::get("id"))
            ->select()->toArray();

        $addressData = ["default"=>[],"list"=>[],"store"=>[]];
        foreach ($address as $key=>$value){
            $v = [
                "id"=>$value["id"],
                "name"=>$value["accept_name"],
                "tel"=>$value["mobile"],
                "province"=>$value["province"],
                "city"=>$value["city"],
                "area"=>$value["area"],
                "address"=>Area::get_area([$value["province"],$value["city"],$value["area"]],',') . ' ' . $value["address"],
            ];

            if($address_id == $value["id"] || (empty($addressData["default"]) && $value["is_default"])){
                $addressData["default"] = $v;
            }

            $addressData["list"][] = $v;
        }

        $data["address"] = $addressData;
        $addressData["default"] = empty($addressData["default"]) ? (isset($addressData["list"][0]) ? $addressData["list"][0] : []) : $addressData["default"];

        try {
            Distribution::get($data,$addressData["default"]);
            if($bonus_id > 0){
                Bonus::apply($data,$bonus_id);
            }

        }catch (\Exception $e){
            return $this->returnAjax($e->getMessage(),$e->getCode() > 0 ? 1 : 0,$e->getCode());
        }

        $data["users_price"] = Users::get("amount");
        $data["users_point"] = Users::get("point");
        return $this->returnAjax("ok",1,$data);
    }

    public function create(){
        $id = Request::param("id","","trim,strip_tags");
        $bonus_id = Request::param("bonus_id","0","trim,strip_tags");
        $address_id = Request::param("address_id","0","trim,strip_tags");
        $product_id = Request::param("sku_id","","trim,strip_tags");
        $type = Request::param("type","","trim,strip_tags");
        $payment_id = Request::param("payment","","trim,strip_tags");
        $remarks = Request::param("remarks","","trim,strip_tags");
        $num = Request::param("num","1","intval");
        $source = Request::param("source","1","intval");

        $array = array_map("intval",explode(",",$id));
        $array = array_filter($array,function ($res){
            return $res != 0;
        });

        if(count($array) <= 0){
            return $this->returnAjax("请选择需要购买的商品",0);
        }else if(empty($type) || !in_array($type,["buy","cart"])){
            return $this->returnAjax("非法操作",0);
        }

        if(!in_array($source,[1,2,3,4])){
            $source = 1;
        }

        if($payment_id == 'wechat'){
            switch($source){
                case 1:
                    $payment_id = "wechat-h5";
                    break;
                case 2:
                    $payment_id = "wechat";
                    break;
                case 4:
                    $payment_id = "wechat-app";
                    break;
            }
        }

        $cart = [];
        if($type == "cart"){
            $rs = Db::name("cart")
                ->where("user_id",Users::get("id"))
                ->where("id","in", implode(",",$array))
                ->select()->toArray();

            if(empty($rs)){
                return $this->returnAjax("请选择商品后在提交订单",0);
            }

            foreach($rs as $k=>$v){
                $cart[$k] = [
                    "activity_id"=>0,
                    "type"=>0,
                    "cart_id"=>$v["id"],
                    "goods_id"=>$v["goods_id"],
                    "product_id"=>$v["product_id"],
                    "spec_key"=>$v["spec_key"],
                    "nums"=>$v["goods_nums"]
                ];
            }
        }else{
            if($num <= 0){
                $num = 1;
            }

            try{
                $promotion = Promotion::checkOrderType($id,$product_id,$num,$type);
            }catch (\Exception $e){
                return $this->returnAjax($e->getMessage(),0);
            }

            array_push($cart,$promotion);
        }

        // 检查是否开启到店自提
        if(($address = Db::name("users_address")->where(["id"=>$address_id,"user_id"=>Users::get("id")])->find()) == false){
            return $this->returnAjax("您选择的地址不存在，请重新选择",0);
        }

        if($bonus_id > 0 && ($bonus = Db::name("users_bonus")->where("user_id",Users::get("id"))->where("id",$bonus_id)->find()) == false){
            return $this->returnAjax("您选择的优惠劵不存在！",0);
        }

        if(($payment = Db::name("payment")->where("code",$payment_id)->find()) == false){
            return $this->returnAjax("您选择的支付方式不存在！",0);
        }

        if(Check::strlen($remarks) > 100){
            return $this->returnAjax("留言内容不得超过100个字符",0);
        }

        try {
            $data = Shopping::get($cart);
            Distribution::get($data,$address);
            $data["address"] = $address;

            if($bonus_id > 0){
                Bonus::apply($data,$bonus_id);
            }

            $data["payment"] = $payment;
            $data["remarks"] = $remarks;
            $data["source"] = $source;
            $data['order_id'] = \mall\basic\Order::create($data);
            Bonus::updateStatus($bonus_id,$data['order_id']);
            $result = Payment::handle($data['order_id']);
            if($type == 'cart'){
                Shopping::delete(array_map(function ($res){
                    return $res["cart_id"];
                },$cart));
            }

            Promotion::updateStatus($data);
        }catch (\Exception $e){
            return $this->returnAjax($e->getMessage(),$e->getCode() > 0 ? 1 : 0);
        }

        $result["shop_count"] = Db::name("cart")->where("user_id",Users::get("id"))->count();
        return $this->returnAjax("ok",1,$result);
    }

    public function get_list(){
        $type = Request::param("type","1","intval");
        $page = Request::param("page","1","intval");
        $size = 10;

        $condition = 'user_id=' . Users::get("id") . ' and ';
        switch($type){
            case 1: // 待付款
                $condition .= 'status=1 and pay_status=0';
                break;
            case 2: // 待发货
                $condition .= 'status=2 and pay_status=1 and distribution_status=0';
                break;
            case 3: // 待收货
                $condition .= 'status=2 and pay_status=1 and distribution_status in(1,2)';
                break;
            case 4: // 待评价
                $condition .= 'status=5 and pay_status=1 and delivery_status=1 and evaluate_status in(0,2)';
                break;
            case 5: // 己完成
                $condition .= 'status=5 and pay_status=1 and delivery_status=1 and evaluate_status=1';
                break;
        }

        $count = Db::name("order")
            ->where($condition)
            ->count();

        $total = ceil($count / $size);
        if($total == $page -1){
            return $this->returnAjax("empty",-1,[
                "list"=>[],
                "page"=>$page,
                "total"=>$total,
                "size"=>$size
            ]);
        }

        $list = Db::name("order")
            ->where($condition)
            ->order("id","DESC")
            ->limit((($page - 1) * $size),$size)
            ->select()->toArray();

        $data = [];
        foreach($list as $key=>$value){
            $data[$key] = [
                "order_id"=>$value["id"],
                "shipping"=>$value["shipping_type"],
                "order_no"=>$value["order_no"],
                "type"=>\mall\basic\Order::getOrderTypeText($value["type"],1),
                "pay_status"=>\mall\basic\Order::getPaymentStatusText($value["pay_status"]),
                "order_status"=>\mall\basic\Order::getStatusText(\mall\basic\Order::getStatus($value)),
                "order_amount"=>$value["order_amount"],
                "create_time"=>date("Y-m-d H:i:s",$value["create_time"]),
                "active"=>\mall\basic\Order::getStatus($value)
            ];

            $goods = Db::name("order_goods")->where("order_id",$value["id"])->select()->toArray();
            foreach($goods as $k=>$v){
                $goods_array = json_decode($v["goods_array"],true);
                $data[$key]['item'][$k] = [
                    "title"=>$goods_array["title"],
                    "spec"=>$goods_array["spec"],
                    "thumb_image"=>Tool::thumb($v["thumb_image"],"medium",true),
                    "nums"=>$v["goods_nums"],
                    "price"=>$v["sell_price"]
                ];
            }
        }

        return $this->returnAjax("ok",1,[
            "list"=>$data,
            "page"=>$page,
            "total"=>$total,
            "size"=>$size
        ]);
    }

    public function detail(){
        $id = Request::post("id","0","intval");
        if(($order = Db::name("order")->where([
            "user_id"=>Users::get("id"),"id"=>$id
        ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        $order["activity_id"] = $order["activity_id"];
        $order["activity_type"] = $order["type"];
        $order["active"] = \mall\basic\Order::getOrderActive($order);
        $order["create_time"] = date("Y-m-d H:i:s",$order["create_time"]);
        $order["type"] = \mall\basic\Order::getOrderTypeText($order["type"]);
        $order["pay_status"]= \mall\basic\Order::getPaymentStatusText($order["pay_status"]);
        $order["pay_type"] = Db::name("payment")->where(["id"=>$order["pay_type"]])->value("name");
        $order["region"] = Area::get_area([$order['province'],$order['city'],$order['area']],' ');

        $order_goods = Db::name("order_goods")->where([
            "order_id"=>$id
        ])->select()->toArray();

        foreach($order_goods as $key=>$value){
            $goods_array = json_decode($value["goods_array"],true);
            $order["item"][$key] = [
                "title"=>$goods_array["title"],
                "spec"=>!empty($goods_array["spec"]) ? $goods_array["spec"] : "",
                "goods_id"=>$value["goods_id"],
                "goods_no"=>$value["goods_no"],
                "thumb_image"=>Tool::thumb($value["thumb_image"],"medium",true),
                "sell_price"=>$value["sell_price"],
                "nums"=>$value["goods_nums"]
            ];
        }


        $data = [
            "activity_id"=>$order["activity_id"],
            "activity_type"=>$order["activity_type"],
            "accept_name"=>$order["accept_name"],
            "mobile"=>$order["mobile"],
            "region"=>$order["region"],
            "address"=>$order["address"],
            "order_no"=>$order["order_no"],
            "create_time"=>$order["create_time"],
            "type"=>$order["type"],
            "pay_status"=>$order["pay_status"],
            "order_status"=>\mall\basic\Order::getStatus($order),
            "pay_type"=>$order["pay_type"],
            "payable_freight"=>Tool::moneyPrefix($order["payable_freight"]),
            "order_amount"=>Tool::moneyPrefix($order["order_amount"]),
            "promotions"=>Tool::moneyPrefix($order["promotions"]),
            "real_amount"=>Tool::moneyPrefix($order["real_amount"]),
            "payable_amount"=>Tool::moneyPrefix($order["payable_amount"]),
            "item"=>$order["item"],
            "active"=>$order["active"],
            "users_price"=>Users::get("amount"),
            "shipping_type"=>$order["shipping_type"]
        ];

        if($order["shipping_type"] == 2){
            $data['qrcode'] = (string)url("qrcode",["data"=>$order["shipping_code"]],false,true);
            $array = [];
            $array[] = substr($order["shipping_code"],0,4);
            $array[] = substr($order["shipping_code"],4,4);
            $array[] = substr($order["shipping_code"],8);
            $data['code'] = implode(' ',$array);
            $store = Db::name('store')->where("id",$order["store_id"])->find();
            $data["area_name"] = Area::get_area([$store["province"],$store["city"],$store["area"]]," ");
            $data["shop_name"] = $store["shop_name"];
            $data["phone"] = $store["phone"];
            $data["shop_address"] = $store["address"];
            $data["day_time"] = $store["day_time"];
        }

        return $this->returnAjax("ok",1,$data);
    }

    public function refund(){
        $id = Request::post("id","0","intval");
        if(($order = Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        if(!in_array($order["status"],[2,6,7])){
            return $this->returnAjax("该订单不允许此操作",0);
        }

        $order_goods = Db::name("order_goods")->where([
            "order_id"=>$id
        ])->select()->toArray();

        $refundment = Db::name("order_refundment")->where("order_id",$id)->find();
        if(!empty($refundment["order_goods_id"])){
            $array = explode(",",$refundment["order_goods_id"]);
        }else{
            $array = [];
        }

        foreach($order_goods as $key=>$value){
            $goods_array = json_decode($value["goods_array"],true);
            $order["item"][$key] = [
                "title"=>$goods_array["title"],
                "spec"=>!empty($goods_array["spec"]) ? $goods_array["spec"] : "",
                "goods_id"=>$value["goods_id"],
                "goods_no"=>$value["goods_no"],
                "thumb_image"=>Tool::thumb($value["thumb_image"],"medium",true),
                "sell_price"=>$value["sell_price"],
                "nums"=>$value["goods_nums"]
            ];
            $order["item"][$key]["is_refund"] = (!empty($array) && in_array($value["goods_id"],$array)) ? 1 : 0;
        }

        return $this->returnAjax("ok",1,[
            "payable_freight"=>Tool::moneyPrefix($order["payable_freight"]),
            "order_amount"=>Tool::moneyPrefix($order["order_amount"]),
            "promotions"=>Tool::moneyPrefix($order["promotions"]),
            "real_amount"=>Tool::moneyPrefix($order["real_amount"]),
            "payable_amount"=>Tool::moneyPrefix($order["payable_amount"]),
            "is_refund"=>!empty($refundment),
            "refund_msg"=>!empty($refundment["dispose_idea"]) ? $refundment["dispose_idea"] : "",
            "order_status"=>!empty($refundment) ? $refundment["pay_status"] : '0',
            "item"=>$order["item"]
        ]);
    }

    public function apply_refund(){
        $id = Request::param("id","0","intval");
        $message = Request::param("message","","trim,strip_tags");

        if(empty($message)){
            return $this->returnAjax("请填写退款说明",0);
        }else if(Check::strlen($message) > 200){
            return $this->returnAjax("退款说明，请控制在200字符内",0);
        }

        if(($order = Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        try{
            \mall\basic\Order::refundmentApply($order,$message);
        }catch(\Exception $e){
            return $this->returnAjax($e->getMessage(),$e->getCode());
        }

        return $this->returnAjax("您的退款申请己提交，请等待管理员审核");
    }

    public function delivery(){
        $id = Request::post("id","0","intval");
        if(($order = Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        if(!in_array($order["status"],[2,6,7])){
            return $this->returnAjax("该订单不允许此操作",0);
        }

        $order_goods = Db::name("order_goods")->where([
            "order_id"=>$id
        ])->select()->toArray();

        foreach($order_goods as $key=>$value){
            $goods_array = json_decode($value["goods_array"],true);
            $order["item"][$key] = [
                "title"=>$goods_array["title"],
                "spec"=>!empty($goods_array["spec"]) ? $goods_array["spec"] : "",
                "goods_id"=>$value["goods_id"],
                "goods_no"=>$value["goods_no"],
                "thumb_image"=>Tool::thumb($value["thumb_image"],"medium",true),
                "sell_price"=>$value["sell_price"],
                "nums"=>$value["goods_nums"]
            ];
        }

        return $this->returnAjax("ok",1,[
            "payable_freight"=>Tool::moneyPrefix($order["payable_freight"]),
            "order_amount"=>Tool::moneyPrefix($order["order_amount"]),
            "promotions"=>Tool::moneyPrefix($order["promotions"]),
            "real_amount"=>Tool::moneyPrefix($order["real_amount"]),
            "payable_amount"=>Tool::moneyPrefix($order["payable_amount"]),
            "item"=>$order["item"]
        ]);
    }

    public function confirm_delivery(){
        $id = Request::post("id","0","intval");
        if(($order = Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        if(!in_array($order["status"],[2,6,7])){
            return $this->returnAjax("该订单不允许此操作",0);
        }

        try{
            Db::name("order")->where(['id'=>$id])->update([
                'status' => 5,
                'delivery_status'=>1,
                'completion_time' => time()
            ]);
            \mall\basic\Order::complete($order["order_no"]);
        }catch (\Exception $e){
            return $this->returnAjax($e->getMessage(),0);
        }

        return $this->returnAjax("确认收货成功");
    }

    public function evaluate(){
        $id = Request::post("id","0","intval");
        if(($order = Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        if($order["status"] != 5){
            return $this->returnAjax("该订单不允许此操作",0);
        }else if($order["evaluate_status"] == 1){
            return $this->returnAjax("该订单己评价",2);
        }

        $order_goods = Db::name("order_goods")->where([
            "order_id"=>$id
        ])->select()->toArray();

        foreach($order_goods as $key=>$value){
            $goods_array = json_decode($value["goods_array"],true);
            $order["item"][$key] = [
                "title"=>$goods_array["title"],
                "spec"=>!empty($goods_array["spec"]) ? $goods_array["spec"] : "",
                "goods_id"=>$value["goods_id"],
                "goods_no"=>$value["goods_no"],
                "thumb_image"=>Tool::thumb($value["thumb_image"],"medium",true),
                "sell_price"=>$value["sell_price"],
                "nums"=>$value["goods_nums"]
            ];
        }

        return $this->returnAjax("ok",1,[
            "payable_freight"=>Tool::moneyPrefix($order["payable_freight"]),
            "order_amount"=>Tool::moneyPrefix($order["order_amount"]),
            "promotions"=>Tool::moneyPrefix($order["promotions"]),
            "real_amount"=>Tool::moneyPrefix($order["real_amount"]),
            "payable_amount"=>Tool::moneyPrefix($order["payable_amount"]),
            "item"=>$order["item"]
        ]);
    }

    public function do_evaluate(){
        $id = Request::post("id","0","intval");
        $message = Request::post("message","","trim,strip_tags");
        $rate = Request::post("rate","5","intval");
        if(($order = Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        if($order["evaluate_status"] == 1){
            return $this->returnAjax("您的订单己评价！",0);
        }

        $comment = Db::name("users_comment")->where([
            "user_id"=>Users::get("id"),
            "order_no"=>$order["order_no"],
            "status"=>0
        ])->select()->toArray();

        Db::startTrans();
        try {
            foreach($comment as $value){
                Db::name("users_comment")->where('id',$value["id"])->update([
                    "status"=>1,
                    "contents"=>$message,
                    "point"=>$rate,
                    "comment_time"=>time()
                ]);
            }

            Db::name("order")->where([
                "user_id"=>Users::get("id"),"id"=>$id
            ])->update([
                "evaluate_status"=>1
            ]);

            Db::commit();
        }catch (\Exception $e){
            Db::rollback();
            return $this->returnAjax("请求出错，请稍后在试",0);
        }

        return $this->returnAjax("评价成功",1);
    }

    public function payment(){
        $order_id = Request::param("order_id","","intval");
        $payment_id = Request::param("payment_id","","trim,strip_tags");
        $source = Request::param("source","","intval");

        if(!in_array($source,[1,2,3,4])){
            $source = 1;
        }

        if($payment_id == 'wechat'){
            switch($source){
                case 1:
                    $payment_id = "wechat-h5";
                    break;
                case 2:
                    $payment_id = "wechat";
                    break;
                case 3:
                    $payment_id = "wechat-mini";
                    break;
                case 4:
                    $payment_id = "wechat-app";
                    break;
            }
        }

        if($payment_id == 'alipay'){
            switch ($source){
                case 1:
                    $payment_id = "alipay-wap";
                    break;
            }
        }

        if(($payment = Db::name("payment")->where("code",$payment_id)->find()) == false){
            return $this->returnAjax("支付方式不存在！",0);
        }

        Db::name("order")->where(["user_id"=>Users::get("id"),"id"=>$order_id])->update(["pay_type"=>$payment["id"]]);

        try{
            $result = Payment::handle($order_id);
        }catch (\Exception $e){
            return $this->returnAjax($e->getMessage(),$e->getCode() > 0 ? 1 : 0,$e->getCode());
        }

        return $this->returnAjax("ok",1,$result);
    }

    public function cancel(){
        $id = Request::get("order_id","","intval");
        $condition = ["user_id"=>\mall\basic\Users::get("id"),"id"=>$id];
        if(($order=Db::name("order")->where($condition)->find()) == false){
            return $this->returnAjax("您要操作的订单不存在！",0);
        }

        if($order["status"] == 1){
            Db::name("order")->where($condition)->update([
                "status"=>3
            ]);

            Db::name("order_log")->insert([
                'order_id' => $id,
                'username' => Users::get("username"),
                'action' => "取消订单",
                'result' => '成功',
                'note' => "订单【{$order["order_no"]}】客户取消订单",
                'create_time' => time()
            ]);

            \mall\basic\Order::updateOrderGroupStatus($order,3);
            return $this->returnAjax("取消订单成功");
        }

        if(in_array($order["status"],[3,4])){
            return $this->returnAjax("非法操作",0);
        }

        return $this->returnAjax("您的订单己付款，不允许此操作",0);
    }

    public function service(){
        $page = Request::param("page","1","intval");
        $size = 10;

        $count = Db::name("order_refundment")
            ->alias("r")
            ->join("order o","r.order_id=o.id","LEFT")
            ->where(["r.user_id"=>Users::get("id")])->count();

        $total = ceil($count / $size);
        if($total == $page -1){
            return $this->returnAjax("empty",-1,[
                "list"=>[],
                "page"=>$page,
                "total"=>$total,
                "size"=>$size
            ]);
        }

        $result = Db::name("order_refundment")
            ->alias("r")
            ->field("o.*,r.amount,r.pay_status as r_pay_status,r.create_time as r_create_time")
            ->join("order o","r.order_id=o.id","LEFT")
            ->where(["r.user_id"=>Users::get("id")])->limit((($page - 1) * $size),$size)
            ->select()->toArray();

        $data = [];
        foreach($result as $key=>$value){
            $data[$key] = [
                "order_id"=>$value["id"],
                "order_no"=>$value["order_no"],
                "type"=>\mall\basic\Order::getOrderTypeText($value["type"],1),
                "pay_status"=>\mall\basic\Order::getRefundmentText($value["r_pay_status"]),
                "order_status"=>\mall\basic\Order::getStatusText(\mall\basic\Order::getStatus($value)),
                "order_amount"=>$value["order_amount"],
                "create_time"=>date("Y-m-d H:i:s",$value["r_create_time"]),
                "active"=>\mall\basic\Order::getOrderActive($value)
            ];

            $goods = Db::name("order_goods")->where("order_id",$value["id"])->select()->toArray();
            foreach($goods as $k=>$v){
                $goods_array = json_decode($v["goods_array"],true);
                $data[$key]['item'][$k] = [
                    "title"=>$goods_array["title"],
                    "spec"=>$goods_array["spec"],
                    "thumb_image"=>Tool::thumb($v["thumb_image"],"medium",true),
                    "nums"=>$v["goods_nums"],
                    "price"=>$v["sell_price"]
                ];
            }
        }

        return $this->returnAjax("ok",1,[
            "list"=>$data,
            "page"=>$page,
            "total"=>$total,
            "size"=>$size
        ]);
    }

    public function express(){
        $id = Request::post("id","0","intval");
        if(($order = Db::name("order")
                ->where(["user_id"=>Users::get("id"),"id"=>$id])
                ->where("distribution_status","in","1,2")
                ->find()) == false){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        $orderDelivery = Db::name("order_delivery")->where("order_id",$id)->find();
        if(empty($orderDelivery)){
            return $this->returnAjax("您要查找的订单不存在！",0);
        }

        $type = strtolower(Db::name("freight")->where("id",$orderDelivery["freight_id"])->value("type"));
        if($type == 'sfexpress'){
            $orderDelivery["distribution_code"] = $orderDelivery["distribution_code"] . ":" . substr($orderDelivery["mobile"],-4);
        }

        $order["region"] = Area::get_area([$order['province'],$order['city'],$order['area']],' ');

        $express = ["expName"=>"", "number"=>"", "takeTime"=>"", "updateTime"=>""];
        try{
            $express = Aliyun::query($orderDelivery["distribution_code"],$type);
        }catch(\Exception $ex){
            $express["list"][] = [
                "status"=>"商家正在通知快递公司",
                "time"=>date("Y-m-d H:i:s",$order["send_time"])
            ];
        }

        return $this->returnAjax("ok",1,[
            "accept_name"=>$order["accept_name"],
            "mobile"=>$order["mobile"],
            "region"=>$order["region"],
            "address"=>$order["address"],
            "order_no"=>$order["order_no"],
            "express"=>$express
        ]);
    }

    public function info(){
        $id = Request::param("order_id","0","intval");
        if(($row=Db::name("order")->where(["id"=>$id,"user_id"=>Users::get("id")])->find()) == false){
            return $this->returnAjax("订单不存在",0);
        }

        return $this->returnAjax("ok",1,[
            "order_id"=>$row["id"],
            "order_no"=>$row["order_no"],
            "create_time"=>date("Y-m-d H:i:s",$row["create_time"]),
            "order_amount"=>number_format($row["order_amount"],2),
            "order_status"=>\mall\basic\Order::getPaymentStatusText($row["pay_status"]),
            "payment_type"=>Db::name("payment")->where("id",$row["pay_type"])->value("name"),
            "users_price"=>Db::name("users")->where("id",Users::get("id"))->value("amount")
        ]);
    }
}