(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/bill/rechange"],{"0a64":function(t,e,n){"use strict";n.r(e);var a=n("4ec7"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"152d":function(t,e,n){},2744:function(t,e,n){"use strict";(function(t){n("16c8");a(n("66fd"));var e=a(n("d5d9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},"2bb8":function(t,e,n){"use strict";var a=n("152d"),r=n.n(a);r.a},"4ec7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,u){try{var c=t[i](u),s=c.value}catch(o){return void n(o)}c.done?e(s):Promise.resolve(s).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var u=t.apply(e,n);function c(t){i(u,a,r,c,s,"next",t)}function s(t){i(u,a,r,c,s,"throw",t)}c(void 0)}))}}var c={data:function(){return{array:["微信支付","支付宝"],index:0,price:"",isActive:!1}},methods:{bindPickerChange:function(t){this.index=t.target.value},formSubmit:function(){var t=this;if(!this.isActive){var e=parseFloat(this.price);e<=0||""==this.price?this.$utils.msg("请输入要充值金额"):(this.isActive=!0,this.$http.paymentWallet({payment:"微信支付"==this.array[this.index]?"wechat":"alipay",source:4,price:this.price}).then((function(e){e.status?t.resultOrderData(e.data):t.$utils.msg(e.info),t.isActive=!1})).catch((function(e){t.isActive=!1,t.$utils.msg("连接网络出错，请稍后在试。")})))}},resultOrderData:function(t){switch(t.pay+""){case"1":this.requestPayment(t.result.params,"wxpay");break;case"2":this.requestPayment(t.result.params,"alipay");break;case"99":this.$utils.msg(t.msg);break}},requestPayment:function(e,n){var r=this;return u(a.default.mark((function i(){var u;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return t.showModal({content:"获取支付信息失败",showCancel:!1}),a.abrupt("return");case 3:u=r,t.requestPayment({type:n,orderInfo:e,success:function(e){t.showToast({title:"您己支付成功!",success:function(t){u.$utils.redirectTo("bill/fund")}})},fail:function(e){t.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})}});case 5:case"end":return a.stop()}}),i)})))()}}};e.default=c}).call(this,n("c11b")["default"])},ab5a:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},d5d9:function(t,e,n){"use strict";n.r(e);var a=n("ab5a"),r=n("0a64");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("2bb8");var u,c=n("f0c5"),s=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"75ad17f0",null,!1,a["a"],u);e["default"]=s.exports}},[["2744","common/runtime","common/vendor"]]]);