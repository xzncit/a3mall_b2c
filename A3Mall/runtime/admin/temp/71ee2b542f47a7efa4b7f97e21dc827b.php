<?php /*a:2:{s:87:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/products/index/editor_point.php";i:1623379871;s:71:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/admin/view/main/layout.php";i:1623379870;}*/ ?>
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
            <li><a href="javascript:;"><i></i>&nbsp;商品管理</a></li>
            <li><a href="javascript:;">积分商品</a></li>
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
                            <label class="layui-form-label">名称：</label>
                            <div class="layui-input-block">
                                <input type="text" name="title" value="<?php echo htmlentities((isset($data['title']) && ($data['title'] !== '')?$data['title']:$data['goods']['title'])); ?>" required  lay-verify="required" placeholder="请输入名称" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">开始时间：</label>
                            <div class="layui-input-block">
                                <input id="start-time-box" type="text" name="start_time" value="<?php echo htmlentities((isset($data['start_time']) && ($data['start_time'] !== '')?$data['start_time']:'')); ?>" placeholder="yyyy-MM-dd" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">结束时间：</label>
                            <div class="layui-input-block">
                                <input id="end-time-box" type="text" name="end_time" value="<?php echo htmlentities((isset($data['end_time']) && ($data['end_time'] !== '')?$data['end_time']:'')); ?>" placeholder="yyyy-MM-dd" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">商品：</label>
                            <div class="layui-input-block">
                                <table id="goods-table-box" style='width: 100%;' class="layui-table">
                                    <colgroup>
                                        <col>
                                        <col>
                                        <col>
                                        <col>
                                        <col>
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th style="text-align:center;">商品名称</th>
                                        <th style="text-align:center;">销售价格</th>
                                        <th style="text-align:center;">市场价格</th>
                                        <th style="text-align:center;">成本价格</th>
                                        <th style="text-align:center;">库存</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php if(!empty($data['goods'])): ?>
                                    <tr>
                                        <td><?php echo htmlentities((isset($data['goods']['title']) && ($data['goods']['title'] !== '')?$data['goods']['title']:'')); ?></td>
                                        <td><?php echo htmlentities((isset($data['goods']['sell_price']) && ($data['goods']['sell_price'] !== '')?$data['goods']['sell_price']:'')); ?></td>
                                        <td><?php echo htmlentities((isset($data['goods']['market_price']) && ($data['goods']['market_price'] !== '')?$data['goods']['market_price']:'')); ?></td>
                                        <td><?php echo htmlentities((isset($data['goods']['cost_price']) && ($data['goods']['cost_price'] !== '')?$data['goods']['cost_price']:'')); ?></td>
                                        <td><?php echo htmlentities((isset($data['goods']['store_nums']) && ($data['goods']['store_nums'] !== '')?$data['goods']['store_nums']:'')); ?></td>
                                    </tr>
                                    <?php endif; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="layui-form-item" id="product-table-box" <?php if(!empty($data['products'])): ?>style="display:block;"<?php endif; ?>>
                        <label class="layui-form-label">货品：</label>
                        <div class="layui-input-block">
                            <table style='width: 100%;' class="layui-table">
                                <colgroup>
                                    <col width="60">
                                    <col>
                                    <col>
                                    <col>
                                    <col>
                                    <col>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th>选择</th>
                                    <th style="text-align:center;">规格</th>
                                    <th style="text-align:center;">销售价格</th>
                                    <th style="text-align:center;">市场价格</th>
                                    <th style="text-align:center;">成本价格</th>
                                    <th style="text-align:center;">库存</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php if(!empty($data['products'])): if(is_array($data['products']) || $data['products'] instanceof \think\Collection || $data['products'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['products'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$val): $mod = ($i % 2 );++$i;?>
                                <tr>
                                    <td><input type="checkbox" name="products[product_id][]" value="<?php echo htmlentities($val['id']); ?>" lay-skin="primary" <?php if(isset($val['checked'])&&$val['checked']): ?>checked<?php endif; ?>></td>
                                    <td><input type="hidden" name="products[spec_key][]" value="<?php echo htmlentities($val['spec_key']); ?>"><?php echo htmlentities((isset($val['spec_item']) && ($val['spec_item'] !== '')?$val['spec_item']:"")); ?></td>
                                    <td><input type="text" name="products[sell_price][]" value="<?php echo htmlentities((isset($val['sell_price']) && ($val['sell_price'] !== '')?$val['sell_price']:$data['goods']['sell_price'])); ?>" required  lay-verify="required" placeholder="请输入销售价格" autocomplete="off" class="layui-input"></td>
                                    <td><input type="text" name="products[market_price][]" value="<?php echo htmlentities((isset($val['market_price']) && ($val['market_price'] !== '')?$val['market_price']:$data['goods']['market_price'])); ?>" required  lay-verify="required" placeholder="请输入市场价格" autocomplete="off" class="layui-input"></td>
                                    <td><input type="text" name="products[cost_price][]" value="<?php echo htmlentities((isset($val['cost_price']) && ($val['cost_price'] !== '')?$val['cost_price']:$data['goods']['cost_price'])); ?>" required  lay-verify="required" placeholder="请输入成本价格" autocomplete="off" class="layui-input"></td>
                                    <td><input type="text" name="products[store_nums][]" value="<?php echo htmlentities((isset($val['store_nums']) && ($val['store_nums'] !== '')?$val['store_nums']:$data['goods']['store_nums'])); ?>" required  lay-verify="required" placeholder="请输入库存" autocomplete="off" class="layui-input"></td>
                                </tr>
                                <?php endforeach; endif; else: echo "" ;endif; ?>
                                <?php endif; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">商品属性：</label>
                        <div class="layui-input-block">
                            <table style='width: 100%;' class="layui-table">
                                <colgroup>
                                    <col>
                                    <col>
                                    <col>
                                    <col>
                                    <col>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th style="text-align:center;">积分数量</th>
                                    <th style="text-align:center;">销量</th>
                                    <th style="text-align:center;">库存</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input type="text" name="point" value="<?php echo htmlentities((isset($data['sell_price']) && ($data['sell_price'] !== '')?$data['sell_price']:intval($data['goods']['sell_price']))); ?>" required  lay-verify="required" placeholder="请输入积分数量" autocomplete="off" class="layui-input"></td>
                                    <td><input type="text" name="sum_count" value="<?php echo htmlentities((isset($data['sum_count']) && ($data['sum_count'] !== '')?$data['sum_count']:mt_rand(1,1000))); ?>" required  lay-verify="required" placeholder="请输入销量" autocomplete="off" class="layui-input"></td>
                                    <td><input type="text" name="store_nums" value="<?php echo htmlentities((isset($data['store_nums']) && ($data['store_nums'] !== '')?$data['store_nums']:$data['goods']['store_nums'])); ?>" required  lay-verify="required" placeholder="请输入库存" autocomplete="off" class="layui-input"></td>
                                </tr>
                                </tbody>
                            </table>
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
                    <input name="goods_id" type="hidden" value="<?php echo htmlentities((isset($data['goods_id']) && ($data['goods_id'] !== '')?$data['goods_id']:'0')); ?>">
                    <button class="layui-btn layui-bg-light-blue" lay-filter="layui-submit-filter" lay-submit="">立即提交</button>
                    <button class="layui-btn layui-btn-primary" type="reset">重置</button>
                </div>
            </div>

    </div>
    </form>
    </div>
</section>
<style type="text/css">#product-table-box { display: none; }</style>
<script type="text/javascript">
    $(function () {

        layui.use(["form", "element",'layer','laydate'], function () {
            var form = layui.form;
            var layer = layui.layer;

            var laydate = layui.laydate;

            laydate.render({ elem: '#start-time-box',format: 'yyyy-MM-dd HH:mm:ss' });
            laydate.render({ elem: '#end-time-box',format: 'yyyy-MM-dd HH:mm:ss' });


            form.on('submit(layui-submit-filter)', function (data) {
                var index = layer.load(1, { shade: [0.2,'#fff'] });
                $.post('<?php echo createUrl("editor_point"); ?>', data.field, function (result) {
                    layer.close(index);
                    if(result.code){
                        layer.msg(result.msg, {
                            time: 0
                            ,btn: ['返回列表']
                            ,yes: function(index){
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