<?php /*a:2:{s:85:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/platform/data/editor.php";i:1623379870;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
            <li><a href="javascript:;"><i></i>&nbsp;数据管理</a></li>
            <li><a href="javascript:;">编辑数据</a></li>
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
                                <label class="layui-form-label">名称</label>
                                <div class="layui-input-block">
                                    <input type="text" name="name" value="<?php echo htmlentities((isset($data['name']) && ($data['name'] !== '')?$data['name']:'')); ?>" lay-reqtext="请填写名称" lay-verify="required" placeholder="请输入名称" autocomplete="off" class="layui-input">
                                </div>
                            </div>

                            <div class="layui-form-item">
                                <label class="layui-form-label">标识</label>
                                <div class="layui-input-block">
                                    <input type="text" name="sign" value="<?php echo htmlentities((isset($data['sign']) && ($data['sign'] !== '')?$data['sign']:'')); ?>" lay-reqtext="请填写标识" lay-verify="required" placeholder="请输入标识" autocomplete="off" class="layui-input">
                                </div>
                            </div>

                            <div class="layui-form-item">
                                <button id="add-table-btn" type="button" class="layui-btn layui-bg-light-blue">添加</button>
                            </div>

                            <div>
                                <table class="layui-table">
                                    <colgroup>
                                        <col width="150">
                                        <col>
                                        <col>
                                        <col width="150">
                                        <col width="160">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th style="text-align:center">图片</th>
                                            <th style="text-align:center">名称</th>
                                            <th style="text-align:center">地址</th>
                                            <th style="text-align:center">类型</th>
                                            <th style="text-align:center">操作</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <?php if(!empty($marketing)): if(is_array($marketing) || $marketing instanceof \think\Collection || $marketing instanceof \think\Paginator): $i = 0; $__LIST__ = $marketing;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                                        <tr>
                                            <td>
                                                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm link-upload-btn">
                                                    <i class="layui-icon layui-icon-upload"></i>
                                                </button>
                                                <div class="link-upload-image-box">
                                                    <input type="hidden" name="marketing[id][]" value="<?php echo htmlentities($item['id']); ?>">
                                                    <input type="hidden" name="marketing[attachment_id][]" value="<?php echo htmlentities($item['attachment_id']); ?>">
                                                    <input type="hidden" name="marketing[photo][]" value="<?php echo htmlentities($item['photo']); ?>">
                                                    <img class="layui-upload-img" src="<?php echo htmlentities((isset($item['photo']) && ($item['photo'] !== '')?$item['photo']:'/static/images/default.jpg')); ?>" style="max-width: 60px; max-height: 60px;" alt="">
                                                </div>
                                            </td>
                                            <td>
                                                <input type="text" name="marketing[name][]" value="<?php echo htmlentities($item['name']); ?>" placeholder="请输入名称" autocomplete="off" class="layui-input">
                                            </td>
                                            <td>
                                                <input type="text" name="marketing[url][]" value="<?php echo htmlentities($item['url']); ?>" placeholder="请输入地址" autocomplete="off" class="layui-input">
                                            </td>
                                            <td>
                                                <select name="marketing[target][]">
                                                    <option value="0" <?php if($item['target'] == 0): ?>selected<?php endif; ?>>新窗口</option>
                                                    <option value="1" <?php if($item['target'] == 1): ?>selected<?php endif; ?>>本窗口</option>
                                                </select>  
                                            </td>
                                            <td>
                                                <div class="layui-btn-group">
                                                    <button type="button" class="layui-btn layui-btn-primary layui-btn-sm layui-button-up"><i class="layui-icon layui-icon-up"></i></button>
                                                    <button type="button" class="layui-btn layui-btn-primary layui-btn-sm layui-button-down"><i class="layui-icon layui-icon-down"></i></button>
                                                    <button type="button" class="layui-btn layui-btn-primary layui-btn-sm layui-button-remove"><i class="layui-icon layui-icon-delete"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <?php endforeach; endif; else: echo "" ;endif; ?>
                                        <?php endif; ?>
                                    </tbody>
                                </table>
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
                        <input name="id" type="hidden" value="<?php echo htmlentities((isset($data['id']) && ($data['id'] !== '')?$data['id']:'0')); ?>">
                        <button class="layui-btn layui-bg-light-blue" lay-filter="layui-submit-filter" lay-submit="">立即提交</button>
                        <button class="layui-btn layui-btn-primary" type="reset">重置</button>
                    </div>
                </div>
                
            </div>
        </form>
    </div>
</section>

<div id="template-box" style="display: none;">
    <table>
        <tr>
            <td>
                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm link-upload-btn">
                    <i class="layui-icon layui-icon-upload"></i>
                </button>
                <div class="link-upload-image-box">
                    <input type="hidden" name="marketing[id][]">
                    <input type="hidden" name="marketing[attachment_id][]">
                    <input type="hidden" name="marketing[photo][]">
                    <img class="layui-upload-img" src="/static/images/default.jpg" style="max-width: 60px; max-height: 60px;" alt="">
                </div>
            </td>
            <td>
                <input type="text" name="marketing[name][]" placeholder="请输入名称" autocomplete="off" class="layui-input">
            </td>
            <td>
                <input type="text" name="marketing[url][]" placeholder="请输入地址" autocomplete="off" class="layui-input">
            </td>
            <td>
                <select name="marketing[target][]">
                    <option value="0">新窗口</option>
                    <option value="1">本窗口</option>
                </select>  
            </td>
            <td>
                <div class="layui-btn-group">
                    <button type="button" class="layui-btn layui-btn-primary layui-btn-sm layui-button-up"><i class="layui-icon layui-icon-up"></i></button>
                    <button type="button" class="layui-btn layui-btn-primary layui-btn-sm layui-button-down"><i class="layui-icon layui-icon-down"></i></button>
                    <button type="button" class="layui-btn layui-btn-primary layui-btn-sm layui-button-remove"><i class="layui-icon layui-icon-delete"></i></button>
                </div>
            </td>
        </tr>
    </table>
</div>

<script type="text/javascript">
        
        layui.use(["form", "element",'layer','upload'], function () {
            var form = layui.form;
            var layer = layui.layer;
            var upload = layui.upload;
            
            var uploadfiy = function (btn){
                upload.render({
                    elem: btn
                    ,url: '<?php echo createUrl("common.uploadfiy/image"); ?>'
                    ,exts: 'jpg|png|gif|bmp|jpeg'
                    ,data: {
                        module: function (){
                            return "marketing";
                        }
                    }
                    ,done: function(res, index, upload){
                        if(!res.code){
                            var item = this.item;
                            var pt = $(item).parent();
                            pt.find(".layui-upload-img").attr("src",res.data.src);
                            $('[name="marketing[attachment_id][]"]',pt).val(res.data.id);
                            $('[name="marketing[photo][]"]',pt).val(res.data.src);
                        }else{
                            layer.msg(res.msg,{ icon : 2 });
                        }
                    }
                });
            };

            $('.layui-table .link-upload-btn').each(function (){
                uploadfiy($(this));
            });

            $("#add-table-btn").on("click",function (){
                var tr = $("#template-box tr:first").clone();
                $(".layui-table tbody").append(tr);
                form.render('select');
                uploadfiy($('.layui-table .link-upload-btn:last'));
            });
            
            if($(".layui-table tbody tr").length == 0){
                $("#add-table-btn").trigger("click");
            }
            
            $(document).on("click",".layui-button-remove",function (){
                if($(".layui-table tbody tr").length > 1){
                    $(this).parent().parent().parent().remove();
                }
                return false;
            });

            $(document).on("click", ".layui-button-down", function() {
                var current_tr = $(this).parent().parent().parent();
                current_tr.insertAfter(current_tr.next());
            });

            $(document).on("click", ".layui-button-up", function() {
                var current_tr = $(this).parent().parent().parent();
                if (current_tr.prev().html() != null) {
                    current_tr.insertBefore(current_tr.prev());
                }
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