<?php /*a:1:{s:77:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/home/view/cart/get_cart.php";i:1623379872;}*/ ?>

<?php if(!empty($data)): ?>
<div class="shop-piece">
    <?php if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
    <div class="piece-center">
        <div class="piece-picture">
            <a href="<?php echo createUrl('goods/view',['id'=>$item['goods_id']]); ?>"><img src="<?php echo htmlentities($item['photo']); ?>" style='width:55px; height:55px;' alt="" /></a>
        </div>
        <div class="piece-text">
            <span class="pie-title"><a href="<?php echo createUrl('goods/view',['id'=>$item['goods_id']]); ?>" class="list-title"><?php echo htmlentities($item['title']); ?></a><?php if(!empty($item['attr'])): ?>&nbsp;<span class="color-gray"><?php echo htmlentities($item['attr']); ?></span><?php endif; ?></span>
            <p class="pie-price">￥<?php echo htmlentities($item['price']); ?></p>
        </div>
    </div>
    <?php endforeach; endif; else: echo "" ;endif; ?>
</div>
<div class="see-more"><a href="<?php echo url('cart/index'); ?>">查看更多&gt;</a></div>
<?php else: ?>
<span class='is-empty-cart'>您还没有添加商品哦！</span>
<?php endif; ?>