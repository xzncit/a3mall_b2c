<?php /*a:2:{s:80:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/platform/index/index.php";i:1623379870;s:71:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
<!-- Main content -->
<section class="content clearfix">
    <div class="row">
        <div style="padding: 10px 15px 10px 15px">
            <div class="layui-row layui-col-space15">
                <div class="layui-col-xs6 layui-col-md3">
                    <div class="layui-card">
                        <div class="a3mall-card-body">
                            <div class="img-box">
                                <i class="fa fa-cart-plus"></i>
                            </div>
                            <div class="cart-r">
                                <div class="stat-text incomes-num"><?php echo htmlentities($order_total); ?></div>
                                <div class="stat-heading">订单总数</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="layui-col-xs6 layui-col-md3">
                    <div class="layui-card ">
                        <div class="a3mall-card-body">
                            <div class="img-box">
                                <i class="fa fa-area-chart" aria-hidden="true"></i>
                            </div>
                            <div class="cart-r">
                                <div class="stat-text goods-num"><?php echo htmlentities($goods_total); ?></div>
                                <div class="stat-heading">商品总数</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="layui-col-xs6 layui-col-md3">
                    <div class="layui-card">
                        <div class="a3mall-card-body">
                            <div class="img-box">
                                <i class="fa fa-user-o"></i>
                            </div>
                            <div class="cart-r">
                                <div class="stat-text blogs-num"><?php echo htmlentities($users_total); ?></div>
                                <div class="stat-heading">会员总数</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="layui-col-xs6 layui-col-md3">
                    <div class="layui-card">
                        <div class="a3mall-card-body">
                            <div class="img-box">
                                <i class="fa fa-commenting-o"></i>
                            </div>
                            <div class="cart-r">
                                <div class="stat-text fans-num"><?php echo htmlentities($users_comment_total); ?></div>
                                <div class="stat-heading">评价总数</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="clearfix" style="padding: 10px 0px 10px 0px">
            <div class="clearfix">

                <div class="col-md-8">
                    <div class="layui-card">
                        <div class="layui-card-header">
                            <div class="a3mall-card-title">订单统计</div>
                        </div>
                        <div class="a3mall-card-body map-body">
                            <div id="echarts" style="width: 100%;height:300px;"></div>
                        </div>
                    </div>
                    <script type="text/javascript">
                        var myChart = echarts.init(document.getElementById('echarts'),'walden');
                        myChart.setOption({
                            title: {
                                text: ''
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: ['金额', '数量']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: [<?php echo $days; ?>]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                    name: '金额',
                                    type: 'line',
                                    stack: '总量',
                                    data: [<?php echo $order_amount; ?>]
                                },
                                {
                                    name: '数量',
                                    type: 'line',
                                    stack: '总量',
                                    data: [<?php echo $order_count; ?>]
                                }
                            ]
                        });
                    </script>
                </div>

                <div class="col-md-4">
                    <div class="layui-card">
                        <div class="a3mall-card-body map-body">
                            <div id="echarts-2" style="width: 100%;height:343px;"></div>
                        </div>
                    </div>
                    <script type="text/javascript">
                        var chart = echarts.init(document.getElementById('echarts-2'),'walden');
                        chart.setOption({
                            title: {
                                text: '订单金额分布',
                                subtext: '订单统计',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b} : {c} ({d}%)'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['购物订单总额', '平均购物总额']
                            },
                            series: [
                                {
                                    name: '统计',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '60%'],
                                    data: [
                                        {value: <?php echo htmlentities($e); ?>, name: '购物订单总额'},
                                        {value: <?php echo htmlentities($f); ?>, name: '平均购物总额'}
                                    ],
                                    emphasis: {
                                        itemStyle: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        });
                    </script>
                </div>

            </div>
        </div>

        <div class="clearfix" style="padding: 10px 15px 10px 15px;">
            <div class="layui-row" style="background: #fff;padding: 0 20px;">
                <div class="layui-col-md12">
                    <div style="text-align: center; font-size: 18px;padding: 15px;">
                        会员购买排行
                    </div>
                </div>

                <div class="layui-col-md12">
                    <table class="layui-table">
                        <colgroup>
                            <col width="150">
                            <col width="200">
                            <col width="200">
                            <col>
                        </colgroup>
                        <thead>
                        <tr>
                            <th>排行位置</th>
                            <th>会员名称</th>
                            <th>订单总数</th>
                            <th>订单总额</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php if(is_array($g) || $g instanceof \think\Collection || $g instanceof \think\Paginator): $i = 0; $__LIST__ = $g;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <tr>
                            <td><?php echo htmlentities($vo['p']); ?></td>
                            <td><?php echo htmlentities($vo['username']); ?></td>
                            <td><?php echo htmlentities($vo['count']); ?> 个订单</td>
                            <td><?php echo htmlentities($vo['total']); ?></td>
                        </tr>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

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