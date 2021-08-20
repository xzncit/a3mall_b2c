<?php /*a:5:{s:80:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/platform/shop/manage.php";i:1623379871;s:69:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/main/shop.php";i:1627731723;s:87:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/platform/shop/layout/widget.php";i:1623379871;s:85:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/platform/shop/layout/main.php";i:1623379871;s:87:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/platform/shop/layout/editor.php";i:1623379871;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>A3Mall | Dashboard</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="/static/system/js/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/static/system/font/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/static/system/css/AdminLTE.min.css">
    <link rel="stylesheet" href="/static/system/css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="/static/system/js/layui/css/layui.css">
    <link rel="stylesheet" href="/static/system/css/base.css">
    <script src="/static/system/js/jquery/jquery.min.js"></script>
    <script src="/static/system/js/bootstrap/js/bootstrap.min.js"></script>
    <script src="/static/system/js/layui/layui.js"></script>
    <script src="/static/system/js/fastclick/fastclick.js"></script>
    <script src="/static/system/js/adminlte/adminlte.min.js"></script>
    <script src="/static/system/js/jquery-slimscroll/jquery.slimscroll.min.js"></script>
    <script src="/static/system/js/common/common.js"></script>
    <script type="text/javascript">
        $.ajaxSetup({
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            complete:function(XMLHttpRequest,textStatus){
                var res = XMLHttpRequest.responseText;
                try{
                    var jsonData = JSON.parse(res);
                    if(jsonData.code == -1000){
                        window.location.href = '<?php echo createUrl("login/index"); ?>';
                    }else if(jsonData.code == -999){
                        layer.msg(jsonData.msg,{ icon: 2, time: 5000 },function () {
                            window.history.go(-1);
                        });
                    }
                }catch(e){}
            }
        });
    </script>
</head>
<body class="hold-transition skin-blue sidebar-mini fixed">
<div class="wrapper">

    <header class="main-header">

        <!-- Logo -->
        <a href="<?php echo createUrl('platform.index/index'); ?>" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A3</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>A3Mall</b></span>
        </a>

        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <div class="navbar-custom-menu navbar-left navbar-list-top">
                <ul class="nav navbar-nav">
                    <?php if(!empty($sidebar['top'])): if(is_array($sidebar['top']) || $sidebar['top'] instanceof \think\Collection || $sidebar['top'] instanceof \think\Paginator): $i = 0; $__LIST__ = $sidebar['top'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?>
                    <li class="<?php if($menu['active']): ?>active<?php endif; ?>"><a href="<?php echo htmlentities($menu['url']); ?>"><?php echo htmlentities($menu['name']); ?></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                    <?php endif; ?>
                </ul>
            </div>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li><a href="<?php echo url('home/index/index'); ?>" target="_blank"><i class="fa fa-home"></i>&nbsp;网站前台</a></li>
                    <li><a href="<?php echo url('login/logout'); ?>"><i class="fa fa-sign-out"></i>&nbsp;退出</a></li>
                </ul>
            </div>

        </nav>
    </header>

    <aside class="main-sidebar">
       <div class="sidebar-pages">
            <a href="javascript:;" class="active">
                <i class="fa fa-sticky-note-o"></i>
                页面
            </a>
           <a href="<?php echo createUrl('select'); ?>">
               <i class="fa fa-undo"></i>
               返回
           </a>
       </div>
       <div class="sidebar-pages-left">
           <div class="sidebar-pages-left-box">
               <ul class="layui-nav layui-nav-tree layui-inline custom-theme" style="width: 100%;" lay-shrink="all">
                   <li class="layui-nav-item layui-nav-itemed <?php if(app('request')->action() == 'manage' || app('request')->action() == 'category'): ?>layui-this<?php endif; ?>">
                       <a href="javascript:;">店铺装修</a>
                       <dl class="layui-nav-child">
                           <dd class="<?php if(app('request')->action() == 'manage' && app('request')->param('code') =='home'): ?>layui-this<?php endif; ?>">
                               <a href="<?php echo createUrl('manage',['type'=>app('request')->param('type'),'code'=>'home']); ?>">首页装修</a>
                           </dd>
                           <dd class="<?php if(app('request')->action() == 'category' && app('request')->param('code') =='category'): ?>layui-this<?php endif; ?>">
                               <a href="<?php echo createUrl('category',['type'=>app('request')->param('type'),'code'=>'category']); ?>">分类页面</a>
                           </dd>
                       </dl>
                   </li>
                   <li class="layui-nav-item <?php if(app('request')->action() == 'index'): ?>layui-this<?php endif; ?>">
                       <a href="<?php echo createUrl('index',['type'=>app('request')->param('type')]); ?>">自定义页</a>
                   </li>

               </ul>
           </div>
       </div>
    </aside>

    <div class="content-wrapper clearfix">
        <link rel="stylesheet" href="/static/system/js/element-ui/index.css">
<script type="text/javascript" src="/static/system/js/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="/static/system/js/ueditor/ueditor.all.min.js"></script>
<script src="/static/system/js/vue/vue.js"></script>
<script src="/static/system/js/vue/sortable.min.js"></script>
<script src="/static/system/js/vue/vuedraggable.umd.min.js"></script>
<script src="/static/system/js/element-ui/index.js"></script>

<div id="app">
    <layout-menu></layout-menu>
</div>
<template id="uploadfiy">
    <div>
        <a href="javascript:;" class="file">选择文件
            <input type="file" @change="upload($event)">
        </a>
        <div class="layui-upload-list">
            <img v-if="item.thumb_image" class="layui-upload-img" :src="item.thumb_image" style="width:auto;max-width:200px;height:90px;">
            <div v-if="!item.thumb_image" class="empty-image-box">
                请上传图片
            </div>
        </div>
    </div>
</template>

<template id="upload-video">
    <div>
        <a href="javascript:;" class="file">选择文件
            <input type="file" @change="upload($event)">
        </a>
        <div class="layui-upload-list">
            <el-input size="mini" placeholder="请输入视频地址" v-model="item.url"></el-input>
            <p style="font-size: 12px;">允许上传视频最大值：<?php echo ini_get('post_max_size'); ?></p>
        </div>
    </div>
</template>

<template id="select-box">
    <div>
        <el-form-item label="链接类型：">
            <el-select
                v-model="selectType"
                placeholder="请选择"
                @change="changeSelect"
            >
                <el-option
                    v-for="(val,key,i) in select"
                    :key="i"
                    :label="val"
                    :value="key"
                >
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="链接指向：">
            <div v-if="selectType==1">
                <el-input
                    style="height: 30px"
                    type="textarea"
                    autosize
                    placeholder="链接以http开头"
                    v-model="url"
                    @change="updateLinkValue"
                ></el-input>
            </div>
            <div v-if="selectType==2">
                <el-input
                    type="text"
                    v-model="id"
                    class="selectLinkVal"
                    :readonly="true"
                    @click.native ="selectLink"
                    placeholder="请选择"
                ></el-input>
            </div>
            <div v-if="selectType==3">
                <el-input
                    type="text"
                    v-model="id"
                    class="selectLinkVal"
                    :readonly="true"
                    @click.native="selectLink"
                    placeholder="请选择"
                ></el-input>
            </div>
            <div v-if="selectType==4">
                <select
                    v-model="id"
                    class="custom-select-box"
                    @change="updateSelect"
                >
                    <option disabled value="">请选择</option>
                    <template v-for="item in config.articleCategory">
                        <option :value="item.id" v-html="item.name">{{item.name}}</option>
                    </template>
                </select>
            </div>
            <div v-if="selectType==5">
                <select
                        v-model="id"
                        class="custom-select-box"
                        @change="updateSelect"
                >
                    <option disabled value="">请选择</option>
                    <template v-for="(v,k) in config.link">
                        <option :value="k" v-html="v">{{v}}</option>
                    </template>
                </select>
            </div>
            <div v-if="selectType==6">
                <select
                        v-model="id"
                        class="custom-select-box"
                        @change="updateSelect"
                >
                    <option disabled value="">请选择</option>
                    <template v-for="(v,k) in config.customPages">
                        <option :value="v.id">{{v.name}}</option>
                    </template>
                </select>
            </div>
        </el-form-item>
    </div>
</template>

<script type="text/javascript">
    Vue.prototype.bus = new Vue();
    Vue.component('uploadfiy',{
        template: '#uploadfiy',
        name:'uploadfiy',
        data: function () {
            return {};
        },
        props: ['index', "item"],
        methods: {
            upload: function (event) {
                this.$emit('uploadfiy',event);
            }
        }
    });

    Vue.component('upload-video',{
        template: '#upload-video',
        name:'upload-video',
        data: function () {
            return {};
        },
        props: ['index', "item"],
        methods: {
            upload: function (event) {
                this.$emit('uploadfiy',event);
            }
        }
    });

    Vue.component('select-box',{
        template: '#select-box',
        name:'selectBox',
        props: ['type', 'id'],
        data: function () {
            return {
                select: config.select, // 菜单类型
                url: this.id || '',
                selectType: this.type ? ''+this.type : Object.keys(config.select)[0] // 默认选中类型
            }
        },
        watch: {
            type(newData, oldData) {
                this.selectType = newData;
                if (newData == 1) {
                    this.url = this.id;
                }
            }
        },
        methods: {
            selectLink: function () {
                this.$emit('choose-link');
            },
            changeSelect: function () {
                this.$emit('update:type', this.selectType);
                this.$emit("update:id", '');
            },
            updateLinkValue: function () {
                this.$emit("update:id", this.url);
            },
            updateSelect: function (){
                this.$emit("update:id",this.id);
            }
        },
        mounted(){
            if(!this.type){
                this.$emit('update:type', Object.keys(config.select)[0]);
            }
        }
    });
</script>
<template id="layout-menu">
    <div>
        <section class="content clearfix">
            <div class="layui-editor-box">
                <div class="shop-wrap clearfix">
                    <div class="shop-menu">
                        <div class="widget-wrap">
                            <div class="widget-title">
                                <div class="widget-text">组件库</div>
                            </div>

                            <div class="widget-list">
                                <div class="widget-item">
                                    <div class="widget-item-box">
                                        <ul>
                                            <li
                                                class="widget-item-li"
                                                v-for="(item, index) in menu.setting"
                                                :key="index"
                                                @click="settingWidget(item,index)"
                                            >
                                                <div><i class="fa" :class="item.icon"></i></div>
                                                <div class="text">{{ item.name }}</div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="widget-item-title">媒体组件</div>
                                    <div class="widget-item-box">
                                        <ul>
                                            <draggable tag="ul" :list="menu.media"
                                                       :group="{name: 'widget', pull: 'clone', put: false}"
                                                       v-bind="{sort: false,ghostClass: 'ghost',animation: 150}">
                                                <li class="widget-item-li"
                                                    v-for="(item, index) in menu.media" :key="index"
                                                >
                                                    <div><i class="fa" :class="item.icon"></i></div>
                                                    <div class="text">{{ item.name }}</div>
                                                </li>
                                            </draggable>
                                        </ul>
                                    </div>

                                    <div class="widget-item-title">商城组件</div>
                                    <div class="widget-item-box">
                                        <ul>
                                            <draggable tag="ul" :list="menu.shop"
                                                       :group="{name: 'widget', pull: 'clone', put: false}"
                                                       v-bind="{sort: false,ghostClass: 'ghost',animation: 150}">
                                                <li class="widget-item-li"
                                                    v-for="(item, index) in menu.shop" :key="index"
                                                >
                                                    <div><i class="fa" :class="item.icon"></i></div>
                                                    <div class="text">{{ item.name }}</div>
                                                </li>
                                            </draggable>
                                        </ul>
                                    </div>

                                    <div class="widget-item-title">工具组件</div>
                                    <div class="widget-item-box">
                                        <ul>
                                            <draggable tag="ul" :list="menu.utils"
                                                       :group="{name: 'widget', pull: 'clone', put: false}"
                                                       v-bind="{sort: false,ghostClass: 'ghost',animation: 150}">
                                                <li class="widget-item-li"
                                                    v-for="(item, index) in menu.utils" :key="index"
                                                >
                                                    <div><i class="fa" :class="item.icon"></i></div>
                                                    <div class="text">{{ item.name }}</div>
                                                </li>
                                            </draggable>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="shop-content">
                        <div class="shop-header"></div>
                        <div class="shop-main clear">
                            <div class="shop-mobile">
                                <draggable
                                    v-model="array"
                                    :group="{ name: 'widget'}"
                                    v-bind="{sort: true,ghostClass: 'ghost',dragClass:'dragItem',scroll: true,scrollSensitivity:100,scrollSpeed:1000,animation: 100}"
                                    class="layout-list"
                                    @add="draggableStart"
                                    @update="draggableEnd"
                                    @remove="draggableRemove"
                                    :style="settingStyle"
                                >
                                    <template v-for="(item, index) in array">
                                        <div
                                            class="layout-main clearfix"
                                            :key="item.key"
                                            @click="draggableWidget(index)"
                                            :class="{ active: editData.key === item.key}"
                                        >

                                            <!-- 幻灯片 -->
                                            <div v-if="item.type === 'slider'" class="drag lay-item lay-slider">
                                                <div class="block">
                                                    <div :style="'margin-top:'+item.value.marginTop+'px;margin-bottom:'+item.value.marginBottom+'px;margin-left:'+item.value.marginLeft+'px;margin-right:'+item.value.marginRight+'px;'">
                                                        <el-carousel :style="'border-radius:'+item.value.border+'px;'" arrow="never" trigger="click" :height="''+item.value.height+'px'" :interval="item.value.duration">
                                                            <el-carousel-item v-for="(value,j) in item.value.list" :key="j">
                                                                <h3 v-if="!value.thumb_image" class="small">请上传图片</h3>
                                                                <img v-if="value.thumb_image" :src="value.thumb_image" style="width: 100%; height: 100%;">
                                                            </el-carousel-item>
                                                        </el-carousel>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 图片 -->
                                            <div v-if="item.type === 'images'" class="drag lay-item">
                                                <div :style="'margin-top:'+item.value.marginTop+'px;margin-bottom:'+item.value.marginBottom+'px;margin-left:'+item.value.marginLeft+'px;margin-right:'+item.value.marginRight+'px;'">
                                                    <div class="block lay-images" :style="'border-radius:'+item.value.border+'px;height:'+item.value.height+'px;min-height:'+item.value.height+'px;'">
                                                        <h3 v-if="!item.value.list[0].thumb_image" class="small">请上传图片</h3>
                                                        <img v-if="item.value.list[0].thumb_image" :src="item.value.list[0].thumb_image" style="width: 100%; height: 100%;" :style="'border-radius:'+item.value.border+'px;height:'+item.value.height+'px;min-height:'+item.value.height+'px;'">
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 图片分组 -->
                                            <div v-if="item.type === 'image-group'" class="drag lay-item lay-image-group" :class="'image-group-row-'+item.value.style">
                                                <div class="clearfix">
                                                    <template v-if="item.value.style==0">
                                                        <div class="display">
                                                            <div class="image-group-left">
                                                                <img :src="item.value.list[0].thumb_image||'/static/system/images/a3mall.png'" alt="">
                                                            </div>
                                                            <div class="image-group-right">
                                                                <div class="image-group-right1">
                                                                    <img :src="item.value.list[1].thumb_image||'/static/system/images/a3mall.png'" alt="">
                                                                </div>
                                                                <div class="image-group-right2">
                                                                    <div class="left">
                                                                        <img :src="item.value.list[2].thumb_image||'/static/system/images/a3mall.png'" alt="">
                                                                    </div>
                                                                    <div class="right">
                                                                        <img :src="item.value.list[3].thumb_image||'/static/system/images/a3mall.png'" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <div
                                                            class="image-group-wrap"
                                                            v-for="(img,key) in item.value.list"
                                                            :key="key"
                                                            :style="{padding:item.value.margin+'px'}"
                                                        >
                                                            <img :src="img.thumb_image||'/static/system/images/a3mall.png'" alt="">
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>

                                            <!-- 视频 -->
                                            <div v-if="item.type === 'video'" class="drag lay-item lay-video">
                                                <div class="video-wrap" v-for="(video,key) in item.value.list">
                                                    <video :src="video.url" :poster="video.thumb_image" controls="controls" width="100%" height="200px;"></video>
                                                </div>
                                            </div>

                                            <!-- 文章 -->
                                            <div v-if="item.type === 'article'" class="drag lay-item lay-article">
                                                <div class="article-wrap clearfix" v-for="(article,key) in item.value.list">
                                                    <div class="article-left">
                                                        <div class="article-left-title">
                                                            {{article.title||'此处显示文章标题'}}
                                                        </div>
                                                    </div>
                                                    <div class="article-img">
                                                        <img :src="article.photo||'/static/system/images/a3mall.png'" alt="">
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 内容分类 -->
                                            <div v-if="item.type === 'article-group'" class="drag lay-item lay-article">

                                                <div v-if="item.value.list.length > 0" class="article-wrap clearfix" v-for="(article,key) in item.value.list">
                                                    <div class="article-left">
                                                        <div class="article-left-title">
                                                            {{article.title||'此处显示文章标题'}}
                                                        </div>
                                                    </div>
                                                    <div class="article-img">
                                                        <img :src="article.photo||'/static/system/images/a3mall.png'" alt="">
                                                    </div>
                                                </div>

                                                <div v-if="item.value.list.length <= 0" class="article-wrap clearfix" v-for=" v in 2">
                                                    <div class="article-left">
                                                        <div class="article-left-title">
                                                            此处显示文章标题
                                                        </div>
                                                    </div>
                                                    <div class="article-img">
                                                        <span></span>
                                                    </div>
                                                </div>

                                            </div>

                                            <!-- 搜索 -->
                                            <div v-if="item.type === 'search'" class="drag lay-item lay-search">
                                                <div :style="'margin-top:'+item.value.marginTop+'px;margin-bottom:'+item.value.marginBottom+'px;padding-left:'+item.value.marginLeft+'px;padding-right:'+item.value.marginRight+'px;'">
                                                    <div class="lay-search-box">
                                                        <input v-model="item.value.keywords" class="lay-search-input" :style="'border-radius:'+item.value.border+'px'" />
                                                        <i class="fa fa-search"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 公告 -->
                                            <div v-if="item.type === 'notice'" class="drag lay-item lay-notice">
                                                <i class="fa fa-volume-off" :style="'color:'+item.value.color"></i>
                                                <div class="notice-right">
                                                    <div v-for="(notice,key) in item.value.list" :style="'color:'+item.value.color" class="notice-text">{{notice.title}}</div>
                                                </div>
                                            </div>

                                            <!-- 导航组 -->
                                            <div v-if="item.type === 'navbar'" class="drag lay-item lay-navbar" :class="'lay-navbar-row-'+item.value.limit">
                                                <div class="item" v-for="(nav,key) in item.value.list" :key="key">
                                                    <div class="item-image">
                                                        <img v-if="nav.thumb_image" :src="nav.thumb_image" alt="">
                                                        <span v-if="!nav.thumb_image"></span>
                                                    </div>
                                                    <p class="item-text">{{nav.text}}</p>
                                                </div>
                                            </div>

                                            <!-- 文字导航 -->
                                            <div v-if="item.type === 'textbar'" class="drag lay-item lay-tabbar" :class="'lay-tabbar-row-'+item.value.limit">
                                                <div class="item" v-for="(nav,key) in item.value.list" :key="key">
                                                    <p class="item-text">{{nav.text}}</p>
                                                </div>
                                            </div>

                                            <!-- 商品列表 -->
                                            <div v-if="item.type === 'goods'" class="drag lay-item lay-goods"  :class="item.value.display">
                                                <div v-if="item.value.layout==1">
                                                    <div class="goods-head">
                                                        <div>{{item.value.title}}</div>
                                                        <div v-if="item.value.lookMore == 'true'">查看更多></div>
                                                    </div>
                                                    <div
                                                        class="goods-item" v-for="(goods,key) in item.value.list"
                                                        :key="key"
                                                        :class="'column'+item.value.column"
                                                    >
                                                        <div class="goods-image">
                                                            <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                                        </div>
                                                        <div class="goods-detail">
                                                            <p class="goods-name twolist-hidden">
                                                                {{goods.title||'此处显示商品名称'}}
                                                            </p>
                                                            <p class="goods-price">￥{{goods.sell_price||'199.00'}}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div v-if="item.value.layout==2">
                                                    <div class="host-box">
                                                        <div class="host-title">
                                                            <span>{{item.value.title}}</span>
                                                            <span v-if="item.value.lookMore == 'true'">查看更多></span>
                                                        </div>
                                                        <div class="host-middle">
                                                            <div v-for="(goods,key) in item.value.list" :key="index" class="host-middle-box">
                                                                <span><img :src="goods.photo||'/static/system/images/a3mall.png'"></span>
                                                                <span>{{goods.title||'商品名称'}}</span>
                                                                <span>￥{{goods.sell_price||'199.00'}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <!-- 拼团 -->
                                            <div v-if="item.type === 'group'" class="drag lay-item lay-group lay-goods slide">
                                                <div class="goods-head">
                                                    <div>{{item.value.title}}</div>
                                                </div>
                                                <div class="group-item" v-for="(goods,key) in item.value.list" :key="key">
                                                    <div class="group-image">
                                                        <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                                    </div>
                                                    <div class="group-detail">
                                                        <p class="group-name twolist-hidden">
                                                            {{goods.title||'此处显示商品名称'}}
                                                        </p>
                                                        <p class="group-price">￥{{goods.sell_price||'99.00'}}</p>
                                                        <p class="group-time"><span>剩余：</span><span class="time">21</span>:<span class="time">30</span>:<span class="time">45</span></p>
                                                        <span class="buy-icon"><i class="el-icon-shopping-cart-full"></i></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 团购 -->
                                            <div v-if="item.type === 'regiment'" class="drag lay-item lay-goods slide">
                                                <div class="goods-head">
                                                    <div>{{item.value.title}}</div>
                                                </div>
                                                <div class="group-item" v-for="(goods,key) in item.value.list" :key="key">
                                                    <div class="group-image">
                                                        <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                                    </div>
                                                    <div class="group-detail">
                                                        <p class="group-name twolist-hidden">
                                                            {{goods.title||'此处显示商品名称'}}
                                                        </p>
                                                        <p class="group-price">￥{{goods.sell_price||'99.00'}}</p>
                                                        <p class="group-time"><span>剩余：</span><span class="time">21</span>:<span class="time">30</span>:<span class="time">45</span></p>
                                                        <span class="buy-icon"><i class="el-icon-shopping-cart-full"></i></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 秒杀 -->
                                            <div v-if="item.type === 'second'" class="drag lay-item lay-goods slide">
                                                <div class="goods-head">
                                                    <div>{{item.value.title}}</div>
                                                </div>
                                                <div class="group-item" v-for="(goods,key) in item.value.list" :key="key">
                                                    <div class="group-image">
                                                        <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                                    </div>
                                                    <div class="group-detail">
                                                        <p class="group-name twolist-hidden">
                                                            {{goods.title||'此处显示商品名称'}}
                                                        </p>
                                                        <p class="group-price">￥{{goods.sell_price||'99.00'}}</p>
                                                        <p class="group-time"><span>剩余：</span><span class="time">21</span>:<span class="time">30</span>:<span class="time">45</span></p>
                                                        <span class="buy-icon"><i class="el-icon-shopping-cart-full"></i></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 优惠券 -->
                                            <div v-if="item.type === 'bonus'" class="drag lay-item lay-bonus">
                                                <!-- div class="bonus-item">
                                                    <div class="bonus-left">
                                                        <p>满300减30</p>
                                                    </div>
                                                    <div class="bonus-right">
                                                        <p class="bonus-f">订单减1.44元 减100元 </p>
                                                        <p>购买订单满2元 </p>
                                                        <p><?php echo date("Y-m-d H:i:s"); ?> - <?php echo date("Y-m-d H:i:s",strtotime("+5 day")); ?></p>
                                                    </div>
                                                    <div class="bonus-btn">
                                                        立即领取
                                                    </div>
                                                </div -->
                                                <div class="bonus-wrap">
                                                    <div class="bonus-list">
                                                        <div class="bonus-box">
                                                            <div class="l">
                                                                <span><i>￥</i>10</span>
                                                            </div>
                                                            <div class="m">
                                                                <div class="mm">
                                                                    <span>10元红包</span>
                                                                    <span>无门槛</span>
                                                                    <div>
                                                                        <span><?php echo date("Y-m-d"); ?> 至</span>
                                                                        <span><?php echo date("Y-m-d",strtotime("+5 day")); ?></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="r"><span>立即领取</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 头部 -->
                                            <div v-if="item.type === 'header'" class="drag lay-item lay-header">
                                                <div class="head-wrap clearfix">
                                                    <div class="head-left">
                                                        <span :style="'color:'+item.value.titleColor">{{item.value.title}}</span>
                                                        <span :style="'color:'+item.value.ctitleColor">{{item.value.ctitle}}</span>
                                                    </div>
                                                    <div class="head-right">
                                                        <i :style="'color:'+item.value.titleColor" class="el-icon-shopping-cart-1"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- 辅助空白 -->
                                            <div v-if="item.type === 'blank'" class="drag lay-item lay-blank" :style="{height:item.value.height+'px',backgroundColor:item.value.backgroundColor}"></div>

                                            <!-- 文本域 -->
                                            <div v-if="item.type === 'textarea'" class="drag lay-item lay-textarea">
                                                <div class="lay-search-c" v-html="item.value"></div>
                                            </div>

                                            <div @click.stop="draggableDelete(index)" class="btn-delete" v-if="editData.key === item.key">删除</div>
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                            <div class="shop-button">
                                <span @click="save">提交并保存</span>
                            </div>
                        </div>
                    </div>

                    <layout-editor></layout-editor>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
<script type="text/javascript">
    window.config = {
        array: <?php echo (isset($pageConfig) && ($pageConfig !== '')?$pageConfig:"[]"); ?>, // 页面默认数据
        settingData: <?php echo (isset($settingData) && ($settingData !== '')?$settingData:"[]"); ?>, // 页面默认数据
        articleCategory: <?php echo (isset($articleTypeList) && ($articleTypeList !== '')?$articleTypeList:'[]'); ?>,
        categoryList: <?php echo (isset($catList) && ($catList !== '')?$catList:'[]'); ?>,
        brandList: <?php echo (isset($brandList) && ($brandList !== '')?$brandList:'[]'); ?>,
        select: <?php echo (isset($linkType) && ($linkType !== '')?$linkType:'[]'); ?>,
        link: <?php echo (isset($linkCategory) && ($linkCategory !== '')?$linkCategory:'[]'); ?>,
        customPages: <?php echo (isset($customPage) && ($customPage !== '')?$customPage:'[]'); ?>,
        media:<?php echo (isset($widget['media']) && ($widget['media'] !== '')?$widget['media']:'[]'); ?>,
        shop: <?php echo (isset($widget['shop']) && ($widget['shop'] !== '')?$widget['shop']:'[]'); ?>,
        utils: <?php echo (isset($widget['utils']) && ($widget['utils'] !== '')?$widget['utils']:'[]'); ?>,
        setting:<?php echo (isset($widget['setting']) && ($widget['setting'] !== '')?$widget['setting']:'[]'); ?>
    };
    Vue.component('layout-menu',{
        template: '#layout-menu',
        name:'layoutMenu',
        data() {
            return {
                array: [],
                editData: {},
                settingEditor:{},
                settingData:[],
                menu: {
                    media: config.media,
                    shop:  config.shop,
                    utils: config.utils,
                    setting: config.setting
                },
                settingStyle: {}
            }
        },
        methods: {
            settingWidget: function (item,index){
                if(this.settingData[index] == undefined){
                    this.settingData[index] = item;
                }

                this.setSettingWidget(this.settingData[index]);
            },
            setSettingWidget: function (data){
                this.settingEditor = data;
                this.bus.$emit('changeSettingWidget',data);
            },
            setSelectWidegt: function (data){
                this.editData = data;
                this.bus.$emit('changeSelectWidget', data);
            },
            deepClone: function (obj) {
                let result = Array.isArray(obj) ? [] : {}
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (typeof obj[key] === 'object') {
                            result[key] = this.deepClone(obj[key]) //递归复制
                        } else {
                            result[key] = obj[key]
                        }
                    }
                }
                return result;
            },
            draggableRemove:function(ev){
                this.setSelectWidegt({});
            },
            draggableStart:function(ev){
                var newIndex = ev.newIndex;
                var elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000);
                var newObj = this.deepClone(this.array[newIndex]);
                newObj.key = this.array[newIndex].type + '_' + elKey;
                this.$set(this.array, newIndex, newObj);
                this.setSelectWidegt(this.array[newIndex]);
            },
            draggableEnd:function(ev){},
            draggableWidget:function(index) {
                this.setSelectWidegt(this.array[index]);
            },
            deleteWidget(index) {
                if (this.array.length - 1 === index) {
                    if (index === 0) {
                        this.setSelectWidegt([]);
                    } else {
                        this.setSelectWidegt(this.array[index - 1]);
                    }
                } else {
                    this.setSelectWidegt(this.array[index + 1]);
                }
                this.$nextTick(() => {
                    this.array.splice(index, 1);
                })
            },
            draggableDelete:function(index){
                var that = this;
                layer.open({
                    title: '提示',
                    content: '确定要删除吗？',
                    btn: ['确定', '取消'],
                    yes: function (layIndex, layero) {
                        that.deleteWidget(index);
                        layer.close(layIndex)
                    },
                    btn2: function () {
                        return;
                    }
                });
            },
            save: function (){
                var params = [];
                if(this.settingData.length > 0){
                    params = this.array.concat(this.settingData);
                }else{
                    params = this.array;
                }

                var data = {
                    id: "<?php echo htmlentities($pageId); ?>",
                    data: params
                };

                $.post("<?php echo createUrl('save',[],false,true); ?>", data, function (res) {
                    if (res.code) {
                        layer.msg(res.msg, { time: 1300 }, function () {});
                    } else {
                        layer.msg(res.msg);
                    }
                })
            }
        },
        watch:{
            settingEditor:{
                handler:function(val,oldval){
                    if(val.type == 'body'){
                        if(val.value.type == "1"){
                            this.settingStyle = {
                                backgroundColor: val.value.backgroundColor
                            }
                        }else if(val.value.type == "2"){
                            this.settingStyle = {
                                "background-color": "transparent",
                                "background-image": 'url('+val.value.thumb_image+')',
                                "background-repeat": "repeat-x"
                            }
                        }else{
                            this.settingStyle = {};
                        }
                    }
                },
                deep:true
            }
        },
        mounted() {
            if (config.array.length > 0) {
                for (var i = 0; i < config.array.length; i++) {
                    var item = config.array[i];
                    var elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000)
                    item.key = item.type + '_' + elKey
                }
                this.array = config.array;
            }

            if (config.settingData.length > 0) {
                for (var i = 0; i < config.settingData.length; i++) {
                    var item = config.settingData[i];
                    var elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000)
                    item.key = item.type + '_' + elKey
                    if(item.type=="body"){
                        this.settingEditor = item;
                    }
                }

                this.settingData = config.settingData;
            }
        }
    });
</script>

<template id="layout-editor">
    <div>
        <div v-if="editData && Object.keys(editData).length > 0">
            <div class="layout-editor">
                <div class="editor-title">
                    <span>{{getSelectWgName(editData.type)}}</span>
                </div>
                <el-form ref="form" label-width="100px" label-position="left">
                    <!-- 轮播图 -->
                    <template v-if="editData.type=='slider'">
                        <div>
                            <div class="content-item">
                                <span class="item-label">切换时间：</span>
                                <div class="number-content ml20">
                                    <el-input :step="500" v-model.number="editData.value.duration" :min="0" placeholder="请输入内容"></el-input>
                                    <p class="layout-tip">轮播图自动切换的间隔时间，单位：毫秒</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <span class="item-label">高度：</span>
                                <div class="number-content ml20">
                                    <el-input :step="500" v-model.number="editData.value.height" :min="0" placeholder="请输入内容"></el-input>
                                    <p class="layout-tip">轮播图高度，不用填写单位，单位：px</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <span class="item-label">边框样式：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.border"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置上边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginTop"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置下边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginBottom"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置左边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginLeft"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置右边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginRight"></el-slider>
                                </div>
                            </div>

                            <draggable
                                tag="ul" :list="editData.value.list"
                                :group="{name:'slider-list'}"
                                v-bind="{ghostClass: 'ghost',animation: 150,handle:'.drag-block'}"
                            >
                                <li v-for="(item, index) in editData.value.list" :key="index">
                                    <div class="drag-block">
                                        <div class="handle-icon" title="删除这一项">
                                            <i class="fa fa-times" @click="sliderRemove(index)"></i>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <el-form-item label="图片：">
                                                <uploadfiy @uploadfiy="upImage($event,index,item)" :index="index" :item="item"></uploadfiy>
                                            </el-form-item>
                                        </div>
                                        <select-box
                                            @choose-link="chooseLink(index,item.type)"
                                            :index="index"
                                            :type.sync="item.type"
                                            :id.sync="item.url"
                                        ></select-box>
                                    </div>
                                </li>
                            </draggable>
                            <div class="addImg" @click="addSlider">
                                <i class="fa fa-plus"></i>
                                <span>添加</span>
                            </div>
                        </div>
                    </template>

                    <!-- 图片 -->
                    <template v-if="editData.type=='images'">
                        <div>
                            <div class="content-item">
                                <span class="item-label">高度：</span>
                                <div class="number-content ml20">
                                    <el-input :step="500" v-model.number="editData.value.height" :min="0" placeholder="请输入内容"></el-input>
                                    <p class="layout-tip">轮播图高度，不用填写单位，单位：px</p>
                                </div>
                            </div>
                            <div class="content-item">
                                <span class="item-label">边框样式：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.border"></el-slider>
                                </div>
                            </div>
                            <div class="content-item">
                                <span class="item-label">设置上边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginTop"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置下边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginBottom"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置左边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginLeft"></el-slider>
                                </div>
                            </div>

                            <div class="content-item">
                                <span class="item-label">设置右边距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.marginRight"></el-slider>
                                </div>
                            </div>

                            <draggable
                                tag="ul" :list="editData.value.list"
                                :group="{name:'slider-list'}"
                                v-bind="{ghostClass: 'ghost',animation: 150,handle:'.drag-block'}"
                            >
                                <li v-for="(item, index) in editData.value.list" :key="index">
                                    <div class="content">
                                        <div class="content-item">
                                            <el-form-item label="图片：">
                                                <uploadfiy @uploadfiy="upImage($event,index,item)" :index="index" :item="item"></uploadfiy>
                                            </el-form-item>
                                        </div>
                                        <select-box
                                                @choose-link="chooseLink(index,item.type)"
                                                :index="index"
                                                :type.sync="item.type"
                                                :id.sync="item.url"
                                        ></select-box>
                                    </div>
                                </li>
                            </draggable>
                        </div>
                    </template>

                    <!-- 图片分组 -->
                    <template v-if="editData.type=='image-group'">
                        <div>
                            <div class="content-item">
                                <span class="item-label">布局方式:</span>
                                <div class="image-group-block">
                                    <div
                                        class="image-group-item"
                                        v-for="(item,i) in imageGroupStyle"
                                        :key="i"
                                        @click="selectImageGroup(item)"
                                        :class="{active:editData.value.style==item.value}"
                                    >
                                        <div class="image-group-item-image">
                                            <img :src="item.image" alt="">
                                        </div>
                                        <div class="image-group-item-text">
                                            {{item.title}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-item">
                                <span class="item-label">图片间距：</span>
                                <div class="number-content ml20">
                                    <el-slider v-model="editData.value.margin"></el-slider>
                                </div>
                            </div>
                            <draggable
                                tag="ul" :list="editData.value.list"
                                :group="{name:'slider-list'}"
                                v-bind="{ghostClass: 'ghost',animation: 150,handle:'.drag-block'}"
                            >
                                <li v-for="(item, index) in editData.value.list" :key="index">
                                    <div class="drag-block">
                                        <div class="handle-icon" title="删除这一项">
                                            <i class="fa fa-times" @click="sliderRemove(index)"></i>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <el-form-item label="图片：">
                                                <uploadfiy @uploadfiy="upImage($event,index,item)" :index="index" :item="item"></uploadfiy>
                                            </el-form-item>
                                        </div>
                                        <select-box
                                                @choose-link="chooseLink(index,item.type)"
                                                :index="index"
                                                :type.sync="item.type"
                                                :id.sync="item.url"
                                        ></select-box>
                                    </div>
                                </li>
                            </draggable>
                            <div class="addImg" @click="addSlider">
                                <i class="fa fa-plus"></i>
                                <span>添加一个图片</span>
                            </div>
                        </div>
                    </template>

                    <!-- 视频 -->
                    <template v-if="editData.type=='video'">
                        <el-form-item label="自动播放">
                            <el-switch v-model="editData.value.autoplay" active-value="true" inactive-value="false"
                                       active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <li v-for="(item, index) in editData.value.list" :key="index">
                            <div class="content">
                                <div class="content-item">
                                    <span class="item-label">上传视频:</span>
                                    <upload-video @uploadfiy="upVideo($event,index,item)" :index="index" :item="item"></upload-video>
                                </div>
                            </div>
                        </li>
                    </template>

                    <!-- 文章 -->
                    <template v-if="editData.type=='article'">
                        <div>
                            <el-form-item label="栏目标题">
                                <el-input type="text" v-model.number="editData.value.title"></el-input>
                            </el-form-item>
                            <el-form-item label="选择文章">
                                <el-input
                                        v-model="editData.value.list[0].id"
                                        placeholder="请选择文章"
                                        readonly="readonly"
                                        @click.native="article_list"
                                ></el-input>
                            </el-form-item>
                        </div>
                    </template>

                    <!-- 内容分类 -->
                    <template v-if="editData.type=='article-group'">
                        <div>
                            <el-form-item label="栏目标题">
                                <el-input type="text" v-model.number="editData.value.title"></el-input>
                            </el-form-item>
                            <div class="layui-form-item">
                                <label class="layui-form-label">文章分类：</label>
                                <div class="layui-input-inline seller-inline-5">
                                    <select v-model="editData.value.article_id" class="custom-select-box">
                                        <option disabled value="">请选择</option>
                                        <template v-for="item in config.articleCategory">
                                            <option :value="item.id" v-html="item.name">{{item.name}}</option>
                                        </template>
                                    </select>
                                </div>

                            </div>
                            <el-form-item label="显示数量">
                                <el-input type="number" v-model.number="editData.value.limit" :min="1"></el-input>
                            </el-form-item>
                        </div>
                    </template>

                    <!-- 搜索框 -->
                    <template v-if="editData.type=='search'">
                        <el-form-item label="提示内容">
                            <el-input type="text" v-model.number="editData.value.keywords"></el-input>
                        </el-form-item>
                        <div class="content-item">
                            <span class="item-label">边框样式：</span>
                            <div class="number-content ml20">
                                <el-slider v-model="editData.value.border"></el-slider>
                            </div>
                        </div>
                        <div class="content-item">
                            <span class="item-label">设置上边距：</span>
                            <div class="number-content ml20">
                                <el-slider v-model="editData.value.marginTop"></el-slider>
                            </div>
                        </div>

                        <div class="content-item">
                            <span class="item-label">设置下边距：</span>
                            <div class="number-content ml20">
                                <el-slider v-model="editData.value.marginBottom"></el-slider>
                            </div>
                        </div>

                        <div class="content-item">
                            <span class="item-label">设置左边距：</span>
                            <div class="number-content ml20">
                                <el-slider v-model="editData.value.marginLeft"></el-slider>
                            </div>
                        </div>

                        <div class="content-item">
                            <span class="item-label">设置右边距：</span>
                            <div class="number-content ml20">
                                <el-slider v-model="editData.value.marginRight"></el-slider>
                            </div>
                        </div>
                    </template>

                    <!-- 公告 -->
                    <template v-if="editData.type=='notice'">
                        <div>
                            <el-form-item label="主标题颜色">
                                <el-color-picker v-model="editData.value.color"></el-color-picker>
                            </el-form-item>
                            <el-form-item label="选择文章">
                                <el-input
                                    v-model="editData.value.list[0].id"
                                    placeholder="请选择文章"
                                    readonly="readonly"
                                    @click.native="article_list"
                                ></el-input>
                            </el-form-item>
                        </div>
                    </template>

                    <!-- 图文导航 -->
                    <template v-if="editData.type=='navbar'">
                        <div>
                            <el-form-item label="每行数量">
                                <el-radio-group v-model="editData.value.limit">
                                    <el-radio :label="3">3个</el-radio>
                                    <el-radio :label="4">4个</el-radio>
                                    <el-radio :label="5">5个</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <draggable
                                tag="ul" :list="editData.value.list"
                                :group="{name:'slider-list'}"
                                v-bind="{ghostClass: 'ghost',animation: 150,handle:'.drag-block'}"
                            >
                                <li v-for="(item, index) in editData.value.list" :key="index">
                                    <div class="drag-block">
                                        <div class="handle-icon" title="删除这一项">
                                            <i class="fa fa-times" @click="sliderRemove(index)"></i>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <el-form-item label="按钮文字：">
                                                <el-input v-model="item.text"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="content-item">
                                            <el-form-item label="图片：">
                                                <uploadfiy @uploadfiy="upImage($event,index,item)" :index="index" :item="item"></uploadfiy>
                                            </el-form-item>
                                        </div>
                                        <select-box
                                                @choose-link="chooseLink(index,item.type)"
                                                :index="index"
                                                :type.sync="item.type"
                                                :id.sync="item.url"
                                        ></select-box>
                                    </div>
                                </li>
                            </draggable>
                            <div class="addImg" @click="addSlider">
                                <i class="fa fa-plus"></i>
                                <span>添加</span>
                            </div>
                        </div>
                    </template>

                    <!-- 文字导航 -->
                    <template v-if="editData.type=='textbar'">
                        <div>
                            <el-form-item label="每行数量">
                                <el-radio-group v-model="editData.value.limit">
                                    <el-radio :label="3">3个</el-radio>
                                    <el-radio :label="4">4个</el-radio>
                                    <el-radio :label="5">5个</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <draggable
                                tag="ul" :list="editData.value.list"
                                :group="{name:'slider-list'}"
                                v-bind="{ghostClass: 'ghost',animation: 150,handle:'.drag-block'}"
                            >
                                <li v-for="(item, index) in editData.value.list" :key="index">
                                    <div class="drag-block">
                                        <div class="handle-icon" title="删除这一项">
                                            <i class="fa fa-times" @click="sliderRemove(index)"></i>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <el-form-item label="按钮文字：">
                                                <el-input v-model="item.text"></el-input>
                                            </el-form-item>
                                        </div>
                                        <select-box
                                                @choose-link="chooseLink(index,item.type)"
                                                :index="index"
                                                :type.sync="item.type"
                                                :id.sync="item.url"
                                        ></select-box>
                                    </div>
                                </li>
                            </draggable>
                            <div class="addImg" @click="addSlider">
                                <i class="fa fa-plus"></i>
                                <span>添加</span>
                            </div>
                        </div>
                    </template>

                    <!-- 商品列表 -->
                    <template v-if="editData.type=='goods'">
                        <div>
                            <el-form-item label="商品列表名称">
                                <el-input type="text" v-model="editData.value.title"></el-input>
                            </el-form-item>
                            <el-form-item label="显示类型">
                                <el-radio-group v-model="editData.value.display">
                                    <el-radio label="list" :disabled="editData.value.layout==2">列表平铺</el-radio>
                                    <el-radio label="slide" :disabled="editData.value.column==1">横向滚动</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="分列数量">
                                <el-radio-group v-model="editData.value.column">
                                    <el-radio :label="1" :disabled="editData.value.display=='slide'||editData.value.layout==2">单列</el-radio>
                                    <el-radio :label="2" :disabled="editData.value.display=='slide'||editData.value.layout==2">两列</el-radio>
                                    <el-radio :label="3">三列</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="查看更多">
                                <el-radio-group v-model="editData.value.lookMore">
                                    <el-radio :label="1" :disabled="editData.value.type=='choose'">是</el-radio>
                                    <el-radio :label="0">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="布局">
                                <el-radio-group v-model="editData.value.layout">
                                    <el-radio :label="1">布局一</el-radio>
                                    <el-radio :label="2" :disabled="editData.value.display=='list'">布局二</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="商品来源">
                                <el-radio-group v-model="editData.value.type" @change="updateGoodsLoadType">
                                    <el-radio label="auto">自动获取</el-radio>
                                    <el-radio label="choose">手动选择</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <div v-show="editData.value.type=='auto'">
                                <el-form-item label="商品分类">
                                    <select
                                        v-model="editData.value.category_id"
                                        class="custom-select-box"
                                    >
                                        <option disabled value="">请选择</option>
                                        <template v-for="item in config.categoryList">
                                            <option :value="item.id" v-html="item.name">{{item.name}}</option>
                                        </template>
                                    </select>
                                </el-form-item>
                                <el-form-item label="品牌分类">
                                    <select
                                        v-model="editData.value.brand_id"
                                        class="custom-select-box"
                                    >
                                        <option disabled value="">请选择</option>
                                        <template v-for="item in config.brandList">
                                            <option :value="item.id" v-html="item.name">{{item.name}}</option>
                                        </template>
                                    </select>
                                </el-form-item>
                                <el-form-item label="显示数量">
                                    <el-input type="text" v-model="editData.value.limit" :min="1"></el-input>
                                </el-form-item>
                            </div>
                            <div v-show="editData.value.type=='choose'">
                                <div class="select_seller_goods_box">
                                    <input type="hidden" name="params[goods_id]" value="">
                                    <ul id="selectGoods" class="sellect_seller_goods_list clearfix">
                                        <draggable tag="ul" :list="editData.value.list" :group="{name:'selectGoodsList'}" v-bind="{ghostClass: 'ghost',animation: 150}">
                                            <li v-for="(goods,key) in editData.value.list" :key="key">
                                                <i class="layui-icon layui-icon-close-fill icon-delete" @click="deleteGoods(key)"></i>
                                                <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                                <p>{{goods.title}}</p>
                                            </li>
                                        </draggable>
                                    </ul>
                                    <div class="addImg" @click="selectGoods">
                                        <i class="fa fa-plus"></i>
                                        <span>选择商品</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- 拼团 -->
                    <template v-if="editData.type=='group'">
                        <div>
                            <el-form-item label="拼团名称">
                                <el-input type="text" v-model="editData.value.title"></el-input>
                            </el-form-item>
                            <el-form-item label="显示数量">
                                <el-input type="text" v-model="editData.value.limit" :min="1"></el-input>
                            </el-form-item>
                            <div class="select_seller_goods_box">
                                <input type="hidden" name="params[goods_id]" value="">
                                <ul id="selectGoods" class="sellect_seller_goods_list clearfix">
                                    <draggable tag="ul" :list="editData.value.list" :group="{name:'selectGoodsList'}" v-bind="{ghostClass: 'ghost',animation: 150}">
                                        <li v-for="(goods,key) in editData.value.list" :key="key">
                                            <i class="layui-icon layui-icon-close-fill icon-delete" @click="deleteGoods(key)"></i>
                                            <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                            <p>{{goods.title}}</p>
                                        </li>
                                    </draggable>
                                </ul>
                                <div class="addImg" @click="selectGroupGoods">
                                    <i class="fa fa-plus"></i>
                                    <span>选择商品</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- 团购 -->
                    <template v-if="editData.type=='regiment'">
                        <div>
                            <el-form-item label="团购名称">
                                <el-input type="text" v-model="editData.value.title"></el-input>
                            </el-form-item>
                            <el-form-item label="显示数量">
                                <el-input type="text" v-model="editData.value.limit" :min="1"></el-input>
                            </el-form-item>
                            <div class="select_seller_goods_box">
                                <input type="hidden" name="params[goods_id]" value="">
                                <ul id="selectGoods" class="sellect_seller_goods_list clearfix">
                                    <draggable tag="ul" :list="editData.value.list" :group="{name:'selectGoodsList'}" v-bind="{ghostClass: 'ghost',animation: 150}">
                                        <li v-for="(goods,key) in editData.value.list" :key="key">
                                            <i class="layui-icon layui-icon-close-fill icon-delete" @click="deleteGoods(key)"></i>
                                            <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                            <p>{{goods.title}}</p>
                                        </li>
                                    </draggable>
                                </ul>
                                <div class="addImg" @click="selectRegimentGoods">
                                    <i class="fa fa-plus"></i>
                                    <span>选择商品</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- 秒杀 -->
                    <template v-if="editData.type=='second'">
                        <div>
                            <el-form-item label="秒杀名称">
                                <el-input type="text" v-model="editData.value.title"></el-input>
                            </el-form-item>
                            <el-form-item label="显示数量">
                                <el-input type="text" v-model="editData.value.limit" :min="1"></el-input>
                            </el-form-item>
                            <div class="select_seller_goods_box">
                                <input type="hidden" name="params[goods_id]" value="">
                                <ul id="selectGoods" class="sellect_seller_goods_list clearfix">
                                    <draggable tag="ul" :list="editData.value.list" :group="{name:'selectGoodsList'}" v-bind="{ghostClass: 'ghost',animation: 150}">
                                        <li v-for="(goods,key) in editData.value.list" :key="key">
                                            <i class="layui-icon layui-icon-close-fill icon-delete" @click="deleteGoods(key)"></i>
                                            <img :src="goods.photo||'/static/system/images/a3mall.png'" alt="">
                                            <p>{{goods.title}}</p>
                                        </li>
                                    </draggable>
                                </ul>
                                <div class="addImg" @click="selectSecondGoods">
                                    <i class="fa fa-plus"></i>
                                    <span>选择商品</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- 优惠券 -->
                    <template v-if="editData.type=='bonus'">
                        <el-form-item label="显示数量">
                            <el-input type="text" v-model="editData.value.limit" :min="1"></el-input>
                        </el-form-item>
                    </template>

                    <!-- 头部 -->
                    <template v-if="editData.type=='header'">
                        <el-form-item label="主标题">
                            <el-input type="text" v-model="editData.value.title"></el-input>
                        </el-form-item>
                        <el-form-item label="主标题颜色">
                            <el-color-picker v-model="editData.value.titleColor"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="副标题">
                            <el-input type="text" v-model="editData.value.ctitle"></el-input>
                        </el-form-item>
                        <el-form-item label="副标题颜色">
                            <el-color-picker v-model="editData.value.ctitleColor"></el-color-picker>
                        </el-form-item>
                    </template>

                    <!-- 辅助空白 -->
                    <template v-if="editData.type=='blank'">
                        <el-form-item label="背景颜色">
                            <el-color-picker v-model="editData.value.backgroundColor"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="组件高度">
                            <el-slider v-model="editData.value.height" :min="1" :max="200"></el-slider>
                        </el-form-item>
                    </template>

                    <!-- 文本域 -->
                    <template v-if="editData.type=='textarea'">
                        <div>
                            <textarea id="container"></textarea>
                        </div>
                    </template>

                </el-form>
            </div>
        </div>

        <div v-if="settingEditor && Object.keys(settingEditor).length > 0">
            <div class="layout-editor">
                <div class="editor-title">
                    <span>{{getSettingWgName(settingEditor.type)}}</span>
                </div>
                <el-form ref="form" label-width="100px" label-position="left">

                    <!-- 设置背景 -->
                    <template v-if="settingEditor.type=='body'">
                        <div>
                            <el-form-item label="类型">
                                <el-radio v-model="settingEditor.value.type" label="1">颜色</el-radio>
                                <el-radio v-model="settingEditor.value.type" label="2">图片</el-radio>
                                <el-radio v-model="settingEditor.value.type" label="3">关闭</el-radio>
                            </el-form-item>
                            <el-form-item label="背景颜色" v-show="settingEditor.value.type == '1'">
                                <el-color-picker v-model="settingEditor.value.backgroundColor"></el-color-picker>
                            </el-form-item>
                            <el-form-item label="上传图片" v-show="settingEditor.value.type == '2'">
                                <uploadfiy @uploadfiy="upload($event,0,settingEditor.value)" :index="0" :item="settingEditor.value"></uploadfiy>
                            </el-form-item>
                        </div>
                    </template>

                    <!-- 加载更多 -->
                    <template v-if="settingEditor.type=='more'">
                        <div>
                            <el-form-item label="加载名称">
                                <el-input type="text" v-model="settingEditor.value.title"></el-input>
                            </el-form-item>
                            <el-form-item label="状态">
                                <el-radio-group v-model="settingEditor.value.status">
                                    <el-radio :label="0">开启</el-radio>
                                    <el-radio :label="1">关闭</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="分列数量">
                                <el-radio-group v-model="settingEditor.value.column">
<!--                                    <el-radio :label="1">单列</el-radio>-->
                                    <el-radio :label="2">两列</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <div>
                                <el-form-item label="商品分类">
                                    <select
                                            v-model="settingEditor.value.category_id"
                                            class="custom-select-box"
                                    >
                                        <option disabled value="">请选择</option>
                                        <template v-for="item in config.categoryList">
                                            <option :value="item.id" v-html="item.name">{{item.name}}</option>
                                        </template>
                                    </select>
                                </el-form-item>
                                <el-form-item label="品牌分类">
                                    <select
                                            v-model="settingEditor.value.brand_id"
                                            class="custom-select-box"
                                    >
                                        <option disabled value="">请选择</option>
                                        <template v-for="item in config.brandList">
                                            <option :value="item.id" v-html="item.name">{{item.name}}</option>
                                        </template>
                                    </select>
                                </el-form-item>
                                <el-form-item label="显示数量">
                                    <el-input type="number" v-model.number="settingEditor.value.limit" :min="1"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </template>

                </el-form>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    Vue.component('layout-editor',{
        template: '#layout-editor',
        name:'layoutEditor',
        data() {
            return {
                editor: null,
                currentItemIndex: 0,
                editData: {},
                settingEditor: {},
                maxSelectGoods: 10,
                loadGoodsList: [],
                imageGroupStyle:[
                    {
                        "title":'1行2个',
                        "value":2,
                        "image":"/static/system/images/image-one-column.png"
                    },
                    {
                        "title":'1行3个',
                        "value":3,
                        "image":"/static/system/images/image-three-column.png"
                    },
                    {
                        "title":'1行4个',
                        "value":4,
                        "image":"/static/system/images/image-four-column.png"
                    },
                    {
                        "title":'1左3右',
                        "value":0,
                        "image":"/static/system/images/image-one-left.png"
                    },
                ]
            }
        },
        methods: {
            updateGoodsLoadType: function(value){
                if (value == 'auto') {
                    this.loadGoodsList = this.editData.value.list;
                } else {
                    this.editData.value.lookMore = 0;
                    this.editData.value.list = this.loadGoodsList.length > 0 ? this.loadGoodsList : this.editData.value.list;
                    this.$forceUpdate();
                }
            },
            selectGoods: function (){
                var that = this;
                layui.use(['form', 'table'], function () {
                    $.ajax({
                        type: "get",
                        url: "<?php echo createUrl('common.index/get_goods_data',[],false,true); ?>",
                        success: function (e) {
                            layui.layer.open({
                                type: 1,
                                content: e,
                                area: ["800px", "600px"],
                                title: "选择商品",
                                btn: ["完成", "取消"],
                                yes: function (index, layero) {
                                    //判断个数是否满足
                                    if (Object.getOwnPropertyNames(ids).length > that.maxSelectGoods) {
                                        layer.msg("最多只能选择" + that.maxSelectGoods + "个");
                                        return false;
                                    }
                                    var arr = []
                                    for (let i in ids) {
                                        arr.push(ids[i]);
                                    }

                                    that.loadGoodsList = arr;
                                    that.$set(that.editData.value, 'list', arr)

                                    layer.close(index);
                                }
                            });
                        }
                    });
                });
            },
            selectGroupGoods: function (){
                var that = this;
                layui.use(['form', 'table'], function () {
                    $.ajax({
                        type: "get",
                        url: "<?php echo createUrl('common.index/get_group',[],false,true); ?>",
                        success: function (e) {
                            layui.layer.open({
                                type: 1,
                                content: e,
                                area: ["800px", "635px"],
                                title: "选择商品",
                                btn: ["完成", "取消"],
                                yes: function (index, layero) {
                                    if (Object.getOwnPropertyNames(ids).length > that.maxSelectGoods) {
                                        layer.msg("最多只能选择" + that.maxSelectGoods + "个");
                                        return false;
                                    }

                                    var arr = []
                                    for (let i in ids) {
                                        arr.push(ids[i]);
                                    }

                                    that.$set(that.editData.value, 'list', arr)
                                    layer.close(index);
                                }
                            });
                        }
                    });
                });
            },
            selectRegimentGoods: function (){
                var that = this;
                layui.use(['form', 'table'], function () {
                    $.ajax({
                        type: "get",
                        url: "<?php echo createUrl('common.index/get_regiment',[],false,true); ?>",
                        success: function (e) {
                            layui.layer.open({
                                type: 1,
                                content: e,
                                area: ["800px", "635px"],
                                title: "选择商品",
                                btn: ["完成", "取消"],
                                yes: function (index, layero) {
                                    if (Object.getOwnPropertyNames(ids).length > that.maxSelectGoods) {
                                        layer.msg("最多只能选择" + that.maxSelectGoods + "个");
                                        return false;
                                    }

                                    var arr = []
                                    for (let i in ids) {
                                        arr.push(ids[i]);
                                    }

                                    that.$set(that.editData.value, 'list', arr)
                                    layer.close(index);
                                }
                            });
                        }
                    });
                });
            },
            selectSecondGoods: function (){
                var that = this;
                layui.use(['form', 'table'], function () {
                    $.ajax({
                        type: "get",
                        url: "<?php echo createUrl('common.index/get_second',[],false,true); ?>",
                        success: function (e) {
                            layui.layer.open({
                                type: 1,
                                content: e,
                                area: ["800px", "635px"],
                                title: "选择商品",
                                btn: ["完成", "取消"],
                                yes: function (index, layero) {
                                    if (Object.getOwnPropertyNames(ids).length > that.maxSelectGoods) {
                                        layer.msg("最多只能选择" + that.maxSelectGoods + "个");
                                        return false;
                                    }

                                    var arr = []
                                    for (let i in ids) {
                                        arr.push(ids[i]);
                                    }

                                    that.$set(that.editData.value, 'list', arr)
                                    layer.close(index);
                                }
                            });
                        }
                    });
                });
            },
            deleteGoods: function (index){
                this.editData.value.list.splice(index, 1);
            },
            selectImageGroup:function(item){
                this.editData.value.style=item.value;
            },
            addSlider: function (){
                this.editData.value.list.push({
                    "thumb_image": '',
                    "type": '',
                    "url": ''
                })
            },
            sliderRemove: function (index){
                this.editData.value.list.splice(index, 1);
            },
            upload: function (event, index, item){
                var form = new FormData();
                if(event.target.value){
                    form.append("module","shop");
                    form.append("method","decorate");
                    form.append("isthumb","0");
                    form.append("file",event.target.files[0]);
                    var that = this;
                    this.uploadfiy(form,"<?php echo createUrl('common.uploadfiy/image',[],false,true); ?>",function (res){
                        if(res.code == 0){
                            that.$set(that.settingEditor.value, 'thumb_image',res.data.src);
                        }else{
                            layer.msg(res.msg);
                        }
                    });
                }
            },
            upImage: function (event, index, item) {
                var form = new FormData();
                if(event.target.value){
                    form.append("module","shop");
                    form.append("method","decorate");
                    form.append("isthumb","0");
                    form.append("file",event.target.files[0]);
                    var that = this;
                    this.uploadfiy(form,"<?php echo createUrl('common.uploadfiy/image',[],false,true); ?>",function (res){
                        if(res.code == 0){
                            that.$set(that.editData.value.list[index], 'thumb_image',res.data.src);
                        }else{
                            layer.msg(res.msg);
                        }
                    });
                }
            },
            upVideo: function(event, index, item){
                var form = new FormData();
                if(event.target.value){
                    form.append("module","shop");
                    form.append("method","decorate");
                    form.append("file",event.target.files[0]);
                    var that = this;
                    this.uploadfiy(form,"<?php echo createUrl('common.uploadfiy/video',[],false,true); ?>",function (res){
                        if(res.code == 0){
                            that.$set(that.editData.value.list[index], 'url',res.data.src);
                        }else{
                            layer.msg(res.msg);
                        }
                    });
                }
            },
            uploadfiy: function(form,url,fn){
                if(window.XMLHttpRequest){
                    var xhr = new XMLHttpRequest();
                }else{
                    var xhr = new ActiveXObject('Microsoft.XMLHTTP');
                }
                xhr.open('POST',url);
                xhr.send(form);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4){
                        var res = JSON.parse(xhr.response);
                        fn(res);
                    }
                };
            },
            chooseLink: function (index, type) {
                this.currentItemIndex = index;
                this.$set(this.editData.value.list[index], 'select', type);
                switch (+type) {
                    case 2:
                        this.goods_list();
                        break;
                    case 3:
                        this.article_list();
                        break;
                    default:
                        break;
                }
            },
            goods_list: function () {
                $.get("<?php echo createUrl('common.index/get_goods',[],false,true); ?>", function (e) {
                    window.box = layer.open({
                        type: 1,
                        content: e,
                        area: ['95%', '80%'],
                        title: '商品列表'
                    });
                });
            },
            article_list: function () {
                $.get("<?php echo createUrl('common.index/get_article',[],false,true); ?>", function (e) {
                    window.box = layer.open({
                        type: 1,
                        content: e,
                        area: ['85%', '80%'],
                        title: '文章列表'
                    });
                });
            }
        },
        mounted() {
            var that = this;
            this.bus.$on('changeSelectWidget', function (data) {
                that.settingEditor = {};
                that.editData = data;
            });

            this.bus.$on('changeSettingWidget', function (data) {
                that.editData = {};
                that.settingEditor = data;
            });

            layui.use(['table'], function () {
                var table = layui.table;
                // 文章列表页
                table.on('tool(article-list-box)', function (obj) {
                    var data = obj.data;
                    var layEvent = obj.event;
                    var tr = obj.tr;
                    if (layEvent === 'selectArticle') {
                        if (that.editData.type == 'article') {
                            that.$set(that.editData.value.list, 0, data);
                        } else if(that.editData.type == 'notice'){
                            that.$set(that.editData.value.list, 0, data);
                        } else {
                            that.$set(that.editData.value.list[that.currentItemIndex], 'url', data.id);
                        }
                        layer.close(window.box);
                    }
                });

                //商品列表页
                table.on('tool(goods-list-box)', function (obj) {
                    var data = obj.data;
                    var layEvent = obj.event;
                    var tr = obj.tr;
                    if (layEvent === 'selectGoods') {
                        that.$set(that.editData.value.list[that.currentItemIndex], 'url', data.id);
                        layer.close(window.box);
                    }
                });

            });
        },
        watch: {
            editData(newVal, oldVal) {
                if (newVal.type == 'textarea') {
                    var that = this;
                    this.$nextTick(function () {
                        if (!this.editor) {
                            this.editor = UE.getEditor('container');
                        }
                        this.editor.ready(function () {
                            if(that.editData.value.length > 0){
                                that.editor.setContent(that.editData.value);
                            }else{
                                that.editor.setContent("");
                            }
                            //that.editor.setContent(that.editData.value);
                            that.editor.addListener("contentChange", function () {
                                that.editData.value = that.editor.getContent();
                            }.bind(that));
                        }.bind(this));
                    });
                } else {
                    if (this.editor) {
                        this.editor.destroy();
                        this.editor = null;
                    }
                }
            }
        },
        computed: {
            getSelectWgName: function (type) {
                return function (type) {
                    switch (type) {
                        case 'slider':
                            return '图片轮播';
                        case 'images':
                            return '图片';
                        case 'image-group':
                            return '图片分组';
                        case 'video':
                            return '视频组';
                        case 'article':
                            return '文章内容';
                        case 'article-group':
                            return '文章分类';
                        case 'search':
                            return '搜索框';
                        case 'notice':
                            return '公告组';
                        case 'textbar':
                            return '导航组';
                        case 'tabbar':
                            return '文字导航组';
                        case 'goods':
                            return '商品';
                        case 'group':
                            return '拼团';
                        case 'regiment':
                            return '团购秒杀';
                        case 'second':
                            return '秒杀';
                        case 'bonus':
                            return '优惠券';
                        case 'header':
                            return '头部';
                        case 'blank':
                            return '辅助空白';
                        case 'textarea':
                            return '文本域';
                        default:
                            return '';
                    }
                }
            },
            getSettingWgName: function(type){
                return function (type) {
                    switch (type) {
                        case 'body':
                            return '设置背景';
                        default:
                            return '';
                    }
                }
            }
        }
    });
</script>
<script type="text/javascript">
    var app = new Vue({
        el: '#app',
        data: {},
        mounted() {
            var that = this;
            layui.use(['form','laytpl','layer'], function () {
                window.layer = layui.layer;
            });
        }
    })
</script>
    </div>

    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> <?php echo htmlentities(config('version.version')); ?>
        </div>
        <strong>Copyright &copy; 2019-<?php echo date("Y"); ?> <a href="http://www.a3-mall.com">数循通云计算科技有限公司 | A3Mall</a>.</strong> All rights
        reserved.
    </footer>

</div>
<script>
    layui.use(['element'], function(){});
    $(function (){
        $(".sidebar-pages-left-box").slimScroll({
            width: '100%',
            height: ($(".sidebar-pages").outerHeight(true) - 50) + 'px',
            alwaysVisible: true,
            wheelStep: 5,
        });
    })
</script>
</body>
</html>