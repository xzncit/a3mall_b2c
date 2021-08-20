<?php /*a:2:{s:77:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/users/index/index.php";i:1625244979;s:71:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
        <link rel="stylesheet" href="/static/system/js/layui/css/dropdown.css">
<div class="row content-nav">
    <div class="col-xs-12">
        <ul>
            <li><a href="javascript:;"><i></i>&nbsp;会员管理</a></li>
            <li><a href="javascript:;">会员列表</a></li>
        </ul>
    </div>
</div>

<div class="layui-fluid" id="search-box">
    <div class="layui-card">
        <div class="layui-card-body">
            <form class="layui-form layui-form-pane" action="">
                
                <div class="layui-form-item">
                    
                    <div class="layui-inline">
                        <label class="layui-form-label seller-inline-2">选择分组：</label>
                        <div class="layui-input-inline seller-inline-4">
                        <select name="cat_id">
                            <option value="-1">全部</option>
                            <?php if(!empty($cat)): if(is_array($cat) || $cat instanceof \think\Collection || $cat instanceof \think\Paginator): $i = 0; $__LIST__ = $cat;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?>
                            <option value="<?php echo htmlentities($value['id']); ?>"><?php echo htmlentities($value['name']); ?></option>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            <?php endif; ?>
                        </select>   
                        </div>
                    </div>
                    
                    <div class="layui-inline">
                        <label class="layui-form-label seller-inline-2">用户名：</label>
                        <div class="layui-input-inline seller-inline-4">
                            <input type="text" name="title" placeholder="请输入用户名" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    
                    <div class="layui-inline">
                        <button type="button" id="search-btn" class="layui-btn layui-btn-sm layui-bg-light-blue"><i class="layui-icon layui-icon-search"></i> 搜索</button>
                    </div>
                </div>
                
            </form>
        </div>
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
        <button lay-event="delete" type="button" class="layui-btn layui-btn-sm layui-bg-orange"><i class="layui-icon">&#xe640;</i> 删除</button>
        <button lay-event="refresh" type="button" class="layui-btn layui-btn-sm layui-bg-red"><i class="layui-icon">&#xe9aa;</i> 刷新</button>
    </div>
</script>

<script type="text/html" id="list-bar">
    <button class="layui-btn layui-btn-xs layui-btn-danger lay-dropdown">
        <span>操作</span>
        <i class="layui-icon layui-icon-triangle-d"></i>
    </button>
</script>

<script>
layui.config({
    base: "/static/system/js/layui/extend/"
}).use(['table','form','dropdown'], function () {
    var table = layui.table;
    var form = layui.form;
    var dropdown = layui.dropdown;

    table.render({
        elem: '#list-box'
        , url: '<?php echo createUrl("index"); ?>'
        , toolbar: '#list-toolbar'
        , defaultToolbar: []
        , title: '数据表'
        , cols: [[
                  {type: 'checkbox'}
                , {field: 'group_name', title: '所属分组',width:120}
                , {field: 'username', title: '用户名'}
                , {field: 'tags', title: '标签',width:120}
                , {field: 'point', title: '积分',width:100,align:"center"}
                , {field: 'amount', title: '余额',width:120,align:"center"}
                , {field:'status', title:'状态', width:60,align:"center",templet: function(res){
                        switch(res.status){
                            case 0:
                                return "<span style='color:green;'>正常</span>";
                            case 1:
                                return "<span style='color:#FFB800;'>审核</span>";
                            case 2:
                                return "<span style='color:#01AAED;'>锁定</span>";
                            case 3:
                                return "<span style='color:#FF5722;'>删除</span>";
                        }
                  }}
                , {field: 'time', title: '注册时间', width: 180, align: "center"}
                , {fixed: 'right', align: 'center', title: '操作', toolbar: '#list-bar', width: 110}
            ]]
        , done: function (res) {
            dropdown.suite(".lay-dropdown",{
                align:'right',
                menus: [
                    {layIcon: 'layui-icon-rmb',txt: '财务', event:'finance'},
                    {layIcon: 'layui-icon-read',txt: '日志', event:'log'},
                    {layIcon: 'layui-icon-note',txt: '标签', event:'tags'},
                    {layIcon: 'layui-icon-log',txt: '地址', event:'address'},
                    {layIcon: 'layui-icon-rate-solid',txt: '收藏', event:'collect'},
                    {layIcon: 'layui-icon-edit',txt: '编辑', event:'edit'},
                    {layIcon: 'layui-icon-delete', txt: '删除', event:'del'}
                ]
            });
        }
        , page: true
        , id: 'list-table'
        , height: 'full-255'
        // ,limit:30
    });
    // address,collect
    $("#search-btn").on("click",function (){
        table.reload('list-table', {
          page: {
            curr: 1
          }
          ,where: {
            key: {
              cat_id : $('[name="cat_id"]').val(),
              title : $('[name="title"]').val()
            }
          }
        }, 'data');
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
            case 'delete':
                var checkStatus = table.checkStatus(obj.config.id);
                var data = checkStatus.data;

                var arr = [];
                for(var i in data){
                    arr.push(data[i].id);
                }

                if(arr.length <= 0){
                    layer.msg("请选需要删除的数据!",{ icon : 2 });
                    return ;
                }

                layer.confirm('你确定要删除吗？此操作会将会员所有关联的数据删除。', function (index) {
                    $.get('<?php echo createUrl("delete"); ?>',{
                        id : arr.join(",")
                    },function(result){
                        layer.close(index);
                        if(result.code){
                            window.location.reload();
                        }else{
                            layer.msg(result.msg,{ icon : 2 });
                        }
                    },"json");
                });
                break;
        }
    });

    //监听行工具事件
    table.on('tool(list-box)', function (obj) {
        var data = obj.data;
        if(obj.event === 'address'){
            window.location.href = '<?php echo createUrl("address"); ?>?id='+data.id;
        }else if(obj.event === 'collect'){
            window.location.href = '<?php echo createUrl("collect"); ?>?id='+data.id;
        }else if (obj.event === 'del') {
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
        }else if(obj.event == 'finance'){
            layer.open({
                type: 2,
                title: '金额管理',
                shadeClose: true,
                shade: 0.3,
                area: ['60%', '58%'],
                content: '<?php echo createUrl("finance"); ?>?id='+data.id
            });
        }else if(obj.event == 'log'){
            window.location.href = '<?php echo createUrl("log"); ?>?id='+data.id;
        }else if(obj.event == 'tags'){
            var string = '<form style="padding: 20px 20px 30px 20px;" class="layui-form" action="">';
            <?php if(is_array($tags) || $tags instanceof \think\Collection || $tags instanceof \think\Paginator): $i = 0; $__LIST__ = $tags;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
            string += '<input type="checkbox" name="id[]" value="<?php echo htmlentities($vo['id']); ?>" title="<?php echo htmlentities($vo['name']); ?>" lay-skin="primary">';
            <?php endforeach; endif; else: echo "" ;endif; ?>
            string += '<div style="padding-top: 20px;" class="layui-form-item">\n' +
                '    <div class="layui-input-block">\n' +
                '      <button class="layui-btn" lay-submit lay-filter="*">立即提交</button>\n' +
                '      <button type="reset" class="layui-btn layui-btn-primary">重置</button>\n' +
                '    </div>\n' +
                '  </div>';
            string += '</form>';
            layer.open({
                type: 1,
                skin: 'layui-layer-rim',
                area: ['420px', '240px'],
                content: string,
                success: function(layero, index){
                    form.render("checkbox");
                }
            });

            form.on('submit(*)', function(res){
                res.field.user_id = data.id;
                $.post('<?php echo createUrl("tags"); ?>',res.field,function (res) {

                });
                window.location.reload();
                return false;
            });
        }
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