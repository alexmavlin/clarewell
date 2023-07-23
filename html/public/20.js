(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Patients/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Patients/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getPatientData();
  },
  data: function data() {
    return {
      patient: {}
    };
  },
  methods: {
    getPatientData: function getPatientData() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/patient/' + this.$route.params.id).then(function (res) {
        console.log(res);
        _this.patient = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Patients/Show.vue?vue&type=template&id=49dc661e&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Patients/Show.vue?vue&type=template&id=49dc661e& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "col-md-12 grid-margin stretch-card"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "card-body col-8"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.patient.name))]), _vm._v(" "), _c("p", {
    staticClass: "card-description"
  }, [_vm._v("\n                        Patient id: " + _vm._s(_vm.patient.patient_id) + "\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("address", [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Address")]), _vm._v(" "), _c("p", [_vm._v("\n                                    " + _vm._s(_vm.patient.address) + ",\n                                ")]), _vm._v(" "), _c("p", [_vm._v("\n                                    " + _vm._s(_vm.patient.postal_code) + "\n                                ")]), _vm._v(" "), _c("p", [_vm._v("\n                                    " + _vm._s(_vm.patient.district + ", " + _vm.patient.city) + "\n                                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("address", {
    staticClass: "text-primary"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n                                    E-mail\n                                ")]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_vm._v("\n                                    " + _vm._s(_vm.patient.email) + "\n                                ")]), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n                                    Phone number\n                                ")]), _vm._v(" "), _c("p", [_vm._v("\n                                    " + _vm._s(_vm.patient.phone ? _vm.patient.phone : "") + "\n                                ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "template-demo"
  }, [_c("router-link", {
    staticClass: "btn btn-info btn-lg btn-block",
    attrs: {
      to: {
        name: "appointments.create",
        params: {
          id: _vm.patient.id
        }
      },
      type: "button"
    }
  }, [_vm._v("Book an appointment")])], 1)])])]), _vm._v(" "), _vm._m(0)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("History")]), _vm._v(" "), _c("p", {
    staticClass: "card-description"
  }, [_vm._v("\n                    Use class "), _c("code", [_vm._v(".lead")])]), _vm._v(" "), _c("p", {
    staticClass: "lead"
  }, [_vm._v("\n                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Company/Patients/Show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Company/Patients/Show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_49dc661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=49dc661e& */ "./resources/js/components/Company/Patients/Show.vue?vue&type=template&id=49dc661e&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/Company/Patients/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_49dc661e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_49dc661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Company/Patients/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Company/Patients/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Company/Patients/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Patients/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Company/Patients/Show.vue?vue&type=template&id=49dc661e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Company/Patients/Show.vue?vue&type=template&id=49dc661e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_49dc661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=49dc661e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Patients/Show.vue?vue&type=template&id=49dc661e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_49dc661e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_49dc661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);