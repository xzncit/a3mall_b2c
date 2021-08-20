(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom/mall-bonus"],{"128a":function(t,n,u){"use strict";u.r(n);var f=u("f58c"),o=u.n(f);for(var c in f)"default"!==c&&function(t){u.d(n,t,(function(){return f[t]}))}(c);n["default"]=o.a},"89ff":function(t,n,u){"use strict";var f;u.d(n,"b",(function(){return o})),u.d(n,"c",(function(){return c})),u.d(n,"a",(function(){return f}));var o=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"95f6":function(t,n,u){"use strict";var f=u("fd45"),o=u.n(f);o.a},c024:function(t,n,u){"use strict";u.r(n);var f=u("89ff"),o=u("128a");for(var c in o)"default"!==c&&function(t){u.d(n,t,(function(){return o[t]}))}(c);u("95f6");var e,r=u("f0c5"),i=Object(r["a"])(o["default"],f["b"],f["c"],!1,null,"bb3d058c",null,!1,f["a"],e);n["default"]=i.exports},f58c:function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f={props:{rdata:{required:!0}},methods:{onBuyBonus:function(t,n){var u=this;this.$http.getCouponList({id:t}).then((function(t){1==t.status?u.$utils.msg(t.info):"-1001"==t.status?u.$router.push("/public/login"):u.$utils.msg(t.info)})).catch((function(t){}))}}};n.default=f},fd45:function(t,n,u){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom/mall-bonus-create-component',
    {
        'components/custom/mall-bonus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("c024"))
        })
    },
    [['components/custom/mall-bonus-create-component']]
]);
