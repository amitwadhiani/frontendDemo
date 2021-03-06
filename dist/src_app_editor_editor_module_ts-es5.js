(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_editor_editor_module_ts"], {
    /***/
    3384:
    /*!*************************************************************!*\
      !*** ./src/app/editor/editable-article-resolver.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditableArticleResolver": function EditableArticleResolver() {
          return (
            /* binding */
            _EditableArticleResolver
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _EditableArticleResolver = /*#__PURE__*/function () {
        function _EditableArticleResolver(articlesService, router, userService) {
          _classCallCheck(this, _EditableArticleResolver);

          this.articlesService = articlesService;
          this.router = router;
          this.userService = userService;
        }

        _createClass(_EditableArticleResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this = this;

            return this.articlesService.get(route.params['slug']).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (article) {
              if (_this.userService.getCurrentUser().username === article.author.username) {
                return article;
              } else {
                _this.router.navigateByUrl('/');
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) {
              return _this.router.navigateByUrl('/');
            }));
          }
        }]);

        return _EditableArticleResolver;
      }();

      _EditableArticleResolver.??fac = function EditableArticleResolver_Factory(t) {
        return new (t || _EditableArticleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _EditableArticleResolver.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: _EditableArticleResolver,
        factory: _EditableArticleResolver.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8243:
    /*!*************************************************!*\
      !*** ./src/app/editor/editor-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditorRoutingModule": function EditorRoutingModule() {
          return (
            /* binding */
            _EditorRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editor.component */
      1486);
      /* harmony import */


      var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editable-article-resolver.service */
      3384);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent,
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
      }, {
        path: ':slug',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent,
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        resolve: {
          article: _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_1__.EditableArticleResolver
        }
      }];

      var _EditorRoutingModule = function _EditorRoutingModule() {
        _classCallCheck(this, _EditorRoutingModule);
      };

      _EditorRoutingModule.??fac = function EditorRoutingModule_Factory(t) {
        return new (t || _EditorRoutingModule)();
      };

      _EditorRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _EditorRoutingModule
      });
      _EditorRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_EditorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    1486:
    /*!********************************************!*\
      !*** ./src/app/editor/editor.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditorComponent": function EditorComponent() {
          return (
            /* binding */
            _EditorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/list-errors.component */
      6860);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function EditorComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function EditorComponent_span_17_Template_i_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3);

            var tag_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r2.removeTag(tag_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var tag_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", tag_r1, " ");
        }
      }

      var _EditorComponent = /*#__PURE__*/function () {
        function _EditorComponent(articlesService, route, router, fb, cd) {
          _classCallCheck(this, _EditorComponent);

          this.articlesService = articlesService;
          this.route = route;
          this.router = router;
          this.fb = fb;
          this.cd = cd;
          this.article = {};
          this.tagField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
          this.errors = {};
          this.isSubmitting = false; // use the FormBuilder to create a form group

          this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: ''
          }); // Initialized tagList as empty array

          this.article.tagList = []; // Optional: subscribe to value changes on the form
          // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
        }

        _createClass(_EditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // If there's an article prefetched, load it
            this.route.data.subscribe(function (data) {
              if (data.article) {
                _this2.article = data.article;

                _this2.articleForm.patchValue(data.article);

                _this2.cd.markForCheck();
              }
            });
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index;
          }
        }, {
          key: "addTag",
          value: function addTag() {
            // retrieve tag control
            var tag = this.tagField.value; // only add tag if it does not exist yet

            if (this.article.tagList.indexOf(tag) < 0) {
              this.article.tagList.push(tag);
            } // clear the input


            this.tagField.reset('');
          }
        }, {
          key: "removeTag",
          value: function removeTag(tagName) {
            this.article.tagList = this.article.tagList.filter(function (tag) {
              return tag !== tagName;
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this3 = this;

            this.isSubmitting = true; // update the model

            this.updateArticle(this.articleForm.value); // post the changes

            this.articlesService.save(this.article).subscribe(function (article) {
              _this3.router.navigateByUrl('/article/' + article.slug);

              _this3.cd.markForCheck();
            }, function (err) {
              _this3.errors = err;
              _this3.isSubmitting = false;

              _this3.cd.markForCheck();
            });
          }
        }, {
          key: "updateArticle",
          value: function updateArticle(values) {
            Object.assign(this.article, values);
          }
        }]);

        return _EditorComponent;
      }();

      _EditorComponent.??fac = function EditorComponent_Factory(t) {
        return new (t || _EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _EditorComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _EditorComponent,
        selectors: [["app-editor-page"]],
        decls: 20,
        vars: 6,
        consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-xs-12"], [3, "errors"], [3, "formGroup"], [3, "disabled"], [1, "form-group"], ["formControlName", "title", "type", "text", "placeholder", "Article Title", 1, "form-control", "form-control-lg"], ["formControlName", "description", "type", "text", "placeholder", "What's this article about?", 1, "form-control"], ["formControlName", "body", "rows", "8", "placeholder", "Write your article (in markdown)", 1, "form-control"], ["type", "text", "placeholder", "Enter tags", 1, "form-control", 3, "formControl", "keyup.enter"], [1, "tag-list"], ["class", "tag-default tag-pill", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "click"], [1, "tag-default", "tag-pill"], [1, "ion-close-round", 3, "click"]],
        template: function EditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "app-list-errors", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "fieldset", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("keyup.enter", function EditorComponent_Template_input_keyup_enter_15_listener() {
              return ctx.addTag();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, EditorComponent_span_17_Template, 3, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function EditorComponent_Template_button_click_18_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Publish Article ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("errors", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.articleForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.isSubmitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formControl", ctx.tagField);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.article.tagList)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: [_shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__.ListErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    3164:
    /*!*****************************************!*\
      !*** ./src/app/editor/editor.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditorModule": function EditorModule() {
          return (
            /* binding */
            _EditorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editor.component */
      1486);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared */
      1679);
      /* harmony import */


      var _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editor-routing.module */
      8243);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _EditorModule = function _EditorModule() {
        _classCallCheck(this, _EditorModule);
      };

      _EditorModule.??fac = function EditorModule_Factory(t) {
        return new (t || _EditorModule)();
      };

      _EditorModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _EditorModule
      });
      _EditorModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        providers: [],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__.EditorRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_EditorModule, {
          declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__.EditorRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_editor_editor_module_ts-es5.js.map