<?php /*a:1:{s:73:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/home/view/goods/comments.php";i:1623379872;}*/ ?>

<div class="estimate-box">
    <div class="estimate-title">全部评价</div>
    <div class="estimate-cent">
        <?php if(!empty($data)): if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
        <div class="criticism-container clear">
            <div class="commentary-left">
                <div class="statement-comm"><?php echo $vo['contents']; ?></div>
                <div class="review-date"><?php echo htmlentities(date("Y-m-d H:i:s",!is_numeric($vo['comment_time'])? strtotime($vo['comment_time']) : $vo['comment_time'])); ?></div>
                <?php if(!empty($vo['reply_content'])): ?>
                <div class="administrator-reply">
                    <div class="admi-title">管理员回复： </div>
                    <div class="admi-text">
                        <div><?php echo $vo['reply_content']; ?></div>
                        <div class="response-comm"><?php echo htmlentities(date("Y-m-d H:i:s",!is_numeric($vo['reply_time'])? strtotime($vo['reply_time']) : $vo['reply_time'])); ?></div>
                    </div>
                </div>
                <?php endif; ?>
            </div>
            <div class="commentary-right">
                <div class="review-picture"><img src="<?php echo htmlentities($vo['avatar']); ?>" alt="" /></div>
                <div class="grade-box">
                    <div><?php echo htmlentities($vo['username']); ?></div>
                    <span class="gold"><?php echo htmlentities($vo['group_name']); ?></span>
                </div>
            </div>
        </div>
        <?php endforeach; endif; else: echo "" ;endif; else: ?>
        <div style="text-align: center; padding: 20px 0; font-size: 14px;"><?php echo htmlentities($empty); ?></div>
        <?php endif; ?>
    </div>
</div>
<div class="page-wrap evaluate-page clear">
    <?php echo $page; ?>
</div>