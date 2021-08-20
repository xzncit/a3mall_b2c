<?php /*a:2:{s:82:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/order/index/index.php";i:1628768882;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
            <li><a href="javascript:;"><i></i>&nbsp;订单管理</a></li>
            <li><a href="javascript:;">订单列表</a></li>
        </ul>
    </div>
</div>

<div class="layui-fluid" id="search-box">
    <div class="layui-card">
        <div class="layui-card-body">
            <form class="layui-form layui-form-pane" action="">
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label seller-inline-2">支付状态：</label>
                        <div class="layui-input-inline seller-inline-4">
                        <select name="pay_type">
                            <option value="-1">全部</option>
                            <option value="0">未支付</option>
                            <option value="1">己支付</option>
                        </select>   
                        </div>
                    </div>
                    
                    <div class="layui-inline">
                        <label class="layui-form-label seller-inline-2">发货状态：</label>
                        <div class="layui-input-inline seller-inline-4">
                        <select name="distribution_status">
                            <option value="-1">全部</option>
                            <option value="0">未发货</option>
                            <option value="1">己发货</option>
                        </select>   
                        </div>
                    </div>
                </div>
                
                <div class="layui-form-item">
                    
                    <div class="layui-inline">
                        <label class="layui-form-label seller-inline-2">订单状态：</label>
                        <div class="layui-input-inline seller-inline-4">
                        <select name="status">
                            <option value="-1">全部</option>
                            <option value="1">新订单</option>
                            <option value="2">确认订单</option>
                            <option value="3">取消订单</option>
                            <option value="4">作废订单</option>
                            <option value="5">完成订单</option>
                            <option value="6">退款</option>
                            <option value="7">部分退款</option>
                        </select>   
                        </div>
                    </div>
                    
                    <div class="layui-inline">
                        <label class="layui-form-label seller-inline-2">订单名称：</label>
                        <div class="layui-input-inline seller-inline-4">
                            <input type="text" name="title" placeholder="请输入订单号" autocomplete="off" class="layui-input">
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
        <button lay-event="refresh" type="button" class="layui-btn layui-btn-sm layui-bg-red"><i class="layui-icon">&#xe9aa;</i> 刷新</button>
        <button lay-event="delete" type="button" class="layui-btn layui-btn-sm layui-bg-orange"><i class="layui-icon">&#xe640;</i> 删除</button>
    </div>
</script>

<script type="text/html" id="order-type">
    <p>订单类型：{{ d.order_type_name }}</p>
    <p>支付方式：{{ d.payment_name }}</p>
</script>

<script type="text/html" id="order-info">
    <p>订单号：{{ d.order_no }}</p>
    <p>会员名称：{{ d.username }}</p>
</script>

<script type="text/html" id="order-status">
    <p>支付状态：{{ d.pay_status_name }}</p>
    <p>发货状态：{{ d.distribution_status_name }}</p>
</script>

<script type="text/html" id="order-amount">
    <p>商品金额：￥{{ d.real_amount }}元</p>
    <p>订单金额：￥{{ d.order_amount }}元</p>
</script>

<style type="text/css">
    .layui-table-cell{ height:auto !important; }
    .fillet-btn { border-radius: 10px; }
</style>
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
                , {field: 'order_type_name', title: '订单类型',templet: "#order-type",width:210,align:'left'}
                , {field: 'order_no', title: '订单信息',templet: "#order-info",align:'left'}
                , {field: 'pay_status_name', title: '订单状态',templet: "#order-status", width:150,align:'center'}
                , {field: 'order_amount', title: '订单金额',templet: "#order-amount",width:210,align:'center'}
                , {field: 'create_time', title: '下单时间',width:180,align:'center'}
                , {fixed: 'right', align: 'center', title: '操作', width: 110,templet: function(res){

                    var str = '<p>';
                    if((res.distribution_status == 1 || res.distribution_status == 2) && res.shipping_type == 1){
                        str += '<a class="layui-btn layui-btn-xs layui-btn-warm" lay-event="logistics">物流</a>';
                    }else{
                        str += '<a class="layui-btn layui-btn-xs layui-bg-gray">物流</a>';
                    }

                    if(res.pay_status == 0){
                        str += '<a class="layui-btn layui-bg-blue layui-btn-xs" lay-event="update">修改</a>';
                    }else{
                        str += '<a class="layui-btn layui-bg-gray layui-btn-xs">修改</a>';
                    }

                    str += '</p>';

                    str += '<p><a class="layui-btn layui-btn-xs" lay-event="edit">详情</a>' +
                           '<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a></p>';

                    return str;
                }}
            ]]
        , page: true
        , id: 'list-table'
        , height: 'full-310'
        // ,limit:30
    });
    
    $("#search-btn").on("click",function (){
        table.reload('list-table', {
          page: {
            curr: 1
          }
          ,where: {
            key: {
              pay_type : $('[name="pay_type"]').val(),
              distribution_id : $('[name="distribution_id"]').val(),
              status : $('[name="status"]').val(),
              title : $('[name="title"]').val()
            }
          }
        }, 'data');
    });
    
    //头工具栏事件
    table.on('toolbar(list-box)', function (obj) {
        switch (obj.event) {
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

                layer.confirm('你确定要删除吗？', function (index) {
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
            window.location.href = '<?php echo createUrl("detail"); ?>?id='+data.id;
        }else if(obj.event == 'update'){
            layer.open({
                type: 2,
                title: '金额管理',
                shadeClose: true,
                shade: 0.3,
                area: ['60%', '58%'],
                content: '<?php echo createUrl("update_amount"); ?>?id='+data.id
            });
        }else if(obj.event == 'logistics'){
            layer.open({
                type: 2,
                title: '物流查询',
                shadeClose: true,
                shade: 0.3,
                area: ['60%', '58%'],
                content: '<?php echo createUrl("express"); ?>?id='+data.id
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