(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spread/index"],{4809:function(t,n,a){"use strict";var e=a("a921"),u=a.n(e);u.a},"69f7":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"6c94":function(t,n,a){"use strict";a.r(n);var e=a("69f7"),u=a("f84b");for(var r in u)"default"!==r&&function(t){a.d(n,t,(function(){return u[t]}))}(r);a("4809");var c,f=a("f0c5"),i=Object(f["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);n["default"]=i.exports},"70d8":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{data:{}}},onLoad:function(){var t=this;this.$http.getSpreadIndex().then((function(n){n.status&&(t.data=n.data)}))},methods:{go:function(t,n){var a=n||"";""==a?this.$utils.navigateTo(t):this.$utils.navigateTo(t,a)}}};n.default=e},a921:function(t,n,a){},f84b:function(t,n,a){"use strict";a.r(n);var e=a("70d8"),u=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=u.a},fae4:function(t,n,a){"use strict";(function(t){a("16c8");e(a("66fd"));var n=e(a("6c94"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("f266")["createPage"])}},[["fae4","common/runtime","common/vendor"]]]);