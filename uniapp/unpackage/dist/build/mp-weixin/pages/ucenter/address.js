(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/address"],{"3e0d":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){e.e("components/tool/loading").then(function(){return resolve(e("d119"))}.bind(null,e)).catch(e.oe)},o=function(){Promise.all([e.e("common/vendor"),e.e("components/navbar/navbar")]).then(function(){return resolve(e("c4a9"))}.bind(null,e)).catch(e.oe)},r={components:{loading:i,navbar:o},data:function(){return{isLoading:!0,isError:!1,list:[]}},onShow:function(){var n=this,t=this.$storage.getJson("users");null==t?this.$utils.navigateTo("public/login"):this.$http.getAddress().then((function(t){t.status?(n.list=t.data,n.list.length?(n.isLoading=!1,n.isError=!1):(n.isLoading=!1,n.isError=!0)):(n.isLoading=!1,n.isError=!0)})).catch((function(t){n.isLoading=!1,n.isError=!0}))},methods:{onDelete:function(n){this.list=this.list.filter((function(t){if(t.id!=n)return t})),this.$http.editorAddressDelete({id:n}),this.list.length?(this.isLoading=!1,this.isError=!1):(this.isLoading=!1,this.isError=!0)},onAdd:function(){this.$utils.navigateTo("ucenter/address_editor")},onEdit:function(n){this.$utils.navigateTo("ucenter/address_editor",{id:n})}}};t.default=r},"694d":function(n,t,e){"use strict";e.r(t);var i=e("bb9e"),o=e("7e5c");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e("f808");var s,a=e("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"51975dc7",null,!1,i["a"],s);t["default"]=u.exports},"7e5c":function(n,t,e){"use strict";e.r(t);var i=e("3e0d"),o=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=o.a},bb9e:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var i={navbar:function(){return Promise.all([e.e("common/vendor"),e.e("components/navbar/navbar")]).then(e.bind(null,"c4a9"))},emptyBox:function(){return e.e("components/empty-box/empty-box").then(e.bind(null,"e58e"))}},o=function(){var n=this,t=n.$createElement;n._self._c},r=[]},d4a2:function(n,t,e){},efb1:function(n,t,e){"use strict";(function(n){e("e7e3");i(e("66fd"));var t=i(e("694d"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},f808:function(n,t,e){"use strict";var i=e("d4a2"),o=e.n(i);o.a}},[["efb1","common/runtime","common/vendor"]]]);