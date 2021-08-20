<?php /*a:2:{s:84:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/platform/archives/editor.php";i:1623379870;s:71:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/main/layout.php";i:1623379870;}*/ ?>
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
            <li><a href="javascript:;"><i></i>&nbsp;文章管理</a></li>
            <li><a href="javascript:;">编辑文章</a></li>
        </ul>
    </div>
</div>

<section class="content clearfix">
    <div class="layui-editor-box">
        <form action="" class="layui-form layui-form-pane">
            <div class="layui-tab layui-tab-brief layui-tab-bg layui-tab-content-box">
                <ul class="layui-tab-title">
                    <li class="layui-this">基本信息</li>
                </ul>

                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">


                        <div class="layui-form-item">
                            <label class="layui-form-label">选择分类</label>
                            <div class="layui-input-block">
                                <select name="pid" lay-verify="required">
                                    <option value="">请选择分类</option>
                                    <?php if(!empty($cat)): if(is_array($cat) || $cat instanceof \think\Collection || $cat instanceof \think\Paginator): $i = 0; $__LIST__ = $cat;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?>
                                    <option value="<?php echo htmlentities($value['id']); ?>"<?php if(isset($data['pid']) && $value['id']==$data['pid']): ?> selected<?php endif; ?>><?php echo $value['level']; ?><?php echo htmlentities($value['title']); ?></option>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                    <?php endif; ?>
                                </select>
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">名称</label>
                            <div class="layui-input-block">
                                <input type="text" name="title" value="<?php echo htmlentities((isset($data['title']) && ($data['title'] !== '')?$data['title']:'')); ?>" lay-reqtext="请填写名称" lay-verify="required" placeholder="请输入名称" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-form-item clearfix">
                            <div class="layui-upload clearfix">
                                <button type="button" class="layui-btn layui-bg-light-blue" id="uploadfiy-btn"><i class="layui-icon"></i>上传图片</button>
                                <blockquote class="layui-elem-quote layui-quote-nm clearfix" style="margin-top: 10px;">
                                    预览图：
                                    <div class="layui-upload-list" id="uploadfiy-list-box">
                                        <?php if(!empty($images)): if(is_array($images) || $images instanceof \think\Collection || $images instanceof \think\Paginator): $i = 0; $__LIST__ = $images;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                                        <div class="uploadfiy-box">
                                            <input type="hidden" name="attachment_id[]" value="<?php echo htmlentities($item['id']); ?>">
                                            <a class="upload-image"><img src="<?php echo htmlentities($item['path']); ?>"></a>
                                            <div class="uploadfiy-button">
                                                <a href="javascript:;" class="n6-insert">插入</a>
                                                <a href="javascript:;" class="n6-thumb<?php if(!empty($data['photo']) && $data['photo'] == $item['path']): ?> active<?php endif; ?>">封面</a>
                                                <a href="javascript:;" class="n6-delete">删除</a>
                                            </div>
                                        </div>
                                        <?php endforeach; endif; else: echo "" ;endif; ?>
                                        <?php endif; ?>
                                    </div>

                                </blockquote>
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <script id="container" style="width:100%;height: 500px;" name="content" type="text/plain"><?php echo (isset($data['content']) && ($data['content'] !== '')?$data['content']:""); ?></script>
                        </div>

                        <div class="layui-form-item layui-form-text">
                            <label class="layui-form-label">简要</label>
                            <div class="layui-input-block">
                                <textarea placeholder="请输入简要" name="intro" class="layui-textarea"><?php echo htmlentities((isset($data['intro']) && ($data['intro'] !== '')?$data['intro']:"")); ?></textarea>
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">排序</label>
                            <div class="layui-input-block">
                                <input type="text" name="sort" value="<?php echo htmlentities((isset($data['sort']) && ($data['sort'] !== '')?$data['sort']:'0')); ?>" placeholder="请输入排序" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">状态</label>
                            <div class="layui-input-block">
                                <input type="radio" name="status" title="开启" value="0" <?php if(empty($data['status']) || $data['status']==0): ?>checked="checked"<?php endif; ?>>
                                <input type="radio" name="status" title="关闭" value="1" <?php if(isset($data['status']) && $data['status']==1): ?>checked="checked"<?php endif; ?>>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <input type="hidden" name="photo" value="<?php echo htmlentities((isset($data['photo']) && ($data['photo'] !== '')?$data['photo']:'')); ?>">
                        <input name="id" type="hidden" value="<?php echo htmlentities((isset($data['id']) && ($data['id'] !== '')?$data['id']:'0')); ?>">
                        <button class="layui-btn layui-bg-light-blue" lay-filter="layui-submit-filter" lay-submit="">立即提交</button>
                        <button class="layui-btn layui-btn-primary" type="reset">重置</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
</section>

<script type="text/javascript" src="/static/system/js/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="/static/system/js/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript">
    $(function () {
        var ue = UE.getEditor('container');
        layui.use(["form", "element",'layer','upload'], function () {
            var form = layui.form;
            var layer = layui.layer;
            var upload = layui.upload;

            //多图片上传
            upload.render({
                elem: '#uploadfiy-btn'
                ,url: '<?php echo createUrl("common.uploadfiy/image"); ?>'
                ,multiple: true
                ,exts: 'jpg|png|gif|bmp|jpeg'
                ,data: {
                    module: function (){
                        return "archives";
                    },
                    method: function (){
                        return "article";
                    }
                }
                ,done: function(res){
                    if(!res.code){
                        var string = '<div class="uploadfiy-box">';
                        string += '<input type="hidden" name="attachment_id[]" value="'+res.data.id+'">';
                        string += '<a class="upload-image"><img src="'+res.data.src+'"></a>';
                        string += '<div class="uploadfiy-button">';
                        string += '<a href="javascript:;" class="n6-insert">插入</a>';
                        string += '<a href="javascript:;" class="n6-thumb">封面</a>';
                        string += '<a href="javascript:;" class="n6-delete">删除</a>';
                        string += '</div>';
                        string += '</div>';
                        $("#uploadfiy-list-box").append(string);
                    }else{
                        layer.msg(res.msg,{ icon : 2 });
                    }
                }
            });

            $(document).on("click",".n6-insert",function (){
                var pt = $(this).parent().parent();
                UE.getEditor('container').setContent('<p><img src="'+pt.find("img").attr("src")+'"></p>', true);
                return false;
            });

            $(document).on("click",".n6-thumb",function (){
                if($(this).is(".active")){
                    $(this).removeClass("active");
                    $('[name="photo"]').val("");
                    return false;
                }

                $(".n6-thumb").removeClass("active");
                $(this).addClass("active");
                var pt = $(this).parent().parent();
                $('[name="photo"]').val(pt.find("img").attr("src"));

                return false;
            });

            $(document).on("click",".n6-delete",function (){
                var pt = $(this).parent().parent();
                $.post('<?php echo createUrl("common.uploadfiy/delete"); ?>',{
                    path : pt.find("img").attr("src")
                },function (result){
                    if(result.code){
                        pt.remove();
                    }else{
                        layer.msg(result.msg,{ icon : 2 });
                    }
                },"json");
                return false;
            });

            form.on('submit(layui-submit-filter)', function (data) {
                var index = layer.load(1, { shade: [0.2,'#fff'] });
                $.post('<?php echo createUrl("editor"); ?>', data.field, function (result) {
                    layer.close(index);
                    if(result.code){
                        layer.msg(result.msg, {
                            time: 0
                            ,btn: ['继续发布', '返回列表']
                            ,yes: function(index){
                                window.location.href = '<?php echo createUrl("editor"); ?>';
                            }
                            ,btn2: function (index, layero){
                                window.location.href = '<?php echo createUrl("index"); ?>';
                            }
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