(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-index"],{"04d9":function(t,n,e){"use strict";e.r(n);var i=e("0836"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"0836":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("74ef")),o={components:{authorize:a.default},data:function(){return{isSpread:0,isAuthShow:!1,static:"",username:"",amount:0,coupon:0,avatar:"",order_count:{}}},onLoad:function(){this.static=this.$static},onShow:function(){var t=this;this.$store.dispatch("usersStatus").then((function(){t.isAuthShow=!1;var n=t.$storage.getJson("users");t.username=n.nickname||n.username||n.mobile,t.amount=n.amount,t.coupon=n.coupon_count,t.avatar=n.avatar,t.isSpread=void 0!=n.spread?n.spread:0,t.$http.getUcenter().then((function(e){e.status&&(t.username=e.data.nickname||e.data.username||e.data.mobile,t.amount=n.amount=e.data.amount,t.coupon=n.coupon_count=e.data.coupon_count,t.avatar=n.avatar=e.data.avatar,t.isSpread=n.spread=e.data.spread,t.order_count=e.data.order_count,t.$store.commit("UPDATEUSERS",n))}))})).catch((function(){t.isAuthShow=!0}))},methods:{jump:function(t,n){var e=this,i=n||"";this.$store.dispatch("usersStatus").then((function(){e.isAuthShow=!1,""==i?e.$utils.navigateTo(t):e.$utils.navigateTo(t,i)})).catch((function(){e.isAuthShow=!0}))}}};n.default=o},"0e20":function(t,n,e){var i=e("dbab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("eca2eed2",i,!0,{sourceMap:!1,shadowMode:!1})},"2a10":function(t,n,e){t.exports=e.p+"static/img/my.3690ade3.png"},"3a3e":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={authorize:e("74ef").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"clear"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"header-warp"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"avatar"},[t.avatar?e("v-uni-image",{attrs:{src:t.avatar}}):t._e(),""==t.avatar?e("v-uni-image",{attrs:{src:t.static+"avatar.png"}}):t._e()],1),e("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v(t._s(t.username||"点击登录"))])],1),e("v-uni-view",{staticClass:"amount"},[e("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/wallet")}}},[e("v-uni-text",[t._v("￥"+t._s(t.amount||"0.00"))]),e("v-uni-text",[t._v("我的余额")])],1),e("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/coupon")}}},[e("v-uni-text",[t._v(t._s(t.coupon||0))]),e("v-uni-text",[t._v("优惠券")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-box"},[e("v-uni-view",{staticClass:"title"},[t._v("我的订单")]),e("v-uni-view",{staticClass:"list-box"},[e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("order/list",{id:1})}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")]),t.order_count.a?e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.order_count.a))]):t._e()],1),e("v-uni-view",[t._v("待付款")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("order/list",{id:2})}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")]),t.order_count.b?e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.order_count.b))]):t._e()],1),e("v-uni-view",[t._v("待发货")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("order/list",{id:3})}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")]),t.order_count.c?e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.order_count.c))]):t._e()],1),e("v-uni-view",[t._v("待收货")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("order/list",{id:4})}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")]),t.order_count.d?e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.order_count.d))]):t._e()],1),e("v-uni-view",[t._v("待评价")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("order/service")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("退换货")])],1)],1)],1),e("v-uni-view",{staticClass:"content-box"},[e("v-uni-view",{staticClass:"title"},[t._v("我的服务")]),e("v-uni-view",{staticClass:"list-box service-box"},[e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/wallet")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("我的钱包")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/collect")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("我的收藏")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/address")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("收货地址")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/coupon")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("优惠券")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/point")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("我的积分")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/setting")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("会员设置")])],1),e("v-uni-view",{staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump("ucenter/help")}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont ucenter-icon"},[t._v("")])],1),e("v-uni-view",[t._v("帮助中心")])],1)],1)],1)],1),e("authorize",{model:{value:t.isAuthShow,callback:function(n){t.isAuthShow=n},expression:"isAuthShow"}})],1)},o=[]},"46b1":function(t,n,e){"use strict";e.r(n);var i=e("3a3e"),a=e("04d9");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("c81c");var s,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6b8f502a",null,!1,i["a"],s);n["default"]=c.exports},"74ef":function(t,n,e){"use strict";e.r(n);var i=e("f06e"),a=e("b213");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("d1b6");var s,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"77fbea68",null,!1,i["a"],s);n["default"]=c.exports},"927f":function(t,n,e){var i=e("24fb"),a=e("1de5"),o=e("2a10");n=i(!1);var s=a(o);n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-6b8f502a]{width:100%;height:%?560?%;position:relative;z-index:1;background-image:url('+s+");background-repeat:no-repeat;background-size:100%}.header .header-warp[data-v-6b8f502a]{position:absolute;top:%?10?%;left:0;width:100%;height:%?510?%;z-index:2}.header .info[data-v-6b8f502a]{position:absolute;top:%?70?%;left:%?40?%}.header .info uni-view[data-v-6b8f502a]{float:left}.header .info uni-view uni-image[data-v-6b8f502a]{width:%?140?%;height:%?140?%;display:block;border-radius:50%}.header .info uni-view[data-v-6b8f502a]:last-child{height:%?140?%;line-height:%?140?%;padding-left:%?24?%;font-size:%?36?%;color:#fff}.header .amount[data-v-6b8f502a]{position:absolute;top:%?230?%;width:100%}.header .amount uni-view[data-v-6b8f502a]{width:50%;float:left}.header .amount uni-view uni-text[data-v-6b8f502a]{display:block;color:#fff;text-align:center}.header .amount uni-view uni-text[data-v-6b8f502a]:first-child{font-size:%?34?%}.header .amount uni-view uni-text[data-v-6b8f502a]:last-child{font-size:%?26?%;padding-top:%?10?%}.content[data-v-6b8f502a]{margin:%?-160?% %?40?% 0 %?40?%;position:relative;z-index:100}.content .content-box[data-v-6b8f502a]{width:100%;float:left;border-radius:%?10?%;background-color:#fff}.content .content-box[data-v-6b8f502a]:last-child{margin-top:%?30?%;margin-bottom:%?30?%}.content .content-box .title[data-v-6b8f502a]{font-size:%?32?%;color:#666;width:100%;float:left;border-bottom:%?2?% solid #ebebeb;height:%?100?%;line-height:%?100?%;text-indent:%?30?%}.content .content-box .list-box[data-v-6b8f502a]{width:100%;display:flex;flex-wrap:wrap;flex-direction:row}.content .content-box .list-box .box[data-v-6b8f502a]{width:20%;padding:%?20?% 0}.content .content-box .list-box .box uni-view[data-v-6b8f502a]{display:block;text-align:center;font-size:%?26?%;color:#666}.content .content-box .list-box .box uni-view[data-v-6b8f502a]:first-child{position:relative}.content .content-box .list-box .box uni-view:first-child .num[data-v-6b8f502a]{position:absolute;top:%?10?%;right:%?38?%;box-sizing:border-box;min-width:%?32?%;padding:0 %?6?%;color:#fff;font-weight:500;font-size:%?24?%;line-height:%?28?%;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:%?32?%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.content .content-box .list-box .box .ucenter-icon[data-v-6b8f502a]{font-size:%?50?%}.content .content-box .service-box .box[data-v-6b8f502a]{width:25%;padding:%?20?% 0}.content .content-box .service-box .box uni-view[data-v-6b8f502a]{display:block;text-align:center;font-size:%?26?%;color:#666}",""]),t.exports=n},"9f30":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{value:{type:[Boolean],default:!0},isGoHome:{type:[Boolean],default:!1},isBack:{type:[Boolean],default:!1}},data:function(){return{platformAgent:null}},mounted:function(){this.platformAgent=this.$utils.platformAgent()},methods:{login:function(){uni.navigateTo({url:"/pages/public/login"})},close:function(){if(this.$emit("input",!this.value),this.isGoHome)uni.switchTab({url:"/pages/index/index"});else{if(!this.isBack)return;var t=getCurrentPages(),n=t[t.length-1];if("pages/ucenter/index"==n.route)return;if(t.length<=1)return void uni.switchTab({url:"/pages/index/index"});uni.navigateBack()}}}};n.default=i},b213:function(t,n,e){"use strict";e.r(n);var i=e("9f30"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},c81c:function(t,n,e){"use strict";var i=e("fbe6"),a=e.n(i);a.a},d1b6:function(t,n,e){"use strict";var i=e("0e20"),a=e.n(i);a.a},dbab:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup-box[data-v-77fbea68]{width:%?500?%;background-color:#fff;position:fixed;top:50%;left:50%;margin-left:%?-250?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:311220}.popup-box .title[data-v-77fbea68]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%}.popup-box .tip[data-v-77fbea68]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%}.popup-box .bottom .item[data-v-77fbea68]{width:50%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;font-size:%?24?%;color:#666;margin-top:%?54?%}.popup-box .bottom .item.on[data-v-77fbea68]{width:100%}.flex[data-v-77fbea68]{display:flex}.popup-box .bottom .item.grant[data-v-77fbea68]{font-size:%?28?%;color:#fff;font-weight:700;background-color:#1b43c4;border-radius:0;padding:0}.mask[data-v-77fbea68]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.3);z-index:311110}',""]),t.exports=n},f06e:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t.value?e("v-uni-view",{staticClass:"popup-box"},[e("v-uni-view",{staticClass:"title"},[t._v("申请授权")]),null!=t.platformAgent&&t.platformAgent.isWechat?e("v-uni-view",{staticClass:"tip"},[t._v("获得你的公开信息（昵称、头像等）,以便为您提供更好的服务")]):t._e(),null==t.platformAgent||t.platformAgent.isWechat?t._e():e("v-uni-view",{staticClass:"tip"},[t._v("您还没有登录,请登录后在继续操作。")]),e("v-uni-view",{staticClass:"bottom flex"},[e("v-uni-view",{staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}},[t._v("随便逛逛")]),null!=t.platformAgent&&t.platformAgent.isWechat?e("v-uni-button",{staticClass:"item grant",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v("去授权")]):t._e(),null==t.platformAgent||t.platformAgent.isWechat?t._e():e("v-uni-button",{staticClass:"item grant",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v("去登录")])],1)],1):t._e(),t.value?e("v-uni-view",{staticClass:"mask",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}}):t._e()],1)},o=[]},fbe6:function(t,n,e){var i=e("927f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1142d626",i,!0,{sourceMap:!1,shadowMode:!1})}}]);