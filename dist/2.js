(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Articles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Articles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _network_article_apiclient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../network/article.apiclient.js */ \"./src/network/article.apiclient.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tname: 'articles',\n\tcomponents: {},\n\tdata: function data() {\n\t\treturn {\n\t\t\tdata: [],\n\t\t\tloading: false,\n\t\t\tcommand: \"Get Data\"\n\t\t};\n\t},\n\n\tmethods: {\n\t\tgetData: function getData() {\n\t\t\tvar _this = this;\n\n\t\t\tif (typeof this.data !== 'undefined' && this.data.length > 0) {\n\t\t\t\tthis.data = [];\n\t\t\t\tthis.command = \"Get Data\";\n\t\t\t} else {\n\t\t\t\tthis.loading = true;\n\t\t\t\t_network_article_apiclient_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_ARTICLE\"]().then(function (res) {\n\t\t\t\t\t// console.log(response.data.data)\n\t\t\t\t\t_this.data = res.data.data.articles;\n\t\t\t\t}, function (err) {\n\t\t\t\t\talert(\"Hoops..\");\n\t\t\t\t});\n\t\t\t\tthis.loading = false;\n\t\t\t\tthis.command = \"Hide Result\";\n\t\t\t}\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack:///./src/pages/Articles.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Articles.vue?vue&type=template&id=6e7a0461&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Articles.vue?vue&type=template&id=6e7a0461& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"the-lining\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"inner-lining-m curve-btm\",\n        staticStyle: { \"background-color\": \"#534038\", color: \"#f2d2ab\" }\n      },\n      [\n        _c(\"center\", [\n          _c(\"div\", { staticClass: \"huge\", attrs: { id: \"main\" } }, [\n            _vm._v(\" Blo\"),\n            _c(\"u\", [_vm._v(\"ody Moo\")]),\n            _vm._v(\"ldy \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"button\", { on: { click: _vm.getData } }, [\n            _vm._v(_vm._s(_vm.command))\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _c(\"br\"),\n          _c(\"br\"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _vm.loading\n            ? _c(\"div\", [\n                _c(\"img\", {\n                  attrs: {\n                    src: \"/assets/images/loading-orange.gif\",\n                    width: \"100px\"\n                  }\n                })\n              ])\n            : _vm._e()\n        ]),\n        _vm._v(\" \"),\n        _vm._l(_vm.data, function(value) {\n          return _c(\n            \"div\",\n            {\n              staticClass: \"inner-lining-s curve-all\",\n              staticStyle: { \"background-color\": \"#333\" }\n            },\n            [\n              _c(\"h2\", [\n                _c(\"a\", { attrs: { href: \"#\" + value.slug } }, [\n                  _vm._v(_vm._s(value.title))\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"i\", [_vm._v(\"synopsis by \" + _vm._s(value.user.fullname))]),\n              _vm._v(\" \"),\n              _c(\"p\", { domProps: { innerHTML: _vm._s(value.body) } })\n            ]\n          )\n        })\n      ],\n      2\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/Articles.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/network/article.apiclient.js":
/*!******************************************!*\
  !*** ./src/network/article.apiclient.js ***!
  \******************************************/
/*! exports provided: GET_ARTICLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_ARTICLE\", function() { return GET_ARTICLE; });\n/* harmony import */ var _apiclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiclient */ \"./src/network/apiclient.js\");\n\n\nvar GET_ARTICLE = function GET_ARTICLE() {\n\treturn _apiclient__WEBPACK_IMPORTED_MODULE_0__[\"API_CLIENT\"].get('/articles');\n};\n\n//# sourceURL=webpack:///./src/network/article.apiclient.js?");

/***/ }),

/***/ "./src/pages/Articles.vue":
/*!********************************!*\
  !*** ./src/pages/Articles.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Articles_vue_vue_type_template_id_6e7a0461___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles.vue?vue&type=template&id=6e7a0461& */ \"./src/pages/Articles.vue?vue&type=template&id=6e7a0461&\");\n/* harmony import */ var _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Articles.vue?vue&type=script&lang=js& */ \"./src/pages/Articles.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Articles_vue_vue_type_template_id_6e7a0461___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Articles_vue_vue_type_template_id_6e7a0461___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/Articles.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/Articles.vue?");

/***/ }),

/***/ "./src/pages/Articles.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/pages/Articles.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Articles.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/Articles.vue?");

/***/ }),

/***/ "./src/pages/Articles.vue?vue&type=template&id=6e7a0461&":
/*!***************************************************************!*\
  !*** ./src/pages/Articles.vue?vue&type=template&id=6e7a0461& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_6e7a0461___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=template&id=6e7a0461& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Articles.vue?vue&type=template&id=6e7a0461&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_6e7a0461___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_6e7a0461___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/Articles.vue?");

/***/ })

}]);