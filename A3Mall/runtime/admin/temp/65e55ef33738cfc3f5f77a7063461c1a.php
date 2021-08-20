<?php /*a:2:{s:88:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/statistics/search/index.php";i:1623379871;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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

    <div class="echarts-box">
        <div class="layui-container">
            <div class="layui-row">
                <div class="layui-col-md4">
                    <div id="echarts-1" style="width: 100%;height:500px; padding: 25px; padding-top: 50px;"></div>
                </div>
                <script type="text/javascript">
                    var myChart = echarts.init(document.getElementById('echarts-1'),'walden');
                    var option = {
                        title: {
                            text: 'APP',
                            subtext: '搜索时使用的设备',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['Android', 'IOS']
                        },
                        series: [
                            {
                                name: '搜索统计',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    {value: <?php echo htmlentities($app['android']); ?>, name: 'Android'},
                                    {value: <?php echo htmlentities($app['ios']); ?>, name: 'IOS'}
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
                    };
                    myChart.setOption(option);
                </script>

                <div class="layui-col-md4">
                    <div id="echarts-2" style="width: 100%;height:500px; padding: 25px; padding-top: 50px;"></div>
                </div>
                <script type="text/javascript">
                    var myChart = echarts.init(document.getElementById('echarts-2'),'walden');
                    var option = {
                        title: {
                            text: '网页搜索',
                            subtext: '搜索时使用的设备',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['PC', 'WAP','公众号']
                        },
                        series: [
                            {
                                name: '统计',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    {value: <?php echo htmlentities($web['pc']); ?>, name: 'PC'},
                                    {value: <?php echo htmlentities($web['wap']); ?>, name: 'WAP'},
                                    {value: <?php echo htmlentities($web['wechat']); ?>, name: '公众号'}
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
                    };
                    myChart.setOption(option);
                </script>

                <div class="layui-col-md4">
                    <div id="echarts-3" style="width: 100%;height:500px; padding: 25px; padding-top: 50px;"></div>
                </div>
                <script type="text/javascript">
                    var myChart = echarts.init(document.getElementById('echarts-3'),'walden');
                    var option = {
                        title: {
                            text: '小程序',
                            subtext: '搜索时使用的设备',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['微信', '支付宝','百度','今日头条',"QQ"]
                        },
                        series: [
                            {
                                name: '统计',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    {value: <?php echo htmlentities($mp['wechat']); ?>, name: '微信'},
                                    {value: <?php echo htmlentities($mp['alipay']); ?>, name: '支付宝'},
                                    {value: <?php echo htmlentities($mp['baidu']); ?>, name: '百度'},
                                    {value: <?php echo htmlentities($mp['zjtd']); ?>, name: '今日头条'},
                                    {value: <?php echo htmlentities($mp['qq']); ?>, name: 'QQ'}
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
                    };
                    myChart.setOption(option);
                </script>

            </div>

            <div class="layui-row">
                <div class="layui-col-md12">
                    <div id="echarts-4" style="width: 100%;height:500px; padding: 25px; padding-top: 50px;"></div>
                </div>
                <script type="text/javascript">
                    var myChart = echarts.init(document.getElementById('echarts-4'),'walden');
                    var option = {
                        title: {
                            text: '搜索访问统计',
                            subtext: '过去六个月搜索数据'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['PC', '手机网页', 'APP', '公众号', '小程序']
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                data: [<?php echo("'".implode("月','",$data['cat'])."月'") ?>]
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: 'PC',
                                type: 'bar',
                                data: [<?php echo $data['list']['pc']; ?>],

                            },
                            {
                                name: '手机网页',
                                type: 'bar',
                                data: [<?php echo $data['list']['wap']; ?>],

                            },
                            {
                                name: 'APP',
                                type: 'bar',
                                data: [<?php echo $data['list']['app']; ?>],

                            },
                            {
                                name: '公众号',
                                type: 'bar',
                                data: [<?php echo $data['list']['wechat']; ?>],

                            },
                            {
                                name: '小程序',
                                type: 'bar',
                                data: [<?php echo $data['list']['mp']; ?>],

                            }
                        ]
                    };
                    myChart.setOption(option);
                </script>
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