(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/regiment/view"],{"4f87":function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var e={mescrollBody:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/mescroll-uni/components/mescroll-body/mescroll-body")]).then(o.bind(null,"3cec"))},countDown:function(){return o.e("components/count-down/count-down").then(o.bind(null,"05f5"))},skuAction:function(){return o.e("components/sku-action/sku-action").then(o.bind(null,"06f7"))}},i=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){return t.$utils.navigateTo("comments/view",{id:t.products.goods_id,type:"regiment"})},t.e1=function(n){return t.$utils.switchTab("index/index")})},u=[]},"65b0":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("c368"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){o.e("components/sku-action/sku-action").then(function(){return resolve(o("06f7"))}.bind(null,o)).catch(o.oe)},c=function(){o.e("components/goods-action/goods-action").then(function(){return resolve(o("3452"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("components/goods-action/goods-action-button").then(function(){return resolve(o("e48f"))}.bind(null,o)).catch(o.oe)},a=function(){o.e("components/goods-action/goods-action-icon").then(function(){return resolve(o("9119"))}.bind(null,o)).catch(o.oe)},r=function(){Promise.all([o.e("common/vendor"),o.e("components/share/index")]).then(function(){return resolve(o("57ff"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/tool/loading").then(function(){return resolve(o("6fc7"))}.bind(null,o)).catch(o.oe)},l={mixins:[e.default],components:{SkuAction:u,GoodsAction:c,GoodsActionButton:s,GoodsActionIcon:a,share:r,loading:d},data:function(){return{isLoading:!0,upOption:{use:!1,auto:!1},fields:["id","goods_id"],isSkuStatus:!1,isShareStatus:!1,selectedGoodsInfo:{},products:{},attribute:[],item:{},images:[],comments:[],cartCount:0,current:0,isActivityStatus:!1,goods_id:0,url:""}},onLoad:function(t){this.goods_id=t.id},onShow:function(){},onNavigationBarButtonTap:function(t){this.isShareStatus=!this.isShareStatus},methods:{onSwiperChange:function(t){this.current=t.detail.current},downCallback:function(){var t=this;setTimeout((function(){t.loadGoodsData(),t.mescroll.endSuccess(10,!1)}),1200)},triggerDownScroll:function(){this.mescroll.triggerDownScroll()},loadGoodsData:function(){var t=this;this.$http.getRegimentDetail({id:this.goods_id}).then((function(n){t.products=n.data.goods,t.attribute=n.data.attr,t.item=n.data.item,t.images=n.data.photo,t.comments=n.data.comments,t.url=t.$config.uni_app_web_url+"regiment/view/"+t.goods_id,t.isLoading=!1})).catch((function(t){console.log(t)}))},onChange:function(t){this.current=t},onBuyClicked:function(){var t=this;return 0==this.isActivityStatus?(this.$utils.msg("活动己结束！"),!1):0!=this.isSkuStatus?this.selectedGoodsInfo.isSubmit?void this.$store.dispatch("usersStatus").then((function(){t.$utils.navigateTo("cart/confirm",{id:t.selectedGoodsInfo.id,sku_id:t.selectedGoodsInfo.selectedSku.id,num:t.selectedGoodsInfo.num,type:"regiment"})})).catch((function(){t.$storage.set("VUE_REFERER","/regiment/view/id/"+t.selectedGoodsInfo.id),t.$utils.navigateTo("public/login")})):(this.$utils.msg("请选择规格！"),!1):void(this.isSkuStatus=!0)}}};n.default=l},"94f8":function(t,n,o){},"9d4a":function(t,n,o){"use strict";o.r(n);var e=o("4f87"),i=o("aea6");for(var u in i)"default"!==u&&function(t){o.d(n,t,(function(){return i[t]}))}(u);o("f298");var c,s=o("f0c5"),a=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"749250ff",null,!1,e["a"],c);n["default"]=a.exports},aea6:function(t,n,o){"use strict";o.r(n);var e=o("65b0"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},f298:function(t,n,o){"use strict";var e=o("94f8"),i=o.n(e);i.a},f630:function(t,n,o){"use strict";(function(t){o("16c8");e(o("66fd"));var n=e(o("9d4a"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("f266")["createPage"])}},[["f630","common/runtime","common/vendor"]]]);