<?php /*a:3:{s:80:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/wechat/mini/pay.php";i:1623379871;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;s:88:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/wechat/common/mini_menu.php";i:1623379871;}*/ ?>
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
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>
                <ul class="nav navbar-nav">
                    <?php if(isset($sidebar['top'])): if(is_array($sidebar['top']) || $sidebar['top'] instanceof \think\Collection || $sidebar['top'] instanceof \think\Paginator): $i = 0; $__LIST__ = $sidebar['top'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?>
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
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="/static/system/images/avatar.jpeg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p><?php echo session("users.username"); ?></p>
                    <p style="font-size: 12px;"><?php echo session("users.title"); ?></p>
                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">系统菜单</li>
                <?php if(!empty($sidebar['menu'])): if(is_array($sidebar['menu']) || $sidebar['menu'] instanceof \think\Collection || $sidebar['menu'] instanceof \think\Paginator): $i = 0; $__LIST__ = $sidebar['menu'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$side): $mod = ($i % 2 );++$i;?>
                <li class="treeview<?php if($side['active']): ?> active menu-open<?php endif; ?>">
                    <a href="javascript:;">
                        <i class="<?php echo htmlentities($side['icon']); ?>"></i> <span><?php echo htmlentities($side['name']); ?></span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <?php if(is_array($side['children']) || $side['children'] instanceof \think\Collection || $side['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $side['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$children): $mod = ($i % 2 );++$i;?>
                        <li <?php if($children['active']): ?>class="active"<?php endif; ?>>
                        <a href="<?php echo htmlentities($children['url']); ?>"><i class="fa fa-circle-o"></i><?php echo htmlentities($children['name']); ?></a>
                        </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
                <?php endif; ?>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>

    <div class="content-wrapper clearfix">
        <div class="row content-nav inline-page-box">
    <div class="col-xs-12">
        <ul>
            <li><a href="javascript:;"><i></i>&nbsp;微信管理</a></li>
            <li><a href="javascript:;">公众号</a></li>
        </ul>
    </div>
</div>

<section class="content">
    <div class="row">
        <div class="col-md-3 l-col-md-3">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">菜单</h3>

                    <div class="box-tools">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="box-body no-padding">
                    <ul class="nav nav-pills nav-stacked">
                        <ul class="nav nav-pills nav-stacked">
    <?php if(is_array($sidebar['menu']) || $sidebar['menu'] instanceof \think\Collection || $sidebar['menu'] instanceof \think\Paginator): $i = 0; $__LIST__ = $sidebar['menu'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sidebar): $mod = ($i % 2 );++$i;if(is_array($sidebar['children']) || $sidebar['children'] instanceof \think\Collection || $sidebar['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $sidebar['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$children): $mod = ($i % 2 );++$i;if($children['active']): if(is_array($children['children']) || $children['children'] instanceof \think\Collection || $children['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $children['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?>
                <li<?php if($value['active']): ?> class="active"<?php endif; ?>><a href="<?php echo htmlentities($value['url']); ?>"><?php echo htmlentities($value['name']); ?></a></li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            <?php endif; ?>
        <?php endforeach; endif; else: echo "" ;endif; ?>
    <?php endforeach; endif; else: echo "" ;endif; ?>
</ul>
                    </ul>
                </div>

            </div>

        </div>

        <div class="col-md-9 r-col-md-9">
            <section class="content clearfix" style="padding-top: 0;">
                <div class="layui-editor-box">
                    <div style="margin-top: 0;" class="layui-tab layui-tab-brief layui-tab-bg layui-tab-content-box">
                        <ul class="layui-tab-title">
                            <li class="layui-this">基本信息</li>
                        </ul>
                        <form action="" class="layui-form layui-form-pane">
                            <div class="layui-tab-content">
                                <div class="layui-tab-item layui-show">

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">Appid</label>
                                        <div class="layui-input-block">
                                            <input type="text" name="appid" value="<?php echo htmlentities((isset($data['appid']) && ($data['appid'] !== '')?$data['appid']:'')); ?>" lay-reqtext="请填写小程序Appid" lay-verify="required" placeholder="请输入小程序Appid" autocomplete="off" class="layui-input">
                                        </div>
                                    </div>

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">Appsecret</label>
                                        <div class="layui-input-block">
                                            <input type="text" name="appsecret" value="<?php echo htmlentities((isset($data['appsecret']) && ($data['appsecret'] !== '')?$data['appsecret']:'')); ?>" lay-reqtext="请填写小程序Appsecret" lay-verify="required" placeholder="请输入小程序Appsecret" autocomplete="off" class="layui-input">
                                        </div>
                                    </div>

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">MCH_ID</label>
                                        <div class="layui-input-block">
                                            <input type="text" name="mch_id" value="<?php echo htmlentities((isset($data['mch_id']) && ($data['mch_id'] !== '')?$data['mch_id']:'')); ?>" placeholder="请输入商户号" autocomplete="off" class="layui-input">
                                        </div>
                                    </div>

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">MCH_KEY</label>
                                        <div class="layui-input-block">
                                            <input type="text" name="mch_key" value="<?php echo htmlentities((isset($data['mch_key']) && ($data['mch_key'] !== '')?$data['mch_key']:'')); ?>" placeholder="请输入商户密钥" autocomplete="off" class="layui-input">
                                        </div>
                                    </div>

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">证书密钥</label>
                                        <div class="layui-input-block">
                                            <input type="text" id="key-input-text" name="key_url" value="<?php echo htmlentities((isset($data['key_url']) && ($data['key_url'] !== '')?$data['key_url']:'')); ?>" placeholder="请上传证书" readonly="readonly" autocomplete="off" class="layui-input">
                                        </div>
                                    </div>

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">支付证书</label>
                                        <div class="layui-input-block">
                                            <input type="text" id="cert-input-text" name="cert_url" value="<?php echo htmlentities((isset($data['cert_url']) && ($data['cert_url'] !== '')?$data['cert_url']:'')); ?>" placeholder="请上传证书" readonly="readonly" autocomplete="off" class="layui-input">
                                        </div>
                                    </div>

                                    <div class="layui-form-item">
                                        <label class="layui-form-label">上传证书</label>
                                        <div class="layui-input-block">
                                            <button type="button" class="layui-btn layui-bg-primary" id="key-upload-btn"><i class="layui-icon"></i>上传证书密钥</button>
                                            <button type="button" class="layui-btn layui-bg-primary" id="cert-upload-btn"><i class="layui-icon"></i>上传支付证书</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="layui-form-item">
                                <div class="layui-input-block">
                                    <button class="layui-btn layui-bg-light-blue" lay-filter="layui-submit-filter" lay-submit="">立即提交</button>
                                    <button class="layui-btn layui-btn-primary" type="reset">重置</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </div>

    </div>

</section>

<script type="text/javascript">
    $(function () {
        layui.use(["form", "element",'layer','upload'], function () {
            var form = layui.form;
            var layer = layui.layer;
            var upload = layui.upload;

            upload.render({
                elem: '#key-upload-btn'
                ,url: '<?php echo url("common.uploadfiy/file"); ?>'
                ,multiple: false
                ,exts: 'pem'
                ,data: {
                    module: function (){
                        return "mini";
                    },
                    method: function (){
                        return "";
                    }
                }
                ,done: function(res){
                    if(!res.code){
                        $("#key-input-text").val(res.data.src);
                    }else{
                        layer.msg(res.msg,{ icon : 2 });
                    }
                }
            });

            upload.render({
                elem: '#cert-upload-btn'
                ,url: '<?php echo url("common.uploadfiy/file"); ?>'
                ,multiple: false
                ,exts: 'pem'
                ,data: {
                    module: function (){
                        return "mini";
                    },
                    method: function (){
                        return "";
                    }
                }
                ,done: function(res){
                    if(!res.code){
                        $("#cert-input-text").val(res.data.src);
                    }else{
                        layer.msg(res.msg,{ icon : 2 });
                    }
                }
            });

            form.on('submit(layui-submit-filter)', function (data) {
                var index = layer.load(1, { shade: [0.2,'#fff'] });
                $.post('<?php echo createUrl("pay"); ?>', data.field, function (result) {
                    layer.close(index);
                    if(result.code){
                        layer.msg(result.msg, {
                            time: 3000
                        },function (){
                            window.location.reload();
                        });
                    }else{
                        layer.msg(result.msg,{ icon :2 });
                    }
                }, "json");
                return false;
            });
        });
    });
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

</body>
</html>