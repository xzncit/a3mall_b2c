<?php /*a:2:{s:81:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/install/view/index/complete.php";i:1623379872;s:78:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/install/view/main/layout.php";i:1623379872;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/install/css/style.css">
    <script type="text/javascript" src="/static/install/js/jquery.min.js"></script>
    <title>A3Mall 安装向导</title>
</head>
<body>
<div class="wrap">
    <div class="header">
        <h1 class="logo">logo</h1>
        <div class="icon_install">安装向导</div>
        <div class="version"></div>
    </div>

    <section class="section">
    <div class="success_tip cc">
        <a href="<?php echo createUrl('admin/index/index'); ?>" target="_blank" class="f16 b">安装完成，进入后台管理</a>
        <p>删除"app/install/data"目录下的"install.lock"可再次重新安装。<p>
        <p>再次感谢您选择 A3Mall，希望您会喜欢我们的产品！<p>
        <p>用户名：<?php echo htmlentities($data['admin_user']); ?> &nbsp; 密码：<?php echo htmlentities($data['admin_password']); ?><p>
    </div>

    <div class="bottom tac">
        <a href="<?php echo createUrl('admin/index/index'); ?>" target="_blank" class="btn">登录后台</a>
        <a href="<?php echo createUrl('home/index/index'); ?>" target="_blank" class="btn">打开前台</a>
    </div>
</section>



</div>

<div class="footer">
    &copy; Copyright 2019-2028 <a href="http://www.a3-mall.com/" target="_blank">a3-mall.com</a>, Inc.All Rights Reserved.
</div>
</body>
</html>
