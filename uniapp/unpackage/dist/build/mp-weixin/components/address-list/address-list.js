(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/address-list/address-list"],{"16ab":function(t,n,e){"use strict";var u=e("1a75"),i=e.n(u);i.a},"1a75":function(t,n,e){},"2ce4":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var u={popup:function(){return e.e("components/popup/popup").then(e.bind(null,"dc39"))}},i=function(){var t=this,n=t.$createElement;t._self._c},a=[]},3127:function(t,n,e){"use strict";e.r(n);var u=e("e3e4"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=i.a},"8fac":function(t,n,e){"use strict";e.r(n);var u=e("2ce4"),i=e("3127");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("16ab");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=c.exports},e3e4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={props:{value:{type:Boolean,default:!1},add:{type:Boolean,default:!0},tips:{type:String,default:"您还没有添加地址哦"},array:{type:Array,default:function(){return[]}}},data:function(){return{maxHeight:0,active:0}},mounted:function(){var t=this.$utils.getSystemInfo();this.maxHeight=t.h-this.$utils.px2rpx(200)},methods:{onClose:function(){this.$emit("input",!this.value)},onSelect:function(t){this.active=t.id,this.$emit("address-event",t)},onAddAddress:function(){this.$emit("onAdd",{})}}};n.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/address-list/address-list-create-component',
    {
        'components/address-list/address-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8fac"))
        })
    },
    [['components/address-list/address-list-create-component']]
]);
