(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/view"],{

/***/ 135:
/*!*******************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/main.js?{"page":"pages%2Fgoods%2Fview"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _view = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/view.vue */ 136));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_view.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 136:
/*!************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=c4037812&scoped=true& */ 137);
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ 139);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&id=c4037812&lang=scss&scoped=true& */ 141);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c4037812",
  null,
  false,
  _view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 137:
/*!*******************************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue?vue&type=template&id=c4037812&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./view.vue?vue&type=template&id=c4037812&scoped=true& */ 138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_c4037812_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 138:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue?vue&type=template&id=c4037812&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    mescrollBody: function() {
      return Promise.all(/*! import() | uni_modules/mescroll-uni/components/mescroll-body/mescroll-body */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/mescroll-uni/components/mescroll-body/mescroll-body")]).then(__webpack_require__.bind(null, /*! @/uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue */ 496))
    },
    skuAction: function() {
      return __webpack_require__.e(/*! import() | components/sku-action/sku-action */ "components/sku-action/sku-action").then(__webpack_require__.bind(null, /*! @/components/sku-action/sku-action.vue */ 540))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return _vm.$utils.navigateTo("comments/view", {
        id: _vm.goods_id,
        type: "goods"
      })
    }

    _vm.e1 = function($event) {
      return _vm.$utils.switchTab("index/index")
    }

    _vm.e2 = function($event) {
      return _vm.$utils.switchTab("cart/index")
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 139:
/*!*************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./view.vue?vue&type=script&lang=js& */ 140);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 140:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















































































































var _mescrollMixins = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var SkuAction = function SkuAction() {__webpack_require__.e(/*! require.ensure | components/sku-action/sku-action */ "components/sku-action/sku-action").then((function () {return resolve(__webpack_require__(/*! ../../components/sku-action/sku-action */ 540));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var GoodsAction = function GoodsAction() {__webpack_require__.e(/*! require.ensure | components/goods-action/goods-action */ "components/goods-action/goods-action").then((function () {return resolve(__webpack_require__(/*! ../../components/goods-action/goods-action */ 547));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var GoodsActionButton = function GoodsActionButton() {__webpack_require__.e(/*! require.ensure | components/goods-action/goods-action-button */ "components/goods-action/goods-action-button").then((function () {return resolve(__webpack_require__(/*! ../../components/goods-action/goods-action-button */ 554));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var GoodsActionIcon = function GoodsActionIcon() {__webpack_require__.e(/*! require.ensure | components/goods-action/goods-action-icon */ "components/goods-action/goods-action-icon").then((function () {return resolve(__webpack_require__(/*! ../../components/goods-action/goods-action-icon */ 561));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var share = function share() {Promise.all(/*! require.ensure | components/share/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/share/index")]).then((function () {return resolve(__webpack_require__(/*! ../../components/share/index.vue */ 568));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var loading = function loading() {__webpack_require__.e(/*! require.ensure | components/tool/loading */ "components/tool/loading").then((function () {return resolve(__webpack_require__(/*! ../../components/tool/loading */ 519));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { mixins: [_mescrollMixins.default], components: { SkuAction: SkuAction, GoodsAction: GoodsAction, GoodsActionButton: GoodsActionButton, GoodsActionIcon: GoodsActionIcon, share: share, loading: loading }, data: function data() {return { isLoading: true, upOption: { use: false, auto: false }, fields: ["id"], isSkuStatus: false, isShareStatus: false, images: [], collect: false, cartCount: 0, current: 0, selectedGoodsInfo: {}, products: {}, attribute: [], comments: [], item: {}, goods_id: 0, url: "" };}, onLoad: function onLoad(options) {this.goods_id = options.id;var headerPadding = uni.getSystemInfoSync()['statusBarHeight'];console.log("status", headerPadding);}, onShow: function onShow() {var users = this.$storage.getJson("users");this.cartCount = users != null ? users.shop_count : 0; //this.loadGoodsData();
  }, onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {this.isShareStatus = !this.isShareStatus;}, methods: { onSwiperChange: function onSwiperChange(event) {this.current = event.detail.current;}, downCallback: function downCallback() {var _this = this;setTimeout(function () {_this.loadGoodsData();_this.mescroll.endSuccess(10, false);}, 1200);}, triggerDownScroll: function triggerDownScroll() {this.mescroll.triggerDownScroll();}, loadGoodsData: function loadGoodsData() {var _this2 = this;this.$http.getGoodsDetail({ id: this.goods_id }).then(function (result) {_this2.collect = result.data.collect ? true : false;_this2.products = result.data.goods;_this2.attribute = result.data.attr;_this2.comments = result.data.comments;_this2.item = result.data.item;_this2.images = result.data.photo;_this2.url = _this2.$config.uni_app_web_url + "goods/view/" + _this2.goods_id;_this2.isLoading = false;}).catch(function (err) {});}, favorite: function favorite() {var _this3 = this;this.$store.dispatch("usersStatus").then(function () {_this3.$http.goodsDetailFavorite({ id: _this3.goods_id }).then(function (result) {if (result.status) {_this3.collect = result.data == 1 ? true : false;} else {_this3.$utils.msg(result.info);}});}).catch(function () {_this3.$storage.set("VUE_REFERER", "/goods/view/id/" + _this3.goods_id);_this3.$utils.navigateTo("public/login");});}, onChange: function onChange(index) {this.current = index;}, onBuyClicked: function onBuyClicked() {var _this4 = this;if (this.isSkuStatus == false) {this.isSkuStatus = true;return;}if (!this.selectedGoodsInfo.isSubmit) {this.$utils.msg("请选择规格！");return false;}this.$store.dispatch("usersStatus").then(function () {_this4.$utils.navigateTo("cart/confirm", { id: _this4.selectedGoodsInfo.id, sku_id: _this4.selectedGoodsInfo.selectedSku.id, num: _this4.selectedGoodsInfo.num,
          type: "buy" });

      }).catch(function () {
        _this4.$storage.set("VUE_REFERER", "/goods/view/id/" + _this4.goods_id);
        _this4.$utils.navigateTo("public/login");
      });
    },
    onAddCartClicked: function onAddCartClicked() {var _this5 = this;
      if (this.isSkuStatus == false) {
        this.isSkuStatus = true;
        return;
      }

      if (!this.selectedGoodsInfo.isSubmit) {
        this.$utils.msg("请选择规格！");
        return false;
      }

      this.$store.dispatch("usersStatus").then(function () {
        _this5.$http.goodsDetailAddCart({
          id: _this5.selectedGoodsInfo.id,
          sku_id: _this5.selectedGoodsInfo.selectedSku.id,
          num: _this5.selectedGoodsInfo.num }).
        then(function (result) {
          _this5.isShow = false;
          if (result.status) {
            _this5.cartCount = result.data.count;
            _this5.$store.commit("UPDATECART", result.data.count);
            _this5.$utils.msg(result.info);
            if (result.data.count > 0) {
              uni.setTabBarBadge({ index: 2, text: result.data.count.toString() });
            } else {
              uni.removeTabBarBadge({ index: 2 });
            }
          } else {
            _this5.$utils.msg(result.info);
          }
        }).catch(function (error) {
          _this5.$utils.msg("网络出错，请检查网络是否连接");
        });
      }).catch(function () {
        _this5.$storage.set("VUE_REFERER", "/goods/view/id/" + _this5.goods_id);
        _this5.$utils.navigateTo("public/login");
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 141:
/*!**********************************************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue?vue&type=style&index=0&id=c4037812&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./view.vue?vue&type=style&index=0&id=c4037812&lang=scss&scoped=true& */ 142);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_c4037812_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 142:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/goods/view.vue?vue&type=style&index=0&id=c4037812&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[135,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2h1YW5namlhcGVuZy93d3cvQTNNYWxsWC9BM01hbGxYL2FwcC9wYWdlcy9nb29kcy92aWV3LnZ1ZT9iMDQyIiwid2VicGFjazovLy8vVXNlcnMvaHVhbmdqaWFwZW5nL3d3dy9BM01hbGxYL0EzTWFsbFgvYXBwL3BhZ2VzL2dvb2RzL3ZpZXcudnVlPzVjZWYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9odWFuZ2ppYXBlbmcvd3d3L0EzTWFsbFgvQTNNYWxsWC9hcHAvcGFnZXMvZ29vZHMvdmlldy52dWU/MTc5MCIsIndlYnBhY2s6Ly8vL1VzZXJzL2h1YW5namlhcGVuZy93d3cvQTNNYWxsWC9BM01hbGxYL2FwcC9wYWdlcy9nb29kcy92aWV3LnZ1ZT80ZTJmIiwidW5pLWFwcDovLy9wYWdlcy9nb29kcy92aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2h1YW5namlhcGVuZy93d3cvQTNNYWxsWC9BM01hbGxYL2FwcC9wYWdlcy9nb29kcy92aWV3LnZ1ZT9jNWU0Iiwid2VicGFjazovLy8vVXNlcnMvaHVhbmdqaWFwZW5nL3d3dy9BM01hbGxYL0EzTWFsbFgvYXBwL3BhZ2VzL2dvb2RzL3ZpZXcudnVlPzQyZDMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLDJGO0FBQ0FBLFVBQVUsQ0FBQ0MsYUFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDtBQUNzQzs7O0FBR3pGO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdVZBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLG9NQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFpMUIsQ0FBZ0Isa3lCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0hyMkIsbUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NoRUFPQSxFQUNBLGlDQURBLEVBRUEsY0FDQSxvQkFEQSxFQUVBLHdCQUZBLEVBR0Esb0NBSEEsRUFJQSxnQ0FKQSxFQUlBLFlBSkEsRUFJQSxnQkFKQSxFQUZBLEVBUUEsSUFSQSxrQkFRQSxDQUNBLFNBQ0EsZUFEQSxFQUVBLFlBQ0EsVUFEQSxFQUVBLFdBRkEsRUFGQSxFQU1BLGNBTkEsRUFPQSxrQkFQQSxFQVFBLG9CQVJBLEVBU0EsVUFUQSxFQVVBLGNBVkEsRUFXQSxZQVhBLEVBWUEsVUFaQSxFQWFBLHFCQWJBLEVBY0EsWUFkQSxFQWVBLGFBZkEsRUFnQkEsWUFoQkEsRUFpQkEsUUFqQkEsRUFrQkEsV0FsQkEsRUFtQkEsT0FuQkEsR0FxQkEsQ0E5QkEsRUErQkEsTUEvQkEsa0JBK0JBLE9BL0JBLEVBK0JBLENBQ0EsMkJBQ0EsK0RBQ0EscUNBQ0EsQ0FuQ0EsRUFvQ0EsTUFwQ0Esb0JBb0NBLENBQ0EsMkNBQ0Esc0RBRkEsQ0FHQTtBQUNBLEdBeENBLEVBeUNBLHdCQXpDQSxvQ0F5Q0EsQ0F6Q0EsRUF5Q0EsQ0FDQSx5Q0FDQSxDQTNDQSxFQTRDQSxXQUNBLGNBREEsMEJBQ0EsS0FEQSxFQUNBLENBQ0Esb0NBQ0EsQ0FIQSxFQUlBLFlBSkEsMEJBSUEsa0JBQ0Esd0JBQ0Esc0JBQ0EscUNBQ0EsQ0FIQSxFQUdBLElBSEEsRUFJQSxDQVRBLEVBVUEsaUJBVkEsK0JBVUEsQ0FDQSxrQ0FDQSxDQVpBLEVBYUEsYUFiQSwyQkFhQSxtQkFDQSw0QkFDQSxpQkFEQSxJQUVBLElBRkEsQ0FFQSxtQkFDQSxvREFDQSxvQ0FDQSxvQ0FDQSx1Q0FDQSwrQkFDQSxrQ0FDQSw4RUFDQSx5QkFDQSxDQVhBLEVBV0EsS0FYQSxDQVdBLGdCQUVBLENBYkEsRUFjQSxDQTVCQSxFQTZCQSxRQTdCQSxzQkE2QkEsbUJBQ0Esc0RBQ0EsbUNBQ0EsbUJBREEsSUFFQSxJQUZBLENBRUEsbUJBQ0Esb0JBQ0EsaURBQ0EsQ0FGQSxNQUVBLENBQ0EsK0JBQ0EsQ0FDQSxDQVJBLEVBU0EsQ0FWQSxFQVVBLEtBVkEsQ0FVQSxhQUNBLHdFQUNBLHlDQUNBLENBYkEsRUFjQSxDQTVDQSxFQTZDQSxRQTdDQSxvQkE2Q0EsS0E3Q0EsRUE2Q0EsQ0FDQSxxQkFDQSxDQS9DQSxFQWdEQSxZQWhEQSwwQkFnREEsbUJBQ0EsZ0NBQ0Esd0JBQ0EsT0FDQSxDQUVBLHVDQUNBLDBCQUNBLGFBQ0EsQ0FFQSxzREFDQSwyQ0FDQSwrQkFEQSxFQUVBLCtDQUZBLEVBR0EsaUNBSEE7QUFJQSxxQkFKQTs7QUFNQSxPQVBBLEVBT0EsS0FQQSxDQU9BO0FBQ0E7QUFDQTtBQUNBLE9BVkE7QUFXQSxLQXRFQTtBQXVFQSxvQkF2RUEsOEJBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQURBO0FBRUEseURBRkE7QUFHQSwyQ0FIQTtBQUlBLFlBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFdBVEEsTUFTQTtBQUNBO0FBQ0E7QUFDQSxTQWxCQSxFQWtCQSxLQWxCQSxDQWtCQTtBQUNBO0FBQ0EsU0FwQkE7QUFxQkEsT0F0QkEsRUFzQkEsS0F0QkEsQ0FzQkE7QUFDQTtBQUNBO0FBQ0EsT0F6QkE7QUEwQkEsS0E1R0EsRUE1Q0EsRTs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUE4aUQsQ0FBZ0IsbzVDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBbGtEO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZ29vZHMvdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9nb29kcy92aWV3LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0MDM3ODEyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzQwMzc4MTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzQwMzc4MTJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZ29vZHMvdmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0MDM3ODEyJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgbWVzY3JvbGxCb2R5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidW5pX21vZHVsZXMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtYm9keS9tZXNjcm9sbC1ib2R5XCIgKi8gXCJAL3VuaV9tb2R1bGVzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLWJvZHkvbWVzY3JvbGwtYm9keS52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgc2t1QWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9za3UtYWN0aW9uL3NrdS1hY3Rpb25cIiAqLyBcIkAvY29tcG9uZW50cy9za3UtYWN0aW9uL3NrdS1hY3Rpb24udnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIGlmICghX3ZtLl9pc01vdW50ZWQpIHtcbiAgICBfdm0uZTAgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdm0uJHV0aWxzLm5hdmlnYXRlVG8oXCJjb21tZW50cy92aWV3XCIsIHtcbiAgICAgICAgaWQ6IF92bS5nb29kc19pZCxcbiAgICAgICAgdHlwZTogXCJnb29kc1wiXG4gICAgICB9KVxuICAgIH1cblxuICAgIF92bS5lMSA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgcmV0dXJuIF92bS4kdXRpbHMuc3dpdGNoVGFiKFwiaW5kZXgvaW5kZXhcIilcbiAgICB9XG5cbiAgICBfdm0uZTIgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdm0uJHV0aWxzLnN3aXRjaFRhYihcImNhcnQvaW5kZXhcIilcbiAgICB9XG4gIH1cbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuICAgIDx2aWV3PlxuXHRcdDxtZXNjcm9sbC1ib2R5XG5cdFx0XHQgcmVmPVwibWVzY3JvbGxSZWZcIiBcblx0XHRcdCA6dXA9XCJ1cE9wdGlvblwiIFxuXHRcdFx0IEBpbml0PVwibWVzY3JvbGxJbml0XCIgXG5cdFx0XHQgQGRvd249XCJkb3duQ2FsbGJhY2tcIlxuXHRcdCA+XG5cdFx0XHRcblx0XHRcdDx2aWV3IHYtaWY9XCIhaXNMb2FkaW5nXCI+XG5cdFx0XHRcdDx2aWV3IGlkPVwic3dpcGVyLWlubmVyLWJveFwiPlxuXHRcdFx0XHRcdDxzd2lwZXIgY2xhc3M9XCJzd2lwZXItYm94XCIgOmNpcmN1bGFyPVwidHJ1ZVwiIDpjdXJyZW50PVwiY3VycmVudFwiIEBjaGFuZ2U9XCJvblN3aXBlckNoYW5nZVwiPlxuXHRcdFx0XHRcdFx0PHN3aXBlci1pdGVtIFxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImhhdmUtbm9uZVwiIFxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiaW1hZ2VzXCJcblx0XHRcdFx0XHRcdFx0di1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGltYWdlc1wiIFxuXHRcdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW1cIiBtb2RlPVwic2NhbGVUb0ZpbGxcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PC9zd2lwZXItaXRlbT5cblx0XHRcdFx0XHQ8L3N3aXBlcj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1c3RvbS1pbmRpY2F0b3JcIj5cblx0XHRcdFx0XHRcdHt7IGN1cnJlbnQgKyAxIH19IC8ge3sgaW1hZ2VzLmxlbmd0aCB9fVxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1wcmljZVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHJpY2VcIj5cblx0XHRcdFx0XHRcdDx2aWV3Pu+/pTx0ZXh0Pnt7IHByb2R1Y3RzLnNlbGxfcHJpY2UgfX08L3RleHQ+PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXc+5Y6f5Lu35qC8PHRleHQ+77+le3sgcHJvZHVjdHMubWFya2V0X3ByaWNlIH19PC90ZXh0Pjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtaW5mbyBjbGVhclwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdHt7IHByb2R1Y3RzLnRpdGxlIH19XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtaW5mby1ib3hcIj5cblx0XHRcdFx0XHRcdDx0ZXh0PuW6k+WtmDoge3sgcHJvZHVjdHMuc3RvcmVfbnVtcyB9feS7tjwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0PumUgOmHjzoge3sgcHJvZHVjdHMuc2FsZSB9feS7tjwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtY29tbWVudHMgY2xlYXJcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dD7llYblk4Hor4Tku7c8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiY29tbWVudHMubGVuZ3RoID4gMFwiIEBjbGljaz1cIiR1dGlscy5uYXZpZ2F0ZVRvKCdjb21tZW50cy92aWV3Jyx7IGlkOiBnb29kc19pZCwgdHlwZTogJ2dvb2RzJyB9KVwiPuabtOWkmiAmZ3Q7PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnRzLWVtcHR5XCIgdi1pZj1cImNvbW1lbnRzLmxlbmd0aCA8PSAwXCI+6K+l5ZWG5ZOB6L+Y5rKh5pyJ6K+E6K665ZOm77yBPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3XG5cdFx0XHRcdFx0XHRjbGFzcz1cImdvb2RzLWNvbW1lbnRzLWxpc3QgY2xlYXJcIlxuXHRcdFx0XHRcdFx0IHYtaWY9XCJjb21tZW50cy5sZW5ndGggPiAwXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8dmlld1xuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImdvb2RzLWNvbW1lbnRzLWJveCBjbGVhclwiXG5cdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGNvbW1lbnRzXCJcblx0XHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldz48aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCI+PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXc+e3tpdGVtLnVzZXJuYW1lfX08L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZVwiPnt7aXRlbS50aW1lfX08L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjXCI+e3tpdGVtLmNvbnRlbnR9fTwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkXCIgdi1pZj1cIml0ZW0ucmVwbHlfY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZC0xXCI+5ZWG5a625Zue5aSNPC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZC0yXCI+e3tpdGVtLnJlcGx5X2NvbnRlbnR9fTwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnb29kcy1jb250ZW50IGNsZWFyXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPuWbvuaWh+ivpuaDhTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNsZWFyXCIgdi1odG1sPVwicHJvZHVjdHMuY29udGVudFwiPlxuXHRcdFx0XHRcdFx0cHJvZHVjdHMuY29udGVudFxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0PC9tZXNjcm9sbC1ib2R5PlxuXHRcdFxuXHRcdDxza3UtYWN0aW9uXG5cdFx0XHR2LW1vZGVsPVwiaXNTa3VTdGF0dXNcIlxuXHRcdFx0Omdvb2RzPVwicHJvZHVjdHNcIlxuXHRcdFx0OmF0dHJpYnV0ZT1cImF0dHJpYnV0ZVwiXG5cdFx0XHQ6aXRlbT1cIml0ZW1cIlxuXHRcdFx0Omdvb2RzLWluZm8uc3luYz1cInNlbGVjdGVkR29vZHNJbmZvXCJcblx0XHRcdDpmaWVsZHM9XCJmaWVsZHNcIlxuXHRcdD48L3NrdS1hY3Rpb24+XG5cdFx0XG5cdFx0PHNoYXJlXG5cdFx0XHR2LW1vZGVsPVwiaXNTaGFyZVN0YXR1c1wiXG5cdFx0XHQ6dGl0bGU9XCJwcm9kdWN0cy50aXRsZVwiXG5cdFx0XHQ6dXJsPVwidXJsXCJcblx0XHRcdDp0ZXh0PVwicHJvZHVjdHMudGl0bGVcIlxuXHRcdFx0OmltYWdlPVwicHJvZHVjdHMucGhvdG9cIlxuXHRcdD48L3NoYXJlPlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtYWN0aW9uXCI+XG5cdFx0XHQ8Z29vZHMtYWN0aW9uLWljb24gaWNvbj1cImhvbWVcIiBAY2xpY2s9XCIkdXRpbHMuc3dpdGNoVGFiKCdpbmRleC9pbmRleCcpXCIgdGV4dD1cIummlumhtVwiPjwvZ29vZHMtYWN0aW9uLWljb24+XG5cdFx0XHQ8Z29vZHMtYWN0aW9uLWljb24gaWNvbj1cImNhcnRcIiBAY2xpY2s9XCIkdXRpbHMuc3dpdGNoVGFiKCdjYXJ0L2luZGV4JylcIiB0ZXh0PVwi6LSt54mp6L2mXCIgOmNvdW50PVwiY2FydENvdW50XCI+PC9nb29kcy1hY3Rpb24taWNvbj5cblx0XHRcdDxnb29kcy1hY3Rpb24taWNvbiBpY29uPVwiY29sbGVjdFwiIEBjbGljaz1cImZhdm9yaXRlXCIgdGV4dD1cIuaUtuiXj1wiIDphY3RpdmU9XCJjb2xsZWN0XCI+PC9nb29kcy1hY3Rpb24taWNvbj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiZ29vZHMtYWN0aW9uLWJ1dHRvbiBidXR0b24tY2FydFwiIEBjbGljaz1cIm9uQWRkQ2FydENsaWNrZWRcIj7liqDlhaXotK3nianovaY8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImdvb2RzLWFjdGlvbi1idXR0b24gYnV0dG9uLWJ1eVwiIEBjbGljaz1cIm9uQnV5Q2xpY2tlZFwiPueri+WNs+i0reS5sDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PGxvYWRpbmcgdi1pZj1cImlzTG9hZGluZ1wiIGNvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwxKVwiIDpsYXllcj1cInRydWVcIj48L2xvYWRpbmc+XG4gICAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNZXNjcm9sbE1peGluIGZyb20gXCJAL3VuaV9tb2R1bGVzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC1taXhpbnMuanNcIjtcbmltcG9ydCBTa3VBY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9za3UtYWN0aW9uL3NrdS1hY3Rpb24nO1xuaW1wb3J0IEdvb2RzQWN0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dvb2RzLWFjdGlvbi9nb29kcy1hY3Rpb25cIjtcbmltcG9ydCBHb29kc0FjdGlvbkJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb29kcy1hY3Rpb24vZ29vZHMtYWN0aW9uLWJ1dHRvblwiO1xuaW1wb3J0IEdvb2RzQWN0aW9uSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb29kcy1hY3Rpb24vZ29vZHMtYWN0aW9uLWljb25cIlxuaW1wb3J0IHNoYXJlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlL2luZGV4LnZ1ZVwiO1xuaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b29sL2xvYWRpbmcnXG5leHBvcnQgZGVmYXVsdCB7XG5cdG1peGluczogW01lc2Nyb2xsTWl4aW5dLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgU2t1QWN0aW9uLFxuICAgICAgICBHb29kc0FjdGlvbixcbiAgICAgICAgR29vZHNBY3Rpb25CdXR0b24sXG4gICAgICAgIEdvb2RzQWN0aW9uSWNvbixzaGFyZSxsb2FkaW5nXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0aXNMb2FkaW5nOnRydWUsXG5cdFx0XHR1cE9wdGlvbjoge1xuXHRcdFx0XHR1c2U6IGZhbHNlLFxuXHRcdFx0XHRhdXRvOiBmYWxzZVxuXHRcdFx0fSxcbiAgICAgICAgICAgIGZpZWxkczpbXCJpZFwiXSxcbiAgICAgICAgICAgIGlzU2t1U3RhdHVzOiBmYWxzZSxcblx0XHRcdGlzU2hhcmVTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgICAgIGNvbGxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgY2FydENvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHNlbGVjdGVkR29vZHNJbmZvOiB7fSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiB7fSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogW10sXG4gICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICBpdGVtOnt9LFxuXHRcdFx0Z29vZHNfaWQ6MCxcblx0XHRcdHVybDogXCJcIlxuICAgICAgICB9O1xuICAgIH0sXG5cdG9uTG9hZChvcHRpb25zKSB7XG5cdFx0dGhpcy5nb29kc19pZCA9IG9wdGlvbnMuaWQ7XG5cdFx0bGV0IGhlYWRlclBhZGRpbmcgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVsnc3RhdHVzQmFySGVpZ2h0J11cdFxuXHRcdGNvbnNvbGUubG9nKFwic3RhdHVzXCIsaGVhZGVyUGFkZGluZylcblx0fSxcbiAgICBvblNob3coKSB7XG4gICAgICAgIGxldCB1c2VycyA9IHRoaXMuJHN0b3JhZ2UuZ2V0SnNvbihcInVzZXJzXCIpO1xuICAgICAgICB0aGlzLmNhcnRDb3VudCA9IHVzZXJzICE9IG51bGwgPyB1c2Vycy5zaG9wX2NvdW50IDogMDtcbiAgICAgICAgLy90aGlzLmxvYWRHb29kc0RhdGEoKTtcbiAgICB9LFxuXHRvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoZSl7XG5cdFx0dGhpcy5pc1NoYXJlU3RhdHVzID0gIXRoaXMuaXNTaGFyZVN0YXR1cztcblx0fSxcbiAgICBtZXRob2RzOiB7XG5cdFx0b25Td2lwZXJDaGFuZ2UoZXZlbnQpe1xuXHRcdFx0dGhpcy5jdXJyZW50ID0gZXZlbnQuZGV0YWlsLmN1cnJlbnQ7XG5cdFx0fSxcblx0XHRkb3duQ2FsbGJhY2soKXtcblx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0dGhpcy5sb2FkR29vZHNEYXRhKCk7XG5cdFx0XHRcdHRoaXMubWVzY3JvbGwuZW5kU3VjY2VzcygxMCwgZmFsc2UpO1xuXHRcdFx0fSwxMjAwKTtcblx0XHR9LFxuXHRcdHRyaWdnZXJEb3duU2Nyb2xsKCl7XG5cdFx0XHR0aGlzLm1lc2Nyb2xsLnRyaWdnZXJEb3duU2Nyb2xsKCk7XG5cdFx0fSxcbiAgICAgICAgbG9hZEdvb2RzRGF0YSgpe1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXRHb29kc0RldGFpbCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ29vZHNfaWRcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3QgPSByZXN1bHQuZGF0YS5jb2xsZWN0ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXN1bHQuZGF0YS5nb29kcztcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHJlc3VsdC5kYXRhLmF0dHI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHJlc3VsdC5kYXRhLmNvbW1lbnRzO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3VsdC5kYXRhLml0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSByZXN1bHQuZGF0YS5waG90bztcblx0XHRcdFx0dGhpcy51cmwgPSB0aGlzLiRjb25maWcudW5pX2FwcF93ZWJfdXJsICsgXCJnb29kcy92aWV3L1wiICsgdGhpcy5nb29kc19pZDtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhdm9yaXRlKCl7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInVzZXJzU3RhdHVzXCIpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdvb2RzRGV0YWlsRmF2b3JpdGUoe1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5nb29kc19pZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3QgPSByZXN1bHQuZGF0YSA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHV0aWxzLm1zZyhyZXN1bHQuaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmFnZS5zZXQoXCJWVUVfUkVGRVJFUlwiLFwiL2dvb2RzL3ZpZXcvaWQvXCIrdGhpcy5nb29kc19pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kdXRpbHMubmF2aWdhdGVUbyhcInB1YmxpYy9sb2dpblwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZShpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQnV5Q2xpY2tlZCgpe1xuICAgICAgICAgICAgaWYodGhpcy5pc1NrdVN0YXR1cyA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NrdVN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRHb29kc0luZm8uaXNTdWJtaXQpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHV0aWxzLm1zZyhcIuivt+mAieaLqeinhOagvO+8gVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXNlcnNTdGF0dXNcIikudGhlbigoKT0+e1xuXHRcdFx0XHR0aGlzLiR1dGlscy5uYXZpZ2F0ZVRvKFwiY2FydC9jb25maXJtXCIse1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RlZEdvb2RzSW5mby5pZCxcbiAgICAgICAgICAgICAgICAgICAgc2t1X2lkOiB0aGlzLnNlbGVjdGVkR29vZHNJbmZvLnNlbGVjdGVkU2t1LmlkLFxuICAgICAgICAgICAgICAgICAgICBudW06IHRoaXMuc2VsZWN0ZWRHb29kc0luZm8ubnVtLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1eVwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JhZ2Uuc2V0KFwiVlVFX1JFRkVSRVJcIixcIi9nb29kcy92aWV3L2lkL1wiK3RoaXMuZ29vZHNfaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHV0aWxzLm5hdmlnYXRlVG8oXCJwdWJsaWMvbG9naW5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25BZGRDYXJ0Q2xpY2tlZCgpe1xuICAgICAgICAgICAgaWYodGhpcy5pc1NrdVN0YXR1cyA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NrdVN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRHb29kc0luZm8uaXNTdWJtaXQpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHV0aWxzLm1zZyhcIuivt+mAieaLqeinhOagvO+8gVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXNlcnNTdGF0dXNcIikudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ29vZHNEZXRhaWxBZGRDYXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VsZWN0ZWRHb29kc0luZm8uaWQsXG4gICAgICAgICAgICAgICAgICAgIHNrdV9pZDogdGhpcy5zZWxlY3RlZEdvb2RzSW5mby5zZWxlY3RlZFNrdS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbnVtOiB0aGlzLnNlbGVjdGVkR29vZHNJbmZvLm51bSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0Q291bnQgPSByZXN1bHQuZGF0YS5jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcIlVQREFURUNBUlRcIixyZXN1bHQuZGF0YS5jb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR1dGlscy5tc2cocmVzdWx0LmluZm8pO1xuXHRcdFx0XHRcdFx0aWYocmVzdWx0LmRhdGEuY291bnQgPiAwKXtcblx0XHRcdFx0XHRcdFx0dW5pLnNldFRhYkJhckJhZGdlKHsgaW5kZXg6IDIsIHRleHQ6IHJlc3VsdC5kYXRhLmNvdW50LnRvU3RyaW5nKCkgfSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0dW5pLnJlbW92ZVRhYkJhckJhZGdlKHsgaW5kZXg6IDIgfSlcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR1dGlscy5tc2cocmVzdWx0LmluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR1dGlscy5tc2coXCLnvZHnu5zlh7rplJnvvIzor7fmo4Dmn6XnvZHnu5zmmK/lkKbov57mjqVcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JhZ2Uuc2V0KFwiVlVFX1JFRkVSRVJcIixcIi9nb29kcy92aWV3L2lkL1wiK3RoaXMuZ29vZHNfaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHV0aWxzLm5hdmlnYXRlVG8oXCJwdWJsaWMvbG9naW5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuI3N3aXBlci1pbm5lci1ib3gge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC5zd2lwZXItYm94e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogODAwcnB4O1xuXHRcdGltYWdlIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiA4MDBycHg7XG5cdFx0fVxuXHR9XG5cdC5jdXN0b20taW5kaWNhdG9yIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDQwcnB4O1xuXHRcdGJvdHRvbTogNDBycHg7XG5cdFx0cGFkZGluZzogMTJycHggMzBycHg7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XG5cdH1cbn1cbi5nb29kcy1wcmljZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0MHJweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwofkAvc3RhdGljL2ltYWdlcy9iZy9nb29kcy1iZy5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIC5wcmljZSB7XG4gICAgICAgIGhlaWdodDogMTQwcnB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycnB4O1xuICAgICAgICB2aWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNHJweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cnB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMnJweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5nb29kcy1pbmZve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLnRpdGxle1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMjRycHggMzBycHggNnJweCAzMHJweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJycHg7XG4gICAgfVxuICAgIC5nb29kcy1pbmZvLWJveHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcnB4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uZ29vZHMtY29tbWVudHN7XG4gICAgbWFyZ2luLXRvcDogMjBycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLnRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcnB4O1xuICAgICAgICBmb250LXNpemU6IDMycnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICB0ZXh0Om50aC1jaGlsZCgxKXtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcnB4O1xuICAgICAgICB9XG4gICAgICAgIHRleHQ6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29tbWVudHMtZW1wdHkgeyBwYWRkaW5nOiAxMDBycHggMzBycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMnJweDsgY29sb3I6ICM2NjY7IH1cbiAgICAuZ29vZHMtY29tbWVudHMtbGlzdHtcbiAgICAgICAgLmdvb2RzLWNvbW1lbnRzLWJveHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJycHggc29saWQgI2U4ZThlODtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0MHJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBycHg7XG4gICAgICAgICAgICAudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MHJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwcnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICAgIC51e1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHJweDtcblx0XHRcdFx0XHR2aWV3IHsgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgICAgICAgICAgICAgdmlldzpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NnJweDsgaGVpZ2h0OiA5NnJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAzMHJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTZycHg7IGhlaWdodDogOTZycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmlldzpsYXN0LWNoaWxkIHsgcG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAyMHJweDsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGltZXtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5je1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBycHggMTBycHggMzBycHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHJweDsgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMzBycHg7XG4gICAgICAgICAgICAgICAgLmQtMSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcnB4IDMwcnB4IDAgMzBycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kLTIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHJweCAzMHJweCAyMHJweCAzMHJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uZ29vZHMtY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHJweDtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMycnB4O1xuICAgICAgICBjb2xvcjogIzI4MjgyODtcbiAgICAgICAgaGVpZ2h0OiA5NnJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDk2cnB4O1xuICAgIH1cbiAgICBpbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbn1cbi5nb29kcy1hY3Rpb257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBoZWlnaHQ6IDEwMHJweDtcbiAgICBib3JkZXItdG9wOiAycnB4IHNvbGlkICNkOWQ5ZDk7XG4gICAgcGFkZGluZy1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0Lmdvb2RzLWFjdGlvbi1idXR0b257XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdCAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQgICAgbWFyZ2luOiAwO1xuXHQgICAgcGFkZGluZzogMDtcblx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcblx0ICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xuXHQgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHQgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcblx0ICAgIC13ZWJraXQtZmxleDogMTtcblx0ICAgIGZsZXg6IDE7XG5cdCAgICBoZWlnaHQ6IDEwMHJweDtcblx0XHRsaW5lLWhlaWdodDogMTAwcnB4O1xuXHQgICAgZm9udC13ZWlnaHQ6IDUwMDtcblx0ICAgIGZvbnQtc2l6ZTogMjhycHg7XG5cdCAgICBib3JkZXI6IG5vbmU7XG5cdCAgICBjb2xvcjogI2ZmZjtcblx0fVxuXHQuYnV0dG9uLWNhcnQge1xuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzAzYTtcblx0fVxuXHQuYnV0dG9uLWJ1eSB7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxOTIyO1xuXHR9XG59XG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzQwMzc4MTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi92aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWM0MDM3ODEyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjI2MTkzODA0MDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==