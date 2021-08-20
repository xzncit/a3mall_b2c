(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom/mall-notice"],{"0ee3":function(t,n,e){"use strict";e.r(n);var a=e("b05e"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"5c68":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"697f":function(t,n,e){"use strict";var a=e("75de"),i=e.n(a);i.a},"75de":function(t,n,e){},b05e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{rdata:{required:!0}},data:function(){return{text:"",isEmpty:!1}},mounted:function(){void 0==this.rdata.params.list[0]?this.isEmpty=!0:this.text=this.rdata.params.list[0].title},methods:{jump:function(){this.$utils.navigateTo("news/view",{id:this.rdata.params.list[0].id})}}};n.default=a},edcc:function(t,n,e){"use strict";e.r(n);var a=e("5c68"),i=e("0ee3");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("697f");var u,c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"5fb2b42c",null,!1,a["a"],u);n["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom/mall-notice-create-component',
    {
        'components/custom/mall-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("edcc"))
        })
    },
    [['components/custom/mall-notice-create-component']]
]);
