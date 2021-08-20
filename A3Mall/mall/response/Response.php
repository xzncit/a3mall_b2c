<?php
// +----------------------------------------------------------------------
// | A3Mall
// +----------------------------------------------------------------------
// | Copyright (c) 2020 http://www.a3-mall.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: xzncit <158373108@qq.com>
// +----------------------------------------------------------------------
namespace mall\response;

class Response {

    public static function returnArray($msg="",$code=1,$data=[],$count=0){
        return json(["code"=>$code, "msg"=>$msg,"count"=>$count,"data"=>$data]);
    }

    public static function returnJson($type,$info="",$status=0,$data=[]){
        return json_encode(["type"=>$type,"info"=>$info,"status"=>$status,"data"=>$data],JSON_UNESCAPED_UNICODE);
    }
}