<?php /*a:2:{s:71:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/seckill/view.php";i:1623379872;s:70:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/main/layout.php";i:1623379872;}*/ ?>
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
    <a href="<?php echo url('seckill/index'); ?>">秒杀</a>&nbsp;<em>/</em>
    <a href="<?php echo url('goods/view',['id'=>$data['goods']['id']]); ?>"><?php echo htmlentities($data['goods']['title']); ?></a>
</div>

<!-- 商家产品详情 -->
<div class="business-details-wrap clear">
    <div class="business-details-container clear">
        <div class="product-left-details">
            <div class="carousel-box">
                <div class="carousel-picture">
                    <?php if(!empty($data['photo']['0']['medium_image'])): ?>
                    <a href="javascript:;"><img class="image-zoom" src="<?php echo htmlentities($data['photo']['0']['medium_image']); ?>" data-zoom-image="<?php echo htmlentities($data['photo']['0']['origina_image']); ?>" alt="" /></a>
                    <?php endif; ?>
                </div>
                <div class="details-small">
                    <a href="javascript:;" class="prev-btn"></a>
                    <a href="javascript:;" class="next-btn"></a>
                    <div class="details-hide">
                        <ul>
                            <?php if(!empty($data['photo'])): if(is_array($data['photo']) || $data['photo'] instanceof \think\Collection || $data['photo'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['photo'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$photo): $mod = ($i % 2 );++$i;?>
                            <li><a href="javascript:;"><img src="<?php echo htmlentities($photo['small_image']); ?>" data-image="<?php echo htmlentities($photo['medium_image']); ?>" data-zoom-image="<?php echo htmlentities($photo['origina_image']); ?>" alt="" /></a></li>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-right-details clear">
            <form action="<?php echo url('order/confirm'); ?>" method="post" id="goodsForm">
                <input type="hidden" name="num">
                <input type="hidden" name="sku_id">
                <input type="hidden" name="id" value="<?php echo htmlentities($seckill['id']); ?>">
                <input type="hidden" name="type" value="second">
                <div class="details-product-center">
                    <div class="business-product-title">
                        <span><?php echo htmlentities($data['goods']['title']); ?></span>
                    </div>
                    <?php if($data['goods']['briefly']): ?>
                    <div class="present-text"><?php echo htmlentities($data['goods']['briefly']); ?></div>
                    <?php endif; ?>

                    <div class="surplus-box">
                        <div class="surplus-left">
                            <span class="time" id="promotion" data-nowTime="<?php echo htmlentities($seckill['now_time']); ?>" data-startTime="<?php echo htmlentities($seckill['start_time']); ?>" data-endTime="<?php echo htmlentities($seckill['end_time']); ?>">
                                <i class="before"></i>
                                <i class="day"></i>
                                <i class="hour"></i>
                                <i class="minute"></i>
                                <i class="second"></i>
                                <i class="after"></i>
                                <i class="tips"></i>
                            </span>
                        </div>
                        <div class="surplus-right">
                            己售 <?php echo htmlentities($seckill['sum_count']); ?> 件
                        </div>
                    </div>

                    <div class="marked-price-box clear">
                        <div class="retails-text">
                            <div class="rates-value">商城价：</div>
                            <div class="rates-number"><span class="p-size">￥</span><span id="sell-price-box"><?php echo htmlentities($data['goods']['sell_price']); ?></span></div>
                        </div>
                        <div class="retails-text">
                            <div class="rates-value">市场价：</div>
                            <div class="elide-price">￥<?php echo htmlentities($data['goods']['market_price']); ?></div>
                        </div>
                        <div class="evtion">
                            <div class="ev-l">商品评价：</div>
                            <div class="evaluate-text" id="rate-box"></div>
                        </div>
                    </div>
                    <div class="alternatives-box">
                        <?php if($data['attribute']): if(is_array($data['attribute']) || $data['attribute'] instanceof \think\Collection || $data['attribute'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['attribute'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
                        <div class="choice-box clear">
                            <div class="ch-tit"><?php echo htmlentities($item['name']); ?>：</div>
                            <div class="ch-text">
                                <ul>
                                    <?php if(is_array($item['list']) || $item['list'] instanceof \think\Collection || $item['list'] instanceof \think\Paginator): $i = 0; $__LIST__ = $item['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                    <li class="spec-values" data-keys="<?php echo htmlentities($item['id']); ?>_<?php echo htmlentities($vo['id']); ?>"><a href="javascript:;"><?php echo htmlentities($vo['value']); ?></a><span></span></li>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                </ul>
                            </div>
                        </div>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                        <?php endif; ?>

                        <div class="regulation-join-box">
                            <div class="regulation-center">
                                <div class="regu-input"><input class="input-regula" id="store_nums" type="text" value="1" /></div>
                                <div class="regu-submit">
                                    <span class="plus-sign-btn"></span>
                                    <span class="redu-sign-btn"></span>
                                </div>
                            </div>
                            <div class="join-shopping-cart">
                                <span><a id="buy-cart" class="shop-btn" href="javascript:;">立即购买</a></span>
                                <span class="stock-text">库存<i><?php echo htmlentities($seckill['store_nums']); ?></i>件</span>
                            </div>
                        </div>

                        <div class="condition-text">
                            服务承诺：7天退货&nbsp;&nbsp;|&nbsp;&nbsp;
                            品质承诺&nbsp;&nbsp;|&nbsp;&nbsp;
                            破损补寄&nbsp;&nbsp;|&nbsp;&nbsp;急速物流
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script type="text/javascript">
    layui.use(["layer","rate"],function (){
        var layer = layui.layer;
        var rate = layui.rate;

        var isStatusBuy = false;

        $(".time").countdown({
            isStatus: function (status,index){
                isStatusBuy = status;
                if(status == 0 || status == 2){
                    $("#buy-cart").addClass("disabled");
                }else{
                    $("#buy-cart").removeClass("disabled");
                }
            }
        });

        var products = '<?php echo json_encode($data['products'],JSON_UNESCAPED_UNICODE) ?>';
        function checkSpecSelected(){
            if($('.choice-box').length == $('.choice-box .need').length){
                return true;
            }
            return false;
        }

        function check_status(){
            var specArray = [];
            $('.choice-box').each(function(index){
                var deta = $(this).find('li.need');
                if(deta.size() > 0){
                    specArray[index]=deta.attr("data-keys");
                }else{
                    specArray[index] = "[A-Za-z0-9_\:\,]+";
                }
            });

            var js = $.parseJSON(products);
            $('.choice-box').each(function(index){
                $(this).find("li").removeClass("disabled");
                var k = index;
                $(this).find("li").each(function(){
                    var temp = specArray.slice();
                    temp[k] = $(this).attr('data-keys');
                    var flage = false;
                    for(var obj in js){
                        var reg = new RegExp(temp.join("_"));
                        if(reg.test(obj) && js[obj].store_nums > 0) flage = true;
                    }
                    if(!flage) $(this).removeClass("need").addClass("disabled");
                });
            });
        }

        $(".spec-values").on("click",function (){
            var disabled = $(this).hasClass('disabled');
            if(disabled) return;
            var flage = $(this).hasClass('need');
            $(this).parent().parent().find("li").removeClass("need");
            if(!flage){
                $(this).addClass("need");
            }

            check_status();
            if(checkSpecSelected()){
                var specArray = [];
                $('.choice-box').each(function(){
                    specArray.push($(this).find('li.need').attr('data-keys'));
                });

                var js = $.parseJSON(products);
                var arr = js[specArray.join("_")];
                $("#sell-price-box").html(arr.sell_price);
                $(".elide-price").html("￥"+arr.market_price);
                $(".stock-text i").html(arr.store_nums);
            }
        });

        $(".redu-sign-btn").on("click",function (){
            var num = parseInt($.trim($(".input-regula").val()));
            if(num - 1 == 0){
                $(".input-regula").val(1);
            }else{
                $(".input-regula").val(num - 1);
            }
        });

        $(".plus-sign-btn").on("click",function (){
            var num = parseInt($.trim($(".input-regula").val()));
            var store = parseInt($.trim($('#store_nums').text()));
            if(num+1 >= store){
                $(".input-regula").val(store);
            }else{
                $(".input-regula").val(num+1);
            }
        });

        $(".input-regula").on("change",function (){
            var num = parseInt($.trim($(".input-regula").val()));
            var store = parseInt($.trim($('#store_nums').text()));
            if(num - 1 == 0){
                $(".input-regula").val(1);
            }

            if(num > store){
                $(".input-regula").val(store);
            }
        });

        function openBuy(){
            $('#buy-cart').removeClass('disabled');
        }

        function closeBuy(){
            $('#buy-cart').addClass('disabled');
        }

        function checkStoreNums(){
            var storeNums = parseInt($.trim($('#store_nums').text()));
            if(storeNums > 0){
                openBuy();
            }else{
                closeBuy();
            }
        }

        $("#buy-cart").on("click",function (){
            if(isStatusBuy == 0){
                layer.msg("活动己结束！");
                return false;
            }else if(isStatusBuy == 2){
                layer.msg("活动未开始！");
                return false;
            }

            if(!checkSpecSelected()){
                layer.msg("请选择商品规格",{ icon : 2 });
                $('#buy-cart').removeClass('disabled');
                return false;
            }else{
                $('#buy-cart').addClass('disabled');
            }

            var specArray = [];
            $('.choice-box').each(function(){
                specArray.push($(this).find('li.need').attr('data-keys'));
            });

            var sku = specArray.join("_");
            if(sku != ''){
                var js = $.parseJSON(products);
                sku = js[sku].product_id;
            }

            var num = parseInt($.trim($('#store_nums').val()));
            $('[name="num"]').val(num);
            $('[name="sku_id"]').val(sku);
            $("#goodsForm").submit();
            return false;
        });

        rate.render({ elem: '#rate-box' ,value: <?php echo htmlentities($data['comment_point']); ?> ,readonly: true });

    });
</script>

<!-- 商品列表 -->
<div class="list-good-container clear">
    <div class="list-goods-left">
        <div class="sales-ranking-tit">热销商品</div>
        <div class="sales-ranking-text">
            <ul>
                <?php if(!empty($data['goods_salt'])): if(is_array($data['goods_salt']) || $data['goods_salt'] instanceof \think\Collection || $data['goods_salt'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['goods_salt'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?>
                <li>
                    <span><a href="<?php echo htmlentities($value['url']); ?>"><img src="<?php echo htmlentities($value['thumb']); ?>" alt="" /></a></span>
                    <p class="price-text">￥<?php echo htmlentities($value['sell_price']); ?></p>
                    <em class="pro-tit"><a href="<?php echo htmlentities($value['url']); ?>" class="list-title"><?php echo htmlentities($value['title']); ?></a></em>
                </li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
                <?php endif; ?>
            </ul>
        </div>
    </div>
    <div class="list-goods-right">
        <!-- 产品详情-商品详情  -->
        <div class="product-commodity">
            <div class="product-commodity-title">
                <ul>
                    <li><a href="javascript:;">商品详情</a></li>
                    <li><a href="javascript:;">商品评价( <em class="color-red"><?php echo htmlentities($data['comment_count']); ?></em> )</a></li>
                </ul>
            </div>
            <div class="product-commodity-text">
                <div class="goods-tab-box commodity-picture">
                    <ul class="parameter clear">
                        <?php if(is_array($data['model']) || $data['model'] instanceof \think\Collection || $data['model'] instanceof \think\Paginator): $i = 0; $__LIST__ = $data['model'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$model): $mod = ($i % 2 );++$i;?>
                        <li><?php echo htmlentities($model['data_name']); ?>：<?php echo htmlentities($model['attribute_value']); ?></li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                    <?php echo $data['goods']['content']; ?>
                </div>
                <div id="comments-list-box" class="goods-tab-box"></div>
                <script type="text/javascript">
                    $.get("<?php echo url('comments/index',['id'=>$data['goods']['id'],'type'=>'second']); ?>",function (result){
                        $("#comments-list-box").html(result.data);
                    },"json");

                    $(document).on("click",".pagination a",function (){
                        if($(this).is(".disabled") || $(this).is(".active")){
                            return false;
                        }

                        var url = $(this).attr("href");
                        $.get(url,function (result){
                            $("#comments-list-box").html(result.data);
                        },"json");

                        return false;
                    });
                </script>
            </div>
        </div>
    </div>
</div>





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
