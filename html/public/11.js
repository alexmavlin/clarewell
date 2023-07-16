(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Registration",
  data: function data() {
    return {
      logo: '/template_src/images/logo.svg',
      form: {
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
      },
      errors: {},
      error403: null
    };
  },
  methods: {
    registerUser: function registerUser() {
      var _this = this;
      axios.post('/api/register/signup', this.form).then(function (res) {
        localStorage.setItem('access_token', res.data.access_token);
        _this.$router.push({
          name: 'company.create'
        });
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
        if (err.response.data.errors) {
          _this.errors = err.response.data.errors;
        }
        if (err.response.data.message) {
          _this.error403 = err.response.data.message;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-scroller"
  }, [_c("div", {
    staticClass: "container-fluid page-body-wrapper full-page-wrapper"
  }, [_c("div", {
    staticClass: "content-wrapper d-flex align-items-center auth px-0"
  }, [_c("div", {
    staticClass: "row w-100 mx-0"
  }, [_c("div", {
    staticClass: "col-lg-4 mx-auto"
  }, [_c("div", {
    staticClass: "auth-form-light text-left py-5 px-4 px-sm-5"
  }, [_c("div", {
    staticClass: "brand-logo"
  }, [_c("img", {
    attrs: {
      src: _vm.logo,
      alt: "logo"
    }
  })]), _vm._v(" "), _c("h4", [_vm._v("Hello! let's get started")]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-light"
  }, [_vm._v("Sign in to continue.")]), _vm._v(" "), _c("form", {
    staticClass: "pt-3",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.registerUser();
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm.errors ? _c("div", [_vm.errors.email ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.email[0]))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.error403 ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.error403))]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "email",
      id: "email",
      placeholder: "Email"
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_vm.errors ? _c("div", [_vm.errors.name ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      id: "name",
      placeholder: "Name"
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
    staticClass: "form-group"
  }, [_vm.errors ? _c("div", [_vm.errors.password ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.password[0]))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "password",
      id: "password",
      placeholder: "Password"
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password_confirmation,
      expression: "form.password_confirmation"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "password",
      id: "password",
      placeholder: "Password"
    },
    domProps: {
      value: _vm.form.password_confirmation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password_confirmation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-3"
  }, [_c("button", {
    staticClass: "btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                                        SIGN UP\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "my-2 d-flex justify-content-between align-items-center"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("label", {
    staticClass: "form-check-label text-muted"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    }
  }), _vm._v("\n                                            Keep me signed in\n                                        ")])]), _vm._v(" "), _c("a", {
    staticClass: "auth-link text-black",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Forgot password?")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Auth/Registration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Auth/Registration.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=3583df05& */ "./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=3583df05& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Registration.vue?vue&type=template&id=3583df05&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_3583df05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);