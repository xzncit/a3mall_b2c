(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/index"],{"0020":function(t,n,e){"use strict";var o=e("2b24"),i=e.n(o);i.a},1623:function(t,n,e){"use strict";e.r(n);var o=e("26b6"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},"26b6":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/tool/loading").then(function(){return resolve(e("6fc7"))}.bind(null,e)).catch(e.oe)},i={components:{loading:o},data:function(){return{isLoading:!0,isError:!1,currentIndex:0,wHeight:0,menuTop:0,scrollTop:0,tabindex:"item-0",menuIndex:"menu-0",selectId:"",goodsHeight:[],menuHeight:[],category:[]}},mounted:function(){var n=t.getSystemInfoSync();this.wHeight=n.windowHeight-t.upx2px(90),this.onLoadData()},methods:{onLoadData:function(){var t=this;this.$http.getCategoryList().then((function(n){n.status?(t.isLoading=!1,t.category=n.data,t.$nextTick((function(){setTimeout((function(){t.setScrollHeight()}),1500)})),t.isLoading=!1,t.isError=!1):(t.isLoading=!1,t.isError=!0)})).catch((function(n){t.isLoading=!1,t.isError=!0}))},onJump:function(){this.onLoadData()},onSearch:function(){t.navigateTo({url:"../search/index"})},onMenu:function(t){this.currentIndex=t,this.tabindex="item-"+t},onScroll:function(t){if(0!=this.goodsHeight.length){var n=t.detail.scrollTop,e=this.currentIndex;n>=this.scrollTop?e+1<this.goodsHeight.length&&n>=this.goodsHeight[e]&&(this.currentIndex=e+1):e-1>=0&&n<this.goodsHeight[e-1]&&(this.currentIndex=e-1),this.menuIndex="menu-"+this.currentIndex,this.scrollTop=n}},setScrollHeight:function(){var n=this,e=0,o=t.createSelectorQuery();o.selectAll(".goods-item").boundingClientRect().exec((function(t){t[0].forEach((function(t){e+=t.height,n.goodsHeight.push(e)}))})),this.menuHeight=[];var i=0;o.select(".menu-item").boundingClientRect().exec((function(t){t[0].forEach((function(t){i+=t.height,n.menuHeight.push(i)}))}))}}};n.default=i}).call(this,e("f266")["default"])},"2b24":function(t,n,e){},"8b5d":function(t,n,e){"use strict";e.r(n);var o=e("eafa"),i=e("1623");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("0020");var u,r=e("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"1bcbb585",null,!1,o["a"],u);n["default"]=a.exports},"8d43":function(t,n,e){"use strict";(function(t){e("16c8");o(e("66fd"));var n=o(e("8b5d"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("f266")["createPage"])},eafa:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var o={emptyBox:function(){return e.e("components/empty-box/empty-box").then(e.bind(null,"9667"))}},i=function(){var t=this,n=t.$createElement;t._self._c},c=[]}},[["8d43","common/runtime","common/vendor"]]]);