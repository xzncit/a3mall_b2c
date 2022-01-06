<?php
// +----------------------------------------------------------------------
// | A3Mall
// +----------------------------------------------------------------------
// | Copyright (c) 2020 http://www.a3-mall.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: xzncit <158373108@qq.com>
// +----------------------------------------------------------------------
namespace app\admin\controller\users;

use app\admin\controller\Auth;
use app\common\model\users\Users;
use mall\utils\Date;
use mall\response\Response;
use mall\basic\Area;
use mall\utils\Tool;
use think\facade\Db;
use think\facade\Request;
use think\facade\Session;
use think\facade\View;

class Index extends Auth {

    public function index(){
        if(Request::isAjax()){
            $limit = Request::get("limit");
            $key = Request::get("key/a","","trim,strip_tags");

            $condition = [];
            if(isset($key["cat_id"]) && $key["cat_id"] != '-1'){
                $condition[] = ["users.group_id","=",$key["cat_id"]];
            }

            if(!empty($key["title"])){
                $condition[] = ["users.username","like",'%'.$key["title"].'%'];
            }

            $users = new Users();
            $list = $users->getList($condition,$limit);

            if(empty($list['data'])){
                return Response::returnArray("当前还没有数据哦！",1);
            }

            foreach($list['data'] as $k=>$v){
                $tags = Db::name("users_tags")->where('id','in',$v['tags'])->select()->toArray();

                $arr = [];
                foreach($tags as $val){
                    $arr[] = $val['name'];
                }

                $list['data'][$k]['tags'] = implode(",",$arr);
            }

            return Response::returnArray("ok",0,$list['data'],$list['count']);
        }

        return View::fetch("",[
            "cat"=>Db::name("users_group")->select()->toArray(),
            "tags"=>Db::name("users_tags")->select()->toArray()
        ]);
    }

    public function editor(){
        if(!Request::isAjax()){
            $id = (int)Request::param("id");
            $rs = empty($id) ? [] : Db::name("users")->where("id",$id)->find();

            return View::fetch("",[
                "cat"=>Db::name("users_group")->select()->toArray(),
                "data"=>$rs
            ]);
        }

        $data = Request::post();
        $users = new Users();
        try{
            if($users->where("id",$data["id"])->count()){
                if(!empty($data["password"]) || !empty($data["confirm_password"])){
                    if($data["password"] != $data["confirm_password"]){
                        return Response::returnArray("您输入的两次密码不致。",0);
                    }

                    $data["password"] = md5($data["password"]);
                }else{
                    unset($data['password'],$data['confirm_password']);
                }

                if($users->where("username",$data["username"])->where("id","<>",$data["id"])->count()){
                    return Response::returnArray("该用户名己存在，请更换用户名。",0);
                }

                $users->where("id",$data["id"])->save($data);
            }else{
                if(empty($data["password"])){
                    return Response::returnArray("请填写密码",0);
                }else if(empty($data["confirm_password"])){
                    return Response::returnArray("请填写确认密码",0);
                }else if($data["password"] != $data["confirm_password"]){
                    return Response::returnArray("您输入的两次密码不致。",0);
                }

                if($users->where("username",$data["username"])->count()){
                    return Response::returnArray("该用户名己存在，请更换用户名。",0);
                }

                $data["password"] = md5($data["password"]);
                $users->create($data);
            }
        } catch (\Exception $ex) {
            return Response::returnArray("操作失败，请重试。",0);
        }

        return Response::returnArray("操作成功！");
    }

    public function delete(){
        if(!Request::isAjax()){
            return Response::returnArray("本页面不允许直接访问！",0);
        }

        $arr = Request::get("id","");
        Db::startTrans();
        try {
            $array = array_map("intval",explode(",",$arr));
            foreach($array as $id) {
                $row = Db::name("users")->where('id', $id)->find();
                if (empty($row)) {
                    continue;
                }

                Db::name("users")->delete($id);
                Db::name("users_address")->where("user_id", $id)->delete();
                Db::name("wechat_users")->where("user_id", $id)->delete();
                Db::name("users_bonus")->where("user_id", $id)->delete();
                Db::name("users_comment")->where("user_id", $id)->delete();
                Db::name("users_consult")->where("user_id", $id)->delete();
                Db::name("users_favorite")->where("user_id", $id)->delete();
                Db::name("users_log")->where("user_id", $id)->delete();
                Db::name("users_rechange")->where("user_id", $id)->delete();
                Db::name("users_token")->where("user_id", $id)->delete();
                Db::name("users_withdraw_log")->where("user_id", $id)->delete();
                $order = Db::name("order")->where("user_id", $id)->select();
                $orderId = [];
                foreach ($order as $value) {
                    $orderId[] = $value["id"];
                }

                if (Db::name("order")->where("id", "in", $orderId)->delete()) {
                    Db::name("order_goods")->where("order_id", "in", $orderId)->delete();
                    Db::name("order_log")->where("order_id", "in", $orderId)->delete();
                }

                Db::name("order_collection")->where("user_id", $id)->delete();
                Db::name("order_delivery")->where("user_id", $id)->delete();
                Db::name("order_refundment")->where("user_id", $id)->delete();
                Db::name("order_group")->where("user_id", $id)->delete();
            }
            Db::commit();
        } catch (\Exception $ex) {
            Db::rollback();
            return Response::returnArray("操作失败，请稍候在试。",0);
        }

        return Response::returnArray("ok");
    }

    public function finance(){
        $id = Request::param("id");
        if(($user = Db::name("users")->where(["id"=>$id])->find()) == false){
            if(Request::isAjax()) {
                return Response::returnArray("您操作的会员不存在！", 0);
            }else{
                $this->error("您操作的会员不存在！");
            }
        }

        $user["username"] = getUserName($user);
        if(Request::isAjax()){
            $action = Request::param("action");
            $operation = Request::param("operation");
            $num = Request::param("num");

            if($operation == 1 && ($action == 0 && $user["amount"] < $num)){
                return Response::returnArray("提现失败，用户余额不足",0);
            }

            if($operation == 1 && ($action == 1 && $user["point"] < $num)){
                return Response::returnArray("提现失败，用户积分不足",0);
            }

            if($operation == 1 && ($action == 2 && $user["exp"] < $num)){
                return Response::returnArray("提现失败，用户经验不足",0);
            }

            if($operation == 1 && ($action == 4 && $user["spread_amount"] < $num)){
                return Response::returnArray("提现失败，用户佣金不足",0);
            }

            $field = "";
            $description = "管理员对您的";
            switch($action){
                case 0:
                    $field = "amount";
                    $description .= "【金额】";
                    break;
                case 1:
                    $field = "point";
                    $description .= "【积分】";
                    break;
                case 2:
                    $field = "exp";
                    $description .= "【经验】";
                    break;
                case 4:
                    $field = "spread_amount";
                    $description .= "【佣金】";
                    break;
            }

            if($operation == 1){
                $total = $user[$field] - $num;
                $description .= "执行了提现操作,";
            }else{
                $total = $user[$field] + $num;
                $description .= "执行了充值操作,";
            }

            $description .= "操作数值【".$num."】";
            $arr = [];
            $arr[$field] = $total;
            Db::name("users")->where(["id"=>$id])->update($arr);
            Db::name("users_log")->insert([
                "user_id"=>$id,
                "admin_id"=>Session::get("system_user_id"),
                "action"=>$action,
                "operation"=>$operation,
                "description"=>$description,
                $field=>$num,
                "create_time"=>time()
            ]);

            return Response::returnArray("操作成功！");
        }

        return View::fetch("",[
            "id"=>$id,"user"=>$user
        ]);
    }

    public function log(){
        $id = Request::param("id");
        if(Request::isAjax()){
            $limit = Request::get("limit");
            $condition = ["l.user_id"=>$id];
            $count = Db::name("users_log")
                ->alias('l')
                ->join("users u","u.id=l.user_id","LEFT")
                ->where($condition)->count();
            $data = Db::name("users_log")
                ->field("l.*,u.username")
                ->alias('l')
                ->join("users u","u.id=l.user_id","LEFT")
                ->where($condition)->order("l.id DESC")->paginate($limit);

            if($data->isEmpty()){
                return Response::returnArray("当前还没有数据哦！",1);
            }

            $list = $data->items();

            foreach($list as $key=>$item){
                $list[$key]['username'] = getUserName($item);
                $list[$key]['create_time'] = Date::format($item["create_time"]);
            }

            return Response::returnArray("ok",0,$list,$count);
        }

        return View::fetch("",["id"=>$id]);
    }

    public function tags(){
        $user_id = Request::post("user_id","","intval");
        $id = Request::post("id","","intval");
        if(Db::name("users")->where("id",$user_id)->count()){
            Db::name("users")->where("id",$user_id)->update([
                "tags"=>implode(",",$id)
            ]);
        }

        return Response::returnArray("ok",0);
    }

    public function collect(){
        $id = Request::param("id","0","intval");
        if(!Request::isAjax()){
            return View::fetch("",[
                "id"=>$id
            ]);
        }

        $count = Db::name("users_favorite")->alias("fa")
            ->field("fa.user_id,fa.goods_id,fa.create_time as favorite_time,g.*")
            ->join("goods g","g.id=fa.goods_id","LEFT")
            ->where("fa.user_id=".$id)->count();

        $result = Db::name("users_favorite")->alias("fa")
            ->field("fa.user_id,fa.goods_id,fa.create_time as favorite_time,g.*")
            ->join("goods g","g.id=fa.goods_id","LEFT")
            ->where("fa.user_id=".$id)->paginate();

        $array = [];
        foreach($result->items() as $key=>$value){
            $array[$key] = [
                "id"=>$value["id"],
                "title"=>$value["title"],
                "sell_price"=>$value["sell_price"],
                "photo"=>Tool::thumb($value["photo"]),
                "favorite_time"=>date("Y-m-d H:i:s",$value["favorite_time"])
            ];
        }

        return Response::returnArray("ok",0,$array,$count);
    }

    public function address(){
        $id = Request::param("id","0","intval");
        if(!Request::isAjax()){
            return View::fetch("",[
                "id"=>$id
            ]);
        }

        $result = Db::name("users_address")->where("user_id",$id)->select()->toArray();
        foreach($result as $key=>$value){
            $result[$key]["create_time"] = date("Y-m-d H:i:s",$value["create_time"]);
            $result[$key]["province"] = Area::get_area([$value["province"],$value["city"],$value["area"]],",");
        }
        return Response::returnArray("ok",0,$result,count($result));
    }

}