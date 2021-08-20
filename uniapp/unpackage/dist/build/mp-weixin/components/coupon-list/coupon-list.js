(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/coupon-list/coupon-list"],{"0ae4":function(t,n,e){"use strict";e.r(n);var u=e("42a7"),o=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=o.a},"42a7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={props:{value:{type:Boolean,default:!1},coupons:{type:Array,default:function(){return[]}}},data:function(){return{maxHeight:0,active:0}},mounted:function(){var t=this.$utils.getSystemInfo();this.maxHeight=t.h-this.$utils.px2rpx(200)},methods:{onClose:function(){this.$emit("input",!this.value)},onCoupon:function(t){this.active=t.id,this.$emit("coupon-event",{id:t.id,value:"-￥"+t.valueDesc+t.unitDesc})},onCancelBonus:function(){this.active=0,this.$emit("coupon-event",{id:0,value:this.coupons.length<=0?"暂无优惠劵":this.coupons.length+"张可用"})}}};n.default=u},6091:function(t,n,e){},"88cb":function(t,n,e){"use strict";var u=e("6091"),o=e.n(u);o.a},e2bc:function(t,n,e){"use strict";e.r(n);var u=e("f690"),o=e("0ae4");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("88cb");var c,a=e("f0c5"),s=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=s.exports},f690:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var u={popup:function(){return e.e("components/popup/popup").then(e.bind(null,"dc39"))}},o=function(){var t=this,n=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/coupon-list/coupon-list-create-component',
    {
        'components/coupon-list/coupon-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e2bc"))
        })
    },
    [['components/coupon-list/coupon-list-create-component']]
]);
