(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_settings_settings_module_ts"], {
    /***/
    1836:
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsRoutingModule": function SettingsRoutingModule() {
          return (
            /* binding */
            _SettingsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.component */
      4586);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent,
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
      }];

      var _SettingsRoutingModule = function _SettingsRoutingModule() {
        _classCallCheck(this, _SettingsRoutingModule);
      };

      _SettingsRoutingModule.??fac = function SettingsRoutingModule_Factory(t) {
        return new (t || _SettingsRoutingModule)();
      };

      _SettingsRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _SettingsRoutingModule
      });
      _SettingsRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_SettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    4586:
    /*!************************************************!*\
      !*** ./src/app/settings/settings.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsComponent": function SettingsComponent() {
          return (
            /* binding */
            _SettingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/list-errors.component */
      6860);

      var _SettingsComponent = /*#__PURE__*/function () {
        function _SettingsComponent(router, userService, fb, cd) {
          _classCallCheck(this, _SettingsComponent);

          this.router = router;
          this.userService = userService;
          this.fb = fb;
          this.cd = cd;
          this.user = {};
          this.errors = {};
          this.isSubmitting = false; // create form group using the form builder

          this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
          }); // Optional: subscribe to changes on the form
          // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
        }

        _createClass(_SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Make a fresh copy of the current user's object to place in editable form fields
            Object.assign(this.user, this.userService.getCurrentUser()); // Fill the form

            this.settingsForm.patchValue(this.user);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.purgeAuth();
            this.router.navigateByUrl('/');
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            this.isSubmitting = true; // update the model

            this.updateUser(this.settingsForm.value);
            this.userService.update(this.user).subscribe(function (updatedUser) {
              return _this.router.navigateByUrl('/profile/' + updatedUser.username);
            }, function (err) {
              _this.errors = err;
              _this.isSubmitting = false;

              _this.cd.markForCheck();
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(values) {
            Object.assign(this.user, values);
          }
        }]);

        return _SettingsComponent;
      }();

      _SettingsComponent.??fac = function SettingsComponent_Factory(t) {
        return new (t || _SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _SettingsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _SettingsComponent,
        selectors: [["app-settings-page"]],
        decls: 25,
        vars: 3,
        consts: [[1, "settings-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["type", "text", "placeholder", "URL of profile picture", "formControlName", "image", 1, "form-control"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", "form-control-lg"], ["rows", "8", "placeholder", "Short bio about you", "formControlName", "bio", 1, "form-control", "form-control-lg"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "New Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right"], [1, "btn", "btn-outline-danger", 3, "click"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Your Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "app-list-errors", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_7_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, " Update Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SettingsComponent_Template_button_click_23_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, " Or click here to logout. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("errors", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.settingsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.isSubmitting);
          }
        },
        directives: [_shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__.ListErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    7075:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsModule": function SettingsModule() {
          return (
            /* binding */
            _SettingsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.component */
      4586);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared */
      1679);
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings-routing.module */
      1836);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SettingsModule = function _SettingsModule() {
        _classCallCheck(this, _SettingsModule);
      };

      _SettingsModule.??fac = function SettingsModule_Factory(t) {
        return new (t || _SettingsModule)();
      };

      _SettingsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _SettingsModule
      });
      _SettingsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.SettingsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_SettingsModule, {
          declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.SettingsRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_settings_settings_module_ts-es5.js.map