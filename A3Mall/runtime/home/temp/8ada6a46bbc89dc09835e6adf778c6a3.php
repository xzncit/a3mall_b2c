<?php /*a:3:{s:75:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/ucenter/recharge.php";i:1623379872;s:70:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/main/layout.php";i:1623379872;s:78:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/common/ucenter_menu.php";i:1623379872;}*/ ?>
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
    <a>在线充值</a>
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
        <div class="order-container">
            <div class="obder-bg"><span class="morder-title">在线充值</span></div>
            <div class="return-goods-table">
                <form action="<?php echo url('ucenter/pay'); ?>" method="post" id="theForm">
                    <table cellspacing="0" cellpadding="0">
                        <tr>
                            <th>充值金额：</th>
                            <td>
                                <span class="text-mess-center"><input class="text-mess-input" type="text" name="account" value="100" /></span>
                                <span class="money">请输入充值的金额</span>
                            </td>
                        </tr>
                        <tr>
                            <th>充值方式：</th>
                            <td>
                                <?php if(!empty($payment)): if(is_array($payment) || $payment instanceof \think\Collection || $payment instanceof \think\Paginator): $i = 0; $__LIST__ = $payment;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                <div><label class="bel-margin"><input class="radio-select-btn" type="radio" name="payment_id" value="<?php echo htmlentities($vo['code']); ?>" <?php if($i==1): ?>checked="checked"<?php endif; ?>><?php echo htmlentities($vo['alias_name']); ?></label></div>
                                <?php endforeach; endif; else: echo "" ;endif; ?>
                                <?php endif; ?>
                            </td>
                        </tr>
                        <tr class="text-seat">
                            <th></th>
                            <td>
                                <p class="reason-margin"><a class="ask-btn" href="javascript:;">提交</a></p>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

            <div class="payment-layer"></div>
            <div id="payment-box">
                <div>
                    <div class="fa fa-times payment-close"></div>
                    <div class="payment-name">微信支付</div>
                    <div class="qr-wrapper">
                        <div id="qr-code" class="qr-code">
                            <img src="">
                        </div>
                    </div>
                    <div class="payment-tips">您在支付完成后，请勿关闭此页面<br>程序将自动跳转</div>
                </div>
            </div>

            <?php if(!empty($data)): ?>
            <div class="morder-center">
                <table cellspacing="0" cellpadding="0" class="morder-table">
                    <tr style="border-top:1px solid #ccc;">
                        <th width="267">订单号</th>
                        <th width="150">支付方式</th>
                        <th width="255">充值金额</th>
                        <th width="100">充值状态</th>
                        <th width="208">生成时间</th>
                    </tr>
                    <?php if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                    <tr>
                        <td><?php echo htmlentities($item['order_no']); ?></td>
                        <td><?php echo htmlentities($item['payment_name']); ?></td>
                        <td><?php echo htmlentities($item['order_amount']); ?></td>
                        <td><?php if($item['status'] == 1): ?>充值成功<?php else: ?>充值失败<?php endif; ?></td>
                        <td><?php echo htmlentities(date("Y-m-d H:i:s",!is_numeric($item['create_time'])? strtotime($item['create_time']) : $item['create_time'])); ?></td>
                    </tr>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </table>
            </div>
            <div class="page-wrap">
                <?php echo $page; ?>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
<script typ="text/javascript">
    layui.use("layer",function(){
        var layer = layui.layer;

        var checkFlag = false;
        var timer = null;
        var order_id = 0;
        var checkOrder = function (){
            if(order_id <= 0){
                return false;
            }
            $.post('<?php echo createUrl("ucenter/check_pay"); ?>',{ id: order_id },function (res){
                if(res.status == 2){
                    clearInterval(timer);
                }else if(res.status == 1){
                    clearInterval(timer);
                    layer.confirm('您的订单支付成功！', {
                        btn: ['确定']
                    }, function(){
                        window.location.reload();
                    });
                }
            });
        };

        $(".payment-close").on("click",function (){
            $(".payment-layer").fadeOut();
            $('#payment-box').fadeOut();
            if(checkFlag){
                clearInterval(timer);
            }
        });

        $(".ask-btn").on("click",function (){
            var num = parseInt($('[name="account"]').val());
            if(num <= 0 || $('[name="account"]').val() == ''){
                layer.msg("请输入金额",{ icon : 2 });
                return false;
            }

            if(!$('[name="payment_id"]').is(":checked")){
                layer.msg("请选择支付方式",{ icon : 2 });
                return false;
            }

            if($('[name="payment_id"] :checked').val() == 'wechat-qrcode'){
                $.post($("#theForm").attr("action"),$("#theForm").serialize(),function (res){
                    order_id = res.data.id;
                    $("#qr-code img").attr("src",res.data.url);
                    $(".payment-layer").fadeIn();
                    $('#payment-box').fadeIn();
                    if(!checkFlag){
                        checkFlag = true;
                        timer = setInterval(checkOrder,3000);
                    }
                },"json");

                return false;
            }else{
                $("#theForm").submit();
            }

        });

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
