<?php /*a:1:{s:73:"/Users/huangjiapeng/www/A3MallPro/A3Mall/app/service/view/index/index.php";i:1625170028;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>客服中心</title>
    <link rel="stylesheet" href="/static/front/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/static/front/js/mescroll/mescroll.css">
    <link rel="stylesheet" href="/static/service/css/style.css">
    <script src="/static/front/layui/layui.js"></script>
    <script src="/static/front/js/jquery.min.js"></script>
    <script src="/static/front/js/jquery.slimscroll.min.js"></script>
    <script src="/static/front/js/mescroll/mescroll.min.js"></script>
    <script src="/static/front/js/vue/vue.js"></script>
    <style type="text/css">[v-cloak]{ display: none; }</style>
    <script type="text/javascript">
        $.ajaxSetup({
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            complete:function(XMLHttpRequest,textStatus){
                var res = XMLHttpRequest.responseText;
                try{
                    var jsonData = JSON.parse(res);
                    if(jsonData.code == -1000){
                        window.location.href = '<?php echo createUrl("login/index"); ?>';
                    }else if(jsonData.code == -999){
                        layer.msg(jsonData.msg,{ icon: 2, time: 5000 },function () {
                            window.history.go(-1);
                        });
                    }
                }catch(e){}
            }
        });
    </script>
</head>
<body>

<div id="app" v-cloak>
    <div class="online" @click="isEmojiShow = false">
        <div class="header">
            <div class="l">
                <div class="shop-avatar"><img src="<?php echo htmlentities($service['avatar']); ?>"></div>
                <div class="shop-name"><?php echo htmlentities($service['nickname']); ?></div>
                <div class="status">在线</div>
            </div>
            <div class="m" v-if="bindUsers">与{{ nickname }}正在聊天中...</div>
            <div class="r">
                <a href="<?php echo createUrl('login/logout'); ?>">退出</a>
            </div>
        </div>

        <div class="friends">
            <div class="search">
                <span class="fa fa-search"></span>
                <input type="text" v-model="search" @input="onSearchInput" @blur="onSearchBlur" placeholder="搜索">
            </div>

            <div class="friends-list clear">
                <div class="menu-scroll-box">

                    <div
                            v-if="searchData.length > 0"
                            class="friends-box"
                            v-for="(item,index) in searchData"
                            @click="onSelectFirends(item)"
                            :class="{active: bindUserId == item.uid}"
                    >
                        <div class="friends-avatar"><img :class="{gray: item.online==1}" v-if="item.avatar" :src="item.avatar"></div>
                        <div class="friends-content">
                            <div class="friends-name" :class="{'friends-name-gray': item.online==1}">{{ item.username }}</div>
                            <div class="friends-info">{{ item.message }}</div>
                        </div>
                        <div class="friends-time">
                            <span>{{ item.last_time }}</span>
                            <span v-if="item.count > 0">{{ item.count }}</span>
                        </div>
                    </div>

                    <div
                            v-if="searchData.length <= 0 && !searchLock"
                            class="friends-box"
                            v-for="(item,index) in friends"
                            @click="onSelectFirends(item)"
                            :class="{active: bindUserId == item.uid}"
                    >
                        <div class="friends-avatar"><img :class="{gray: item.online==1}" v-if="item.avatar" :src="item.avatar"></div>
                        <div class="friends-content">
                            <div class="friends-name" :class="{'friends-name-gray': item.online==1}">{{ item.username }}</div>
                            <div class="friends-info">{{ item.message }}</div>
                        </div>
                        <div class="friends-time">
                            <span>{{ item.last_time }}</span>
                            <span v-if="item.count > 0">{{ item.count }}</span>
                        </div>
                    </div>

                    <div v-if="searchData.length <= 0 && searchLock" class="friends-box">
                        <div style="padding: 10px; text-align: center;font-size: 13px;">您搜索的<span style="color: red;"> {{ search }} </span>用户不存在</div>
                    </div>

                </div>
            </div>
        </div>

        <div class="message">
            <div class="message-wrap">
                <div class="message-box">
                    <div ref="mescroll" class="mescroll">
                        <div v-if="bindUserId <= 0" class="message-icon-box"></div>
                        <div v-if="isEnd" class="msg-end">没有更多消息了</div>
                        <div v-if="bindUserId > 0" class="msg-wrap" v-for="msg in msgList" :key="msg.id" :id="msg.VIEW_ID" :class="msg.sClass">
                            <div class="msg-item">
                                <div class="avatar" style="overflow: hidden; border-radius: 25px;"><img v-if="msg.avatar" :src="msg.avatar" /></div>
                                <div class="content" v-if="msg.type=='text'">{{msg.content}}</div>
                                <div class="content content-image" v-if="msg.type=='image'"><img :src="msg.content"></div>
                                <div class="goods" v-if="msg.type=='goods'">
                                    <div class="goods-photo">
                                        <img :src="msg.goods.photo" />
                                    </div>
                                    <div class="goods-name">{{msg.goods.goods_name}}</div>
                                    <div class="goods-store-nums">
                                        <span>库存：{{msg.goods.store_nums}}</span>
                                        <span>销量：{{msg.goods.sale}}</span>
                                    </div>
                                    <div class="goods-price">￥{{msg.goods.sell_price}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="emoji-box" v-if="isEmojiShow" @click.stop="isEmojiShow=true">
                <div class="emoji-header">
                    <span>表情</span>
                    <span @click.stop="onEmojiClose">X</span>
                </div>
                <div class="emoji-content">
                    <div v-for="(item,index) in emoji" :class="{'show':emojiActive==index}">
                        <span  v-for="(value,j) in item.data" @click="addEmoji(value)">{{ value }}</span>
                    </div>
                </div>
                <div class="emoji-footer">
                    <span v-for="(item,index) in emoji" :class="{active:emojiActive==index}" @click="changeEmoji(index)">{{ item.title }}</span>
                </div>
            </div>
            <div class="send" v-if="bindUserId > 0">
                <div class="tools-box">
                    <div><span class="tool-box tools-emoticon" @click.stop="isEmojiShow = !isEmojiShow"></span></div>
                    <div>
                        <a href="javascript:;" class="file">
                            <span class="tool-box tools-image" id="upload">
                                <input type="file" @change="upImage($event)">
                            </span>
                        </a>
                    </div>
<!--                    <div><span class="tool-box tools-forward"></span></div>-->
                </div>
                <textarea class="textarea"
                     v-model="content"
                     placeholder="请输入内容"
                     ref="message"
                ></textarea>
                <div class="send-btn">
                    <span @click="onSendMessage">发送</span>
                </div>
            </div>
        </div>

        <div class="sidebar">
            <div class="side-tab"></div>
            <div class="side-scroll-box">
                <div class="side-goods">

                    <div class="goods" v-for="(item,index) in goods">
                        <div class="goods-photo">
                            <img :src="item.photo" />
                        </div>
                        <div class="goods-name">{{ item.title }}</div>
                        <div class="goods-store-nums">
                            <span>库存：{{ item.store_nums }}</span>
                            <span>销量：{{ item.sale }}</span>
                        </div>
                        <div class="goods-price">
                            <span>￥{{ item.sell_price }}</span>
                            <span @click="onPushGoods(item)">推送</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(function (){
        $(".menu-scroll-box").slimScroll({ height: '504px' });
        $(".side-scroll-box").slimScroll({ height: '550px' });
    });
    var app = new Vue({
        el: '#app',
        data: {
            emoji:[
                {
                    title: "常用表情",
                    data: ["😀","😁","😂","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","😇","😐","😑","😶","😏","😣","😥","😮","😯","😪","😫","😴","😌","😛","😜","😝","😒","😓","😔","😕","😲","😷","😖","😞","😟","😤","😢","😭","😦","😧","😨","😬","😰","😱","😳","😵","😡","😠","😈"]
                },
                {
                    title: "人物 & 手势",
                    data: ["👹","👺","💀","👻","👽","👦","👧","👨","👩","👴","👵","👶","👱","👮","👲","👳","👷","👸","💂","🎅","👰","👼","💆","💇","🙍","🙎","🙅","🙆","💁","🙋","🙇","🙌","🙏","👤","👥","🚶","🏃","👯","💃","👫","👬","👭","💏","💑","👪","💪","👈","👉","☝","👆","👇","✌","✋","👌","👍","👎","✊","👊","👋","👏","👐","✍"]
                },
                {
                    title: "自然",
                    data: ["🌎","🌍","🌏","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌙","🍀","🌿","☘","🌱","🌴","🌳","⭐","🌟","✨","☄","🪐","🌞","☀","🌤","⛅","🌥","🌦","☁","🌧","⛈","🌩","⚡","⚡","💥","❄","🌨","☃","⛄","🌬","💨","🌪","🌫","☔","🖋","💫"]
                },
                {
                    title: "美食 & 饮料",
                    data: ["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🥑","🍆","🌶","🥒","🥬","🥦","🧄","🌽","🧅","🥕","🥗","🥔","🍠","🥜","🍯","🍞","🥐","🥖","🥨","🥯","🧇","🥞","🧀","🍗","🍖","🥩","🍤","🥚","🥚","🍳","🥓","🍔","🍟","🌭","🍕","🍝","🥪","🌮","🌯","🥙","🧆","🍜","🍲","🥘","🧂","🧈","🍥","🍱"]
                }
            ],
            isEmojiShow: false,
            emojiActive: 0,
            search: "",
            searchLock: false,
            searchData:[],
            connected: false,
            connecting: false,
            timer: 3000,
            link: 0,
            websocket: null,
            mescroll: null,
            content: "",
            pageNum: 1, // 页码
            pageSize: 10, // 页长
            isEnd: false, // 是否无消息
            msgList: [],
            goods: [],
            friends: [],
            bindUsers: false,
            bindUserId: 0,
            nickname: ""
        },
        mounted: function () {
            this.getGoods();
            this.getFriends();

            this.mescroll = new MeScroll(this.$refs.mescroll,{
                down: {
                    auto: false, // 是否在初始化完毕之后自动执行下拉回调callback; 默认true
                    callback: this.downCallback, // 下拉刷新的回调
                    autoShowLoading:false
                },
                up: {
                    auto: false,
                }
            });

            this.initWebSocket();
        },
        methods: {
            onEmojiClose: function (){
                this.isEmojiShow = !this.isEmojiShow;
            },
            changeEmoji: function (index){
                this.emojiActive = index;
            },
            addEmoji: function (data){
                var message = this.$refs.message;
                if (message.selectionStart || message.selectionStart === 0) {
                    var startPos = message.selectionStart;
                    var endPos = message.selectionEnd;
                    this.content = message.value.substring(0, startPos) + data + message.value.substring(endPos, message.value.length);

                    message.setSelectionRange(endPos + data.length, endPos + data.length);
                    message.focus();
                } else {
                    this.content += data;
                }
            },
            onSearchInput: function (){
                var that = this;
                this.searchLock = true;
                this.searchData = this.friends.filter(function (res){
                    return Object.keys(res).some(function(key) {
                        return String(res[key]).toLowerCase().indexOf(that.search) > -1
                    });
                });
            },
            onSearchBlur: function (){
                this.searchLock = false;
            },
            onSelectFirends: function (event){
                if(this.bindUserId == event.uid){
                    this.bindUserId = 0;
                    this.bindUsers = false;
                    this.nickname = "";
                    this.isEnd = false;
                    return ;
                }

                this.nickname = event.username;
                this.bindUsers = true;
                this.bindUserId = event.uid;
                this.updateMessageStatus(this.bindUserId);
                this.msgList = [];
                this.isEnd = false;
                this.mescroll.triggerDownScroll();
            },
            onPushGoods: function (data){
                if(!this.bindUsers){
                    return false;
                }

                this.send({
                    type: "goods",
                    send_type: "0",
                    uid: this.bindUserId,
                    goods_id: data.id
                });
            },
            initWebSocket: function (){
                if(this.isConnect()){
                    return false;
                }

                this.websocket = new WebSocket("<?php echo htmlentities($websocket_url); ?>");
                this.connecting = true;
                this.websocket.onopen = this.onopen;
                this.websocket.onmessage = this.onmessage;
                this.websocket.onclose = this.onclose;
                this.websocket.onerror = this.onerror;
            },
            isConnect: function(){
                if (this.connected || this.connecting) {
                    return true;
                }

                return false;
            },
            onmessage: function (res){
                let obj = JSON.parse(res.data);
                if(obj == undefined){
                    return;
                }

                switch(obj.type){
                    case "ping":
                        this.websocket.send('{"type":"pong"}');
                        break;
                    case "bind":
                        if(obj.status == 0){
                            layui.use("layer",function (){
                                layui.layer.msg("登录错误");
                            });
                        }
                        break;
                    case "say":
                    case "goods":
                        this.say(obj.data);
                        break;
                    case "error":
                        layui.use("layer",function (){
                            layui.layer.msg(obj.info);
                        });
                        break;
                }
            },
            send: function (data){
                if(typeof data == "object"){
                    data = JSON.stringify(data);
                }
                this.websocket.send(data);
            },
            onopen: function (){
                this.connecting = false;
                this.connected = true;
                this.send({type:"online", auth:"<?php echo session('service_session_id'); ?>"});
            },
            onerror: function (event){
                console.log(event)
            },
            onclose: function (){
                if(this.link > 2){
                    return false;
                }

                var that = this;
                this.link += 1;
                this.connecting = false;
                this.connected = false;
                setTimeout(function (){
                    that.initWebSocket();
                },this.timer);
            },
            onSendMessage: function (){
                this.send({ type: "send",send_type: "text",content: this.content,"uid": this.bindUserId });
                this.content = "";
            },
            say: function (data){
                this.getFriends();
                if(!this.bindUsers){
                    return false;
                }

                data.VIEW_ID = "msg"+data.id;
                this.msgList.push(data);
                this.$nextTick(function (){
                    var div = document.querySelector('#' + data.VIEW_ID);
                    var top = div.getBoundingClientRect().top;
                    if(this.msgList.length <= 3){
                        this.mescroll.scrollTo(top - 100, 0);
                    }else{
                        this.mescroll.scrollTo(Math.abs(top) + 99999, 0);
                    }
                });

                this.getFriends();
                this.updateMessageStatus(this.bindUserId);
            },
            getGoods: function (){
                var that = this;
                $.get("<?php echo createUrl('index/get_goods'); ?>",function (res){
                    that.goods = res.data;
                },"json");
            },
            updateMessageStatus: function (uid){
                for(var obj in this.friends){
                    if(this.friends[obj].uid == uid){
                        this.friends[obj].count = 0;
                        break;
                    }
                }

                $.get('<?php echo createUrl("index/update_message_status"); ?>',{ uid: uid, id: "<?php echo session('service_user_id'); ?>" });
            },
            getFriends: function (){
                var that = this;
                $.get("<?php echo createUrl('index/get_friends'); ?>",{
                    id: "<?php echo session('service_user_id'); ?>"
                },function (res){
                    that.friends = res.data;
                },"json");
            },
            downCallback() {
                var that = this;
                $.get("<?php echo createUrl('index/get_message_list'); ?>",{
                    uid: this.bindUserId,
                    page: this.msgList[0] != undefined ? this.msgList[0].id : 0
                },function (res){
                    that.mescroll.endSuccess();
                    if(res.data.length < 10){
                        that.isEnd = true; // 标记已无更多消息
                        that.mescroll.lockDownScroll(true); // 锁定下拉
                    }

                    res.data.forEach(val=>{
                        val.VIEW_ID = "msg" + val.id // 不以数字开头
                    });

                    let topMsg = that.msgList[0];
                    that.msgList = res.data.concat(that.msgList);

                    that.$nextTick(()=>{
                        if(that.msgList.length <= 10){
                            // 第一页直接滚动到底部 ( this.pageNum已在前面加1 )
                            that.mescroll.scrollTo(99999, 0)
                        }else if(topMsg){
                            // 保持顶部消息的位置
                            var div = document.querySelector('#' + topMsg.VIEW_ID);
                            var top = div.getBoundingClientRect().top;
                            that.mescroll.scrollTo(top - 100, 0);
                        }
                    })
                },"json");
            },
            upImage: function (event) {
                var form = new FormData();
                if(event.target.value){
                    form.append("module","online");
                    form.append("method","image");
                    form.append("uid",this.bindUserId);
                    form.append("file",event.target.files[0]);
                    var that = this;
                    this.uploadfiy(form,"<?php echo createUrl('index/upload',[],false,true); ?>",function (res){
                        if(res.code == 0){

                        }else{
                            layui.use("layer",function (){
                                layui.layer.msg(res.msg);
                            });
                        }
                    });
                }
            },
            uploadfiy: function(form,url,fn){
                if(window.XMLHttpRequest){
                    var xhr = new XMLHttpRequest();
                }else{
                    var xhr = new ActiveXObject('Microsoft.XMLHTTP');
                }
                xhr.open('POST',url);
                xhr.send(form);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4){
                        var res = JSON.parse(xhr.response);
                        fn(res);
                    }
                };
            },
        }
    });
</script>
</body>
</html>