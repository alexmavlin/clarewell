(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Clinics/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Clinics/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_timepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-timepicker */ "./node_modules/vue2-timepicker/dist/VueTimepicker.common.js");
/* harmony import */ var vue2_timepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_timepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-timepicker/dist/VueTimepicker.css */ "./node_modules/vue2-timepicker/dist/VueTimepicker.css");
/* harmony import */ var vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_3__);



vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('vue-timepicker', vue2_timepicker__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        city: '',
        district: '',
        address: '',
        postal_code: '',
        email_primary: '',
        email_2: '',
        email_3: '',
        phone_primary: '',
        phone_2: '',
        phone_3: '',
        google_maps_link: '',
        google_maps_iframe: '',
        open0: '',
        open1: '',
        open2: '',
        open3: '',
        open4: '',
        open5: '',
        open6: '',
        close0: '',
        close1: '',
        close2: '',
        close3: '',
        close4: '',
        close5: '',
        close6: '',
        closed0: false,
        closed1: false,
        closed2: false,
        closed3: false,
        closed4: false,
        closed5: false,
        closed6: false
      }
    };
  },
  methods: {
    createClinic: function createClinic() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/clinic/create', this.form).then(function (res) {
        console.log(res);
        _this.$router.push({
          name: 'home'
        });
      })["catch"](function (err) {
        console.log(err);
        console.log(err.response);
      });
    },
    disableInput: function disableInput() {
      console.log(this.form.closed0);
      console.log(this.open0);
      console.log(this.close0);
    },
    test: function test() {
      console.log(this.form.open0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Clinics/Create.vue?vue&type=template&id=9bef0b86&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Clinics/Create.vue?vue&type=template&id=9bef0b86& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v("New Clinic")]), _vm._v(" "), _c("form", {
    staticClass: "forms-sample",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createClinic();
      }
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "form-group col-3"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
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
    staticClass: "form-group col-3"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
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
    staticClass: "form-group col-3"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
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
      placeholder: "Address Line..."
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
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
      placeholder: "123456"
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
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email_primary,
      expression: "form.email_primary"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "email_primary",
      placeholder: "example@domain.com"
    },
    domProps: {
      value: _vm.form.email_primary
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email_primary", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email_2,
      expression: "form.email_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "email_2",
      placeholder: "example@domain.com"
    },
    domProps: {
      value: _vm.form.email_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email_2", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email_3,
      expression: "form.email_3"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "email_3",
      placeholder: "example@domain.com"
    },
    domProps: {
      value: _vm.form.email_3
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email_3", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(7), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_primary,
      expression: "form.phone_primary"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "phone_primary",
      placeholder: "+420111222333"
    },
    domProps: {
      value: _vm.form.phone_primary
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone_primary", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_2,
      expression: "form.phone_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "phone_2",
      placeholder: "+420111222333"
    },
    domProps: {
      value: _vm.form.phone_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone_2", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_3,
      expression: "form.phone_3"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "phone_3",
      placeholder: "+420111222333"
    },
    domProps: {
      value: _vm.form.phone_3
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone_3", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "form-group col-6"
  }, [_vm._m(10), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.google_maps_link,
      expression: "form.google_maps_link"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "google_maps_link",
      placeholder: "+420111222333"
    },
    domProps: {
      value: _vm.form.google_maps_link
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "google_maps_link", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-6"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.google_maps_iframe,
      expression: "form.google_maps_iframe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "google_maps_iframe",
      placeholder: "+420111222333"
    },
    domProps: {
      value: _vm.form.google_maps_iframe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "google_maps_iframe", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {}, [_c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed0,
      format: "HH:mm",
      "minute-interval": 10
    },
    on: {
      change: function change($event) {
        return _vm.test();
      }
    },
    model: {
      value: _vm.form.open0,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open0", $$v);
      },
      expression: "form.open0"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed0
    },
    model: {
      value: _vm.form.close0,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close0", $$v);
      },
      expression: "form.close0"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed0,
      expression: "form.closed0"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed0) ? _vm._i(_vm.form.closed0, null) > -1 : _vm.form.closed0
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.form.closed0,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed0", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed0", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed0", $$c);
        }
      }, function ($event) {
        return _vm.disableInput();
      }]
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed1
    },
    model: {
      value: _vm.form.open1,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open1", $$v);
      },
      expression: "form.open1"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed1
    },
    model: {
      value: _vm.form.close1,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close1", $$v);
      },
      expression: "form.close1"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed1,
      expression: "form.closed1"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed1) ? _vm._i(_vm.form.closed1, null) > -1 : _vm.form.closed1
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.closed1,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed1", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed1", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed1", $$c);
        }
      }
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed2
    },
    model: {
      value: _vm.form.open2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open2", $$v);
      },
      expression: "form.open2"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed2
    },
    model: {
      value: _vm.form.close2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close2", $$v);
      },
      expression: "form.close2"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed2,
      expression: "form.closed2"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed2) ? _vm._i(_vm.form.closed2, null) > -1 : _vm.form.closed2
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.closed2,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed2", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed2", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed2", $$c);
        }
      }
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed3
    },
    model: {
      value: _vm.form.open3,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open3", $$v);
      },
      expression: "form.open3"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed3
    },
    model: {
      value: _vm.form.close3,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close3", $$v);
      },
      expression: "form.close3"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed3,
      expression: "form.closed3"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed3) ? _vm._i(_vm.form.closed3, null) > -1 : _vm.form.closed3
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.closed3,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed3", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed3", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed3", $$c);
        }
      }
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(16), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed4
    },
    model: {
      value: _vm.form.open4,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open4", $$v);
      },
      expression: "form.open4"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed4
    },
    model: {
      value: _vm.form.close4,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close4", $$v);
      },
      expression: "form.close4"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed4,
      expression: "form.closed4"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed4) ? _vm._i(_vm.form.closed4, null) > -1 : _vm.form.closed4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.closed4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed4", $$c);
        }
      }
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(17), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed5
    },
    model: {
      value: _vm.form.open5,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open5", $$v);
      },
      expression: "form.open5"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed5
    },
    model: {
      value: _vm.form.close5,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close5", $$v);
      },
      expression: "form.close5"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed5,
      expression: "form.closed5"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed5) ? _vm._i(_vm.form.closed5, null) > -1 : _vm.form.closed5
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.closed5,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed5", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed5", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed5", $$c);
        }
      }
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group d-flex flex-column align-items-center"
  }, [_vm._m(18), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed6
    },
    model: {
      value: _vm.form.open6,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "open6", $$v);
      },
      expression: "form.open6"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.closed6
    },
    model: {
      value: _vm.form.close6,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "close6", $$v);
      },
      expression: "form.close6"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.closed6,
      expression: "form.closed6"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.closed6) ? _vm._i(_vm.form.closed6, null) > -1 : _vm.form.closed6
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.closed6,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "closed6", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "closed6", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "closed6", $$c);
        }
      }
    }
  }), _vm._v("Closed\n                                    "), _c("i", {
    staticClass: "input-helper"
  })])])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary mr-2",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light"
  }, [_vm._v("Cancel")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "city"
    }
  }, [_c("b", [_vm._v("City*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "district"
    }
  }, [_c("b", [_vm._v("District*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "address"
    }
  }, [_c("b", [_vm._v("Address*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "postal_code"
    }
  }, [_c("b", [_vm._v("Postal code*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "email_primary"
    }
  }, [_c("b", [_vm._v("Primary E-mail*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "email_2"
    }
  }, [_c("b", [_vm._v("Additional E-mail")]), _vm._v(" (optional)")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "email_3"
    }
  }, [_c("b", [_vm._v("Additional E-mail")]), _vm._v(" (optional)")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "phone_primary"
    }
  }, [_c("b", [_vm._v("Primary Phone Number*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "phone_2"
    }
  }, [_c("b", [_vm._v("Additional Phone Number")]), _vm._v(" (optional)")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "phone_3"
    }
  }, [_c("b", [_vm._v("Additional Phone Number")]), _vm._v(" (optional)")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "google_maps_link"
    }
  }, [_c("b", [_vm._v("Google Maps Link")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "google_maps_iframe"
    }
  }, [_c("b", [_vm._v("Google Maps Iframe")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Sunday")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Monday")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Tuesday")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Wednesday")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Thursday")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Friday")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Saturday")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Company/Clinics/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Company/Clinics/Create.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_9bef0b86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=9bef0b86& */ "./resources/js/components/Company/Clinics/Create.vue?vue&type=template&id=9bef0b86&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Company/Clinics/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_9bef0b86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_9bef0b86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Company/Clinics/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Company/Clinics/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Company/Clinics/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Clinics/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Company/Clinics/Create.vue?vue&type=template&id=9bef0b86&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Company/Clinics/Create.vue?vue&type=template&id=9bef0b86& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9bef0b86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=9bef0b86& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Clinics/Create.vue?vue&type=template&id=9bef0b86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9bef0b86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9bef0b86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);