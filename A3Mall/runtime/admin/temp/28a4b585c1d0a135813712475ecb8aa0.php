<?php /*a:2:{s:92:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/products/distribution/index.php";i:1623379871;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
            <li><a href="javascript:;"><i></i>&nbsp;配送管理</a></li>
            <li><a href="javascript:;">配送列表</a></li>
        </ul>
    </div>
</div>

<section class="content clearfix">
    <div class="layui-list-box">
        <table class="layui-hide" id="list-box" lay-filter="list-box"></table>
    </div>
</section>

<script type="text/html" id="list-toolbar">
    <div class="layui-btn-container">
        <button lay-event="url" type="button" class="layui-btn layui-btn-sm layui-bg-light-blue"><i class="layui-icon">&#xe61f;</i> 添加</button>
        <button lay-event="refresh" type="button" class="layui-btn layui-btn-sm layui-bg-red"><i class="layui-icon">&#xe9aa;</i> 刷新</button>
    </div>
</script>

<script type="text/html" id="list-bar">
    <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
</script>

<script type="text/html" id="checkboxTpl">
  <input type="checkbox" name="status" value="{{d.id}}" title="开启" lay-filter="status-filter" {{ d.status == 0 ? 'checked' : '' }}>
</script>

<script>
layui.use(['table','form'], function () {
    var table = layui.table;
    var form = layui.form;

    table.render({
        elem: '#list-box'
        , url: '<?php echo createUrl("index"); ?>'
        , toolbar: '#list-toolbar'
        , defaultToolbar: []
        , title: '数据表'
        , cols: [[
                  {type: 'checkbox'}
                , {field: 'id', title: 'ID', width: 80, unresize: true, sort: true,align:"center"}
                , {field: 'title', title: '物流名称'}
                , {field: 'sort', title: '排序',width:150,edit:true,align:'center'}
                , {field: 'status', title: '状态', width: 110,templet: '#checkboxTpl'}
                , {fixed: 'right', align: 'center', title: '操作', toolbar: '#list-bar', width: 130}
            ]]
        , page: true
        , height: 'full-200'
        // ,limit:30
    });

    //头工具栏事件
    table.on('toolbar(list-box)', function (obj) {
        switch (obj.event) {
            case 'url':
                window.location.href = "<?php echo createUrl('editor'); ?>";
                break;
            case 'refresh':
                window.location.reload();
                break;
        }
    });

    // 监听行工具事件
    table.on('tool(list-box)', function (obj) {
        var data = obj.data;
        if (obj.event === 'del') {
            layer.confirm('你确定要删除吗？', function (index) {
                $.get('<?php echo createUrl("delete"); ?>',{
                    id : data.id
                },function(result){
                    layer.close(index);
                    if(result.code){
                        obj.del();
                    }else{
                        layer.msg(result.msg,{ icon : 2 });
                    }
                },"json");
            });
        } else if (obj.event === 'edit') {
            window.location.href = '<?php echo createUrl("editor"); ?>?id='+data.id;
        }
    });
    
    //监听锁定操作
    form.on('checkbox(status-filter)', function(obj){
        var that = this;
        $.get('<?php echo createUrl("field"); ?>',{
            name : that.name,
            value : (obj.elem.checked ? 0 : 1),
            id : that.value
        },function (result){
            if(!result.code){
                layer.msg(result.msg,{ icon : 2 });
            }
        },"json");
    });
    
    //监听单元格编辑
    table.on('edit(list-box)', function(obj){
        $.get('<?php echo createUrl("field"); ?>',{
            name : obj.field,
            value : obj.value,
            id : obj.data.id
        },function (result){
            if(!result.code){
                layer.msg(result.msg,{ icon : 2 });
            }
        },"json");
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