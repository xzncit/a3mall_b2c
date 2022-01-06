<?php
// +----------------------------------------------------------------------
// | A3Mall
// +----------------------------------------------------------------------
// | Copyright (c) 2020 http://www.a3-mall.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: xzncit <158373108@qq.com>
// +----------------------------------------------------------------------
namespace app\admin\controller\products;

use app\admin\controller\Auth;
use app\common\model\goods\GoodsAttribute;
use app\common\model\goods\GoodsExtends;
use app\common\model\goods\GoodsItem;
use app\common\model\goods\GoodsModel;
use mall\basic\Attachments;
use mall\utils\Data;
use mall\utils\Date;
use mall\response\Response;
use think\facade\Db;
use think\facade\Request;
use think\facade\View;
use think\facade\Env;

class Index extends Auth {

    public function index(){
        if(Request::isAjax()){
            $limit = Request::get("limit","1","intval");
            $key = Request::get("key/a","","trim,strip_tags");

            $condition = [];
            if(isset($key["cat_id"]) && $key["cat_id"] != '-1'){
                $condition[] = ["goods.cat_id","=",$key["cat_id"]];
            }

            if(isset($key["status"]) && $key["status"] != '-1'){
                $condition[] = ["goods.status","=",$key["status"]];
            }

            if(isset($key["brand_id"]) && $key["brand_id"] != '-1'){
                $condition[] = ["goods.brand_id","=",$key["brand_id"]];
            }

            if(!empty($key["title"])){
                $condition[] = ["goods.title","like",'%'.$key["title"].'%'];
            }

            $goods = new \app\common\model\goods\Goods();
            $list = $goods->getList($condition,$limit);

            if(empty($list['data'])){
                return Response::returnArray("当前还没有数据哦！",1);
            }

            return Response::returnArray("ok",0,$list['data'],$list['count']);
        }

        $cat = Db::name("category")->where(["status"=>0,"module"=>"goods"])->select()->toArray();
        return View::fetch("",[
            "cat"=>Data::analysisTree(Data::familyProcess($cat)),
            "brand"=>Db::name("products_brand")->where("status",0)->select()->toArray()
        ]);
    }

    public function editor(){
        if(!Request::isAjax()){
            $id = (int)Request::param("id");
            $rs = empty($id) ? [] : Db::name("goods")->where("id",$id)->find();

            $cat = Db::name("category")->where(["status"=>0,"module"=>"goods"])->select()->toArray();

            $goods_extends = Db::name("goods_extends")->where(['goods_id'=>$id])->select()->toArray();
            $goods_attribute = [];
            foreach($goods_extends as $val){
                $goods_attribute[] = $val["attribute"];
            }

            return View::fetch("",[
                "cat"=>Data::analysisTree(Data::familyProcess($cat)),
                "photo"=>Db::name("attachments")->where([
                    'pid'=>$id,"module"=>"goods","method"=>"photo"
                ])->select()->toArray(),
                "images"=>Db::name("attachments")->where([
                    'pid'=>$id,"module"=>"goods","method"=>"image"
                ])->select()->toArray(),
                "brand"=>Db::name("products_brand")->where("status",0)->select()->toArray(),
                "distribution"=>Db::name("distribution")->where("status",0)->select()->toArray(),
                "attribute"=>Db::name("products_attribute")->where(["pid"=>0])->select()->toArray(),
                "model"=>Db::name("products_model")->select()->toArray(),
                "goods_extends"=>$goods_attribute,
                "data"=>$rs
            ]);
        }

        $data = Request::post();

        if(Db::name("distribution")->where(["id"=>$data["delivery_id"]])->count() <=0){
            return Response::returnArray("请设置运费模板",0);
        }

        $post = $data;
        $post['sell_price'] = $data['product_sell_price'];
        $post['market_price'] = $data['product_market_price'];
        $post['cost_price'] = $data['product_cost_price'];
        $post['goods_weight'] = $data['product_weight'];
        $post['store_nums'] = $data['product_store_nums'];
        if(empty($post['goods_number'])){
            $data['goods_number'] = $post['goods_number'] = \mall\basic\Goods::goods_number();
        }

        $goods = new \app\common\model\goods\Goods();
        try{
            if($goods->where("id",$data["id"])->count()){
                $goods->where("id",$data["id"])->save($post);
            }else{
                unset($data["id"],$post["id"]);
                $data["id"] = $goods->create($post)->id;
            }
        } catch (\Exception $ex) {
            return Response::returnArray("操作失败，请重试。",0);
        }

        $i = 0;
        $data['spec_list_key'] = !empty($data['spec_list_key']) ? $data['spec_list_key'] : [];
        $spec_temp = array();
        foreach ($data['spec_list_key'] as $val) {
            $arr = explode(',', $val);
            foreach ($arr as $item) {
                $a = explode(':', $item);
                $spec_temp[$i]['goods_id'] = $data['id'];
                $spec_temp[$i]['attr_id'] = $a[0];
                $spec_temp[$i]['attr_data_id'] = $a[1];
                $i++;
            }
        }

        $j = 0;
        $data['spec_list_data'] = !empty($data['spec_list_data']) ? $data['spec_list_data'] : [];
        foreach ($data['spec_list_data'] as $val) {
            $arr = explode(',', $val);
            foreach ($arr as $item) {
                $a = explode(':', $item);
                $spec_temp[$j]['name'] = $a[0];
                $spec_temp[$j]['value'] = $a[1];
                $j++;
            }
        }

        $spec_temp_data = [];
        foreach($spec_temp as $value){
            $spec_temp_data[$value['goods_id'] . '_' . $value['attr_id'] . '_' . $value["attr_data_id"]] = $value;
        }

        $goodsAttributeModel = new GoodsAttribute();
        $goodsAttributeModel::where(["goods_id" => $data["id"]])->delete();
        $shop_goods_attribute = [];
        foreach ($spec_temp_data as $item) {
            $shop_goods_attribute[] = $item;
        }

        if(!empty($shop_goods_attribute)){
            $goodsAttributeModel->saveAll($shop_goods_attribute);
        }

        $goodsItemModel = new GoodsItem();
        $order_no = 1;
        $goodsItemModel->where(["goods_id" => $data["id"]])->delete();
        $shop_goods_item = [];
        $data['sell_price'] = !empty($data['sell_price']) ? $data['sell_price'] : [];
        foreach ($data['sell_price'] as $key => $item) {
            $shop_goods_item[] = [
                "goods_id" => $data["id"],
                "spec_key" => $data['spec_list_key'][$key],
                "goods_number" => $data['goods_number'] . '-' . $order_no,
                "store_nums" => $data['store_nums'][$key],
                "market_price" => $data['market_price'][$key],
                "sell_price" => $item,
                "cost_price" => $data['cost_price'][$key],
                "goods_weight" => $data['goods_weight'][$key]
            ];

            $order_no++;
        }

        if(!empty($shop_goods_item)){
            $goodsItemModel->saveAll($shop_goods_item);
        }

        $goodsExtendsModel = new GoodsExtends();
        $goodsExtendsModel::where(['goods_id' => $data['id']])->delete();
        $data['goods_extends'] = !empty($data['goods_extends']) ? $data['goods_extends'] : [];
        foreach ($data['goods_extends'] as $val) {
            $goodsExtendsModel->create([
                'attribute' => $val, 'goods_id' => $data['id']
            ]);
        }

        $attr = array();
        foreach ($_POST as $key => $val) {
            if (strpos($key, 'attr_id_') !== false) {
                $attr[ltrim($key, 'attr_id_')] = $val;
            }
        }

        $goodsModel = new GoodsModel();
        $goodsModel::where(['goods_id' => $data["id"]])->delete();
        $shop_goods_module = [];
        if ($data['model_id'] > 0 && !empty($attr)) {
            $sort = 0;
            foreach ($attr as $key => $val) {
                $shop_goods_module[] = [
                    'goods_id' => $data["id"],
                    'model_id' => $data['model_id'],
                    'attribute_id' => $key,
                    'attribute_value' => is_array($val) ? join(',', $val) : $val,
                    'sort' => $sort
                ];

                $sort++;
            }

            if(!empty($shop_goods_module)){
                $goodsModel->saveAll($shop_goods_module);
            }
        }

        $data["attachment_id"] = !empty($data["attachment_id"]) ? $data["attachment_id"] : [];
        Attachments::handle($data["attachment_id"],$data['id']);
        return Response::returnArray("操作成功！");
    }

    public function editor_group(){
        if(!Request::isAjax()){
            $id = (int)Request::param("id","0","intval");
            if(($goods=Db::name("goods")->where("id",$id)->find()) == false){
                $this->error("商品不存在");
            }

            $row = empty($id) ? [] : Db::name("promotion_group")->where("goods_id",$id)->find();
            $row["goods"] = $goods;
            $row["goods_id"] = $id;
            if($products = Db::name("goods_item")->where(["goods_id"=>$id])->select()->toArray()){
                $group_item = [];
                if(!empty($row["id"])){
                    $promotion_group_item = Db::name("promotion_group_item")->where('pid',$row["id"])->select()->toArray();
                    foreach($promotion_group_item as $v) {
                        $group_item[$v["spec_key"]] = $v;
                    }
                }

                $temp = [];
                foreach($products as $key=>$item){
                    $temp[$key] = $item;
                    $temp[$key]["checked"] = isset($group_item[$item["spec_key"]]) ? true : false;
                    if(isset($group_item[$item["spec_key"]])){
                        $temp[$key]["sell_price"] = $group_item[$item["spec_key"]]["sell_price"];
                        $temp[$key]["market_price"] = $group_item[$item["spec_key"]]["market_price"];
                        $temp[$key]["cost_price"] = $group_item[$item["spec_key"]]["cost_price"];
                        $temp[$key]["store_nums"] = $group_item[$item["spec_key"]]["store_nums"];
                    }

                    $arr = explode(",",$item["spec_key"]);
                    foreach($arr as $value){
                        $param = explode(":",$value);
                        $name = Db::name("products_attribute")->where(["id"=>$param[0]])->value("name");
                        $value = Db::name("products_attribute_data")->where(["id"=>$param[1],"pid"=>$param[0]])->value("value");
                        $temp[$key]['spec_item'][] = $name . ':' . $value;
                    }
                    if(!empty($temp[$key]['spec_item'])){
                        $temp[$key]['spec_item'] = implode(",", $temp[$key]['spec_item']);
                    }
                }

                $row["products"] = $temp;
            }

            if(!empty($row["id"])){
                $row["start_time"] = Date::format($row["start_time"]);
                $row["end_time"] = Date::format($row["end_time"]);
            }else{
                $row["start_time"] = Date::format(time());
                $row["end_time"] = Date::format(strtotime("+10 day"));
            }

            return View::fetch("",[
                "data"=>$row
            ]);
        }

        $data = Request::post();

        if(empty($data["start_time"])){
            return Response::returnArray("请填写开始时间",0);
        }

        if(empty($data["end_time"])){
            return Response::returnArray("请填写结束时间",0);
        }

        $data["start_time"] = strtotime($data["start_time"]);
        $data["end_time"] = strtotime($data["end_time"]);

        if($data["start_time"] > $data["end_time"]){
            return Response::returnArray("开始时间不能大于结束时间",0);
        }

        if(!Db::name("goods")->where("id",$data["goods_id"])->count()){
            return Response::returnArray("您选择的商品不存在！",0);
        }

        if(Db::name("goods_item")->where('goods_id',$data["goods_id"])->count() && empty($data["products"]["product_id"])){
            return Response::returnArray("请选择要参加活动的货品",0);
        }

        if(($group=Db::name("promotion_group")->where(["goods_id"=>$data["goods_id"]])->find()) != false){
            Db::name("promotion_group")->strict(false)->where(["goods_id"=>$data["goods_id"]])->update($data);
            $id = $group["id"];
        }else{
            $data["create_time"] = time();
            if(!Db::name("promotion_group")->strict(false)->insert($data)){
                return Response::returnArray("操作失败，请重试。",0);
            }
            $id = Db::name("promotion_group")->getLastInsID();
        }

        Db::name("promotion_group_item")->where('pid',$id)->delete();
        if(!empty($data["products"]["product_id"])){
            $item = [];
            foreach($data['products']["product_id"] as $k=>$v){
                $item[] = [
                    "pid"=>$id,
                    "spec_key"=>$data['products']["spec_key"][$k],
                    "store_nums"=>$data['products']["store_nums"][$k],
                    "market_price"=>$data['products']["market_price"][$k],
                    "sell_price"=>$data['products']["sell_price"][$k],
                    "cost_price"=>$data['products']["cost_price"][$k]
                ];
            }

            Db::name("promotion_group_item")->insertAll($item);
        }

        return Response::returnArray("操作成功！");
    }

    public function editor_regiment(){
        if(!Request::isAjax()){
            $id = (int)Request::param("id","0","intval");
            if(($goods=Db::name("goods")->where("id",$id)->find()) == false){
                $this->error("商品不存在");
            }

            $row = empty($id) ? [] : Db::name("promotion_regiment")->where("goods_id",$id)->find();
            $row["goods"] = $goods;
            $row["goods_id"] = $id;
            if($products = Db::name("goods_item")->where(["goods_id"=>$id])->select()->toArray()){
                $group_item = [];
                if(!empty($row["id"])){
                    $promotion_group_item = Db::name("promotion_regiment_item")->where('pid',$row["id"])->select()->toArray();
                    foreach($promotion_group_item as $v) {
                        $group_item[$v["spec_key"]] = $v;
                    }
                }

                $temp = [];
                foreach($products as $key=>$item){
                    $temp[$key] = $item;
                    $temp[$key]["checked"] = isset($group_item[$item["spec_key"]]) ? true : false;
                    if(isset($group_item[$item["spec_key"]])){
                        $temp[$key]["sell_price"] = $group_item[$item["spec_key"]]["sell_price"];
                        $temp[$key]["market_price"] = $group_item[$item["spec_key"]]["market_price"];
                        $temp[$key]["cost_price"] = $group_item[$item["spec_key"]]["cost_price"];
                        $temp[$key]["store_nums"] = $group_item[$item["spec_key"]]["store_nums"];
                    }

                    $arr = explode(",",$item["spec_key"]);
                    foreach($arr as $value){
                        $param = explode(":",$value);
                        $name = Db::name("products_attribute")->where(["id"=>$param[0]])->value("name");
                        $value = Db::name("products_attribute_data")->where(["id"=>$param[1],"pid"=>$param[0]])->value("value");
                        $temp[$key]['spec_item'][] = $name . ':' . $value;
                    }
                    if(!empty($temp[$key]['spec_item'])){
                        $temp[$key]['spec_item'] = implode(",", $temp[$key]['spec_item']);
                    }
                }

                $row["products"] = $temp;
            }

            if(!empty($row["id"])){
                $row["start_time"] = Date::format($row["start_time"]);
                $row["end_time"] = Date::format($row["end_time"]);
            }else{
                $row["start_time"] = Date::format(time());
                $row["end_time"] = Date::format(strtotime("+10 day"));
            }

            return View::fetch("",[
                "data"=>$row
            ]);
        }

        $data = Request::post();
        if(empty($data["start_time"])){
            return Response::returnArray("请填写开始时间",0);
        }

        if(empty($data["end_time"])){
            return Response::returnArray("请填写结束时间",0);
        }

        $data["start_time"] = strtotime($data["start_time"]);
        $data["end_time"] = strtotime($data["end_time"]);

        if($data["start_time"] > $data["end_time"]){
            return Response::returnArray("开始时间不能大于结束时间",0);
        }

        if(!Db::name("goods")->where("id",$data["goods_id"])->count()){
            return Response::returnArray("您选择的商品不存在！",0);
        }

        if(Db::name("goods_item")->where('goods_id',$data["goods_id"])->count() && empty($data["products"]["product_id"])){
            return Response::returnArray("请选择要参加活动的货品",0);
        }

        if(($group=Db::name("promotion_regiment")->where(["goods_id"=>$data["goods_id"]])->find()) != false){
            Db::name("promotion_regiment")->strict(false)->where(["goods_id"=>$data["goods_id"]])->update($data);
            $id = $group["id"];
        }else{
            $data["create_time"] = time();
            if(!Db::name("promotion_regiment")->strict(false)->insert($data)){
                return Response::returnArray("操作失败，请重试。",0);
            }
            $id = Db::name("promotion_regiment")->getLastInsID();
        }

        Db::name("promotion_regiment_item")->where('pid',$id)->delete();
        if(!empty($data["products"]["product_id"])){
            $item = [];
            foreach($data['products']["product_id"] as $k=>$v){
                $item[] = [
                    "pid"=>$id,
                    "spec_key"=>$data['products']["spec_key"][$k],
                    "store_nums"=>$data['products']["store_nums"][$k],
                    "market_price"=>$data['products']["market_price"][$k],
                    "sell_price"=>$data['products']["sell_price"][$k],
                    "cost_price"=>$data['products']["cost_price"][$k]
                ];
            }

            Db::name("promotion_regiment_item")->insertAll($item);
        }

        return Response::returnArray("操作成功！");
    }

    public function editor_second(){
        if(!Request::isAjax()){
            $id = (int)Request::param("id","0","intval");
            if(($goods=Db::name("goods")->where("id",$id)->find()) == false){
                $this->error("商品不存在");
            }

            $row = empty($id) ? [] : Db::name("promotion_second")->where("goods_id",$id)->find();
            $row["goods"] = $goods;
            $row["goods_id"] = $id;
            if($products = Db::name("goods_item")->where(["goods_id"=>$id])->select()->toArray()){
                $group_item = [];
                if(!empty($row["id"])){
                    $promotion_group_item = Db::name("promotion_second_item")->where('pid',$row["id"])->select()->toArray();
                    foreach($promotion_group_item as $v) {
                        $group_item[$v["spec_key"]] = $v;
                    }
                }

                $temp = [];
                foreach($products as $key=>$item){
                    $temp[$key] = $item;
                    $temp[$key]["checked"] = isset($group_item[$item["spec_key"]]) ? true : false;
                    if(isset($group_item[$item["spec_key"]])){
                        $temp[$key]["sell_price"] = $group_item[$item["spec_key"]]["sell_price"];
                        $temp[$key]["market_price"] = $group_item[$item["spec_key"]]["market_price"];
                        $temp[$key]["cost_price"] = $group_item[$item["spec_key"]]["cost_price"];
                        $temp[$key]["store_nums"] = $group_item[$item["spec_key"]]["store_nums"];
                    }

                    $arr = explode(",",$item["spec_key"]);
                    foreach($arr as $value){
                        $param = explode(":",$value);
                        $name = Db::name("products_attribute")->where(["id"=>$param[0]])->value("name");
                        $value = Db::name("products_attribute_data")->where(["id"=>$param[1],"pid"=>$param[0]])->value("value");
                        $temp[$key]['spec_item'][] = $name . ':' . $value;
                    }

                    if(!empty($temp[$key]['spec_item'])){
                        $temp[$key]['spec_item'] = implode(",", $temp[$key]['spec_item']);
                    }
                }

                $row["products"] = $temp;
            }

            if(!empty($row["id"])){
                $row["start_time"] = Date::format($row["start_time"]);
                $row["end_time"] = Date::format($row["end_time"]);
            }else{
                $row["start_time"] = Date::format(time());
                $row["end_time"] = Date::format(strtotime("+10 day"));
            }

            return View::fetch("",[
                "data"=>$row
            ]);
        }

        $data = Request::post();
        if(empty($data["start_time"])){
            return Response::returnArray("请填写开始时间",0);
        }

        if(empty($data["end_time"])){
            return Response::returnArray("请填写结束时间",0);
        }

        $data["start_time"] = strtotime($data["start_time"]);
        $data["end_time"] = strtotime($data["end_time"]);

        if($data["start_time"] > $data["end_time"]){
            return Response::returnArray("开始时间不能大于结束时间",0);
        }

        if(!Db::name("goods")->where("id",$data["goods_id"])->count()){
            return Response::returnArray("您选择的商品不存在！",0);
        }

        if(Db::name("goods_item")->where('goods_id',$data["goods_id"])->count() && empty($data["products"]["product_id"])){
            return Response::returnArray("请选择要参加活动的货品",0);
        }

        if(($group=Db::name("promotion_second")->where(["goods_id"=>$data["goods_id"]])->find()) != false){
            Db::name("promotion_second")->strict(false)->where(["goods_id"=>$data["goods_id"]])->update($data);
            $id = $group["id"];
        }else{
            $data["create_time"] = time();
            if(!Db::name("promotion_second")->strict(false)->insert($data)){
                return Response::returnArray("操作失败，请重试。",0);
            }
            $id = Db::name("promotion_second")->getLastInsID();
        }

        Db::name("promotion_second_item")->where('pid',$id)->delete();
        if(!empty($data["products"]["product_id"])){
            $item = [];
            foreach($data['products']["product_id"] as $k=>$v){
                $item[] = [
                    "pid"=>$id,
                    "spec_key"=>$data['products']["spec_key"][$k],
                    "store_nums"=>$data['products']["store_nums"][$k],
                    "market_price"=>$data['products']["market_price"][$k],
                    "sell_price"=>$data['products']["sell_price"][$k],
                    "cost_price"=>$data['products']["cost_price"][$k]
                ];
            }

            Db::name("promotion_second_item")->insertAll($item);
        }

        return Response::returnArray("操作成功！");
    }

    public function editor_point(){
        if(!Request::isAjax()){
            $id = (int)Request::param("id","0","intval");
            if(($goods=Db::name("goods")->where("id",$id)->find()) == false){
                $this->error("商品不存在");
            }

            $row = empty($id) ? [] : Db::name("promotion_point")->where("goods_id",$id)->find();
            $row["goods"] = $goods;
            $row["goods_id"] = $id;
            if($products = Db::name("goods_item")->where(["goods_id"=>$id])->select()->toArray()){
                $group_item = [];
                if(!empty($row["id"])){
                    $promotion_group_item = Db::name("promotion_point_item")->where('pid',$row["id"])->select()->toArray();
                    foreach($promotion_group_item as $v) {
                        $group_item[$v["spec_key"]] = $v;
                    }
                }

                $temp = [];
                foreach($products as $key=>$item){
                    $temp[$key] = $item;
                    $temp[$key]["checked"] = isset($group_item[$item["spec_key"]]) ? true : false;
                    if(isset($group_item[$item["spec_key"]])){
                        $temp[$key]["sell_price"] = $group_item[$item["spec_key"]]["sell_price"];
                        $temp[$key]["market_price"] = $group_item[$item["spec_key"]]["market_price"];
                        $temp[$key]["cost_price"] = $group_item[$item["spec_key"]]["cost_price"];
                        $temp[$key]["store_nums"] = $group_item[$item["spec_key"]]["store_nums"];
                    }

                    $arr = explode(",",$item["spec_key"]);
                    foreach($arr as $value){
                        $param = explode(":",$value);
                        $name = Db::name("products_attribute")->where(["id"=>$param[0]])->value("name");
                        $value = Db::name("products_attribute_data")->where(["id"=>$param[1],"pid"=>$param[0]])->value("value");
                        $temp[$key]['spec_item'][] = $name . ':' . $value;
                    }
                    if(!empty($temp[$key]['spec_item'])){
                        $temp[$key]['spec_item'] = implode(",", $temp[$key]['spec_item']);
                    }
                }

                $row["products"] = $temp;
            }

            if(!empty($row["id"])){
                $row["start_time"] = Date::format($row["start_time"]);
                $row["end_time"] = Date::format($row["end_time"]);
            }else{
                $row["start_time"] = Date::format(time());
                $row["end_time"] = Date::format(strtotime("+10 day"));
            }

            return View::fetch("",[
                "data"=>$row
            ]);
        }

        $data = Request::post();
        if(empty($data["start_time"])){
            return Response::returnArray("请填写开始时间",0);
        }

        if(empty($data["end_time"])){
            return Response::returnArray("请填写结束时间",0);
        }

        $data["start_time"] = strtotime($data["start_time"]);
        $data["end_time"] = strtotime($data["end_time"]);

        if($data["start_time"] > $data["end_time"]){
            return Response::returnArray("开始时间不能大于结束时间",0);
        }

        if(!Db::name("goods")->where("id",$data["goods_id"])->count()){
            return Response::returnArray("您选择的商品不存在！",0);
        }

        if(Db::name("goods_item")->where('goods_id',$data["goods_id"])->count() && empty($data["products"]["product_id"])){
            return Response::returnArray("请选择要参加活动的货品",0);
        }

        if(($group=Db::name("promotion_point")->where(["goods_id"=>$data["goods_id"]])->find()) != false){
            Db::name("promotion_point")->strict(false)->where(["goods_id"=>$data["goods_id"]])->update($data);
            $id = $group["id"];
        }else{
            $data["create_time"] = time();
            if(!Db::name("promotion_point")->strict(false)->insert($data)){
                return Response::returnArray("操作失败，请重试。",0);
            }
            $id = Db::name("promotion_point")->getLastInsID();
        }

        Db::name("promotion_point_item")->where('pid',$id)->delete();
        if(!empty($data["products"]["product_id"])){
            $item = [];
            foreach($data['products']["product_id"] as $k=>$v){
                $item[] = [
                    "pid"=>$id,
                    "spec_key"=>$data['products']["spec_key"][$k],
                    "store_nums"=>$data['products']["store_nums"][$k],
                    "market_price"=>$data['products']["market_price"][$k],
                    "sell_price"=>$data['products']["sell_price"][$k],
                    "cost_price"=>$data['products']["cost_price"][$k]
                ];
            }

            Db::name("promotion_point_item")->insertAll($item);
        }

        return Response::returnArray("操作成功！");
    }

    public function delete(){
        if(!Request::isAjax()){
            return Response::returnArray("本页面不允许直接访问！",0);
        }

        $arr = Request::get("id","");
        try {
            $array = array_map("intval",explode(",",$arr));
            foreach($array as $id) {
                $row = Db::name("goods")->where('id', $id)->find();
                if (empty($row)) {
                    continue;
                }

                Db::name("goods")->delete($id);
                Db::name("goods_attribute")->where(['goods_id' => $id])->delete();
                Db::name("goods_extends")->where(['goods_id' => $id])->delete();
                Db::name("goods_item")->where(['goods_id' => $id])->delete();
                Db::name("goods_model")->where(['goods_id' => $id])->delete();
                Attachments::clear(["pid" => $id, "module" => "goods", "method" => "photo"]);
                Attachments::clear(["pid" => $id, "module" => "goods", "method" => "image"]);

                if ($promotion_group = Db::name("promotion_group")->where("goods_id", $id)->find()) {
                    Db::name("promotion_group")->delete($promotion_group["id"]);
                    Db::name("promotion_group_item")->where('pid', $promotion_group["id"])->delete();
                }

                if ($promotion_regiment = Db::name("promotion_regiment")->where("goods_id", $id)->find()) {
                    Db::name("promotion_regiment")->delete($promotion_regiment["id"]);
                    Db::name("promotion_regiment_item")->where("pid", $promotion_regiment["id"])->delete();
                }

                if ($promotion_second = Db::name("promotion_second")->where("goods_id", $id)->find()) {
                    Db::name("promotion_second")->delete($promotion_second["id"]);
                    Db::name("promotion_second_item")->where("pid", $promotion_second["id"])->delete();
                }

                if ($promotion_point = Db::name("promotion_point")->where("goods_id", $id)->find()) {
                    Db::name("promotion_point")->delete($promotion_point["id"]);
                    Db::name("promotion_point_item")->where('pid', $promotion_point["id"])->delete();
                }

                if ($promotion_price = Db::name("promotion_price")->where("goods_id", $id)->find()) {
                    Db::name("promotion_price")->delete($promotion_price["id"]);
                    Db::name("promotion_price_item")->where(["pid" => $promotion_price['id']])->delete();
                }
            }
        } catch (\Exception $ex) {
            return Response::returnArray("操作失败，请稍候在试。",0);
        }

        return Response::returnArray("ok");
    }

    public function field(){
        if(!Request::isAjax()){
            return Response::returnArray("本页面不允许直接访问！",0);
        }

        $id = (int)Request::get("id");
        $name = strip_tags(trim(Request::get("name")));
        $value = (int)Request::get("value");

        try {
            Db::name("goods")->where("id",$id)->update([$name=>$value]);
        } catch (\Exception $ex) {
            return Response::returnArray("操作失败，请稍候在试！",0);
        }

        return Response::returnArray("ok");
    }

    public function export(){
        $data = [];
        $title = [];

        $prefix = Env::get("DATABASE_PREFIX");
        $fields = Db::query("show COLUMNS FROM {$prefix}goods");
        foreach($fields as $item){
            $title[] = $item["Field"];
        }

        $r = Db::name("goods")->select()->toArray();
        foreach($r as $key=>$item){
            $arr = [];
            foreach ($item as $k=>$v){
                $arr[$k] = ' ' . $v;
            }
            $data[] = $arr;
        }

        $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        foreach ($title as $key => $value) {
            $sheet->setCellValueByColumnAndRow($key + 1, 1, $value);
        }

        $row = 2;
        foreach ($data as $item) {
            $column = 1;
            foreach ($item as $value) {
                $sheet->setCellValueByColumnAndRow($column, $row, $value);
                $column++;
            }
            $row++;
        }

        $titCol = 'A';
        foreach ($title as $key => $value) {
            $sheet->setCellValue($titCol . '1', $value);
            $titCol++;
        }
        $row = 2;
        foreach ($data as $item) {
            $dataCol = 'A';
            foreach ($item as $value) {
                $sheet->setCellValue($dataCol . $row, $value);
                $dataCol++;
            }
            $row++;
        }

        // Redirect output to a client’s web browser (Xlsx)
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="goods.xlsx"');
        header('Cache-Control: max-age=0');
        // If you're serving to IE 9, then the following may be needed
        header('Cache-Control: max-age=1');

        // If you're serving to IE over SSL, then the following may be needed
        header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT'); // always modified
        header('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header('Pragma: public'); // HTTP/1.0

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save('php://output');
        exit;
    }

}