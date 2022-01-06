<?php
// +----------------------------------------------------------------------
// | A3Mall
// +----------------------------------------------------------------------
// | Copyright (c) 2020 http://www.a3-mall.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: xzncit <158373108@qq.com>
// +----------------------------------------------------------------------
namespace app\api\controller\wap;

use mall\utils\Tool;
use think\facade\Db;
use think\facade\Request;

class Products extends Base {

    public function hot(){
        $page = Request::param("page","1","intval");
        $type = Request::param("type","0","intval");
        $sort = Request::param("sort","1","intval");

        switch($type){
            case '2':
                $order = 'g.sell_price';
                $text = $sort == 1 ? "ASC" : "DESC";
                break;
            case '1':
                $order = 'g.sale';
                $text = 'DESC';
                break;
            case '0':
            default :
                $order = 'g.id';
                $text = 'DESC';
                break;
        }

        $size = 10;

        $count = Db::name("goods_extends")
            ->alias("e")->join("goods g","e.goods_id=g.id","LEFT")
            ->where('g.status',0)->where("e.attribute","hot")
            ->count();

        $total = ceil($count/$size);
        if($total == $page -1){
            return $this->returnAjax("empty",-1,[
                "list"=>[],
                "page"=>$page,
                "total"=>$total,
                "size"=>$size
            ]);
        }

        $result = Db::name("goods_extends")
            ->field("g.id,g.title,g.photo,g.sell_price as price,g.sale")
            ->alias("e")->join("goods g","e.goods_id=g.id","LEFT")
            ->where('g.status',0)->where("e.attribute","hot")
            ->order($order,$text)->limit((($page - 1) * $size),$size)->select()->toArray();

        $data = array_map(function ($rs){
            $rs["photo"] = Tool::thumb($rs["photo"],"medium",true);
            return $rs;
        },$result);

        return $this->returnAjax("ok",1, [
            "list"=>$data,
            "page"=>$page,
            "total"=>$total,
            "size"=>$size
        ]);
    }

    public function recommend(){
        $page = Request::param("page","1","intval");
        $type = Request::param("type","0","intval");
        $sort = Request::param("sort","1","intval");

        switch($type){
            case '2':
                $order = 'g.sell_price';
                $text = $sort == 1 ? "ASC" : "DESC";
                break;
            case '1':
                $order = 'g.sale';
                $text = 'DESC';
                break;
            case '0':
            default :
                $order = 'g.id';
                $text = 'DESC';
                break;
        }

        $size = 10;

        $count = Db::name("goods_extends")
            ->alias("e")->join("goods g","e.goods_id=g.id","LEFT")
            ->where('g.status',0)->where("e.attribute","recommend")
            ->count();

        $total = ceil($count/$size);
        if($total == $page -1){
            return $this->returnAjax("empty",-1,[]);
        }

        $result = Db::name("goods_extends")
            ->field("g.id,g.title,g.photo,g.sell_price as price,g.sale")
            ->alias("e")->join("goods g","e.goods_id=g.id","LEFT")
            ->where('g.status',0)->where("e.attribute","recommend")
            ->order($order,$text)->limit((($page - 1) * $size),$size)->select()->toArray();

        $data = array_map(function ($rs){
            $rs["photo"] = Tool::thumb($rs["photo"],"medium",true);
            return $rs;
        },$result);

        return $this->returnAjax("ok",1, [
            "list"=>$data,
            "page"=>$page,
            "total"=>$total,
            "size"=>$size
        ]);
    }
}