;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/navbar/navbar"],{"2d1d":function(t,i,n){"use strict";n.r(i);var e=n("7f50"),a=n("8cc2");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("dace");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"25557242",null,!1,e["a"],o);i["default"]=u.exports},"7f50":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement;t._self._c},r=[]},"8cc2":function(t,i,n){"use strict";n.r(i);var e=n("b537"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},b537:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{scroll:{type:[String,Number],default:0},title:{type:String,default:""},titleColor:{type:String,default:"#000"},background:{type:Object,default:function(){return{background:"transparent"}}},iSimmersive:{type:Boolean,default:!1},onBack:{type:Function,default:null}},data:function(){return{statusBar:0,menuClientRect:{},bg:"",fontColor:"",isTitle:!0}},mounted:function(){this.statusBar=t.getSystemInfoSync()["statusBarHeight"],this.menuClientRect=t.getMenuButtonBoundingClientRect(),this.bg=this.background.background,this.iSimmersive?(this.isTitle=!1,this.setNavigationBarColor("#ffffff")):(this.bg="#ffffff",this.setNavigationBarColor("#000000"))},methods:{prev:function(){this.onBack?this.onBack():this.$utils.navigateBack(1)},setNavigationBarColor:function(t){this.fontColor=t}},watch:{scroll:{handler:function(t,i){if(!this.iSimmersive)return!1;t>=10&&t<=50?(this.bg="rgba(255,255,255,.3)",this.setNavigationBarColor("#000000"),this.isTitle=!0):t>=51&&t<=99?(this.bg="rgba(255,255,255,.7)",this.setNavigationBarColor("#000000"),this.isTitle=!0):t>=100?(this.bg="rgba(255,255,255,1)",this.setNavigationBarColor("#000000"),this.isTitle=!0):t<10&&(this.bg="rgba(255,255,255,0)",this.setNavigationBarColor("#ffffff"),this.isTitle=!1)},deep:!0}}};i.default=n}).call(this,n("c11b")["default"])},dace:function(t,i,n){"use strict";var e=n("e4d9"),a=n.n(e);a.a},e4d9:function(t,i,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/navbar/navbar-create-component',
    {
        'components/navbar/navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("2d1d"))
        })
    },
    [['components/navbar/navbar-create-component']]
]);