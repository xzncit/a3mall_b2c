(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/register"],{"1f36":function(t,n,i){"use strict";var e=i("8d05"),s=i.n(e);s.a},"2c6b":function(t,n,i){"use strict";(function(t){i("e7e3");e(i("66fd"));var n=e(i("fa54"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},"8adb":function(t,n,i){"use strict";i.r(n);var e=i("95db"),s=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=s.a},"8d05":function(t,n,i){},"95db":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("b65a"),s=function(){i.e("components/tool/loading").then(function(){return resolve(i("d119"))}.bind(null,i)).catch(i.oe)},o=function(){Promise.all([i.e("common/vendor"),i.e("components/navbar/navbar")]).then(function(){return resolve(i("c4a9"))}.bind(null,i)).catch(i.oe)},u={components:{loading:s,navbar:o},data:function(){return{static:"",scrollNum:0,smsMsg:"发送验证码",isSendCode:!1,phone:"",isSubmit:!1,timer:null}},onLoad:function(){this.static=this.$static},onPageScroll:function(t){this.scrollNum=t.scrollTop},methods:{onBack:function(){this.$utils.switchTab("index/index")},onSend:function(){var t=this;if(!(0,e.checkPhone)(this.phone))return this.$utils.msg("您填写的手机号码不正确"),!1;if(this.isSendCode)return!1;var n=60;clearInterval(this.timer),this.timer=setInterval((function(){n--,t.isSendCode=!0,t.smsMsg=n+"秒后重发",n<=0&&(t.isSendCode=!1,t.smsMsg="重新获取",clearInterval(t.timer))}),1e3),this.$http.sendSMS({username:this.phone,type:"register"}).then((function(n){t.$utils.msg(n.info)})).catch((function(n){t.$utils.msg("连接网络错误，请检查网络是否连接！")}))},onSubmit:function(t){var n=this,i=t.detail.value;return this.isSubmit=!0,""==i.phone?(this.isSubmit=!1,void this.$utils.msg("请填写手机号码！")):(0,e.checkPhone)(this.phone)?""==i.password?(this.isSubmit=!1,void this.$utils.msg("请填写密码！")):""==i.code?(this.isSubmit=!1,void this.$utils.msg("请填写验证码！")):void this.$http.sendRegister({username:i.phone,password:i.password,code:i.code}).then((function(t){t.status?(n.$store.commit("UPDATEUSERS",t.data),n.$utils.switchTab("ucenter/index")):n.$utils.msg(t.info),n.isSubmit=!1})).catch((function(t){n.isSubmit=!1,n.$utils.msg("连接网络错误，请检查网络是否连接！")})):(this.isSubmit=!1,void this.$utils.msg("您填写的手机号码不正确！"))}}};n.default=u},bc8c:function(t,n,i){"use strict";i.d(n,"b",(function(){return s})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={navbar:function(){return Promise.all([i.e("common/vendor"),i.e("components/navbar/navbar")]).then(i.bind(null,"c4a9"))}},s=function(){var t=this,n=t.$createElement;t._self._c},o=[]},fa54:function(t,n,i){"use strict";i.r(n);var e=i("bc8c"),s=i("8adb");for(var o in s)"default"!==o&&function(t){i.d(n,t,(function(){return s[t]}))}(o);i("1f36");var u,c=i("f0c5"),r=Object(c["a"])(s["default"],e["b"],e["c"],!1,null,"ce488b28",null,!1,e["a"],u);n["default"]=r.exports}},[["2c6b","common/runtime","common/vendor"]]]);