(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-collect"],{"084d":function(t,e,i){"use strict";i.r(e);var n=i("8285"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},1207:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={navbar:i("c4a9").default,mescrollBody:i("65f4").default,authorize:i("85ba").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"collect clear"},[i("navbar",{attrs:{"title-color":"#ffffff",background:"#1b43c4",iSimmersive:!1,placeholder:!0,title:"我的收藏"},model:{value:t.screenHeight,callback:function(e){t.screenHeight=e},expression:"screenHeight"}}),i("mescroll-body",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption,height:t.screenHeight+"px"},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"list-box"},t._l(t.result,(function(e){return i("v-uni-view",{key:e.id,staticClass:"list-item"},[i("v-uni-view",{staticClass:"left-pic"},[i("v-uni-view",{staticClass:"pic"},[i("v-uni-image",{attrs:{src:e.thumb}})],1)],1),i("v-uni-view",{staticClass:"goods"},[i("v-uni-view",{staticClass:"t"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"m"},[t._v(t._s(e.attr))]),i("v-uni-view",{staticClass:"b"},[i("v-uni-view",[t._v("￥"+t._s(e.price))]),i("v-uni-view",{staticClass:"iconfont del",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delCollect(e)}}},[t._v("")])],1)],1)],1)})),1)],1),i("authorize",{model:{value:t.isAuthShow,callback:function(e){t.isAuthShow=e},expression:"isAuthShow"}})],1)},o=[]},"15fd":function(t,e,i){"use strict";i.r(e);var n=i("c35e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2965:function(t,e,i){var n=i("bf5d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("794081e0",n,!0,{sourceMap:!1,shadowMode:!1})},5028:function(t,e,i){"use strict";i.r(e);var n=i("1207"),a=i("15fd");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("557b");var l,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4a6ea51e",null,!1,n["a"],l);e["default"]=r.exports},"557b":function(t,e,i){"use strict";var n=i("2965"),a=i.n(n);a.a},8285:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{value:{type:[Boolean],default:!0},isGoHome:{type:[Boolean],default:!1},isBack:{type:[Boolean],default:!1}},data:function(){return{platformAgent:null}},mounted:function(){this.platformAgent=this.$utils.platformAgent()},methods:{login:function(){uni.navigateTo({url:"/pages/public/login"})},close:function(){if(this.$emit("input",!this.value),this.isGoHome)uni.switchTab({url:"/pages/index/index"});else{if(!this.isBack)return;var t=getCurrentPages(),e=t[t.length-1];if("pages/ucenter/index"==e.route)return;if(t.length<=1)return void uni.switchTab({url:"/pages/index/index"});uni.navigateBack()}}}};e.default=n},"85ba":function(t,e,i){"use strict";i.r(e);var n=i("8d8d"),a=i("084d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c3c8");var l,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"77fbea68",null,!1,n["a"],l);e["default"]=r.exports},"8d8d":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.value?i("v-uni-view",{staticClass:"popup-box"},[i("v-uni-view",{staticClass:"title"},[t._v("申请授权")]),null!=t.platformAgent&&t.platformAgent.isWechat?i("v-uni-view",{staticClass:"tip"},[t._v("获得你的公开信息（昵称、头像等）,以便为您提供更好的服务")]):t._e(),null==t.platformAgent||t.platformAgent.isWechat?t._e():i("v-uni-view",{staticClass:"tip"},[t._v("您还没有登录,请登录后在继续操作。")]),i("v-uni-view",{staticClass:"bottom flex"},[i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("随便逛逛")]),null!=t.platformAgent&&t.platformAgent.isWechat?i("v-uni-button",{staticClass:"item grant",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("去授权")]):t._e(),null==t.platformAgent||t.platformAgent.isWechat?t._e():i("v-uni-button",{staticClass:"item grant",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("去登录")])],1)],1):t._e(),t.value?i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)},o=[]},9696:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup-box[data-v-77fbea68]{width:%?500?%;background-color:#fff;position:fixed;top:50%;left:50%;margin-left:%?-250?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:311220}.popup-box .title[data-v-77fbea68]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%}.popup-box .tip[data-v-77fbea68]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%}.popup-box .bottom .item[data-v-77fbea68]{width:50%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;font-size:%?24?%;color:#666;margin-top:%?54?%}.popup-box .bottom .item.on[data-v-77fbea68]{width:100%}.flex[data-v-77fbea68]{display:-webkit-box;display:-webkit-flex;display:flex}.popup-box .bottom .item.grant[data-v-77fbea68]{font-size:%?28?%;color:#fff;font-weight:700;background-color:#1b43c4;border-radius:0;padding:0}.mask[data-v-77fbea68]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.3);z-index:311110}',""]),t.exports=e},bf5d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-4a6ea51e] .mescroll-body-content{background-color:#fafafa}.collect[data-v-4a6ea51e]{width:100%;height:100vh;background-color:#fafafa}.list-box[data-v-4a6ea51e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fafafa}.list-box .list-item[data-v-4a6ea51e]{width:88%;height:%?180?%;margin:0 auto;background-color:#fff;margin-bottom:%?20?%;border-radius:%?10?%;font-size:%?28?%;padding:%?20?% %?20?%;position:relative}.list-box .list-item[data-v-4a6ea51e]:first-child{margin-top:%?20?%}.list-box .list-item .left-pic[data-v-4a6ea51e]{position:absolute;left:0;top:0;z-index:999;width:%?160?%;height:%?220?%}.list-box .list-item .left-pic .pic[data-v-4a6ea51e]{float:right;margin-top:%?30?%;width:%?160?%}.list-box .list-item .left-pic .pic uni-image[data-v-4a6ea51e]{width:%?160?%;height:%?160?%}.list-box .list-item .goods[data-v-4a6ea51e]{float:right;padding-left:%?160?%;font-size:%?28?%;color:#333}.list-box .list-item .goods .t[data-v-4a6ea51e]{width:100%;min-height:%?50?%;max-height:%?80?%;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}.list-box .list-item .goods .m[data-v-4a6ea51e]{color:#666;font-size:%?26?%;display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.list-box .list-item .goods .b[data-v-4a6ea51e]{height:%?60?%;padding-top:%?8?%}.list-box .list-item .goods .b uni-view[data-v-4a6ea51e]:first-child{float:left;line-height:%?60?%;color:red;font-size:%?34?%}.list-box .list-item .goods .b uni-view[data-v-4a6ea51e]:last-child{float:right}.list-box .list-item .goods .b .del[data-v-4a6ea51e]{margin-top:%?15?%;color:#666;text-align:center;border-radius:%?50?%;width:%?50?%;height:%?50?%;line-height:%?50?%;font-size:%?28?%;background-color:#eee;display:inline-block}',""]),t.exports=e},c35e:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("95b6")),o=n(i("c4a9")),l=n(i("85ba")),s={mixins:[a.default],components:{navbar:o.default,authorize:l.default},data:function(){return{screenHeight:0,isAuthShow:!1,downOption:{auto:!1},upOption:{use:!0,auto:!1,isLock:!1,isBoth:!0,page:{num:0,size:10,time:null},noMoreSize:3,offset:80,bgColor:"transparent",textColor:"gray",textLoading:"加载中 ...",textNoMore:"-- END --"},result:[]}},onShow:function(){var t=this;this.$store.dispatch("usersStatus").then((function(){t.isAuthShow=!1,t.downCallback()})).catch((function(){t.isAuthShow=!0,t.mescroll.showEmpty()}))},methods:{downCallback:function(){var t=this;setTimeout((function(){t.mescroll.resetUpScroll()}),200)},triggerDownScroll:function(){this.mescroll.triggerDownScroll()},upCallback:function(t){var e=this;this.$http.getCollectList({page:t.num}).then((function(i){e.mescroll.endByPage(i.data.list.length,i.data.total),1==i.status?(1==t.num&&(e.result=[]),e.result=e.result.concat(i.data.list)):-1==i.status&&e.mescroll.endErr()})).catch((function(t){e.mescroll.endErr()}))},delCollect:function(t){var e=[];this.result=this.result.filter((function(i){return i.id==t.id&&e.push(i),!(i.id==t.id)})),this.$http.deleteCollect({id:t.id}),this.result<=0&&this.mescroll.showEmpty()}}};e.default=s},c3c8:function(t,e,i){"use strict";var n=i("e397"),a=i.n(n);a.a},e397:function(t,e,i){var n=i("9696");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("8a6a732a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);