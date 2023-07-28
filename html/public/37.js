(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api */ "./resources/js/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_timepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-timepicker */ "./node_modules/vue2-timepicker/dist/VueTimepicker.common.js");
/* harmony import */ var vue2_timepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_timepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-timepicker/dist/VueTimepicker.css */ "./node_modules/vue2-timepicker/dist/VueTimepicker.css");
/* harmony import */ var vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);



vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('vue-timepicker', vue2_timepicker__WEBPACK_IMPORTED_MODULE_2___default.a);


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getClinicData();
  },
  data: function data() {
    return {
      form: {}
    };
  },
  methods: {
    getClinicData: function getClinicData() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/auth/clinic/show/".concat(this.$route.params.id)).then(function (res) {
        for (var i = 0; i < res.data.opening_hours.length; i++) {
          if (res.data.opening_hours[i].closed == 1) {
            res.data.opening_hours[i].closed = true;
          } else {
            res.data.opening_hours[i].closed = false;
          }
        }
        _this.form = res.data;
        console.log(_this.form);
      });
    },
    updateClinic: function updateClinic() {
      var _this2 = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        title: 'Are you sure you want to update the clinic?',
        text: "Clinic details will be changed",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then(function (res) {
        if (res.isConfirmed) {
          _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/auth/clinic/update/".concat(_this2.$route.params.id), _this2.form).then(function (res) {
            _this2.$router.push({
              name: 'owner.clinics.show',
              params: {
                id: _this2.$route.params.id
              }
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=template&id=ff1b0572&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=template&id=ff1b0572& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.updateClinic();
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
      value: _vm.form.email_1,
      expression: "form.email_1"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "email_2",
      placeholder: "example@domain.com"
    },
    domProps: {
      value: _vm.form.email_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email_1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email_2,
      expression: "form.email_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "email_3",
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
      value: _vm.form.phone_1,
      expression: "form.phone_1"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "phone_2",
      placeholder: "+420111222333"
    },
    domProps: {
      value: _vm.form.phone_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone_1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_2,
      expression: "form.phone_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "phone_3",
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
      disabled: _vm.form.opening_hours[0].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[0].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[0], "open_hour", $$v);
      },
      expression: "form.opening_hours[0].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[0].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[0].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[0], "close_hour", $$v);
      },
      expression: "form.opening_hours[0].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[0].closed,
      expression: "form.opening_hours[0].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[0].closed) ? _vm._i(_vm.form.opening_hours[0].closed, null) > -1 : _vm.form.opening_hours[0].closed
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.form.opening_hours[0].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[0], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[0], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[0], "closed", $$c);
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
      disabled: _vm.form.opening_hours[1].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[1].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[1], "open_hour", $$v);
      },
      expression: "form.opening_hours[1].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[1].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[1].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[1], "close_hour", $$v);
      },
      expression: "form.opening_hours[1].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[1].closed,
      expression: "form.opening_hours[1].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[1].closed) ? _vm._i(_vm.form.opening_hours[1].closed, null) > -1 : _vm.form.opening_hours[1].closed
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.opening_hours[1].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[1], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[1], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[1], "closed", $$c);
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
      disabled: _vm.form.opening_hours[2].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[2].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[2], "open_hour", $$v);
      },
      expression: "form.opening_hours[2].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[2].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[2].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[2], "close_hour", $$v);
      },
      expression: "form.opening_hours[2].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[2].closed,
      expression: "form.opening_hours[2].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[2].closed) ? _vm._i(_vm.form.opening_hours[2].closed, null) > -1 : _vm.form.opening_hours[2].closed
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.opening_hours[2].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[2], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[2], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[2], "closed", $$c);
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
      disabled: _vm.form.opening_hours[3].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[3].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[3], "open_hour", $$v);
      },
      expression: "form.opening_hours[3].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[3].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[3].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[3], "close_hour", $$v);
      },
      expression: "form.opening_hours[3].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[3].closed,
      expression: "form.opening_hours[3].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[3].closed) ? _vm._i(_vm.form.opening_hours[3].closed, null) > -1 : _vm.form.opening_hours[3].closed
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.opening_hours[3].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[3], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[3], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[3], "closed", $$c);
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
      disabled: _vm.form.opening_hours[4].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[4].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[4], "open_hour", $$v);
      },
      expression: "form.opening_hours[4].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[4].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[4].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[4], "close_hour", $$v);
      },
      expression: "form.opening_hours[4].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[4].closed,
      expression: "form.opening_hours[4].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[4].closed) ? _vm._i(_vm.form.opening_hours[4].closed, null) > -1 : _vm.form.opening_hours[4].closed
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.opening_hours[4].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[4], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[4], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[4], "closed", $$c);
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
      disabled: _vm.form.opening_hours[5].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[5].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[5], "open_hour", $$v);
      },
      expression: "form.opening_hours[5].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[5].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[5].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[5], "close_hour", $$v);
      },
      expression: "form.opening_hours[5].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[5].closed,
      expression: "form.opening_hours[5].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[5].closed) ? _vm._i(_vm.form.opening_hours[5].closed, null) > -1 : _vm.form.opening_hours[5].closed
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.opening_hours[5].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[5], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[5], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[5], "closed", $$c);
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
      disabled: _vm.form.opening_hours[6].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[6].open_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[6], "open_hour", $$v);
      },
      expression: "form.opening_hours[6].open_hour"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      padding: "0px 10px"
    }
  }, [_vm._v(" - ")]), _vm._v(" "), _c("vue-timepicker", {
    attrs: {
      disabled: _vm.form.opening_hours[6].closed,
      format: "HH:mm",
      "minute-interval": 10
    },
    model: {
      value: _vm.form.opening_hours[6].close_hour,
      callback: function callback($$v) {
        _vm.$set(_vm.form.opening_hours[6], "close_hour", $$v);
      },
      expression: "form.opening_hours[6].close_hour"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-flat form-check-primary"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.opening_hours[6].closed,
      expression: "form.opening_hours[6].closed"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.opening_hours[6].closed) ? _vm._i(_vm.form.opening_hours[6].closed, null) > -1 : _vm.form.opening_hours[6].closed
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.opening_hours[6].closed,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form.opening_hours[6], "closed", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form.opening_hours[6], "closed", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form.opening_hours[6], "closed", $$c);
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
  }, [_vm._v("Submit")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-light",
    attrs: {
      to: {
        name: "owner.clinics.show",
        params: {
          id: this.$route.params.id
        }
      }
    }
  }, [_vm._v("Cancel")])], 1)])])])]);
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

/***/ "./resources/js/components/Roles/Owner/Clinics/Edit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Roles/Owner/Clinics/Edit.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_ff1b0572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=ff1b0572& */ "./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=template&id=ff1b0572&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_ff1b0572___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_ff1b0572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Roles/Owner/Clinics/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=template&id=ff1b0572&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=template&id=ff1b0572& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_ff1b0572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=ff1b0572& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Roles/Owner/Clinics/Edit.vue?vue&type=template&id=ff1b0572&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_ff1b0572___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_ff1b0572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);