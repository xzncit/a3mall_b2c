(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spread/promotion_list"],{"44e5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("c368"));function r(t){return t&&t.__esModule?t:{default:t}}var c={mixins:[o.default],data:function(){return{isActive:1,result:[]}},methods:{changeData:function(t){this.isActive=t,this.downCallback()},downCallback:function(){var t=this;setTimeout((function(){t.mescroll.resetUpScroll()}),1200)},triggerDownScroll:function(){this.mescroll.triggerDownScroll()},upCallback:function(t){var e=this;this.$http.getSpreadPromotionList({type:this.isActive,page:t.num}).then((function(n){e.mescroll.endByPage(n.data.list.length,n.data.total),1==n.status?(1==t.num&&(e.result=[]),e.result=e.result.concat(n.data.list)):-1==n.status&&e.mescroll.endErr()})).catch((function(t){e.mescroll.endErr()}))}}};e.default=c},4857:function(t,e,n){},5970:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var o={mescrollBody:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mescroll-uni/components/mescroll-body/mescroll-body")]).then(n.bind(null,"3cec"))}},r=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"8bb2":function(t,e,n){"use strict";(function(t){n("16c8");o(n("66fd"));var e=o(n("e4e0"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("f266")["createPage"])},"9a0c":function(t,e,n){"use strict";var o=n("4857"),r=n.n(o);r.a},e4e0:function(t,e,n){"use strict";n.r(e);var o=n("5970"),r=n("eb12");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("9a0c");var u,l=n("f0c5"),a=Object(l["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=a.exports},eb12:function(t,e,n){"use strict";n.r(e);var o=n("44e5"),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=r.a}},[["8bb2","common/runtime","common/vendor"]]]);