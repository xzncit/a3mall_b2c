<?php /*a:2:{s:81:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/system/setting/upload.php";i:1623379871;s:71:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/main/layout.php";i:1623379870;}*/ ?>
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
        <div class="row content-nav">
    <div class="col-xs-12">
        <ul>
            <li><a href="javascript:;"><i></i>&nbsp;站点管理</a></li>
            <li><a href="javascript:;">上传设置</a></li>
        </ul>
    </div>
</div>

<section class="content clearfix">
    <div class="layui-editor-box">
        <div class="layui-tab layui-tab-brief layui-tab-bg layui-tab-content-box">
            <ul class="layui-tab-title">
                <li class="layui-this">基本信息</li>
            </ul>
            <form action="" class="layui-form layui-form-pane">
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">

                        <div class="layui-form-item">
                            <label class="layui-form-label">存储类型</label>
                            <div class="layui-input-block">
                                <input type="radio" lay-filter="type" name="type" title="本地存储" value="0" <?php if(empty($data['type']) || $data['type']==0): ?>checked="checked"<?php endif; ?>>
                                <input type="radio" lay-filter="type" name="type" title="阿里云" value="1" <?php if(isset($data['type']) && $data['type']==1): ?>checked="checked"<?php endif; ?>>
                            </div>
                        </div>

                        <div class="layui-form-item layui-form-item-type-1">
                            <label class="layui-form-label">存储类型</label>
                            <div class="layui-input-block">
                                <input type="radio" name="protocol" title="http" value="http" <?php if(empty($data['protocol']) || $data['protocol']=="http"): ?>checked="checked"<?php endif; ?>>
                                <input type="radio" name="protocol" title="https" value="https" <?php if(isset($data['protocol']) && $data['protocol']=="https"): ?>checked="checked"<?php endif; ?>>
                                <input type="radio" name="protocol" title="auto" value="auto" <?php if(isset($data['protocol']) && $data['protocol']=="auto"): ?>checked="checked"<?php endif; ?>>
                            </div>
                        </div>

                        <div class="layui-form-item layui-form-item-type-1">
                            <label class="layui-form-label">存储区域</label>
                            <div class="layui-input-block">
                                <select name="endpoint" lay-verify="required">
                                    <?php if(is_array($city) || $city instanceof \think\Collection || $city instanceof \think\Paginator): $i = 0; $__LIST__ = $city;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                    <option value="<?php echo htmlentities($key); ?>" <?php if(isset($data['endpoint']) && $key == $data['endpoint']): ?>selected<?php endif; ?>><?php echo htmlentities($vo); ?></option>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                </select>
                            </div>
                        </div>

                        <div class="layui-form-item layui-form-item-type-1">
                            <label class="layui-form-label">访问密钥</label>
                            <div class="layui-input-block">
                                <input type="text" name="accessKeyId" value="<?php echo htmlentities((isset($data['accessKeyId']) && ($data['accessKeyId'] !== '')?$data['accessKeyId']:'')); ?>" placeholder="请输入accessKeyId" autocomplete="off" class="layui-input">
                            </div>
                            <div class="layui-form-mid layui-word-aux">accessKeyId</div>
                        </div>

                        <div class="layui-form-item layui-form-item-type-1">
                            <label class="layui-form-label">安全密钥</label>
                            <div class="layui-input-block">
                                <input type="text" name="accessKeySecret" value="<?php echo htmlentities((isset($data['accessKeySecret']) && ($data['accessKeySecret'] !== '')?$data['accessKeySecret']:'')); ?>" placeholder="请输入accessKeySecret" autocomplete="off" class="layui-input">
                            </div>
                            <div class="layui-form-mid layui-word-aux">accessKeySecret</div>
                        </div>

                        <div class="layui-form-item layui-form-item-type-1">
                            <label class="layui-form-label">存储空间</label>
                            <div class="layui-input-block">
                                <input type="text" name="bucket" value="<?php echo htmlentities((isset($data['bucket']) && ($data['bucket'] !== '')?$data['bucket']:'')); ?>" required  lay-verify="required" placeholder="请输入存储空间" autocomplete="off" class="layui-input">
                            </div>
                            <div class="layui-form-mid layui-word-aux">存储空间名称</div>
                        </div>

                        <div class="layui-form-item layui-form-item-type-1">
                            <label class="layui-form-label">访问域名</label>
                            <div class="layui-input-block">
                                <input type="text" name="domain" value="<?php echo htmlentities((isset($data['domain']) && ($data['domain'] !== '')?$data['domain']:'')); ?>" placeholder="请输入存储空间" autocomplete="off" class="layui-input">
                            </div>
                            <div class="layui-form-mid layui-word-aux">可以通过添加CNAME记录将自定义域名绑定到指定的存储空间上，从而使用自己的域名访问OSS资源。输入的域名需要带http|https（域名需要在阿里云并且备案）</div>
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
<style type="text/css">
    .layui-form-item-type-1 { display: none; }
</style>
<script type="text/javascript">
    $(function () {
        layui.use(["form", "element",'layer'], function () {
            var form = layui.form;
            var layer = layui.layer;

            <?php if($data['type'] == 1): ?>
            $(".layui-form-item-type-1").show();
            <?php else: ?>
            $(".layui-form-item-type-1").hide();
            <?php endif; ?>

            form.on('radio(type)', function(data){
                switch(data.value){
                    case "0":
                        $(".layui-form-item-type-1").hide();
                        break;
                    case "1":
                        $(".layui-form-item-type-1").show();
                        break;
                }
            });

            form.on('submit(layui-submit-filter)', function (data) {
                var index = layer.load(1, { shade: [0.2,'#fff'] });
                $.post('<?php echo createUrl("upload"); ?>', data.field, function (result) {
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
        <strong>Copyright &copy; 2019-<?php echo date("Y"); ?> <a href="http://www.a3-mall.com">A3Mall</a>.</strong> All rights
        reserved.
    </footer>

</div>

</body>
</html>