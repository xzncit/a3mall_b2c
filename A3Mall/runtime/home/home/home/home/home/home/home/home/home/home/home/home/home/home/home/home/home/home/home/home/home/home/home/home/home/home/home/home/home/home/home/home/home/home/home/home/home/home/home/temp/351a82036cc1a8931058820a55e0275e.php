<?php /*a:2:{s:70:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/index/index.php";i:1623379872;s:70:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/main/layout.php";i:1623379872;}*/ ?>
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

<div class="slider-wrap">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <?php if($slider['children']): if(is_array($slider['children']) || $slider['children'] instanceof \think\Collection || $slider['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $slider['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <div class="swiper-slide" style="background-image:url(<?php echo htmlentities($item['photo']); ?>); background-position: center;"><a href="<?php if(empty($item['url'])): ?>javascript:;<?php else: ?><?php echo htmlentities($item['url']); ?><?php endif; ?>"></a></div>
            <?php endforeach; endif; else: echo "" ;endif; ?>
            <?php endif; ?>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>

<div class="welcome-notice">
    <div class="welcome-center">
        <div class="wel-portrait">
            <a href="<?php echo url('ucenter/index'); ?>">
                <img src="/static/front/images/portrait-ico.png" alt="" />
            </a>
        </div>
        <div class="wel-sing">
            <?php if(G("users.id")): ?>
            <span>您上次登录时间</span>
            <span><?php echo G("users.users_last_time"); ?></span>
            <?php else: ?>
            <span>欢迎来到商城，请<a href="<?php echo url('users/login'); ?>">登录</a></span>
            <span>还没账号？免费<a href="<?php echo url('users/register'); ?>">注册</a></span>
            <?php endif; ?>
        </div>
        <div class="wel-novel">
            <a href="<?php echo url('ucenter/index'); ?>">会员中心</a>
            <a href="<?php echo url('ucenter/order'); ?>">我的订单</a>
        </div>
    </div>
    <div class="notice-center">
        <div class="notice-title">商城公告</div>
        <div class="notice-text">
            <ul>
                <?php if(!empty($article)): if(is_array($article) || $article instanceof \think\Collection || $article instanceof \think\Paginator): $i = 0; $__LIST__ = $article;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                <li><a href="<?php echo htmlentities($item['url']); ?>" class="list-title"><?php echo htmlentities($item['title']); ?></a></li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
                <?php endif; ?>
            </ul>
        </div>
    </div>
</div>

<div class="c-0 clear">
    <div class="d-0 clear">
        <?php if($ad['children']): if(is_array($ad['children']) || $ad['children'] instanceof \think\Collection || $ad['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $ad['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
        <div class="d-0-box">
            <a href="<?php if(empty($item['url'])): ?>javascript:;<?php else: ?><?php echo htmlentities($item['url']); ?><?php endif; ?>"><img src="<?php echo htmlentities($item['photo']); ?>" alt="" /></a>
        </div>
        <?php endforeach; endif; else: echo "" ;endif; ?>
        <?php endif; ?>
    </div>
</div>

<div class="e-0">
    <div class="e-1">
        <div class="e-t">
            <span>限时秒杀</span>
            <span><a href="<?php echo createUrl('seckill/index'); ?>">更多 ></a></span>
        </div>
        <div class="e-ls">
            <?php if(is_array($second) || $second instanceof \think\Collection || $second instanceof \think\Paginator): $i = 0; $__LIST__ = $second;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
            <div class="e-box">
                <div class="htumb-image"><a href="<?php echo htmlentities($vo['url']); ?>"><img src="<?php echo htmlentities($vo['photo']); ?>"></a></div>
                <div class="second-box">
                    <div>
                        <span><a href="<?php echo htmlentities($vo['url']); ?>"><?php echo htmlentities($vo['title']); ?></a></span>
                        <span>￥<?php echo htmlentities($vo['sell_price']); ?></span>
                    </div>
                    <div>
                        <span class="time" data-nowTime="<?php echo htmlentities($vo['now_time']); ?>" data-startTime="<?php echo htmlentities($vo['start_time']); ?>" data-endTime="<?php echo htmlentities($vo['end_time']); ?>">
                            <i class="before"></i>
                            <i class="day"></i>
                            <i class="hour"></i>
                            <i class="minute"></i>
                            <i class="second"></i>
                            <i class="after"></i>
                            <i class="tips"></i>
                        </span>
                        <span class="go"><a href="<?php echo htmlentities($vo['url']); ?>">去抢</a></span>
                    </div>
                </div>
            </div>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </div>
    </div>
</div>
<script>
    $(".time").countdown({
        text: {
            after: {
                "day" : " : ","hour" : " : ", "minute" : " : ","second" : ""
            }
        },
        isStatus: function (status,index){
            isStatusBuy = status;
        }
    });
</script>
<?php if(!empty($channel)): ?>
<div class="recommend-wrap">
<?php if(is_array($channel) || $channel instanceof \think\Collection || $channel instanceof \think\Paginator): $k = 0; $__LIST__ = $channel;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($k % 2 );++$k;?>
    <div class="center-box clear">
        <div class="ititle-bar">
            <div class="ftitle-box">
                <span class="ff"><?php echo htmlentities($k); ?>F</span>
                <span class="fff"><?php echo htmlentities($value['title']); ?></span>
            </div>
            <div class="ptitle-box">
                <?php if(!empty($value['children'])): if(is_array($value['children']) || $value['children'] instanceof \think\Collection || $value['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $value['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                    <a href="<?php echo htmlentities($item['url']); ?>"><span><?php echo htmlentities($item['title']); ?></span></a>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                <?php endif; ?>
                <a href="<?php echo htmlentities($value['url']); ?>">更多</a>
            </div>
        </div>
        <div class="imainstay-cet clear">
            <div class="imainstay-left">
                <div class="market">
                    <?php if(!empty($value['a']['photo'])): ?><a href="<?php if(!empty($value['a']['url'])): ?><?php echo htmlentities($value['a']['url']); else: ?>javascript:;<?php endif; ?>"><img src="<?php echo htmlentities($value['a']['photo']); ?>" alt="" /></a><?php endif; ?>
                </div>
            </div>

            <div class="imainstay-right clear">
                <ul class="clear">
                    <?php if(!empty($value['goods'])): if(is_array($value['goods']) || $value['goods'] instanceof \think\Collection || $value['goods'] instanceof \think\Paginator): $i = 0; $__LIST__ = $value['goods'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?>
                    <li>
                        <div class="fabric-pic">
                            <a href="<?php echo htmlentities($v['url']); ?>"><img class="lazy" src="/static/front/images/grey.png" data-original="<?php echo htmlentities($v['photo']); ?>" alt="" /></a>
                        </div>
                        <div class="fabric-title">
                            <a href="<?php echo htmlentities($v['url']); ?>"><?php echo htmlentities($v['small_title']); ?></a>
                        </div>
                        <div class="fabric-text">
                            <span class="fac-privce">￥<?php echo htmlentities($v['sell_price']); ?></span>
                            <a href="<?php echo htmlentities($v['url']); ?>" class="fac-ico"></a>
                        </div>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </div>
<?php endforeach; endif; else: echo "" ;endif; ?>
</div>
<?php endif; ?>


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
