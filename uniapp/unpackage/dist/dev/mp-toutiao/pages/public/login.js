(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/public/login"],{

/***/ 72:
/*!*********************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/main.js?{"page":"pages%2Fpublic%2Flogin"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/public/login.vue */ 73));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 73:
/*!**************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=2f0f6fbc&scoped=true& */ 74);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 76);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=2f0f6fbc&lang=scss&scoped=true& */ 79);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f0f6fbc",
  null,
  false,
  _login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/public/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/*!*********************************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue?vue&type=template&id=2f0f6fbc&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=2f0f6fbc&scoped=true& */ 75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_2f0f6fbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 75:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue?vue&type=template&id=2f0f6fbc&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 76:
/*!***************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 77);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























































var _wechat = __webpack_require__(/*! ../../common/wechat */ 78);
var _check = __webpack_require__(/*! ../../common/check */ 29);var loading = function loading() {__webpack_require__.e(/*! require.ensure | components/tool/loading */ "components/tool/loading").then((function () {return resolve(__webpack_require__(/*! ../../components/tool/loading */ 519));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    loading: loading },

  data: function data() {
    return {
      isSubmit: false,
      platform: "app" };

  },
  onLoad: function onLoad() {
    this.platform = this.$utils.platformAgent();
  },
  onShow: function onShow() {var _this = this;
    // 微信公众号授权成功后回调处理
    if (this.platform.type == "h5" && this.platform.isWechat) {
      if (this.$route.query.code != undefined && this.$route.query.code.length) {
        this.isSubmit = true;
        this.$http.sendOauth({
          code: this.$route.query.code,
          state: this.$route.query.state }).
        then(function (result) {
          if (result.status) {
            _this.$store.commit("UPDATEUSERS", result.data);
            _this.$utils.switchTab('ucenter/index');
          } else {
            _this.$utils.msg(result.info);
          }

          _this.isSubmit = false;
        }).catch(function (error) {
          _this.isSubmit = false;
          _this.$utils.msg("请求失败，请稍后在试");
        });
      }
    }
  },
  onBackPress: function onBackPress(e) {
    if (e.from === 'navigateBack') {
      return false;
    }

    this.$utils.switchTab('index/index');
    return true;
  },
  methods: {
    onWxMiniLogin: function onWxMiniLogin() {
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: function success(res) {
          console.log("res", res);
          wx.login({
            success: function success(resData) {
              console.log("login", resData);
            },
            fail: function fail(err) {
              console.log("err", err);
            } });

        } });

    },
    onWechatLogin: function onWechatLogin() {var _this2 = this;
      (0, _wechat.login)().catch(function (error) {
        _this2.$utils.msg();
      });
    },
    onGoHome: function onGoHome() {
      this.$utils.switchTab("index/index");
    },
    onSubmit: function onSubmit(e) {var _this3 = this;
      var formData = e.detail.value;
      this.isSubmit = true;
      if (formData.phone == '') {
        this.isSubmit = false;
        this.$utils.msg("请填写手机号码！");
        return;
      } else if (!(0, _check.checkPhone)(formData.phone)) {
        this.isSubmit = false;
        this.$utils.msg("您填写的手机号码不正确！");
        return;
      } else if (formData.password == '') {
        this.isSubmit = false;
        this.$utils.msg("请填写密码！");
        return;
      }

      this.$http.sendLogin({
        username: formData.phone,
        password: formData.password }).
      then(function (result) {
        if (result.status) {
          _this3.$store.commit("UPDATEUSERS", result.data);
          _this3.$utils.switchTab('ucenter/index');
        } else {
          _this3.$utils.msg(result.info);
        }

        _this3.isSubmit = false;
      }).catch(function (error) {
        _this3.isSubmit = false;
        _this3.$utils.msg("连接网络错误，请检查网络是否连接！");
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 79:
/*!************************************************************************************************************************************!*\
  !*** /Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue?vue&type=style&index=0&id=2f0f6fbc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=2f0f6fbc&lang=scss&scoped=true& */ 80);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_2f0f6fbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/huangjiapeng/www/A3MallX/A3MallX/app/pages/public/login.vue?vue&type=style&index=0&id=2f0f6fbc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[72,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2h1YW5namlhcGVuZy93d3cvQTNNYWxsWC9BM01hbGxYL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4udnVlP2I3OTciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9odWFuZ2ppYXBlbmcvd3d3L0EzTWFsbFgvQTNNYWxsWC9hcHAvcGFnZXMvcHVibGljL2xvZ2luLnZ1ZT8zOTFlIiwid2VicGFjazovLy8vVXNlcnMvaHVhbmdqaWFwZW5nL3d3dy9BM01hbGxYL0EzTWFsbFgvYXBwL3BhZ2VzL3B1YmxpYy9sb2dpbi52dWU/MTdjYyIsIndlYnBhY2s6Ly8vL1VzZXJzL2h1YW5namlhcGVuZy93d3cvQTNNYWxsWC9BM01hbGxYL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4udnVlP2FhMDEiLCJ1bmktYXBwOi8vL3BhZ2VzL3B1YmxpYy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9odWFuZ2ppYXBlbmcvd3d3L0EzTWFsbFgvQTNNYWxsWC9hcHAvcGFnZXMvcHVibGljL2xvZ2luLnZ1ZT8wODY5Iiwid2VicGFjazovLy8vVXNlcnMvaHVhbmdqaWFwZW5nL3d3dy9BM01hbGxYL0EzTWFsbFgvYXBwL3BhZ2VzL3B1YmxpYy9sb2dpbi52dWU/YWFjZSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsNkY7QUFDQUEsVUFBVSxDQUFDQyxjQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4SDtBQUM5SDtBQUN5RDtBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDbU47QUFDbk4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFrMUIsQ0FBZ0IsbXlCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUR0MkI7QUFDQSwrRDtBQUNBO0FBQ0E7QUFDQSxvQkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLHFCQURBO0FBRUEscUJBRkE7O0FBSUEsR0FUQTtBQVVBLFFBVkEsb0JBVUE7QUFDQTtBQUNBLEdBWkE7QUFhQSxRQWJBLG9CQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsd0NBRkE7QUFHQSxZQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FaQSxFQVlBLEtBWkEsQ0FZQTtBQUNBO0FBQ0E7QUFDQSxTQWZBO0FBZ0JBO0FBQ0E7QUFDQSxHQXBDQTtBQXFDQSxhQXJDQSx1QkFxQ0EsQ0FyQ0EsRUFxQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBNUNBO0FBNkNBO0FBQ0EsaUJBREEsMkJBQ0E7QUFDQTtBQUNBLHNCQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQTtBQUlBO0FBQ0E7QUFDQSxhQU5BOztBQVFBLFNBWkE7O0FBY0EsS0FoQkE7QUFpQkEsaUJBakJBLDJCQWlCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FyQkE7QUFzQkEsWUF0QkEsc0JBc0JBO0FBQ0E7QUFDQSxLQXhCQTtBQXlCQSxZQXpCQSxvQkF5QkEsQ0F6QkEsRUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQURBO0FBRUEsbUNBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FaQSxFQVlBLEtBWkEsQ0FZQTtBQUNBO0FBQ0E7QUFDQSxPQWZBO0FBZ0JBLEtBMURBLEVBN0NBLEU7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFBO0FBQUE7QUFBK2lELENBQWdCLHE1Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQW5rRDtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3B1YmxpYy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9wdWJsaWMvbG9naW4udnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMGY2ZmJjJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmYwZjZmYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmYwZjZmYmNcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcHVibGljL2xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMGY2ZmJjJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJhcHBcIiB2LWlmPVwiKHBsYXRmb3JtLnR5cGU9PSdhcHAnIHx8IHBsYXRmb3JtLnR5cGU9PSdoNScpICYmICFwbGF0Zm9ybS5pc1dlY2hhdFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cblx0XHRcdFx0PHZpZXc+QTNNYWxsPC92aWV3PlxuXHRcdFx0XHQ8dmlldz7ntKDng5/lp788L3ZpZXc+XG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvZ2luLWJnLnBuZ1wiPjwvaW1hZ2U+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IGNsYXNzPVwidGhlZm9ybVwiPlxuXHRcdFx0XHQ8Zm9ybSBAc3VibWl0PVwib25TdWJtaXRcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZpZWxkcy1ib3hcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmllbGQtYm94IGljb25mb250XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJ1bmktaW5wdXRcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT1cIjE4MDI2NzQwMzI2XCIgcGxhY2Vob2xkZXI9XCLmiYvmnLrlj7dcIiAvPlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmaWVsZC1ib3ggaWNvbmZvbnRcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwidW5pLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJhZG1pbjg4OFwiIHBsYWNlaG9sZGVyPVwi5a+G56CBXCIgLz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIj5cblx0XHRcdFx0XHRcdDxidXR0b24gOmRpc2FibGVkPVwiaXNTdWJtaXRcIiBmb3JtLXR5cGU9XCJzdWJtaXRcIj7nmbsg6ZmGPC9idXR0b24+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlwcy1ib3ggY2xlYXJcIj5cblx0XHRcdFx0XHQ8dmlldz48bmF2aWdhdG9yIHVybD1cInJlZ2lzdGVyXCIgaG92ZXItY2xhc3M9XCJub25lXCI+55So5oi35rOo5YaMPC9uYXZpZ2F0b3I+PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3PjxuYXZpZ2F0b3IgdXJsPVwiZm9yZ2V0XCIgaG92ZXItY2xhc3M9XCJub25lXCI+5b+Y6K6w5a+G56CBPC9uYXZpZ2F0b3I+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwiaDVcIiB2LWlmPVwicGxhdGZvcm0udHlwZT09J2g1JyAmJiBwbGF0Zm9ybS5pc1dlY2hhdFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dvXCI+PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYTNtYWxsLnBuZ1wiPjwvaW1hZ2U+PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWNoYXQtdGl0bGVcIj7lvq7kv6HmjojmnYPnmbvlvZU8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIndlY2hhdC1kZXNjXCI+6I635b6X5oKo55qE5YWs5byA5L+h5oGv77yI5pi156ew44CB5aS05YOP562J77yJ77yM5Lul5L6/5Li65oKo5o+Q5L6b5pu05aW955qE5pyN5YqhPC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWNoYXQtbG9naW4tYnRuXCIgQGNsaWNrPVwib25XZWNoYXRMb2dpblwiPuaOiOadg+eZu+W9lTwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwid2VjaGF0LWdvLWhvbWVcIiBAY2xpY2s9XCJvbkdvSG9tZVwiPuaaguS4jeeZu+W9lTwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XG5cdFx0PCEtLSAjaWZkZWYgTVAgLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJoNVwiIHYtaWY9XCJwbGF0Zm9ybS50eXBlPT0nbXAtd2VpeGluJ1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dvXCI+PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYTNtYWxsLnBuZ1wiPjwvaW1hZ2U+PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWNoYXQtdGl0bGVcIj7lvq7kv6HmjojmnYPnmbvlvZU8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIndlY2hhdC1kZXNjXCI+6I635b6X5oKo55qE5YWs5byA5L+h5oGv77yI5pi156ew44CB5aS05YOP562J77yJ77yM5Lul5L6/5Li65oKo5o+Q5L6b5pu05aW955qE5pyN5YqhPC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWNoYXQtbG9naW4tYnRuXCIgQGNsaWNrPVwib25XeE1pbmlMb2dpblwiPuaOiOadg+eZu+W9lTwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwid2VjaGF0LWdvLWhvbWVcIiBAY2xpY2s9XCJvbkdvSG9tZVwiPuaaguS4jeeZu+W9lTwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XG5cdFx0PGxvYWRpbmcgdi1pZj1cImlzU3VibWl0XCIgOmxheWVyPVwidHJ1ZVwiPjwvbG9hZGluZz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbiBcbjxzY3JpcHQ+XG5cdGltcG9ydCBsb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdG9vbC9sb2FkaW5nJztcblx0aW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi9jb21tb24vd2VjaGF0Jztcblx0aW1wb3J0IHsgY2hlY2tQaG9uZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9jaGVjayc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHRsb2FkaW5nXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aXNTdWJtaXQ6IGZhbHNlLFxuXHRcdFx0XHRwbGF0Zm9ybTogXCJhcHBcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXHRcdFx0dGhpcy5wbGF0Zm9ybSA9IHRoaXMuJHV0aWxzLnBsYXRmb3JtQWdlbnQoKTtcblx0XHR9LFxuXHRcdG9uU2hvdygpIHtcblx0XHRcdC8vIOW+ruS/oeWFrOS8l+WPt+aOiOadg+aIkOWKn+WQjuWbnuiwg+WkhOeQhlxuXHRcdFx0aWYodGhpcy5wbGF0Zm9ybS50eXBlID09IFwiaDVcIiAmJiB0aGlzLnBsYXRmb3JtLmlzV2VjaGF0KXtcblx0XHRcdFx0aWYodGhpcy4kcm91dGUucXVlcnkuY29kZSAhPSB1bmRlZmluZWQgJiYgdGhpcy4kcm91dGUucXVlcnkuY29kZS5sZW5ndGgpe1xuXHRcdFx0XHRcdHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuJGh0dHAuc2VuZE9hdXRoKHtcblx0XHRcdFx0XHRcdGNvZGU6IHRoaXMuJHJvdXRlLnF1ZXJ5LmNvZGUsXG5cdFx0XHRcdFx0XHRzdGF0ZTogdGhpcy4kcm91dGUucXVlcnkuc3RhdGVcblx0XHRcdFx0XHR9KS50aGVuKHJlc3VsdD0+e1xuXHRcdFx0XHRcdFx0aWYocmVzdWx0LnN0YXR1cyl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdChcIlVQREFURVVTRVJTXCIscmVzdWx0LmRhdGEpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLiR1dGlscy5zd2l0Y2hUYWIoJ3VjZW50ZXIvaW5kZXgnKTtcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHR0aGlzLiR1dGlscy5tc2cocmVzdWx0LmluZm8pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fSkuY2F0Y2goZXJyb3I9Pntcblx0XHRcdFx0XHRcdHRoaXMuaXNTdWJtaXQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHRoaXMuJHV0aWxzLm1zZyhcIuivt+axguWksei0pe+8jOivt+eojeWQjuWcqOivlVwiKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25CYWNrUHJlc3MoZSl7XG5cdFx0XHRpZiAoZS5mcm9tID09PSAnbmF2aWdhdGVCYWNrJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMuJHV0aWxzLnN3aXRjaFRhYignaW5kZXgvaW5kZXgnKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0b25XeE1pbmlMb2dpbigpe1xuXHRcdFx0XHR3eC5nZXRVc2VyUHJvZmlsZSh7XG5cdFx0XHRcdCAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuXHRcdFx0XHQgIHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJlc1wiLHJlcylcblx0XHRcdFx0XHR3eC5sb2dpbih7XG5cdFx0XHRcdFx0ICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzRGF0YSl7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImxvZ2luXCIscmVzRGF0YSk7XG5cdFx0XHRcdFx0ICB9LFxuXHRcdFx0XHRcdCAgZmFpbDpmdW5jdGlvbiAoZXJyKXtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyXCIsZXJyKTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQgIH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvbldlY2hhdExvZ2luKCl7XG5cdFx0XHRcdGxvZ2luKCkuY2F0Y2goZXJyb3I9Pntcblx0XHRcdFx0XHR0aGlzLiR1dGlscy5tc2coKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0b25Hb0hvbWUoKXtcblx0XHRcdFx0dGhpcy4kdXRpbHMuc3dpdGNoVGFiKFwiaW5kZXgvaW5kZXhcIik7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWJtaXQoZSl7XG5cdFx0XHRcdGxldCBmb3JtRGF0YSA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0XHR0aGlzLmlzU3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0aWYoZm9ybURhdGEucGhvbmUgPT0gJycpe1xuXHRcdFx0XHRcdHRoaXMuaXNTdWJtaXQgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLiR1dGlscy5tc2coXCLor7floavlhpnmiYvmnLrlj7fnoIHvvIFcIik7XG5cdFx0XHRcdFx0cmV0dXJuIDtcblx0XHRcdFx0fWVsc2UgaWYoIWNoZWNrUGhvbmUoZm9ybURhdGEucGhvbmUpKXtcblx0XHRcdFx0XHR0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy4kdXRpbHMubXNnKFwi5oKo5aGr5YaZ55qE5omL5py65Y+356CB5LiN5q2j56Gu77yBXCIpO1xuXHRcdFx0XHRcdHJldHVybiA7XG5cdFx0XHRcdH1lbHNlIGlmKGZvcm1EYXRhLnBhc3N3b3JkID09ICcnKXtcblx0XHRcdFx0XHR0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy4kdXRpbHMubXNnKFwi6K+35aGr5YaZ5a+G56CB77yBXCIpO1xuXHRcdFx0XHRcdHJldHVybiA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuJGh0dHAuc2VuZExvZ2luKHtcblx0XHRcdFx0XHR1c2VybmFtZTogZm9ybURhdGEucGhvbmUsXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkXG5cdFx0XHRcdH0pLnRoZW4oKHJlc3VsdCk9Pntcblx0XHRcdFx0XHRpZihyZXN1bHQuc3RhdHVzKXtcblx0XHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdChcIlVQREFURVVTRVJTXCIscmVzdWx0LmRhdGEpO1xuXHRcdFx0XHRcdFx0dGhpcy4kdXRpbHMuc3dpdGNoVGFiKCd1Y2VudGVyL2luZGV4Jyk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLiR1dGlscy5tc2cocmVzdWx0LmluZm8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdH0pLmNhdGNoKChlcnJvcik9Pntcblx0XHRcdFx0XHR0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy4kdXRpbHMubXNnKFwi6L+e5o6l572R57uc6ZSZ6K+v77yM6K+35qOA5p+l572R57uc5piv5ZCm6L+e5o6l77yBXCIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC5oNSB7XG5cdFx0LmxvZ28ge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZy10b3A6IDE4MHJweDtcblx0XHRcdGltYWdlIHtcblx0XHRcdFx0d2lkdGg6IDE4MHJweDtcblx0XHRcdFx0aGVpZ2h0OiAxODBycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC53ZWNoYXQtdGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAzNXJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdG1hcmdpbi10b3A6IDY0cnB4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblx0XHQud2VjaGF0LWRlc2Mge1xuXHRcdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdG1hcmdpbi10b3A6IDI0cnB4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMTBycHggNTBycHg7XG5cdFx0fVxuXHRcdC53ZWNoYXQtbG9naW4tYnRuIHtcblx0XHRcdGhlaWdodDogODBycHg7IGxpbmUtaGVpZ2h0OiA4MHJweDtcblx0XHRcdGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNBN0ZGO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOiA1MHJweDtcblx0XHRcdG1hcmdpbjogNTBycHg7IGZvbnQtc2l6ZTogMzJycHg7XG5cdFx0fVxuXHRcdC53ZWNoYXQtZ28taG9tZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMHJweDsgY29sb3I6IzY2NjsgfVxuXHR9XG5cdC50b3Age1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNiNjE5MjI7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAzODZycHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0dmlldyB7XG5cdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0JjpudGgtY2hpbGQoMSkge1xuXHRcdFx0XHR0b3A6IDkwcnB4O1xuXHRcdFx0XHRmb250LXNpemU6IDcycnB4O1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDE2NzZkO1xuXHRcdFx0XHRcdGhlaWdodDogMXB4O1xuXHRcdFx0XHRcdHdpZHRoOiAyMTBycHg7XG5cdFx0XHRcdFx0dG9wOiAxMjBycHg7XG5cdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0XHR0b3A6IDIyNXJweDtcblx0XHRcdFx0Zm9udC1zaXplOiA0OXJweDtcblx0XHRcdFx0Y29sb3I6ICNmZmYwMDA7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltYWdlIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAzODZycHg7XG5cdFx0fVxuXHR9XG5cdFxuXHQudGhlZm9ybSB7XG5cdFx0d2lkdGg6IDU5MHJweDtcblx0XHRtYXJnaW46IDcwcnB4IGF1dG8gMCBhdXRvO1xuXHRcdC5maWVsZHMtYm94e1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZDJjZGNkO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuXHRcdFx0LmZpZWxkLWJveHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNDBycHg7XG5cdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkMmNkY2Q7O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlucHV0IHsgXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7IGhlaWdodDogMTAwcnB4OyBsaW5lLWhlaWdodDogMTAwcnB4OyBcblx0XHRcdFx0XHR0ZXh0LWluZGVudDogMTAwcnB4OyBmb250LXNpemU6MjlycHg7IGNvbG9yOiAjODg4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6bnRoLWNoaWxkKDEpOmJlZm9yZSB7IFxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXFxlNjFiXCI7XG5cdFx0XHRcdFx0Y29sb3I6ICNiZmJmYmY7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGxlZnQ6IDMwcnB4O1xuXHRcdFx0XHRcdHRvcDogMjhycHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpudGgtY2hpbGQoMik6YmVmb3JlIHtcblx0XHRcdFx0XHRjb250ZW50OiBcIlxcZTYxYVwiO1xuXHRcdFx0XHRcdGNvbG9yOiAjYmZiZmJmO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRsZWZ0OiAzMHJweDtcblx0XHRcdFx0XHR0b3A6IDI4cnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5idG57XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1hcmdpbi10b3A6IDQ4cnB4O1xuXHRcdFx0YnV0dG9ue1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2I5MTkyMjtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2I5MTkyMjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMzNycHg7XG5cdFx0XHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTAwcnB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC50aXBzLWJveHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRcdGNvbG9yOiAjODg4O1xuXHRcdFx0bWFyZ2luLXRvcDogNDVycHg7XG5cdFx0XHR2aWV3IHtcblx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmYwZjZmYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjBmNmZiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjIyNjE5MzgwMTA0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=