(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/special/view"],{"23fe":function(n,t,o){"use strict";o.r(t);var e=o("2f17"),i=o.n(e);for(var c in e)"default"!==c&&function(n){o.d(t,n,(function(){return e[n]}))}(c);t["default"]=i.a},"2f17":function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i(o("c368"));function i(n){return n&&n.__esModule?n:{default:n}}var c=function(){o.e("components/sku-action/sku-action").then(function(){return resolve(o("06f7"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("components/goods-action/goods-action").then(function(){return resolve(o("3452"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("components/goods-action/goods-action-button").then(function(){return resolve(o("e48f"))}.bind(null,o)).catch(o.oe)},a=function(){o.e("components/goods-action/goods-action-icon").then(function(){return resolve(o("9119"))}.bind(null,o)).catch(o.oe)},r=function(){Promise.all([o.e("common/vendor"),o.e("components/share/index")]).then(function(){return resolve(o("57ff"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/tool/loading").then(function(){return resolve(o("6fc7"))}.bind(null,o)).catch(o.oe)},l={mixins:[e.default],components:{SkuAction:c,GoodsAction:s,GoodsActionButton:u,GoodsActionIcon:a,share:r,loading:d},data:function(){return{isLoading:!0,upOption:{use:!1,auto:!1},fields:["id"],isSkuStatus:!1,isShareStatus:!1,images:[],comments:[],current:0,selectedGoodsInfo:{},products:{},attribute:[],item:{},goods_id:0,url:""}},onLoad:function(n){this.goods_id=n.id},onShow:function(){},onNavigationBarButtonTap:function(n){this.isShareStatus=!this.isShareStatus},methods:{onSwiperChange:function(n){this.current=n.detail.current},downCallback:function(){var n=this;setTimeout((function(){n.loadGoodsData(),n.mescroll.endSuccess(10,!1)}),1200)},triggerDownScroll:function(){this.mescroll.triggerDownScroll()},loadGoodsData:function(){var n=this;this.$http.getSpeciaDetail({id:this.goods_id}).then((function(t){n.products=t.data.goods,n.attribute=t.data.attr,n.item=t.data.item,n.images=t.data.photo,n.comments=t.data.comments,n.url=n.$config.uni_app_web_url+"special/view/"+n.goods_id,n.isLoading=!1})).catch((function(n){console.log(n)}))},onChange:function(n){this.current=n},onBuyClicked:function(){var n=this;if(0!=this.isSkuStatus)return this.selectedGoodsInfo.isSubmit?void this.$store.dispatch("isUsers").then((function(){n.$utils.navigateTo("cart/confirm",{id:n.selectedGoodsInfo.id,sku_id:n.selectedGoodsInfo.selectedSku.id,num:n.selectedGoodsInfo.num,type:"special"})})).catch((function(){n.$storage.set("VUE_REFERER","/special/view/id/"+n.selectedGoodsInfo.id),n.$utils.navigateTo("public/login")})):(this.$utils.msg("请选择规格！"),!1);this.isSkuStatus=!0}}};t.default=l},"341a":function(n,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return e}));var e={mescrollBody:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/mescroll-uni/components/mescroll-body/mescroll-body")]).then(o.bind(null,"3cec"))},skuAction:function(){return o.e("components/sku-action/sku-action").then(o.bind(null,"06f7"))}},i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){return n.$utils.navigateTo("comments/view",{id:n.products.goods_id,type:"special"})},n.e1=function(t){return n.$utils.switchTab("index/index")})},c=[]},"6a2f":function(n,t,o){"use strict";(function(n){o("16c8");e(o("66fd"));var t=e(o("af23"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("f266")["createPage"])},af23:function(n,t,o){"use strict";o.r(t);var e=o("341a"),i=o("23fe");for(var c in i)"default"!==c&&function(n){o.d(t,n,(function(){return i[n]}))}(c);o("bac7");var s,u=o("f0c5"),a=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"54b1e63e",null,!1,e["a"],s);t["default"]=a.exports},bac7:function(n,t,o){"use strict";var e=o("eb51"),i=o.n(e);i.a},eb51:function(n,t,o){}},[["6a2f","common/runtime","common/vendor"]]]);