<?php /*a:2:{s:81:"/Users/huangjiapeng/www/A3Mall/A3Mall-B2C/A3Mall/app/install/view/index/check.php";i:1623379872;s:81:"/Users/huangjiapeng/www/A3Mall/A3Mall-B2C/A3Mall/app/install/view/main/layout.php";i:1623379872;}*/ ?>
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
    <div class="step">
        <ul>
            <li class="current"><em>1</em>检测环境</li>
            <li><em>2</em>设置数据</li>
            <li><em>3</em>完成安装</li>
        </ul>
    </div>

    <div class="server">
        <table width="100%">
            <tr>
                <td class="td1">运行环境</td>
                <td class="td1" width="30%">所需配置</td>
                <td class="td1" width="40%">当前配置</td>
            </tr>

            <?php if(is_array($env) || $env instanceof \think\Collection || $env instanceof \think\Paginator): $i = 0; $__LIST__ = $env;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <tr>
                <td><?php echo htmlentities($item[0]); ?></td>
                <td><?php echo htmlentities($item[1]); ?></td>
                <td><i class="icon_<?php echo htmlentities($item[4]); ?>"></i><?php echo htmlentities($item[3]); ?></td>
            </tr>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </table>

        <table width="100%">
            <tr>
                <td class="td1">目录/文件</td>
                <td class="td1" width="30%">所需状态</td>
                <td class="td1" width="40%">当前状态</td>
            </tr>

            <?php if(is_array($dirFile) || $dirFile instanceof \think\Collection || $dirFile instanceof \think\Paginator): $i = 0; $__LIST__ = $dirFile;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <tr>
                <td><?php echo htmlentities($item[3]); ?></td>
                <td>可写</td>
                <td><i class="icon_<?php echo htmlentities($item[2]); ?>"></i><?php echo htmlentities($item[1]); ?></td>
            </tr>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </table>

        <table width="100%">
            <tr>
                <td class="td1">扩展依赖</td>
                <td class="td1" width="30%">类型</td>
                <td class="td1" width="40%">检查结果</td>
            </tr>

            <?php if(is_array($func) || $func instanceof \think\Collection || $func instanceof \think\Paginator): $i = 0; $__LIST__ = $func;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?>
            <tr>
                <td><?php echo htmlentities($item[0]); ?></td>
                <td><?php echo htmlentities($item[3]); ?></td>
                <td><i class="icon_<?php echo htmlentities($item[2]); ?>"></i><?php echo htmlentities($item[1]); ?></td>
            </tr>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </table>
    </div>

    <div class="bottom tac">
        <a href="javascript:;" onclick="location.reload()" class="btn">重新检测</a>
        <?php if($isNext == 'true'): ?>
        <a href="<?php echo createUrl('config'); ?>" class="btn">下一步</a>
        <?php endif; ?>
    </div>
</section>
</div>

<div class="footer">
    &copy; Copyright 2019-2028 <a href="http://www.a3-mall.com/" target="_blank">a3-mall.com</a>, Inc.All Rights Reserved.
</div>
</body>
</html>
