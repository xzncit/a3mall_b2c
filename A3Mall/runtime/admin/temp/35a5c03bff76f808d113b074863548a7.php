<?php /*a:2:{s:89:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/statistics/data/spanding.php";i:1623379871;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
        <script src="/static/system/js/echarts/echarts.min.js"></script>
<script src="/static/system/js/echarts/theme/walden.js"></script>
<style type="text/css">
    .echarts-box {
        width: 97.5%;
        height: 100%;
        background: #fff;
        margin: 0 auto;
    }
</style>
<section class="content clearfix">
    <div class="layui-fluid" id="search-box">
        <div class="layui-card">
            <div class="layui-card-body">
                <form method="post" class="layui-form layui-form-pane" action="<?php echo url('spanding'); ?>">

                    <div class="layui-form-item">

                        <div class="layui-inline">
                            <label class="layui-form-label seller-inline-2">开始时间：</label>
                            <div class="layui-input-inline seller-inline-4">
                                <input id="start-time-box" type="text" name="start_time" value="<?php echo htmlentities((isset($start_time) && ($start_time !== '')?$start_time:'')); ?>" placeholder="请输入开始时间" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-inline">
                            <label class="layui-form-label seller-inline-2">结束时间：</label>
                            <div class="layui-input-inline seller-inline-4">
                                <input id="end-time-box" type="text" name="end_time" value="<?php echo htmlentities((isset($end_time) && ($end_time !== '')?$end_time:'')); ?>" placeholder="请输入结束时间" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-inline">
                            <button lay-filter="layui-submit-filter" lay-submit="" type="button" id="search-btn" class="layui-btn layui-btn-sm layui-bg-light-blue"><i class="layui-icon layui-icon-search"></i> 搜索</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

    <div class="echarts-box">
        <div id="main" style="width: 100%;height:500px; padding: 25px; padding-top: 50px;"></div>
    </div>
</section>
<script>
    layui.use(['form','laydate'], function () {
        var form = layui.form;

        var laydate = layui.laydate;
        laydate.render({ elem: '#start-time-box',format: 'yyyy-MM-dd HH:mm:ss' });
        laydate.render({ elem: '#end-time-box',format: 'yyyy-MM-dd HH:mm:ss' });

        $("#search-btn").on("click",function (){
            $(".layui-form").submit();
        });

    });
</script>

<script type="text/javascript">
    var myChart = echarts.init(document.getElementById('main'),'walden');
    var option = option = {
        backgroundColor:"#fff",
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            show: false,
            data:['销售统计']
        },
        toolbox: {
            show : false,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : [<?php echo $keys; ?>],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            }
        ],
        series : [
            {
                name:'销售额',
                type:'bar',
                data:[<?php echo $values; ?>]
            }
        ]
    };
    myChart.setOption(option);
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