(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/view"],{"10da":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){Promise.all([e.e("common/vendor"),e.e("components/navbar/navbar")]).then(function(){return resolve(e("c4a9"))}.bind(null,e)).catch(e.oe)},o={components:{navbar:a},data:function(){return{scrollNum:0,isEmpty:!1,data:{}}},onLoad:function(n){var t=this;this.$http.getNewsDetail({id:n.id}).then((function(n){t.isEmpty=!1,n.status?t.data=n.data:t.isEmpty=!0})).catch((function(n){t.isEmpty=!0}))},onPageScroll:function(n){this.scrollNum=n.scrollTop},methods:{}};t.default=o},"39df":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return a}));var a={navbar:function(){return Promise.all([e.e("common/vendor"),e.e("components/navbar/navbar")]).then(e.bind(null,"c4a9"))}},o=function(){var n=this,t=n.$createElement;n._self._c},c=[]},5464:function(n,t,e){"use strict";e.r(t);var a=e("39df"),o=e("7064");for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e("a75f");var r,u=e("f0c5"),i=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"2f42a10e",null,!1,a["a"],r);t["default"]=i.exports},7064:function(n,t,e){"use strict";e.r(t);var a=e("10da"),o=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=o.a},a75f:function(n,t,e){"use strict";var a=e("dcb9"),o=e.n(a);o.a},adbf:function(n,t,e){"use strict";(function(n){e("e7e3");a(e("66fd"));var t=a(e("5464"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},dcb9:function(n,t,e){}},[["adbf","common/runtime","common/vendor"]]]);