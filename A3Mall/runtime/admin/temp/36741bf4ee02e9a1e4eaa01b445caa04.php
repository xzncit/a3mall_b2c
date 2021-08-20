<?php /*a:2:{s:83:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/order/index/detail.php";i:1623379870;s:76:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/main/layout.php";i:1627731555;}*/ ?>
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
            <li><a href="javascript:;">订单信息</a></li>
        </ul>
    </div>
</div>

<section class="content clearfix">
    <div class="layui-editor-box">
        <form action="" class="layui-form layui-form-pane">
            <div class="layui-tab layui-tab-brief layui-tab-bg layui-tab-content-box">
                <ul class="layui-tab-title">
                    <li class="layui-this">基本信息</li>
                    <li>订单日志</li>
                </ul>

                    <div class="layui-tab-content">
                        <div class="layui-tab-item layui-show">
                            
                            <div class="layui-form-item">
                                <div>
                                    <a href="javascript:;" data-href="<?php echo createUrl('payment',['id'=>$data['id']]); ?>" class="layui-btn order-event-btn">支付</a>
                                    <a href="javascript:;" data-href="<?php echo createUrl('distribution',['id'=>$data['id']]); ?>" class="layui-btn layui-btn-disabled order-event-btn layui-btn-normal">发货</a>
                                    <a href="javascript:;" data-href="<?php echo createUrl('refundment',['id'=>$data['id']]); ?>" class="layui-btn layui-btn-disabled order-event-btn layui-btn-warm">退款</a>
                                    <a href="javascript:;" data-href="<?php echo createUrl('complete',['id'=>$data['id'],'status'=>4]); ?>" class="layui-btn layui-btn-disabled order-event-btn layui-btn-danger">作废</a>
                                    <a href="javascript:;" data-href="<?php echo createUrl('complete',['id'=>$data['id'],'status'=>5]); ?>" class="layui-btn layui-btn-disabled order-event-btn layui-btn-greens">完成</a>
                                </div>
                                <table id="goods-table-box" class="layui-table">
                                    <colgroup>
                                        <col>
                                        <col>
                                        <col width="90">
                                        <col width="90">
                                        <col width="90">
                                        <col width="90">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th style="text-align:center;">商品名称</th>
                                            <th style="text-align:center;">规格</th>
                                            <th style="text-align:center;">销售价格</th>
                                            <th style="text-align:center;">购买数量</th>
                                            <th style="text-align:center;">库存数量</th>
                                            <th style="text-align:center;">金额</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <?php if(!empty($data['goods'])): if(is_array($data['goods']) || $data['goods'] instanceof \think\Collection || $data['goods'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['goods'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                                        <tr>
                                            <td>
                                                <input type="hidden" name="order_goods_id[]" value="<?php echo htmlentities($item['id']); ?>">
                                                <input type="hidden" data-field="<?php echo htmlentities($item['goods_id']); ?>" name="goods_id[]" value="<?php echo htmlentities($item['goods_id']); ?>">
                                                <input type="hidden" name="product_id[]" value="<?php echo htmlentities($item['product_id']); ?>">
                                                <?php echo htmlentities($item['goods_array']['title']); ?>
                                            </td>
                                            <td><?php if(!empty($item['goods_array']['spec'])): ?><?php echo htmlentities($item['goods_array']['spec']); ?><?php endif; ?></td>
                                            <td><?php echo htmlentities($item['sell_price']); ?></td>
                                            <td>X <?php echo htmlentities($item['goods_nums']); ?></td>
                                            <td><?php echo htmlentities($item['store_nums']); ?></td>
                                            <td><?php echo htmlentities($item['order_price']); ?></td>
                                        </tr>
                                        <?php endforeach; endif; else: echo "" ;endif; ?>
                                        <?php endif; ?>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="layui-form-item" <?php if($data['shipping_type'] == 2): ?>style="display:none;"<?php endif; ?>>
                                <table class="layui-table">
                                    <colgroup>
                                        <col width="8%">
                                        <col width="27%">
                                        <col width="8%">
                                        <col width="27%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="4">购买人信息：</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style="text-align:right;">会员：</th>
                                            <td><?php echo htmlentities($data['users']['username']); ?></td>
                                            <th style="text-align:right;">姓名：</th>
                                            <td><?php echo htmlentities($data['accept_name']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">级别：</th>
                                            <td><?php echo htmlentities($data['users']['level']); ?></td>
                                            <th style="text-align:right;">性别：</th>
                                            <td><?php echo htmlentities($data['users']['sex']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">手机：</th>
                                            <td><?php echo htmlentities($data['mobile']); ?></td>
                                            <th style="text-align:right;">电话：</th>
                                            <td><?php echo htmlentities($data['phone']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">地址：</th>
                                            <td><?php echo htmlentities($data['area_name']); ?> <?php echo htmlentities($data['address']); ?></td>
                                            <th style="text-align:right;">邮编：</th>
                                            <td><?php echo htmlentities($data['zip']); ?></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="layui-form-item" <?php if($data['shipping_type'] == 1): ?>style="display:none;"<?php endif; ?>>
                            <table class="layui-table">
                                <colgroup>
                                    <col width="8%">
                                    <col width="27%">
                                    <col width="8%">
                                    <col width="27%">
                                </colgroup>
                                <thead>
                                <tr>
                                    <th colspan="4">核销信息：</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th style="text-align:right;">门店名称：</th>
                                    <td><?php echo htmlentities((isset($data['store']['shop_name']) && ($data['store']['shop_name'] !== '')?$data['store']['shop_name']:"")); ?></td>
                                    <th style="text-align:right;">手机号码：</th>
                                    <td><?php echo htmlentities((isset($data['store']['phone']) && ($data['store']['phone'] !== '')?$data['store']['phone']:"")); ?></td>
                                </tr>
                                <tr>
                                    <th style="text-align:right;">营业时间：</th>
                                    <td><?php echo htmlentities((isset($data['store']['day_time']) && ($data['store']['day_time'] !== '')?$data['store']['day_time']:"")); ?></td>
                                    <th style="text-align:right;">门店地址：</th>
                                    <td><?php echo htmlentities((isset($data['store']['area_name']) && ($data['store']['area_name'] !== '')?$data['store']['area_name']:"")); ?> <?php echo htmlentities((isset($data['store']['address']) && ($data['store']['address'] !== '')?$data['store']['address']:"")); ?></td>
                                </tr>
                                <tr>
                                    <th style="text-align:right;">核销码：</th>
                                    <td colspan="3"><?php echo htmlentities((isset($data['shipping_code']) && ($data['shipping_code'] !== '')?$data['shipping_code']:"")); ?></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                            
                            <div class="layui-form-item">
                                <table class="layui-table">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="25%">
                                        <col width="10%">
                                        <col width="25%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="4">订单信息：</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style="text-align:right;">订单编号：</th>
                                            <td><?php echo htmlentities($data['order_no']); ?></td>
                                            <th style="text-align:right;">当前状态：</th>
                                            <td><?php echo htmlentities($data['order_status_text']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">支付状态：</th>
                                            <td><?php echo htmlentities($data['order_payment_status_text']); ?></td>
                                            <th style="text-align:right;">配送状态：</th>
                                            <td><?php echo htmlentities($data['distribution_status_name']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">订单类型：</th>
                                            <td><?php echo htmlentities($data['type_name']); ?></td>
                                            <th style="text-align:right;">配送方式：</th>
                                            <td><?php if(!empty($data['distribution_name'])): ?><?php echo htmlentities($data['distribution_name']); else: ?>未分配<?php endif; ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">商品重量：</th>
                                            <td><?php echo htmlentities($data['goods_weight']); ?></td>
                                            <th style="text-align:right;">支付方式：</th>
                                            <td><?php echo htmlentities($data['payment_name']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">可得积分：</th>
                                            <td><?php echo htmlentities($data['point']); ?></td>
                                            <th style="text-align:right;">支付手续费：</th>
                                            <td><?php echo htmlentities($data['pay_fee']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">配送费用：</th>
                                            <td><?php echo htmlentities($data['real_freight']); ?></td>
                                            <th style="text-align:right;">保价费用：</th>
                                            <td><?php echo htmlentities($data['insured']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">税金费用：</th>
                                            <td><?php echo htmlentities($data['taxes']); ?></td>
                                            <th style="text-align:right;">优惠总额：</th>
                                            <td><?php echo htmlentities($data['promotions']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">增加或减少金额：</th>
                                            <td><?php echo htmlentities($data['discount']); ?></td>
                                            <th style="text-align:right;">商品总额：</th>
                                            <td><?php echo htmlentities($data['real_amount']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">订单总额：</th>
                                            <td colspan="3"><span style="color:#ff6600"><?php echo htmlentities($data['order_amount']); ?></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="layui-form-item">
                                <table class="layui-table">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="25%">
                                        <col width="10%">
                                        <col width="25%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="4">操作信息：</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style="text-align:right;">下单时间：</th>
                                            <td><?php echo htmlentities($data['create_time']); ?></td>
                                            <th style="text-align:right;">付款时间：</th>
                                            <td><?php echo htmlentities($data['pay_time']); ?></td>
                                        </tr>
                                        
                                        <tr>
                                            <th style="text-align:right;">发货时间：</th>
                                            <td><?php echo htmlentities($data['send_time']); ?></td>
                                            <th style="text-align:right;">收货时间：</th>
                                            <td><?php echo htmlentities($data['accept_time']); ?></td>
                                        </tr>
                                        
                                        <tr>
                                            <th style="text-align:right;">完成时间：</th>
                                            <td colspan="3"><?php echo htmlentities($data['completion_time']); ?></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="layui-form-item">
                                <table class="layui-table">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="25%">
                                        <col width="10%">
                                        <col width="25%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="4">订单留言：</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style="text-align:right;">会员备注：</th>
                                            <td colspan="3"><?php echo htmlentities($data['message']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">管理备注：</th>
                                            <td colspan="3"><?php echo htmlentities($data['note']); ?></td>
                                        </tr>
                                        <tr>
                                            <th style="text-align:right;">发货备注：</th>
                                            <td colspan="3"><?php echo htmlentities($data['remarks']); ?></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                        
                        <div class="layui-tab-item">
                            <table class="layui-table">
                                <colgroup>
                                    <col width="100">
                                    <col width="150">
                                    <col width="80">
                                    <col>
                                    <col width="200">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>操作者</th>
                                        <th>动作</th>
                                        <th>结果</th>
                                        <th>信息</th>
                                        <th>时间</th>
                                    </tr> 
                                </thead>
                                <tbody>
                                    <?php if(!empty($data['order_log'])): if(is_array($data['order_log']) || $data['order_log'] instanceof \think\Collection || $data['order_log'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['order_log'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$log): $mod = ($i % 2 );++$i;?>
                                    <tr>
                                        <td><?php echo htmlentities($log['username']); ?></td>
                                        <td><?php echo htmlentities($log['action']); ?></td>
                                        <td><?php echo htmlentities($log['result']); ?></td>
                                        <td><?php echo htmlentities($log['note']); ?></td>
                                        <td><?php echo htmlentities($log['create_time']); ?></td>
                                    </tr>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                    <?php endif; ?>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>


            </div>
        </form>
    </div>
</section>

<script type="text/javascript">
    $(function () {
        $(".order-event-btn").addClass("layui-btn-disabled");
        
        // 支付
        <?php if(in_array($data['order_status'],[1])): ?>
        $(".order-event-btn").eq(0).removeClass("layui-btn-disabled");
        <?php endif; ?>
            
        // 发货
        <?php if(in_array($data['order_status'],[2])): ?>
        $(".order-event-btn").eq(1).removeClass("layui-btn-disabled");
        <?php endif; ?>

        // 退款 
        <?php if(in_array($data['order_status'],[2,3,4,5,11])): ?>
        $(".order-event-btn").eq(2).removeClass("layui-btn-disabled");
        <?php endif; ?>
     
        // 完成
        <?php if(in_array($data['order_status'],[2,3,4])): ?>
        $(".order-event-btn").eq(4).removeClass("layui-btn-disabled");
        <?php endif; if($data['status'] != 4): ?>
        $(".order-event-btn").eq(3).removeClass("layui-btn-disabled");
        <?php endif; ?>
        
        $(".order-event-btn").on("click",function (){
            var url = $(this).attr("data-href");
            if($(this).is(".layui-btn-disabled")){
                return false;
            }

            window.location.href = url;
            return false;
        });
        
        layui.use(["form", "element",'layer'], function () {
            var form = layui.form;
            var layer = layui.layer;
            
            
            form.on('submit(layui-submit-filter)', function (data) {
                
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
        <strong>Copyright &copy; 2019-<?php echo date("Y"); ?> <a href="http://www.a3-mall.com">数循通云计算科技有限公司 | A3Mall</a>.</strong> All rights
        reserved.
    </footer>

</div>

</body>
</html>