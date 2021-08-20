<?php /*a:1:{s:84:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/admin/view/order/printing/cart.php";i:1623379870;}*/ ?>

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>A3Mall | Dashboard</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="/static/system/js/layui/css/layui.css">
    <link rel="stylesheet" href="/static/system/css/base.css">
    <script src="/static/system/js/jquery/jquery.min.js"></script>
    <script src="/static/system/js/bootstrap/js/bootstrap.min.js"></script>
    <script src="/static/system/js/layui/layui.js"></script>
    <script src="/static/system/js/common/common.js"></script>
    <style media="screen,print" type="text/css">
        body{ font:12px/1.5 "微软雅黑", Arial, Helvetica, sans-serif;color:#404040;background-color:#fff;text-align:center; }
        table{ border-collapse:collapse; }
        .container{ width:90%;margin:20px auto; }
        .ml_20{margin-left:20px;}
        .m_10{ margin-bottom: 5px;}
        .f14{font-size:14px;}
        .f18{ text-align: center; font-size:18px; padding: 0; }
        .gray{color:#979797}
        table.table.topBorder{border-top:2px solid #b0b0b0;}
        table.table tr{_background-image:none}
        .btn_print{width:112px;height:31px;margin:20px auto;border:0;cursor: pointer;}
        @page {
            size: auto;
            margin: 0mm;
        }
        @media print
        {
            .notprint { display:none }
        }
    </style>
</head>
<body>

<div class="container">
    <table class="m_10" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td class="f18" style="padding: 5px 0;"><?php echo htmlentities($store['name']); ?>购物清单</td>
        </tr>
        <tr>
            <td valign="bottom" align="right" style="font-size: 14px;">
                <p>客户:<?php echo htmlentities($order['accept_name']); ?> <span class="ml_20">地址: <?php echo htmlentities($area); ?>&nbsp;<?php echo htmlentities($order['address']); ?></span>
                    <span class="ml_20">电话: <?php echo htmlentities($order['mobile']); ?></span>
                </p>
            </td>
        </tr>
    </table>

    <table class="table" width="100%" cellspacing="0" cellpadding="0" border="1">
        <colgroup>
            <col width="370px"/>
            <col width="120px"/>
            <col width="120px"/>
            <col width="100px"/>
            <col width="60px"/>
            <col width="90px"/>
        </colgroup>

        <tr class="f17">
            <th colspan="2" style="text-align:left;border-right:none;">
                <b style="font-size: 14px; padding-left: 10px;">订单号：<?php echo htmlentities($order['order_no']); ?></b>
            </th>
            <th colspan="4" style="text-align:right;border-left:none;">
                <b style="font-size: 14px; padding-right: 10px;">订购日期：<?php echo htmlentities(date("Y-m-d H:i:s",!is_numeric($order['create_time'])? strtotime($order['create_time']) : $order['create_time'])); ?></b>
            </th>
        </tr>

        <tr class="f14">
            <th>商品名称</th>
            <th>商品货号</th>
            <th>销售价格</th>
            <th>重量（G）</th>
            <th>数量</th>
            <th>小计</th>
        </tr>
        <?php if(!empty($order['order_goods'])): if(is_array($order['order_goods']) || $order['order_goods'] instanceof \think\Collection || $order['order_goods'] instanceof \think\Paginator): $i = 0; $__LIST__ = $order['order_goods'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
        <tr style="font-size: 14px; text-align: center">
            <td align="left">
                <label style="padding: 0 10px;">
                    <?php echo htmlentities($vo['goods_info']['title']); ?> &nbsp;
                    <span class="gray"><?php echo htmlentities($vo['goods_info']['spec']); ?></span>
                </label>
            </td>
            <td style="text-align: center;"><?php echo htmlentities($vo['goods_no']); ?></td>
            <td style="text-align: center;">￥<?php echo htmlentities($vo['sell_price']); ?></td>
            <td style="text-align: center;"><?php echo htmlentities($vo['goods_weight']); ?></td>
            <td style="text-align: center;"><?php echo htmlentities($vo['goods_nums']); ?></td>
            <td style="text-align: center;">￥<?php echo htmlentities($vo['sell_price'] * $vo['goods_nums']); ?></td>
        </tr>
        <?php endforeach; endif; else: echo "" ;endif; ?>
        <?php endif; ?>
    </table>

    <table class="table f14" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td align="right">
                <span style="float: left;">商品总额：￥<?php echo htmlentities($order['real_amount']); ?></span>
                <span style="float: right;">联系方式：<?php echo htmlentities($store['phone']); ?></span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <span style="float: left;">运费价格：￥<?php echo htmlentities($order['real_freight']); ?></span>
                <span style="float: right;">服务商：<?php echo htmlentities($store['name']); ?></span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <span style="float: left;">订单附言：</span>
            </td>
        </tr>
    </table>

    <input type="submit" class="btn_print notprint" onclick="window.print();" value="打印"/>
</div>

</body>
</html>