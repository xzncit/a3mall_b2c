<?php /*a:1:{s:73:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/service/view/login/index.php";i:1624067072;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>A3Mall | 客服登录</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="/static/front/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/static/service/css/style.css">
    <script src="/static/front/layui/layui.js"></script>
    <script src="/static/front/js/jquery.min.js"></script>
    <style type="text/css">body { background: #fff; } .login { padding-top: 80px; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; } .title { height: 50px; font-size: 42px; text-align: center; font-style: normal; font-weight: bold; color: #D02129; margin-bottom: 40px; }   .input-box { position: relative; width: 300px; height: 25px; margin-bottom: 20px; padding: 13px; font-size: 16px; border: 1px solid #E0E0E0; }  .input-box input { border: 0; width: 300px; position: relative; display: block; height: 100%; background: none; color: inherit; opacity: 1; font: inherit; line-height: inherit; letter-spacing: inherit; text-align: inherit; text-indent: inherit; text-transform: inherit; text-shadow: inherit; } .login-btn { width: 330px; height: 50px; line-height: 50px; font-size: 18px; text-align: center; outline: none; } .login-btn input { font-size: 18px; width: 100%; height: 50px; line-height: 50px; color: #ffffff; background: #618DFF; border: 0; border-radius: 10px; cursor: pointer; }  .login-btn input:hover { opacity: 0.8; }  .code { position: absolute; top: 5px; right: 5px; width: 150px; height: 40px; cursor: pointer; }</style>
</head>
<body>
    <div class="login">
        <form action="" id="theForm">
            <div class="title">A3Mall IM</div>
            <div class="input-box">
                <input type="text" name="username" placeholder="请输入帐号">
            </div>
            <div class="input-box">
                <input type="password" name="password" placeholder="请输入密码">
            </div>
            <div class="input-box">
                <input type="text" name="code" placeholder="请输入验证码" style="width: 150px">
                <img src="<?php echo url('login/verify'); ?>" alt="code" class="code">
            </div>
            <div class="login-btn">
                <input type="button" value="登录">
            </div>
        </form>
    </div>
    <script type="text/javascript">
        $('[name="username"]').focus();
        layui.use(["layer"],function(){
            var layer = layui.layer;

            $('[alt="code"]').on("click",function (){
                var timenow = new Date().getTime();
                var url = "<?php echo createUrl('verify'); ?>" + '?t=' + timenow;
                $(this).attr('src', url);
            });

            $(document).keypress(function(e) {
                if (e.ctrlKey && e.which == 13 || e.which == 10) {
                    $('[type="button"]').click();
                    document.body.focus();
                } else if (e.shiftKey && e.which == 13 || e.which == 10) {
                    $('[type="button"]').click();
                } else if (e.which == 13) {
                    $('[type="button"]').click();
                }
            });

            $('[type="button"]').on("click",function (){
                var that = $(this);
                if($(that).is(".disable")){
                    return false;
                }

                $(that).addClass("disable");
                $.post('<?php echo createUrl("login/post"); ?>',$("#theForm").serialize(),function(result){
                    if(result.code){
                        layer.msg(result.msg, { time:3000 },function (){
                            window.location.href = result.data;
                        });
                    }else{
                        layer.msg(result.msg);
                        $(that).removeClass("disable");
                        $('[alt="code"]').trigger("click");
                    }
                },"json");
                return false;
            });
        });
    </script>
</body>
</html>