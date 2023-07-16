(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Appointments/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Appointments/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-daterange-picker */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.umd.min.js");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-daterange-picker/dist/vue2-daterange-picker.css */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.css");
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayspan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayspan */ "./node_modules/dayspan/lib/index.js");



vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('v-select', vue_select__WEBPACK_IMPORTED_MODULE_2___default.a);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_4___default.a,
    Calendar: dayspan__WEBPACK_IMPORTED_MODULE_8__["Calendar"]
  },
  mounted: function mounted() {
    this.getClinics();
    this.getClinicians();
    this.getPatient();
  },
  data: function data() {
    return {
      calendar: dayspan__WEBPACK_IMPORTED_MODULE_8__["Calendar"].months(),
      form: {
        patient_id: this.$route.params.id,
        clinician_id: '',
        clinic_id: '',
        notes: '',
        time_range: {
          startDate: null,
          endDate: null
        }
      },
      clinics: {},
      patient: {},
      clinician_options: [],
      clinic_options: []
    };
  },
  methods: {
    storeAppointment: function storeAppointment() {
      var _this = this;
      console.log(this.form);
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/appointment/store', this.form).then(function (res) {
        console.log(res);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          icon: 'success',
          title: 'Appointment has been saved',
          text: 'New appointment for ' + _this.patient.name + ' is stored.'
        });
        _this.$router.push({
          name: 'patients.show',
          params: {
            id: _this.patient.id
          }
        });
      });
    },
    getPatient: function getPatient() {
      var _this2 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/patient/' + this.$route.params.id).then(function (res) {
        _this2.patient = res.data;
      });
    },
    getClinics: function getClinics() {
      var _this3 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/clinic/index').then(function (res) {
        _this3.clinics = res.data;
        res.data.forEach(function (clinic) {
          _this3.clinic_options.push({
            id: clinic.id,
            label: clinic.address + ', ' + clinic.city
          });
        });
      });
    },
    getClinicians: function getClinicians() {
      var _this4 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/employee/clinicians').then(function (res) {
        res.data.forEach(function (clinician) {
          _this4.clinician_options.push({
            id: clinician.id,
            label: clinician.name
          });
        });
        console.log(_this4.clinician_options);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Appointments/Create.vue?vue&type=template&id=33ff6eec&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Appointments/Create.vue?vue&type=template&id=33ff6eec& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Appointment for " + _vm._s(_vm.patient.name))]), _vm._v(" "), _c("p", {
    staticClass: "card-description"
  }, [_vm._v("\n                    Patient ID: " + _vm._s(_vm.patient.patient_id) + "\n                ")]), _vm._v(" "), _c("form", {
    staticClass: "forms-sample",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.storeAppointment();
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.patient_id,
      expression: "form.patient_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "patient_id",
      hidden: ""
    },
    domProps: {
      value: _vm.form.patient_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "patient_id", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Choose date and time")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex col-12"
  }, [_c("div", {
    staticClass: "form-group col-6"
  }, [_c("label", {
    attrs: {
      "for": "clinician_id"
    }
  }, [_vm._v("Choose a clinician")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.clinician_options,
      reduce: function reduce(clinician_id) {
        return clinician_id.id;
      },
      id: "clinician_id"
    },
    model: {
      value: _vm.form.clinician_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "clinician_id", $$v);
      },
      expression: "form.clinician_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-6"
  }, [_c("label", {
    attrs: {
      "for": "clinic_id"
    }
  }, [_vm._v("Choose a clinic")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.clinic_options,
      reduce: function reduce(clinic_id) {
        return clinic_id.id;
      },
      id: "clinic_id"
    },
    model: {
      value: _vm.form.clinic_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "clinic_id", $$v);
      },
      expression: "form.clinic_id"
    }
  })], 1)]), _vm._v(" "), _c("v-app", {
    attrs: {
      id: "dayspan"
    }
  }, [_c("ds-calendar-app", {
    attrs: {
      calendar: _vm.calendar
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex col-12"
  }, [_c("div", {
    staticClass: "form-group col-8"
  }, [_c("label", {
    attrs: {
      "for": "notes"
    }
  }, [_vm._v("Notes")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.notes,
      expression: "form.notes"
    }],
    staticClass: "form-control",
    attrs: {
      id: "notes",
      rows: "4"
    },
    domProps: {
      value: _vm.form.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "notes", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary mr-2",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light"
  }, [_vm._v("Cancel")])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Company/Appointments/Create.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Company/Appointments/Create.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_33ff6eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=33ff6eec& */ "./resources/js/components/Company/Appointments/Create.vue?vue&type=template&id=33ff6eec&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Company/Appointments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_33ff6eec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_33ff6eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Company/Appointments/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Company/Appointments/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Company/Appointments/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Appointments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Company/Appointments/Create.vue?vue&type=template&id=33ff6eec&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Company/Appointments/Create.vue?vue&type=template&id=33ff6eec& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_33ff6eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=33ff6eec& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Appointments/Create.vue?vue&type=template&id=33ff6eec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_33ff6eec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_33ff6eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);