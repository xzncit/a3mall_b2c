(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-login"],{"036d":function(e,t,i){(function(t){i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var n=i("9523");!function(t,i){e.exports=i(t)}(window,(function(e,i){if(!e.jWeixin){var a,o,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var t in r)e[r[t]]=t;return e}(),c=e.document,d=c.title,u=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),p=!(!l.match("mac")&&!l.match("win")),f=-1!=u.indexOf("wxdebugger"),h=-1!=u.indexOf("micromessenger"),m=-1!=u.indexOf("android"),g=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),v=(o=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?o[1]:"",w={initStartTime:E(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},b={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:g?1:m?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},S={},y={_completes:[]},_={state:0,data:{}};N((function(){w.initEndTime=E()}));var x=!1,I=[],k=(a={config:function(t){O("config",S=t);var i=!1!==S.check;N((function(){if(i)P(r.config,{verifyJsApiList:B(S.jsApiList),verifyOpenTagList:B(S.openTagList)},function(){y._complete=function(e){w.preVerifyEndTime=E(),_.state=1,_.data=e},y.success=function(e){b.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):_.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(p||f||S.debug||v<"6.0.2"||b.systemType<0)){var e=new Image;b.appId=S.appId,b.initTime=w.initEndTime-w.initStartTime,b.preVerifyTime=w.preVerifyEndTime-w.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(t){b.networkType=t.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+b.version+"&o="+b.isPreVerifyOk+"&s="+b.systemType+"&c="+b.clientVersion+"&a="+b.appId+"&n="+b.networkType+"&i="+b.initTime+"&p="+b.preVerifyTime+"&u="+b.url;e.src=i}})}}()})),y.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();y._completes=[]},y}()),w.preVerifyStartTime=E();else{_.state=1;for(var e=y._completes,t=0,n=e.length;t<n;++t)e[t]();y._completes=[]}})),k.invoke||(k.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,A(i),n)},k.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=_.state?e():(y._completes.push(e),!h&&S.debug&&e())},error:function(e){v<"6.0.2"||(-1==_.state?e(_.data):y._fail=e)},checkJsApi:function(e){P("checkJsApi",{jsApiList:B(e.jsApiList)},(e._complete=function(e){if(m){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=s[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){C(r.onMenuShareTimeline,{complete:function(){P("shareTimeline",{title:e.title||d,desc:e.title||d,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){C(r.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?P("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):P("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){C(r.onMenuShareQQ,{complete:function(){P("shareQQ",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){C(r.onMenuShareWeibo,{complete:function(){P("shareWeiboApp",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){C(r.onMenuShareQZone,{complete:function(){P("shareQZone",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){P("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){P("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){P("startRecord",{},e)},stopRecord:function(e){P("stopRecord",{},e)},onVoiceRecordEnd:function(e){C("onVoiceRecordEnd",e)},playVoice:function(e){P("playVoice",{localId:e.localId},e)},pauseVoice:function(e){P("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){P("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){C("onVoicePlayEnd",e)},uploadVoice:function(e){P("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){P("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){P("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){P("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){P(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){P("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){P("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,P("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(x=!1,0<I.length){var t=I.shift();wx.getLocalImgData(t)}},e))):I.push(e)},getNetworkType:function(e){P("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){P("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},n(a,"getLocation",(function(e){P(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),n(a,"hideOptionMenu",(function(e){P("hideOptionMenu",{},e)})),n(a,"showOptionMenu",(function(e){P("showOptionMenu",{},e)})),n(a,"closeWindow",(function(e){P("closeWindow",{},e=e||{})})),n(a,"hideMenuItems",(function(e){P("hideMenuItems",{menuList:e.menuList},e)})),n(a,"showMenuItems",(function(e){P("showMenuItems",{menuList:e.menuList},e)})),n(a,"hideAllNonBaseMenuItem",(function(e){P("hideAllNonBaseMenuItem",{},e)})),n(a,"showAllNonBaseMenuItem",(function(e){P("showAllNonBaseMenuItem",{},e)})),n(a,"scanQRCode",(function(e){P("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(g){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),n(a,"openAddress",(function(e){P(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),n(a,"openProductSpecificView",(function(e){P(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),n(a,"addCard",(function(e){for(var t=e.cardList,i=[],n=0,a=t.length;n<a;++n){var o=t[n],s={card_id:o.cardId,card_ext:o.cardExt};i.push(s)}P(r.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))})),n(a,"chooseCard",(function(e){P("chooseCard",{app_id:S.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),n(a,"openCard",(function(e){for(var t=e.cardList,i=[],n=0,a=t.length;n<a;++n){var o=t[n],s={card_id:o.cardId,code:o.code};i.push(s)}P(r.openCard,{card_list:i},e)})),n(a,"consumeAndShareCard",(function(e){P(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),n(a,"chooseWXPay",(function(e){P(r.chooseWXPay,V(e),e)})),n(a,"openEnterpriseRedPacket",(function(e){P(r.openEnterpriseRedPacket,V(e),e)})),n(a,"startSearchBeacons",(function(e){P(r.startSearchBeacons,{ticket:e.ticket},e)})),n(a,"stopSearchBeacons",(function(e){P(r.stopSearchBeacons,{},e)})),n(a,"onSearchBeacons",(function(e){C(r.onSearchBeacons,e)})),n(a,"openEnterpriseChat",(function(e){P("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),n(a,"launchMiniProgram",(function(e){P("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)})),n(a,"openBusinessView",(function(e){P("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),n(a,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){P("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){P("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){P("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){P("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){P("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){P("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){N((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),a),T=1,M={};return c.addEventListener("error",(function(e){if(!m){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=T++,t["wx-id"]=a),M[a])return;M[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!m){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(M[n]=!1)}}}),!0),i&&(e.wx=e.jWeixin=k),k}function P(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,A(i),(function(e){L(t,e,n)})):O(t,n)}function C(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),L(t,e,i)})):O(t,n||i)}function A(e){return(e=e||{}).appId=S.appId,e.verifyAppId=S.appId,e.verifySignType="sha1",e.verifyTimestamp=S.timestamp+"",e.verifyNonceStr=S.nonceStr,e.verifySignature=S.signature,e}function V(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,t,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=s[i];n&&(i=n);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return i+":"+a}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",S.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function B(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],a=r[n];a&&(e[t]=a)}return e}}function O(e,i){if(!(!S.debug||i&&i.isInnerInvoke)){var n=s[e];n&&(e=n),i&&i._complete&&delete i._complete,t("log",'"'+e+'",',i||""," at node_modules/weixin-js-sdk/index.js:885")}}function E(){return(new Date).getTime()}function N(t){h&&(e.WeixinJSBridge?t():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",t,!1))}}))}).call(this,i("0de9")["log"])},"0943":function(e,t,i){"use strict";i.r(t);var n=i("817e"),a=i("ea70");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("8c5a");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"10566a4a",null,!1,n["a"],r);t["default"]=c.exports},4957:function(e,t,i){var n=i("24fb"),a=i("1de5"),o=i("598a");t=n(!1);var r=a(o);t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login-wrap .logo[data-v-10566a4a]{text-align:center;padding-top:%?180?%}.login-wrap .logo uni-image[data-v-10566a4a]{width:%?180?%;height:%?180?%}.login-wrap .wechat-title[data-v-10566a4a]{font-size:%?35?%;font-weight:500;color:#333;margin-top:%?64?%;text-align:center}.login-wrap .wechat-desc[data-v-10566a4a]{font-size:%?28?%;font-weight:500;color:#999;margin-top:%?24?%;text-align:center;padding:%?10?% %?50?%}.login-wrap .wechat-login-btn[data-v-10566a4a]{height:%?80?%;line-height:%?80?%;color:#fff;background-color:#33a7ff;text-align:center;border-radius:%?50?%;margin:%?50?%;font-size:%?32?%}.login-wrap .wechat-go-home[data-v-10566a4a]{text-align:center;font-size:%?30?%;color:#666}.top[data-v-10566a4a]{background-color:initial;width:100%;height:%?386?%;position:relative;z-index:1;background-image:url('+r+');background-repeat:no-repeat;background-size:100%}.top uni-view[data-v-10566a4a]{z-index:2;position:absolute}.top uni-view[data-v-10566a4a]:nth-child(1){top:%?90?%;font-size:%?72?%;color:#fff;width:100%;text-align:center}.top uni-view[data-v-10566a4a]:nth-child(1)::after{position:absolute;content:" ";background-color:#7a91dc;height:1px;width:%?210?%;top:%?120?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.top uni-view[data-v-10566a4a]:nth-child(2){top:%?225?%;font-size:%?49?%;color:#fff000;text-align:center;width:100%}.top uni-image[data-v-10566a4a]{width:100%;height:%?386?%}.theform[data-v-10566a4a]{width:%?590?%;margin:%?70?% auto 0 auto}.theform .fields-box[data-v-10566a4a]{width:100%;border:1px solid #d2cdcd;overflow:hidden;border-radius:%?10?%}.theform .fields-box .field-box[data-v-10566a4a]{width:100%;height:%?100?%;position:relative;font-size:%?40?%}.theform .fields-box .field-box[data-v-10566a4a]:first-child{border-bottom:1px solid #d2cdcd}.theform .fields-box .field-box uni-input[data-v-10566a4a]{width:100%;height:%?100?%;line-height:%?100?%;text-indent:%?100?%;font-size:%?29?%;color:#888}.theform .fields-box .field-box[data-v-10566a4a]:nth-child(1):before{content:"\\e61b";color:#bfbfbf;position:absolute;left:%?30?%;top:%?28?%}.theform .fields-box .field-box[data-v-10566a4a]:nth-child(2):before{content:"\\e61a";color:#bfbfbf;position:absolute;left:%?30?%;top:%?28?%}.theform .btn[data-v-10566a4a]{width:100%;margin-top:%?48?%}.theform .btn uni-button[data-v-10566a4a]{color:#fff;background-color:#1b43c4;border:1px solid #1b43c4;border-radius:%?10?%;font-size:%?33?%;height:%?100?%;line-height:%?100?%;text-align:center}.theform .tips-box[data-v-10566a4a]{width:100%;font-size:%?28?%;color:#888;margin-top:%?45?%}.theform .tips-box uni-view[data-v-10566a4a]{width:50%;float:left}.theform .tips-box uni-view[data-v-10566a4a]:last-child{text-align:right}',""]),e.exports=t},"817e":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={navbar:i("c4a9").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("navbar",{attrs:{scroll:e.scrollNum,iSimmersive:!0,title:"",onBack:e.onBack}}),"app"!=e.platform.type&&"h5"!=e.platform.type||e.platform.isWechat?e._e():i("v-uni-view",{staticClass:"app"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",[e._v("A3Mall")]),i("v-uni-view",[e._v("泰誉凡")])],1),i("v-uni-view",{staticClass:"theform"},[i("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"fields-box"},[i("v-uni-view",{staticClass:"field-box iconfont"},[i("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",name:"phone",value:"18026740326",placeholder:"手机号"}})],1),i("v-uni-view",{staticClass:"field-box iconfont"},[i("v-uni-input",{staticClass:"uni-input",attrs:{type:"password",name:"password",value:"admin888",placeholder:"密码"}})],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{attrs:{disabled:e.isSubmit,"form-type":"submit"}},[e._v("登 陆")])],1)],1),i("v-uni-view",{staticClass:"tips-box clear"},[i("v-uni-view",[i("v-uni-navigator",{attrs:{url:"register","hover-class":"none"}},[e._v("用户注册")])],1),i("v-uni-view",[i("v-uni-navigator",{attrs:{url:"forget","hover-class":"none"}},[e._v("忘记密码")])],1)],1)],1)],1),"h5"==e.platform.type&&e.platform.isWechat?i("v-uni-view",{staticClass:"login-wrap"},[i("v-uni-view",{staticClass:"logo"},[e.static?i("v-uni-image",{attrs:{src:e.static+"app/a3mall.png"}}):e._e()],1),i("v-uni-view",{staticClass:"wechat-title"},[e._v("微信授权登录")]),i("v-uni-view",{staticClass:"wechat-desc"},[e._v("获得您的公开信息（昵称、头像等），以便为您提供更好的服务")]),i("v-uni-view",{staticClass:"wechat-login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onWechatLogin.apply(void 0,arguments)}}},[e._v("授权登录")]),i("v-uni-view",{staticClass:"wechat-go-home",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onGoHome.apply(void 0,arguments)}}},[e._v("暂不登录")])],1):e._e(),e.isSubmit?i("loading",{attrs:{layer:!0}}):e._e()],1)},o=[]},"8c5a":function(e,t,i){"use strict";var n=i("941b"),a=i.n(n);a.a},"941b":function(e,t,i){var n=i("4957");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("e68799a6",n,!0,{sourceMap:!1,shadowMode:!1})},9523:function(e,t){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.exports=i},a5c7:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.login=o;var a=i("3736");i("14e4"),n(i("036d"));function o(){return new Promise((function(e,t){(0,a.wechatLogin)().then((function(e){1==e.status&&(location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.data.appid,"&redirect_uri=").concat(e.data.url,"/public/oauth&response_type=code&scope=snsapi_userinfo&state=").concat(e.data.state,"#wechat_redirect"))})).catch((function(e){t(e)}))}))}},ea70:function(e,t,i){"use strict";i.r(t);var n=i("fb7f"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},fb7f:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("d119")),o=i("b65a"),r=n(i("c4a9")),s=i("a5c7"),c={components:{loading:a.default,navbar:r.default},data:function(){return{static:"",scrollNum:0,isSubmit:!1,platform:"app"}},onLoad:function(){this.static=this.$static,this.platform=this.$utils.platformAgent()},onShow:function(){var e=this;"h5"==this.platform.type&&this.platform.isWechat&&void 0!=this.$route.query.code&&this.$route.query.code.length&&(this.isSubmit=!0,this.$http.sendOauth({code:this.$route.query.code,state:this.$route.query.state}).then((function(t){t.status?(e.$store.commit("UPDATEUSERS",t.data),e.$utils.switchTab("ucenter/index")):e.$utils.msg(t.info),e.isSubmit=!1})).catch((function(t){e.isSubmit=!1,e.$utils.msg("请求失败，请稍后在试")})))},onPageScroll:function(e){this.scrollNum=e.scrollTop},methods:{onBack:function(){this.$utils.switchTab("index/index")},onWechatLogin:function(){var e=this;(0,s.login)().catch((function(t){e.$utils.msg(t)}))},onGoHome:function(){this.$utils.switchTab("index/index")},onSubmit:function(e){var t=this,i=e.detail.value;return this.isSubmit=!0,""==i.phone?(this.isSubmit=!1,void this.$utils.msg("请填写手机号码！")):(0,o.checkPhone)(i.phone)?""==i.password?(this.isSubmit=!1,void this.$utils.msg("请填写密码！")):void this.$http.sendLogin({username:i.phone,password:i.password}).then((function(e){e.status?(t.$store.commit("UPDATEUSERS",e.data),t.$utils.switchTab("ucenter/index")):t.$utils.msg(e.info),t.isSubmit=!1})).catch((function(e){t.isSubmit=!1,t.$utils.msg("连接网络错误，请检查网络是否连接！")})):(this.isSubmit=!1,void this.$utils.msg("您填写的手机号码不正确！"))}}};t.default=c}}]);