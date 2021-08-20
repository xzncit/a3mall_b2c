<?php /*a:2:{s:79:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/install/view/index/config.php";i:1623379872;s:78:"/Users/huangjiapeng/www/A3MallPro/base/A3Mall/app/install/view/main/layout.php";i:1623379872;}*/ ?>
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
            <li class="on"><em>1</em>检测环境</li>
            <li class="current"><em>2</em>设置数据</li>
            <li><em>3</em>完成安装</li>
        </ul>
    </div>

    <form id="install_form" action="<?php echo createUrl('complete'); ?>" method="post">
        <div class="server">
            <table width="100%">
                <tr>
                    <td class="td1" width="100">数据库信息</td>
                    <td width="210"></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">数据库服务器</td>
                    <td><label><input type="text" name="hostname" value="127.0.0.1" class="input"></label></td>
                    <td><span class="gray">数据库服务器地址，一般为127.0.0.1</span></td>
                </tr>

                <tr>
                    <td class="tar">数据库名</td>
                    <td><label><input type="text" name="database" value="a3mall" class="input"></label></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">数据库用户名</td>
                    <td><label><input type="text" name="username" value="" class="input"></label></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">数据库密码</td>
                    <td><label><input type="password" name="password" value="" class="input"></label></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">数据库端口</td>
                    <td><label><input type="text" name="hostport" value="3306" class="input"></label></td>
                    <td><span class="gray">数据库服务连接端口，一般为3306</span></td>
                </tr>

                <tr>
                    <td class="tar">数据表前缀</td>
                    <td><label><input type="text" name="prefix" value="mall_" class="input"></label></td>
                    <td><span class="gray">同一个数据库运行多个系统时请修改为不同的前缀</span></td>
                </tr>
            </table>

            <table width="100%">
                <tr>
                    <td class="td1" width="100">超级管理员</td>
                    <td width="210"></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">管理员账号</td>
                    <td><label><input type="text" name="admin_user" value="" class="input"></label></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">管理员密码</td>
                    <td><label><input type="password" name="admin_password" value="" class="input"></label></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">确认密码</td>
                    <td><label><input type="password" name="admin_password_confirm" value="" class="input"></label></td>
                    <td></td>
                </tr>
            </table>

            <table width="100%">
                <tr>
                    <td class="td1" width="100">其他选项</td>
                    <td width="210"></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="tar">演示数据</td>
                    <td>
                        <label class="radio"><input type="radio" name="is_demo" value="1"><span>是</span></label>
                        <label class="radio"><input type="radio" name="is_demo" value="0" checked><span>否</span></label>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>

        <div id="response_tips" style="display: none; text-align: center; margin-bottom: 10px;"></div>

        <div class="bottom tac">
            <a href="<?php echo createUrl('config'); ?>" class="btn">上一步</a>
            <button type="button" id="submit" class="btn install_btn">创建数据</button>
        </div>
    </form>
</section>

<div class="loading" style="display: none;"><span>请稍后...</span></div>
<script type="text/javascript">
    $('#submit').click(function () {
        $('#response_tips').hide();
        const data = $('form').serializeArray();

        $.ajax({
            type: 'post',
            url: "<?php echo createUrl('config'); ?>",
            data: data,
            dataType: 'json',
            beforeSend: function () {
                $('.loading').show();
                $('#submit').attr('disabled', true).addClass('btn_old');
            },
            success: function (res) {
                if (res.status === 1) {
                    self.location.href = res.url;
                } else {
                    $('#response_tips').show().html('<span class="tips_error">' + res.msg + '</span>');
                }
            },
            complete: function () {
                $('.loading').hide();
                $('#submit').removeAttr('disabled').removeClass('btn_old');
            },
            error: function (err) {
                $('#response_tips').show().html('<span class="tips_error">网络请求错误</span>');
            }
        })
    })
</script>

</div>

<div class="footer">
    &copy; Copyright 2019-2028 <a href="http://www.a3-mall.com/" target="_blank">a3-mall.com</a>, Inc.All Rights Reserved.
</div>
</body>
</html>