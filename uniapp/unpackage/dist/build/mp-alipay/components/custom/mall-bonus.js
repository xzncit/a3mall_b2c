;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/custom/mall-bonus"],{"128a":function(t,n,u){"use strict";u.r(n);var f=u("f58c"),c=u.n(f);for(var e in f)"default"!==e&&function(t){u.d(n,t,(function(){return f[t]}))}(e);n["default"]=c.a},"89ff":function(t,n,u){"use strict";var f;u.d(n,"b",(function(){return c})),u.d(n,"c",(function(){return e})),u.d(n,"a",(function(){return f}));var c=function(){var t=this,n=t.$createElement;t._self._c},e=[]},"95f6":function(t,n,u){"use strict";var f=u("fd45"),c=u.n(f);c.a},c024:function(t,n,u){"use strict";u.r(n);var f=u("89ff"),c=u("128a");for(var e in c)"default"!==e&&function(t){u.d(n,t,(function(){return c[t]}))}(e);u("95f6");var r,o=u("f0c5"),i=Object(o["a"])(c["default"],f["b"],f["c"],!1,null,"bb3d058c",null,!1,f["a"],r);n["default"]=i.exports},f58c:function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f={props:{rdata:{required:!0}},methods:{onBuyBonus:function(t,n){var u=this;this.$http.getCouponList({id:t}).then((function(t){1==t.status?u.$utils.msg(t.info):"-1001"==t.status?u.$router.push("/public/login"):u.$utils.msg(t.info)})).catch((function(t){}))}}};n.default=f},fd45:function(t,n,u){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/custom/mall-bonus-create-component',
    {
        'components/custom/mall-bonus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("c024"))
        })
    },
    [['components/custom/mall-bonus-create-component']]
]);
