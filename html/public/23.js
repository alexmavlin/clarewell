(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/CompanyCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/CompanyCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__);



vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('v-select', vue_select__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.previousRouteNameChecker();
  },
  data: function data() {
    return {
      form: {
        name: '',
        city: '',
        district: '',
        address: '',
        postal_code: '',
        vat: ''
      },
      skip_visible: false,
      countryOptions: ['United Kingdom', 'Czech Republic', 'Germany']
    };
  },
  methods: {
    previousRouteNameChecker: function previousRouteNameChecker() {
      var _this = this;
      this.$router.afterEach(function (to, from, next) {
        if (from.name === 'registration') {
          _this.skip_visible = true;
        }
      });
    },
    createCompany: function createCompany() {
      var _this2 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/company/storeNewCompany', this.form).then(function (res) {
        localStorage.setItem('company_id', res.data.id);
        _this2.$router.push({
          name: 'home'
        });
      })["catch"](function (err) {
        console.log(err);
        console.log(err.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/CompanyCreate.vue?vue&type=template&id=3bc0c668&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/CompanyCreate.vue?vue&type=template&id=3bc0c668& ***!
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
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("Add your company details")]), _vm._v(" "), _c("p", {
    staticClass: "card-description"
  }, [_vm._v("\n                This information will serve as the basis for generating all invoice templates.\n            ")]), _vm._v(" "), _c("form", {
    staticClass: "forms-sample",
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createCompany();
      }
    }
  }, [_c("div", {
    staticClass: "d-flex col-12 justify-content-between"
  }, [_c("div", {
    staticClass: "form-group col-5"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Company name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "name",
      placeholder: "My Company Ltd."
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3"
  }, [_c("label", [_vm._v("Select country")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.countryOptions
    },
    model: {
      value: _vm.form.country,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "country", $$v);
      },
      expression: "form.country"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex col-12 justify-content-between"
  }, [_c("div", {
    staticClass: "form-group col 4"
  }, [_c("label", {
    attrs: {
      "for": "city"
    }
  }, [_vm._v("City")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.city,
      expression: "form.city"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "city",
      placeholder: "London"
    },
    domProps: {
      value: _vm.form.city
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "city", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_c("label", {
    attrs: {
      "for": "district"
    }
  }, [_vm._v("District")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.district,
      expression: "form.district"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "district",
      placeholder: "Marylebone"
    },
    domProps: {
      value: _vm.form.district
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "district", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_c("label", {
    attrs: {
      "for": "address"
    }
  }, [_vm._v("Address line")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.address,
      expression: "form.address"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "address",
      placeholder: "9 Ivor Place"
    },
    domProps: {
      value: _vm.form.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "address", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex col-12 justify-content-between"
  }, [_c("div", {
    staticClass: "form-group col-6"
  }, [_c("label", {
    attrs: {
      "for": "postal_code"
    }
  }, [_vm._v("Postal code")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.postal_code,
      expression: "form.postal_code"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "postal_code",
      placeholder: "NW1 6BY"
    },
    domProps: {
      value: _vm.form.postal_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "postal_code", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-6"
  }, [_c("label", {
    attrs: {
      "for": "vat"
    }
  }, [_vm._v("VAT number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.vat,
      expression: "form.vat"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "vat",
      placeholder: "12345678"
    },
    domProps: {
      value: _vm.form.vat
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "vat", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary mr-2",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), !_vm.skip_visible ? _c("router-link", {
    staticClass: "btn btn-light",
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_vm._v("Cancel")]) : _vm._e(), _vm._v(" "), _vm.skip_visible ? _c("router-link", {
    staticClass: "btn btn-light",
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_vm._v("Skip for now")]) : _vm._e()], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Company/CompanyCreate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Company/CompanyCreate.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyCreate_vue_vue_type_template_id_3bc0c668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyCreate.vue?vue&type=template&id=3bc0c668& */ "./resources/js/components/Company/CompanyCreate.vue?vue&type=template&id=3bc0c668&");
/* harmony import */ var _CompanyCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/Company/CompanyCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyCreate_vue_vue_type_template_id_3bc0c668___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyCreate_vue_vue_type_template_id_3bc0c668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Company/CompanyCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Company/CompanyCreate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Company/CompanyCreate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/CompanyCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Company/CompanyCreate.vue?vue&type=template&id=3bc0c668&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Company/CompanyCreate.vue?vue&type=template&id=3bc0c668& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCreate_vue_vue_type_template_id_3bc0c668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyCreate.vue?vue&type=template&id=3bc0c668& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/CompanyCreate.vue?vue&type=template&id=3bc0c668&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCreate_vue_vue_type_template_id_3bc0c668___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCreate_vue_vue_type_template_id_3bc0c668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);