;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/custom/mall-image"],{"476a":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"6a8c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{rdata:{required:!0}},data:function(){return{image:"",imageBoxStyle:{},imageStyle:{}}},mounted:function(){this.image=this.rdata.params.list[0].thumb_image},methods:{jump:function(){this.$common.jump(this.rdata.params.list[0])}}};n.default=a},"90ae":function(t,n,e){},c0f5:function(t,n,e){"use strict";e.r(n);var a=e("476a"),u=e("cf4f");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("e285");var c,i=e("f0c5"),f=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,"ce8b3dec",null,!1,a["a"],c);n["default"]=f.exports},cf4f:function(t,n,e){"use strict";e.r(n);var a=e("6a8c"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=u.a},e285:function(t,n,e){"use strict";var a=e("90ae"),u=e.n(a);u.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/custom/mall-image-create-component',
    {
        'components/custom/mall-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("c0f5"))
        })
    },
    [['components/custom/mall-image-create-component']]
]);
