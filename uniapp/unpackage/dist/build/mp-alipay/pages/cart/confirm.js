(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/cart/confirm"],{"0023":function(t,s,e){"use strict";e.r(s);var n=e("37ad"),i=e("6e8d");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);e("a114");var a,o=e("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);s["default"]=d.exports},"270c":function(t,s,e){"use strict";(function(t){e("16c8");n(e("66fd"));var s=n(e("0023"));function n(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("c11b")["createPage"])},"37ad":function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return n}));var n={couponList:function(){return e.e("components/coupon-list/coupon-list").then(e.bind(null,"2ed2"))},addressList:function(){return e.e("components/address-list/address-list").then(e.bind(null,"d85a"))}},i=function(){var t=this,s=t.$createElement;t._self._c;t._isMounted||(t.e0=function(s){t.isAddressStatus=!0},t.e1=function(s){t.isCouponStatus=!t.isCouponStatus})},r=[]},"500b":function(t,s,e){},"6e8d":function(t,s,e){"use strict";e.r(s);var n=e("fb12"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(s,t,(function(){return n[t]}))}(r);s["default"]=i.a},a114:function(t,s,e){"use strict";var n=e("500b"),i=e.n(n);i.a},fb12:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,s,e,n,i,r,a){try{var o=t[r](a),d=o.value}catch(u){return void e(u)}o.done?s(d):Promise.resolve(d).then(n,i)}function a(t){return function(){var s=this,e=arguments;return new Promise((function(n,i){var a=t.apply(s,e);function o(t){r(a,n,i,o,d,"next",t)}function d(t){r(a,n,i,o,d,"throw",t)}o(void 0)}))}}var o=function(){e.e("components/tool/info").then(function(){return resolve(e("429c"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/tool/loading").then(function(){return resolve(e("6fc7"))}.bind(null,e)).catch(e.oe)},u={components:{MallInfo:o,loading:d},data:function(){return{isLoading:!0,loadingColor:"rgba(255,255,255,1)",loadingText:"正在加载订单中",chosenStoreId:"0",isStoreStatus:!1,isCouponStatus:!1,isAddressStatus:!1,bonusText:"请选择",address:{id:"",name:"",tel:"",address:""},chosenAddressId:"0",bonusId:"0",addressList:[],orderData:{item:{},real_amount:0,real_freight:0,payable_amount:0,order_amount:0,users_price:0,real_point:0,users_point:0,type:0},remarks:"",payment:"wechat",coupons:[],params:null,orderBtnFlag:!1,providerList:[]}},onLoad:function(s){var e=this,n=s.type,i=s.id,r={id:i,type:n};this.$utils.in_array(n,["buy","second","regiment","special"])&&(r.sku_id=s.sku_id,r.num=s.num,s.kid&&(r.kid=s.kid)),r.shipping_type=this.shippingType,this.params=r,t.getProvider({service:"payment",success:function(t){for(var s=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"wxpay":s.push({id:"wechat",class:"fa fa-weixin",name:"微信支付",sort:1});break;case"alipay":s.push({id:"alipay",class:"iconfont iconumidd17",name:"支付宝",sort:2});break;default:break}e.providerList=s.sort((function(t,s){return t.sort-s.sort}))},fail:function(s){t.showModal({content:"获取支付通道失败",showCancel:!1})}})},onShow:function(){var t=this;this.$nextTick((function(){var s=t.$storage.getJson("users");null==s?t.$utils.navigateTo("public/login"):t.onLoadOrder()}))},methods:{onLoadOrder:function(){var t=this;this.$utils.showLoading(),this.$http.getCartConfirm(this.params).then((function(s){t.$utils.hideLoading(),s.status?(t.orderData=s.data,t.isShipping=parseInt(s.data.is_shipping),t.storeList=s.data.store,t.addressList=s.data.address.list,void 0==s.data.address.default||s.data.address.default.length<=0?void 0!=s.data.address.list[0]&&(t.address=s.data.address.list[0],t.chosenAddressId=t.address.id):(t.chosenAddressId=s.data.address.default.id,t.address=s.data.address.default),t.coupons=s.data.bonus,"请选择"==t.bonusText&&(t.bonusText=s.data.bonus.length<=0?"暂无优惠劵":s.data.bonus.length+"张可用"),t.isLoading=!1):(t.isLoading=!1,t.$storage.set("order_msg",s.info),t.$utils.redirectTo("cart/msg"))}))},onOrderSubmit:function(){var t=this;if(this.orderBtnFlag)return!1;if(this.orderData.real_point>this.orderData.users_point)return this.$utils.msg("您的积分不足，不能购买此商品"),!1;if(2==this.shippingType&&""==this.store.id)return this.$utils.msg("请先选择自提门店"),!1;this.orderBtnFlag=!0,this.isLoading=!0,this.loadingColor="rgba(255,255,255,0.3)",this.loadingText="正在提交订单中";var s={};Object.assign(s,{id:this.params.id,type:this.params.type,address_id:this.chosenAddressId,store_id:this.chosenStoreId,shipping_type:this.shippingType,bonus_id:this.bonusId,payment:this.payment,remarks:this.remarks,source:4},this.params),this.$http.createOrder(s).then((function(s){t.isLoading=!1,s.status?t.resultOrderData(s.data):t.$utils.msg(s.info),t.orderBtnFlag=!1})).catch((function(s){t.isLoading=!1,t.$utils.msg("网络连接错误，请检查网络是否可用"),t.orderBtnFlag=!1}))},resultOrderData:function(s){switch(this.$store.commit("UPDATECART",s.shop_count),s.shop_count>0?t.setTabBarBadge({index:2,text:s.shop_count.toString()}):t.removeTabBarBadge({index:2}),s.pay+""){case"0":this.$utils.redirectTo("order/detail",{id:s.order_id});break;case"1":this.requestPayment(s.result.params,"wxpay",{id:s.order_id});break;case"2":this.requestPayment(s.result.params,"alipay",{id:s.order_id});break;case"99":this.$storage.set("order_msg",s.msg),this.$storage.set("order_id",s.order_id),this.$utils.redirectTo("cart/info");break}},requestPayment:function(s,e,i){var r=this;return a(n.default.mark((function a(){var o;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s){n.next=3;break}return t.showModal({content:"获取支付信息失败",showCancel:!1}),n.abrupt("return");case 3:o=r,t.requestPayment({provider:e,orderInfo:s,success:function(s){t.showToast({title:"您己支付成功!",success:function(t){o.$utils.redirectTo("order/detail",i)}})},fail:function(s){t.showModal({content:"支付失败,原因为: "+s.errMsg,showCancel:!1})}});case 5:case"end":return n.stop()}}),a)})))()},onShipping:function(t){this.shippingType=t,this.params.shipping_type=t,1==t?this.onSelectedAddress(this.address):this.onSelectedStore(this.store)},selectPayment:function(t){this.payment=t},onCoupons:function(t){this.isCouponStatus=!1,this.params.bonus_id=t.id,this.bonusText=t.value,this.bonusId=t.id,this.onLoadOrder()},onSelectedStore:function(t){this.isStoreStatus=!1,this.chosenStoreId=t.id,this.params.store_id=this.chosenStoreId,this.store=t,delete this.params.address_id,this.onLoadOrder()},onSelectedAddress:function(t){this.isAddressStatus=!1,this.chosenAddressId=t.id,this.params.address_id=this.chosenAddressId,this.address=t,delete this.params.store_id,this.onLoadOrder()},onAdd:function(){this.$storage.set("ORDER_CONFIRM_SELECT",!0),this.$utils.navigateTo("ucenter/address_editor")}}};s.default=u}).call(this,e("c11b")["default"])}},[["270c","common/runtime","common/vendor"]]]);