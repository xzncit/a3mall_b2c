(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/lime-painter/components/lime-painter/index"],{

/***/ 622:
/*!********************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallPro/app/uni_modules/lime-painter/components/lime-painter/index.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=81256290& */ 623);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 625);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/lime-painter/components/lime-painter/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 623:
/*!***************************************************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallPro/app/uni_modules/lime-painter/components/lime-painter/index.vue?vue&type=template&id=81256290& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=81256290& */ 624);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_81256290___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 624:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallPro/app/uni_modules/lime-painter/components/lime-painter/index.vue?vue&type=template&id=81256290& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 625:
/*!*********************************************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallPro/app/uni_modules/lime-painter/components/lime-painter/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 626);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 626:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallPro/app/uni_modules/lime-painter/components/lime-painter/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 230));








var _utils = __webpack_require__(/*! ./utils */ 627);
var _draw = __webpack_require__(/*! ./draw */ 628);
var _layout = __webpack_require__(/*! ./layout */ 631);
var _canvas = __webpack_require__(/*! ./canvas */ 632);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  // version: '1.6.2',
  name: 'l-painter',
  props: {
    board: Object,
    pathType: {
      type: String
      //'base64'、'url'
    },
    fileType: {
      type: String,
      default: 'png' },

    quality: {
      type: Number,
      default: 1 },

    width: [Number, String],
    height: [Number, String],
    pixelRatio: Number,
    customStyle: String,
    isRenderImage: Boolean,
    isH5PathToBase64: Boolean,
    sleep: {
      type: Number,
      default: 1000 / 60 },

    beforeDelay: {
      type: Number,
      default: 1000 / 60 },

    afterDelay: Number,

    type: {
      type: String,
      default: '2d' } },



  data: function data() {
    return {

      use2dCanvas: true,




      draw: null,
      ctx: null,
      canvasHeight: 0,
      canvasWidth: 0,
      layout: new _layout.Layout(),
      isDrawIng: false };

  },
  computed: {
    canvasId: function canvasId() {
      return "l-painter".concat(this._uid);
    },
    size: function size() {
      return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px;");
    },
    dpr: function dpr() {
      return this.pixelRatio || uni.getSystemInfoSync().pixelRatio;
    },
    boardWidth: function boardWidth() {var _ref =
      this.board || {},bw = _ref.width;
      return (0, _utils.toPx)(this.width || bw);
    },
    boardHeight: function boardHeight() {var _ref2 =
      this.board || {},bh = _ref2.height;var
      h = this.height,ch = this.canvasHeight;
      return /^auto$/.test(h || bh) ? ch || 1 : (0, _utils.toPx)(h || bh);
    } },

  watch: {
    size: function size() {

      if (this.use2dCanvas) {
        this.inited = false;
      }




    } },


  created: function created() {var _uni$getSystemInfoSyn =
    uni.getSystemInfoSync(),SDKVersion = _uni$getSystemInfoSyn.SDKVersion,version = _uni$getSystemInfoSyn.version,platform = _uni$getSystemInfoSyn.platform,environment = _uni$getSystemInfoSyn.environment;

    // ios wx7.0.20 createImage bug
    this.use2dCanvas = this.type === '2d' && (0, _utils.compareVersion)(SDKVersion, '2.9.2') >= 0 && !(/ios/i.test(platform) && /7.0.20/.test(version) || /wxwork/i.test(environment));




  },

  mounted: function mounted() {var _this = this;
    this.$watch(
    'board', /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(
      function _callee(val, old) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                JSON.stringify(val) === '{}' || !val)) {_context.next = 2;break;}return _context.abrupt("return");case 2:if (!
                _this.beforeDelay) {_context.next = 5;break;}_context.next = 5;return (0, _utils.sleep)(_this.beforeDelay);case 5:
                _this.render();case 6:case "end":return _context.stop();}}}, _callee);}));return function (_x, _x2) {return _ref3.apply(this, arguments);};}(),

    {
      deep: true,
      immediate: true });


  },
  methods: {
    update: function update(args, single) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                _this2.draw = null;

                if (_this2.use2dCanvas) {
                  _this2.ctx = null;
                  _this2.inited = false;
                }




                _this2.isDrawIng = false;_context2.next = 5;return (
                  new Promise(function (resolve) {return _this2.$nextTick(resolve);}));case 5:_context2.next = 7;return (
                  (0, _utils.sleep)(200));case 7:return _context2.abrupt("return",
                _this2.render(args, single));case 8:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    render: function render() {var _arguments = arguments,_this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var args, single, isArg, ctx, use2dCanvas, boardWidth, boardHeight, board, canvas, isH5PathToBase64, s, afterDelay, layoutHeight, _this3$draw;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:args = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};single = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;if (!
                _this3.isDrawIng) {_context4.next = 4;break;}return _context4.abrupt("return",
                _this3.update(args, single));case 4:

                _this3.isDrawIng = true;
                isArg = JSON.stringify(args) != '{}';_context4.next = 8;return (
                  _this3.getContext());case 8:ctx = _context4.sent;
                use2dCanvas = _this3.use2dCanvas, boardWidth = _this3.boardWidth, boardHeight = _this3.boardHeight, board = _this3.board, canvas = _this3.canvas, isH5PathToBase64 = _this3.isH5PathToBase64, s = _this3.sleep, afterDelay = _this3.afterDelay;if (!(
                use2dCanvas && !canvas)) {_context4.next = 12;break;}return _context4.abrupt("return",
                Promise.reject(new Error('render: fail canvas has not been created')));case 12:

                _this3.boundary = {
                  top: 0,
                  left: 0,
                  width: boardWidth,
                  height: boardHeight };

                if (!single) {
                  ctx.clearRect(0, 0, boardWidth, boardHeight);
                }
                if (!_this3.draw || isArg) {
                  _this3.draw = new _draw.Draw(ctx, canvas, use2dCanvas, isH5PathToBase64, s);
                  _this3.draw.listen('progressChange', function (v) {
                    _this3.$emit('progress', v);
                  });
                }
                _this3.layout.init(ctx, _this3.boundary, isH5PathToBase64);if (!(
                isArg || board && JSON.stringify(board) != '{}')) {_context4.next = 20;break;}_context4.next = 19;return (
                  _this3.layout.calcNode(isArg ? args : Object.assign({}, board, { height: !board.type && board.height == 'auto' ? boardHeight : board.height })));case 19:_this3.node = _context4.sent;case 20:

                layoutHeight = _this3.layout.layoutHeight;if (!(
                /auto/.test(_this3.height || board.height) && !_this3.canvasHeight)) {_context4.next = 24;break;}
                _this3.canvasHeight = layoutHeight;return _context4.abrupt("return",
                _this3.update(args, single));case 24:if (!

                _this3.node) {_context4.next = 27;break;}_context4.next = 27;return (_this3$draw =
                _this3.draw) === null || _this3$draw === void 0 ? void 0 : _this3$draw.drawNode(_this3.node);case 27:_context4.next = 29;return (

                  new Promise(function (resolve) {return _this3.$nextTick(resolve);}));case 29:if (!(
                !use2dCanvas && !single)) {_context4.next = 32;break;}_context4.next = 32;return (
                  _this3.canvasDraw(ctx));case 32:if (!

                afterDelay) {_context4.next = 35;break;}_context4.next = 35;return (
                  (0, _utils.sleep)(afterDelay));case 35:

                _this3.$emit('done');
                if (_this3.isRenderImage && !single && _this3.isDrawIng) {
                  _this3.canvasToTempFilePath().
                  then( /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {var img, _img;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!(
                              _this3.pathType == 'base64')) {_context3.next = 11;break;}if (!
                              /^data:image\/(\w+);base64/.test(res.tempFilePath)) {_context3.next = 5;break;}
                              _this3.$emit('success', res.tempFilePath);_context3.next = 9;break;case 5:_context3.next = 7;return (

                                (0, _utils.pathToBase64)(res.tempFilePath));case 7:img = _context3.sent;
                              _this3.$emit('success', img);case 9:_context3.next = 21;break;case 11:if (!(

                              _this3.pathType == 'url')) {_context3.next = 20;break;}
                              _img = '';if (!
                              /^data:image\/(\w+);base64/.test(res.tempFilePath)) {_context3.next = 17;break;}_context3.next = 16;return (
                                (0, _utils.base64ToPath)(res.tempFilePath));case 16:_img = _context3.sent;case 17:

                              _this3.$emit('success', _img);_context3.next = 21;break;case 20:

                              _this3.$emit('success', res.tempFilePath);case 21:case "end":return _context3.stop();}}}, _callee3);}));return function (_x3) {return _ref4.apply(this, arguments);};}()).


                  catch(function (err) {
                    _this3.$emit('fail', new Error(JSON.stringify(err)));
                  });
                }
                _this3.isDrawIng = false;return _context4.abrupt("return",
                Promise.resolve({ ctx: ctx, draw: _this3.draw, node: _this3.node }));case 39:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    custom: function custom(cb) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _yield$_this4$render, ctx, draw;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  _this4.render({}, true));case 2:_yield$_this4$render = _context5.sent;ctx = _yield$_this4$render.ctx;draw = _yield$_this4$render.draw;
                ctx.save();_context5.next = 8;return (
                  cb(ctx, draw));case 8:
                ctx.restore();return _context5.abrupt("return",
                Promise.resolve(true));case 10:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    single: function single() {var _arguments2 = arguments,_this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var args, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:args = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};_context6.next = 3;return (
                  _this5.render(args, true));case 3:res = _context6.sent;return _context6.abrupt("return",
                Promise.resolve(res));case 5:case "end":return _context6.stop();}}}, _callee6);}))();
    },
    canvasDraw: function canvasDraw() {var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var
      ctx = this.ctx;
      return new Promise(function (resolve) {
        ctx.draw(flag, resolve);
      });
    },
    getContext: function getContext() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var type, use2dCanvas, dpr, boardWidth, boardHeight, _getContext;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:if (!(
                _this6.ctx && _this6.inited)) {_context7.next = 2;break;}return _context7.abrupt("return",
                Promise.resolve(_this6.ctx));case 2:

                type = _this6.type, use2dCanvas = _this6.use2dCanvas, dpr = _this6.dpr, boardWidth = _this6.boardWidth, boardHeight = _this6.boardHeight;
                _getContext = function _getContext() {
                  return new Promise(function (resolve) {
                    uni.createSelectorQuery().
                    in(_this6).
                    select("#".concat(_this6.canvasId)).
                    boundingClientRect().
                    exec(function (res) {
                      if (res) {
                        var ctx = uni.createCanvasContext(_this6.canvasId, _this6);
                        if (!_this6.inited) {
                          _this6.inited = true;
                          _this6.use2dCanvas = false;
                          _this6.canvas = res;
                        }



                        _this6.ctx = (0, _canvas.expand)(ctx);
                        resolve(_this6.ctx);
                      }
                    });
                  });
                };if (




                use2dCanvas) {_context7.next = 6;break;}return _context7.abrupt("return",
                _getContext());case 6:return _context7.abrupt("return",

                new Promise(function (resolve) {
                  uni.createSelectorQuery().
                  in(_this6).
                  select("#".concat(_this6.canvasId)).
                  node().
                  exec(function (res) {
                    var canvas = res[0].node;
                    if (!canvas) {
                      _this6.use2dCanvas = false;
                      resolve(_this6.getContext());
                    }
                    var ctx = canvas.getContext(type);
                    if (!_this6.inited) {
                      _this6.inited = true;
                      canvas.width = boardWidth * dpr;
                      canvas.height = boardHeight * dpr;
                      _this6.use2dCanvas = true;
                      _this6.canvas = canvas;
                      ctx.scale(dpr, dpr);
                    }
                    _this6.ctx = _canvas.adaptor ? (0, _canvas.adaptor)(ctx) : (0, _canvas.expand)(ctx);
                    resolve(_this6.ctx);
                  });
                }));case 7:case "end":return _context7.stop();}}}, _callee7);}))();
    },
    canvasToTempFilePath: function canvasToTempFilePath() {var _this7 = this;var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var
      use2dCanvas = this.use2dCanvas,canvasId = this.canvasId,dpr = this.dpr,fileType = this.fileType,quality = this.quality;
      return new Promise(function (resolve, reject) {var _ref5 =
        _this7.boundary || _this7,_ref5$top = _ref5.top,y = _ref5$top === void 0 ? 0 : _ref5$top,_ref5$left = _ref5.left,x = _ref5$left === void 0 ? 0 : _ref5$left,width = _ref5.width,height = _ref5.height;
        var destWidth = width * dpr;
        var destHeight = height * dpr;




        var copyArgs = Object.assign({
          x: x,
          y: y,
          width: width,
          height: height,
          destWidth: destWidth,
          destHeight: destHeight,
          canvasId: canvasId,
          fileType: fileType,
          quality: quality,
          success: resolve,
          fail: reject },
        args);
        if (use2dCanvas) {
          delete copyArgs.canvasId;
          copyArgs.canvas = _this7.canvas;
        }
        uni.canvasToTempFilePath(copyArgs, _this7);
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-painter/components/lime-painter/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-painter/components/lime-painter/index-create-component',
    {
        'uni_modules/lime-painter/components/lime-painter/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(622))
        })
    },
    [['uni_modules/lime-painter/components/lime-painter/index-create-component']]
]);
