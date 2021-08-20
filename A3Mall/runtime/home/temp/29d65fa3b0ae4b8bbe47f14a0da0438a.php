<?php /*a:3:{s:72:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/ucenter/order.php";i:1623379872;s:70:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/main/layout.php";i:1623379872;s:78:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/common/ucenter_menu.php";i:1623379872;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title><?php echo htmlentities($web_name); if(!empty($web_title)): ?> - <?php echo htmlentities($web_title); ?><?php endif; ?></title>
    <meta charset="UTF-8">
    <meta name="keywords" content="<?php echo htmlentities($web_keywords); ?>" />
    <meta name="description" content="<?php echo htmlentities($web_description); ?>" />
    <link href="/static/front/layui/css/layui.css" rel="stylesheet" type="text/css"/>
    <link href="/static/front/Swiper/swiper.min.css" rel="stylesheet" type="text/css"/>
    <link href="/static/front/css/style.css" rel="stylesheet" type="text/css"/>
    <link href="/static/front/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <script src="/static/front/js/jquery.min.js" type="text/javascript"></script>
    <script src="/static/front/js/lazyload.min.js" type="text/javascript"></script>
    <script src="/static/front/Swiper/swiper.min.js" type="text/javascript"></script>
    <script src="/static/front/js/jquery.elevateZoom.min.js" type="text/javascript"></script>
    <script src="/static/front/layui/layui.js" type="text/javascript"></script>
    <script src="/static/front/js/countdown.js" type="text/javascript"></script>
    <script src="/static/front/js/common.js" type="text/javascript"></script>
</head>
<body>

<!-- 顶部 -->
<div class="top-wrap">
    <div class="top-container">
        <div class="top-left">
            <ul>
                <?php if(!empty($web_qrcode['qrcode_wechat'])): ?>
                <li>
                    <a href="javascript:;">公众号商城</a>
                    <div class="top-dropdown"><img src="<?php echo htmlentities($web_qrcode['qrcode_wechat']); ?>" alt="" /></div>
                </li>
                <?php endif; if(!empty($web_qrcode['qrcode_mini'])): ?>
                <li>
                    <a href="javascript:;">小程序商城</a>
                    <div class="top-dropdown"><img src="<?php echo htmlentities($web_qrcode['qrcode_mini']); ?>" alt="" /></div>
                </li>
                <?php endif; ?>
            </ul>
        </div>
        <div class="top-right">
            <ul>
                <?php if(G("users.id")): ?>
                <li><a href="<?php echo url('ucenter/index'); ?>">欢迎回来，<?php echo G("users.username"); ?></a></li>
                <li><a href="<?php echo url('users/logout'); ?>">退出</a></li>
                <?php else: ?>
                <li><a href="<?php echo url('users/login'); ?>">登录</a></li>
                <li><a href="<?php echo url('users/register'); ?>">注册</a></li>
                <?php endif; ?>
                <li><a href="<?php echo url('ucenter/index'); ?>">会员中心</a></li>
                <li><a href="<?php echo url('ucenter/order'); ?>">我的订单</a></li>
                <li><a href="<?php echo url('ucenter/recharge'); ?>">我的充值</a></li>
                <li><a href="<?php echo url('card/index'); ?>">卡劵兑换</a></li>
            </ul>
        </div>
    </div>
</div>

<!-- 头部 -->
<div class="header-wrap">
    <h1 id="logo"><a href="/"><img src="<?php echo G('web_logo'); ?>" alt="" /></a></h1>
    <div class="header-right">
        <div class="search-container">
            <form id="searchForm" action="<?php echo url('search/index'); ?>" method="get">
                <div class="header-search">
                    <input class="search-input" type="text" name="keywords" autocomplete="off" value="<?php if(!empty($keywords)): ?><?php echo htmlentities($keywords); ?><?php endif; ?>" placeholder="请输入关键字" />
                </div>
                <div class="search-btn">
                    <input class="search-input-btn" type="button" value="" />
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    layui.use(["layer"],function (){
        $(".search-input-btn").on("click",function (){
            var keywords = $.trim($('.search-input').val());
            if(keywords.length <= 0) {
                layer.msg("请填写搜索关键词");
                return false;
            }

            $("#searchForm").submit();
        });
    });
</script>

<!-- 导航 -->
<div class="navigation-wrap">
    <div class="product-categories">
        <div class="categories-title">全部商品分类</div>
        <!-- 二级菜单 -->
        <div class="categories-drop<?php if(app('request')->controller() != 'Index'): ?> category-menu-box<?php endif; ?>">
            <!-- 左侧 -->
            <div class="assortment-box">
                <?php if(!empty($products_category)): if(is_array($products_category) || $products_category instanceof \think\Collection || $products_category instanceof \think\Paginator): $i = 0; $__LIST__ = $products_category;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$cat): $mod = ($i % 2 );++$i;?>
                <div class="wares-cent">
                    <div class="wares-title">
                        <div class="wartCcenDot">
                            <a href="<?php echo htmlentities($cat['url']); ?>"><?php echo htmlentities($cat['title']); ?></a>
                        </div>
                    </div>
                    <div class="carte-combobox">
                        <div class="taxonomy-left">
                            <?php if(!empty($cat['children'])): if(is_array($cat['children']) || $cat['children'] instanceof \think\Collection || $cat['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $cat['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                            <div class="sorts-box">
                                <div class="s-title"><a href="<?php echo htmlentities($vo['url']); ?>"><?php echo htmlentities($vo['title']); ?>&nbsp;&gt;</a></div>
                                <div class="s-cent clear">
                                    <?php if(!empty($vo['children'])): if(is_array($vo['children']) || $vo['children'] instanceof \think\Collection || $vo['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $vo['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?>
                                    <a href="<?php echo htmlentities($v['url']); ?>"><?php echo htmlentities($v['title']); ?></a>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; endif; else: echo "" ;endif; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="nav-wrap">
        <ul>
            <li><a <?php if(request()->controller(true) == 'index' && request()->action(true) == 'index'): ?>class="active"<?php endif; ?> href="/">首页</a></li>
            <?php if(is_array($web_top_nav) || $web_top_nav instanceof \think\Collection || $web_top_nav instanceof \think\Paginator): $i = 0; $__LIST__ = $web_top_nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <li><a <?php if($item['active']): ?>class="active"<?php endif; ?> href="<?php echo htmlentities($item['url']); ?>" <?php if($item['target']): ?>target="_blank"<?php endif; ?>><?php echo htmlentities($item['name']); ?></a></li>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>
    </div>
    <div class="navright-cart">
        <div class="ico-cart"></div>
        <div class="settlement-cart">
            <a class="nav-settcart" href="<?php echo url('cart/index'); ?>">￥0.00</a>
            <div class="shopping-drop">
                <span class="sdot-ico"></span>
                <div class="drop-down"></div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    var getCart = function (){
        $.get("<?php echo url('ajax/get_cart'); ?>",function(result){
            if(result.status){
                $(".nav-settcart").html("￥"+result.data.total);
                $(".drop-down").html(result.data.content);
            }
        },"json");
    };

    getCart();
</script>

<!-- list -->
<div class="title-textbox">
    <a href="/">首页</a>&nbsp;<em>/</em>
    <a href="<?php echo url('ucenter/index'); ?>">会员中心</a>&nbsp;<em>/</em>
    <a>优惠劵</a>
</div>
<!-- 会员 -->
<div class="member-container clear">
    <div class="member-sideleft">
    <div class="m-title">会员中心</div>
    <div class="m-box">
        <?php if(is_array($ucenter_menu) || $ucenter_menu instanceof \think\Collection || $ucenter_menu instanceof \think\Paginator): $i = 0; $__LIST__ = $ucenter_menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?>
        <div class="member-text">
            <div class="home-t"><?php echo htmlentities($menu['name']); ?></div>
            <div class="homt-c">
                <ul>
                    <?php if(is_array($menu['children']) || $menu['children'] instanceof \think\Collection || $menu['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $menu['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                    <li><a href="<?php echo htmlentities($item['url']); ?>" <?php if(in_array(app('request')->action(),$item['active'])): ?>class="bestow"<?php endif; ?>><?php echo htmlentities($item['name']); ?></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>
        </div>
        <?php endforeach; endif; else: echo "" ;endif; ?>

    </div>
</div>
    <div class="member-sideright">
        <!-- 优惠劵 -->
        <div class="order-container">
            <div class="packaging-title">
                <a <?php if($type == 0): ?>class="called"<?php endif; ?> href="<?php echo url('order',['type'=>'0']); ?>">全部</a>
                <a <?php if($type == 1): ?>class="called"<?php endif; ?> href="<?php echo url('order',['type'=>'1']); ?>">待付款</a>
                <a <?php if($type == 2): ?>class="called"<?php endif; ?> href="<?php echo url('order',['type'=>'2']); ?>">待发货</a>
                <a <?php if($type == 3): ?>class="called"<?php endif; ?> href="<?php echo url('order',['type'=>'3']); ?>">待收货</a>
                <a <?php if($type == 4): ?>class="called"<?php endif; ?> href="<?php echo url('order',['type'=>'4']); ?>">待评价</a>
                <a <?php if($type == 5): ?>class="called"<?php endif; ?> href="<?php echo url('order',['type'=>'5']); ?>">己完成</a>
            </div>
            <div class="morder-center">
                <table cellspacing="0" cellpadding="0" class="morder-table">
                    <tr>
                        <th width="530">商品</th>
                        <th width="100">单价（元）</th>
                        <th width="100">数量</th>
                        <th width="120">订单金额</th>
                        <th width="100">交易状态</th>
                        <th width="120">交易操作</th>
                    </tr>

                    <?php if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "$empty" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                    <tr class="order-table-th">
                        <th colspan="6">
                            <span><?php echo htmlentities($vo['type']); ?></span>
                            <span>订单号：<?php echo htmlentities($vo['order_no']); ?></span>
                            <span>下单时间：<?php echo htmlentities($vo['create_time']); ?></span>
                        </th>
                    </tr>
                    <tr class="order-table-td">
                        <td colspan="3">
                            <?php if(is_array($vo['item']) || $vo['item'] instanceof \think\Collection || $vo['item'] instanceof \think\Paginator): $i = 0; $__LIST__ = $vo['item'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$goods): $mod = ($i % 2 );++$i;?>
                            <div class="order-goods">
                                <div class="goods-info">
                                    <span class="goods-thumb">
                                        <a href="<?php echo createUrl('goods/view',['id'=>$goods['goods_id']]); ?>" target="_blank">
                                            <img src="<?php echo htmlentities($goods['thumb_image']); ?>">
                                        </a>
                                    </span>
                                    <span class="goods-title">
                                        <a href="<?php echo createUrl('goods/view',['id'=>$goods['goods_id']]); ?>" target="_blank">
                                            <?php echo htmlentities($goods['title']); ?>
                                        </a>
                                    </span>
                                </div>
                                <div class="goods-price">
                                    <?php echo htmlentities($goods['price']); ?>
                                </div>
                                <div class="goods-number">
                                    <?php echo htmlentities($goods['nums']); ?>
                                </div>
                            </div>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </td>
                        <td>￥<?php echo htmlentities($vo['order_amount']); ?></td>
                        <td class="order-list-dtl">
                            <div style="color: #F30"><?php echo htmlentities($vo['order_status']); ?></div>
                            <div><a href="<?php echo createUrl('order_detail',['id'=>$vo['order_id']]); ?>">订单详情</a></div>
                        </td>
                        <td class="order-list-op">
                            <?php if($vo['active'] == 1): ?><div><a href="<?php echo createUrl('order_cancel',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs layui-btn-primary">取消订单</a></div><?php endif; if($vo['active'] == 1): ?><div><a href="<?php echo createUrl('order/pay',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs layui-btn-normal" target="_blank">立即付款</a></div><?php endif; if($vo['active'] == 2 || $vo['active']==3 || $vo['active']==4): ?><div><a href="<?php echo createUrl('order_refund',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs layui-btn-primary">申请退款</a></div><?php endif; if($vo['active'] == 11 || $vo['active'] == 12): ?><div><a href="<?php echo createUrl('order_refund',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs layui-btn-primary">退款详情</a></div><?php endif; if($vo['shipping_type'] == 1 && ($vo['active'] == 3 || $vo['active']==4 || $vo['active'] == 12)): ?><div><a href="<?php echo createUrl('order_express',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs">查看物流</a></div><?php endif; if($vo['active'] == 2 || $vo['active']==3 || $vo['active']==4 || $vo['active'] == 12): ?><div><a data-href="<?php echo createUrl('order_confirm',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs layui-btn-danger confirm-delivery">确认收货</a></div><?php endif; if($vo['active'] == 5): ?><div><a href="<?php echo createUrl('order_evaluate',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs">待评价</a></div><?php endif; if($vo['active'] == 6): ?><div><a href="<?php echo createUrl('order_detail',['id'=>$vo['order_id']]); ?>" class="layui-btn layui-btn-xs layui-btn-primary">商品详情</a></div><?php endif; ?>
                        </td>
                    </tr>
                    <?php endforeach; endif; else: echo "$empty" ;endif; ?>
                </table>
            </div>
        </div>
        <div class="page-wrap">
            <?php echo $page; ?>
        </div>
    </div>
</div>

<script>
    $(".confirm-delivery").on("click",function (){
        var url = $(this).attr("data-href");
        layer.confirm('您是否确认已经收到商品了吗？', {
            btn: ['确认','取消'],
            title: "确认收货"
        }, function(){
            window.location.href = url;
        }, function(){});
    });
</script>

<!-- 尾部 -->
<div class="footer-wrap">
    <div class="footer-container">
        <div class="footer-text-center">
            <ul>
                <li class="ft-ico">
                    <span class="ensure-tit">正品保障</span>
                    <p>正品行货 放心选购</p>
                </li>
                <li class="ft-ico ft-ico-2">
                    <span class="ensure-tit">担保交易</span>
                    <p>支付宝担保，交易更安全</p>
                </li>
                <li class="ft-ico ft-ico-3">
                    <span class="ensure-tit">无忧退货</span>
                    <p>7+15无理由退换货</p>
                </li>
                <li class="ft-ico ft-ico-4">
                    <span class="ensure-tit">真品货源</span>
                    <p>正品，优质，放心</p>
                </li>
            </ul>
        </div>
        <div class="footer-center">
            <?php if(!empty($footer)): if(is_array($footer) || $footer instanceof \think\Collection || $footer instanceof \think\Paginator): $i = 0; $__LIST__ = $footer;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <div class="footer-box">
                <p><?php echo htmlentities($item['title']); ?></p>
                <?php if(!empty($item)): if(is_array($item['children']) || $item['children'] instanceof \think\Collection || $item['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $item['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?>
                <span><a href="<?php echo htmlentities($v['url']); ?>"><?php echo htmlentities($v['title']); ?></a></span>
                <?php endforeach; endif; else: echo "" ;endif; ?>
                <?php endif; ?>
            </div>
            <?php endforeach; endif; else: echo "" ;endif; ?>
            <?php endif; if(!empty($web_qrcode['qrcode_mini'])): ?>
            <div class="footer-box">
                <p>小程序商城</p>
                <span><img style="width: 88px; height: 88px;" src="<?php echo htmlentities($web_qrcode['qrcode_mini']); ?>" alt="" /></span>
            </div>
            <?php endif; if(!empty($web_qrcode['qrcode_wechat'])): ?>
            <div class="footer-box">
                <p>公众号商城</p>
                <span><img style="width: 88px; height: 88px;" src="<?php echo htmlentities($web_qrcode['qrcode_wechat']); ?>" alt="" /></span>
            </div>
            <?php endif; ?>
        </div>
        <div class="copy-box"><?php echo htmlentities((isset($web_copyright) && ($web_copyright !== '')?$web_copyright:"")); ?></div>
    </div>
</div>

</body>
</html>
