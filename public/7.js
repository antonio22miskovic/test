(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Registro',
  mounted: function mounted() {
    this.title = 'Register!!!';
  },
  data: function data() {
    return {
      data: {
        First_Name: '',
        Last_Name: '',
        Contact_Number: '',
        Email: '',
        Password: ''
      },
      confirm_password: '',
      hidePassword: true,
      validation: {
        user: null,
        email: null
      },
      rules: {
        required: function required(value) {
          return !!value || 'E-mail Required.';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'E-mail Invalid.';
        }
      }
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      if (this.$refs.register.resetValidation()) {
        return;
      }

      this.$store.commit('AUTH/LOADING'); // llamamos a esta mutacion que activa el loading

      this.$store.dispatch('AUTH/STORE_USER', this.data).then(function (res) {
        if (res.validation === undefined) {
          // comprobamos si hay errores de validacion
          _this.$store.commit('AUTH/LOADING_FALSE');

          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Register Succefull',
            showConfirmButton: false,
            timer: 1500
          });

          _this.reset();

          _this.$router.push({
            name: 'login_in'
          });
        } else {
          // si hay errores  veremos cual es
          _this.validacion(res.validation);

          _this.$store.commit('AUTH/LOADING_FALSE');
        }
      })["catch"](function (err) {
        return console.log(err);
      });
      this.$store.commit('AUTH/LOADING_FALSE');
    },
    reset: function reset() {
      this.$refs.register.reset();
    },
    resetValidation: function resetValidation() {
      return this.$refs.register.resetValidation();
    },
    validacion: function validacion(datos) {
      if (datos.name !== undefined) {
        // primero el usuario
        this.validation.user = datos.name[0];
      } else {
        this.validation.user = null;
      }

      if (datos.email !== undefined) {
        // segundo el email
        this.validation.email = datos.email[0];
      } else {
        this.validation.email = null;
      }

      if (!this.$refs.registro.validate()) {
        // verificar la validacion
        return;
      }
    }
  },
  computed: {
    title: {
      set: function set(value) {
        return this.$store.commit('AUTH/TITLE', value);
      },
      get: function get() {
        return this.$store.state.AUTH.title;
      }
    },
    loading: function loading() {
      return this.$store.state.AUTH.loading;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/auth/Register.vue?vue&type=template&id=e77349ee&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/auth/Register.vue?vue&type=template&id=e77349ee& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "register" },
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-account",
                  counter: 10,
                  rules: [
                    function(v) {
                      return !!v || "First Name Required."
                    }
                  ],
                  label: "First Name",
                  required: ""
                },
                model: {
                  value: _vm.data.First_Name,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "First_Name", $$v)
                  },
                  expression: "data.First_Name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-account",
                  counter: 10,
                  rules: [
                    function(v) {
                      return !!v || "Last Name Required."
                    }
                  ],
                  label: "Last Name",
                  required: ""
                },
                model: {
                  value: _vm.data.Last_Name,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "Last_Name", $$v)
                  },
                  expression: "data.Last_Name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-email",
                  rules: [
                    _vm.validation.email === null || _vm.validation.email,
                    _vm.rules.required,
                    _vm.rules.email
                  ],
                  label: "E-mail",
                  required: ""
                },
                model: {
                  value: _vm.data.email,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "email", $$v)
                  },
                  expression: "data.email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-lock",
                  type: "password",
                  name: "Password",
                  label: "New Password",
                  id: "Password",
                  rules: [
                    function(v) {
                      return !!v || "Password Required"
                    }
                  ]
                },
                model: {
                  value: _vm.data.password,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "password", $$v)
                  },
                  expression: "data.password"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: _vm.hidePassword ? "password" : "text",
                  "append-icon": _vm.hidePassword ? "mdi-eye" : "mdi-eye-off",
                  name: "confirm_password",
                  label: "confirma la contraseña",
                  id: "confirm_password",
                  rules: [
                    _vm.data.password === _vm.confirm_password ||
                      "password do not match"
                  ]
                },
                on: {
                  "click:append": function($event) {
                    _vm.hidePassword = !_vm.hidePassword
                  }
                },
                model: {
                  value: _vm.confirm_password,
                  callback: function($$v) {
                    _vm.confirm_password = $$v
                  },
                  expression: "confirm_password"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { color: "warning" }, on: { click: _vm.reset } },
                    [_vm._v(" clear ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "secondary", loading: _vm.loading },
                      on: { click: _vm.register }
                    },
                    [_vm._v(" register ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "secondary", to: { name: "login_in" } }
            },
            [_vm._v("login")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/auth/Register.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/layouts/auth/Register.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_e77349ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e77349ee& */ "./resources/js/components/layouts/auth/Register.vue?vue&type=template&id=e77349ee&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_e77349ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_e77349ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["VForm"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layouts/auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/auth/Register.vue?vue&type=template&id=e77349ee&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/layouts/auth/Register.vue?vue&type=template&id=e77349ee& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e77349ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=e77349ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/auth/Register.vue?vue&type=template&id=e77349ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e77349ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e77349ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);