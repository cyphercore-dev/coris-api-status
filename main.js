(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");



// import { LandingComponent } from './landing/landing.component';




var routes = [
    // { path: '', component: LandingComponent },
    // { path: 'status', component: StatusComponent },
    { path: '', component: _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', redirectTo: '' }
    // { path: 'train', component: TrainingComponent, canActivate: [AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #sidenavRef role=\"navigation\">\n    <app-sidenav-list (sidenavClose)=\"sidenavRef.close()\"></app-sidenav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>    \n    <app-header (sidenavToggle)=\"sidenavRef.toggle()\"></app-header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _status_cosmos_cosmos_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./status/cosmos/cosmos-status.component */ "./src/app/status/cosmos/cosmos-status.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _status_regen_regen_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./status/regen/regen-status.component */ "./src/app/status/regen/regen-status.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_10__["StatusComponent"],
                _status_cosmos_cosmos_status_component__WEBPACK_IMPORTED_MODULE_11__["CosmosStatusComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_15__["SidenavListComponent"],
                _status_regen_regen_status_component__WEBPACK_IMPORTED_MODULE_20__["RegenStatusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_17__["NgxJsonViewerModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_18__["AceEditorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.userIsAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.authServiceChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.user = null;
    }
    AuthService.prototype.registerUser = function (authData) {
        this.user = {
            userEmail: authData.authEmail,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authHandle();
    };
    AuthService.prototype.loginUser = function (authData) {
        this.user = {
            userEmail: authData.authEmail,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authHandle();
    };
    AuthService.prototype.logoutUser = function () {
        this.user = null;
        this.authServiceChange.next(false);
        this.router.navigate(['/login']);
    };
    AuthService.prototype.authHandle = function () {
        this.authServiceChange.next(true);
        this.router.navigate(['/train']);
    };
    AuthService.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.user);
    };
    AuthService.prototype.userIsAuth = function () {
        return this.user !== null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIGhlaWdodDogODB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-form\">\n  <form \n    fxLayoutGap=\"10px\"\n    fxLayout=\"column\" \n    fxLayoutAlign=\"center center\" \n    #formRef=\"ngForm\" \n    (ngSubmit)=\"onSubmit(formRef)\">\n    <mat-form-field>\n      <input\n        ngModel\n        name=\"email\"  \n        type=\"email\" \n        matInput \n        placeholder=\"Enter email\"\n        required\n        email\n        #emailRef=\"ngModel\">\n      <mat-error *ngIf=\"emailRef.hasError('required')\">No email provided!</mat-error>\n      <mat-error *ngIf=\"!emailRef.hasError('required')\">Invalid email!</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        ngModel\n        name=\"password\" \n        type=\"password\" \n        matInput \n        placeholder=\"Enter password\"\n        required\n        #passRef=\"ngModel\"\n        minlength=\"6\">\n        <mat-hint *ngIf=\"6-passRef.value?.length > 0\">\n          {{ 6-passRef.value?.length }} more characters\n        </mat-hint>\n    </mat-form-field>\n    <button type=\"submit\" [disabled]=\"formRef.invalid\" mat-raised-button>Submit</button>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.authService.loginUser({
            authEmail: this.loginForm.value.email,
            authPassword: this.loginForm.value.password
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBoZWlnaHQ6IDgwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\">\n  <form \n    fxLayoutGap=\"10px\"\n    fxLayout=\"column\" \n    fxLayoutAlign=\"center center\" \n    #formRef=\"ngForm\" \n    (ngSubmit)=\"onSubmit(formRef)\">\n    <mat-form-field>\n      <input\n        ngModel\n        name=\"email\"  \n        type=\"email\" \n        matInput \n        placeholder=\"Enter email\"\n        required\n        email\n        #emailRef=\"ngModel\">\n      <mat-error *ngIf=\"emailRef.hasError('required')\">No email provided!</mat-error>\n      <mat-error *ngIf=\"!emailRef.hasError('required')\">Invalid email!</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        ngModel\n        name=\"password\" \n        type=\"password\" \n        matInput \n        placeholder=\"Enter password\"\n        required\n        #passRef=\"ngModel\"\n        minlength=\"6\">\n        <mat-hint *ngIf=\"6-passRef.value?.length > 0\">\n          {{ 6-passRef.value?.length }} more characters\n        </mat-hint>\n    </mat-form-field>\n    <mat-form-field>\n      <input \n        matInput \n        placeholder=\"Enter birthday\" \n        [max]=\"maxDate\" \n        [matDatepicker]=\"datepicker\"\n        ngModel\n        name=\"birthday\"\n        required>\n      <mat-datepicker-toggle \n        matSuffix \n        [for]=\"datepicker\">\n      </mat-datepicker-toggle>\n      <mat-datepicker #datepicker></mat-datepicker>\n    </mat-form-field>\n    <mat-checkbox \n      ngModel \n      name=\"agree\" \n      labelPosition=\"before\">\n        Agree to our terms and conditions\n    </mat-checkbox>\n    <button type=\"submit\" [disabled]=\"formRef.invalid\" mat-raised-button>Submit</button>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.MIN_AGE = 12;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - this.MIN_AGE);
    };
    SignupComponent.prototype.onSubmit = function (loginForm) {
        this.authService.registerUser({
            authEmail: loginForm.value.email,
            authPassword: loginForm.value.password
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  fxLayout=\"column\"\n      fxLayoutGap=\"5px\"  \n      fxLayoutGap.gt-md=\"20px\" \n      fxLayoutAlign=\"center left\"\n      fxFlexOffset=\"15px\">\n  <div fxLayout=\"column\" fxFlexOffset=\"10px\">\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Enter url\">\n      </mat-form-field>\n      <button (click)=\"onButtonClick()\" mat-stroked-button color=\"primary\">Get It!</button>\n    </form>          \n  </div>\n  <div fxLayout=\"column\" fxFlexOffset=\"10px\">\n    <h3>Editor</h3>\n    <ace-editor [(text)]=\"code\" mode=\"json\" style=\"width:90vw; height:400px;\"></ace-editor>  \n  </div>\n  <div fxLayout=\"column\" fxFlexOffset=\"10px\">\n    <h3>Visualizer</h3>\n    <ngx-json-viewer [json]=\"data\"></ngx-json-viewer>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LandingComponent = /** @class */ (function () {
    function LandingComponent(httpClient) {
        this.httpClient = httpClient;
        this.data = {
            'simple key': 'simple value'
        };
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.onButtonClick = function () {
        var _this = this;
        this.httpClient.get('https://coris.network/cosmos/api/validators').subscribe(function (validators) { return _this.data = validators[0]; });
    };
    Object.defineProperty(LandingComponent.prototype, "code", {
        get: function () {
            return JSON.stringify(this.data, null, 2);
        },
        set: function (v) {
            try {
                this.data = JSON.parse(v);
            }
            catch (e) {
                console.log('error occored while you were typing the JSON');
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: white;\n}\n\n\na:hover,\na:active {\n  color: lightgray;\n}\n\n\n.nav-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n\n.nav-elem {\n  display: inline-block;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOzs7QUFHQTs7RUFFRSxnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cblxuLm5hdi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hdi1lbGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div fxHide.gt-xs>\n    <button\n      mat-icon-button \n      (click)=\"onToggle()\">\n        <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <div fxHide.gt-xs fxFlex></div>\n  <div><a routerLink=\"/status\">Coris API</a></div>\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n    <ul fxLayout fxLayoutGap=\"10px\" class=\"nav-items\">\n      <li *ngIf=\"!isAuth\"><a routerLink=\"/signup\">Signup</a></li>\n      <li *ngIf=\"!isAuth\"><a routerLink=\"/login\">Login</a></li>\n      <li *ngIf=\"!isAuth\"><a routerLink=\"/status\">Status</a></li>\n      <li *ngIf=\"isAuth\" ><a style=\"cursor: pointer;\" (click)=\"onLogout()\">Logout</a></li>\n    </ul>\n  </div>\n</mat-toolbar>  "

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAuth = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authServiceChange.subscribe(function (userIsAuth) {
            _this.isAuth = userIsAuth;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    HeaderComponent.prototype.onToggle = function () {
        this.sidenavToggle.emit();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: white;\n}\n\n\na:hover,\na:active {\n  color: lightgray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOzs7QUFHQTs7RUFFRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5hOmhvdmVyLFxuYTphY3RpdmUge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a mat-list-item routerLink=\"/status\" (click)=\"onSidenavClose()\">\n    <mat-icon>info</mat-icon>\n    <span class=\"nav-elem\">Status</span>\n  </a>\n  <a *ngIf=\"!isAuth\" mat-list-item routerLink=\"/signup\" (click)=\"onSidenavClose()\">\n    <mat-icon>person_add</mat-icon>\n    <span class=\"nav-elem\">Signup</span>\n  </a>\n  <a *ngIf=\"!isAuth\" mat-list-item routerLink=\"/login\" (click)=\"onSidenavClose()\">\n    <mat-icon>person</mat-icon>\n    <span class=\"nav-elem\">Login</span>\n  </a>\n  <mat-list-item *ngIf=\"isAuth\">\n    <button mat-icon-button (click)=\"onLogout()\">\n      <mat-icon>eject</mat-icon>\n      <span class=\"nav-elem\">Logout</span>\n    </button>\n  </mat-list-item>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authService) {
        this.authService = authService;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAuth = false;
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authServiceChange.subscribe(function (userIsAuth) {
            _this.isAuth = userIsAuth;
        });
    };
    SidenavListComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    SidenavListComponent.prototype.onSidenavClose = function () {
        this.sidenavClose.emit();
    };
    SidenavListComponent.prototype.onLogout = function () {
        this.onSidenavClose();
        this.authService.logoutUser();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/status/cosmos/cosmos-status.component.css":
/*!***********************************************************!*\
  !*** ./src/app/status/cosmos/cosmos-status.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-btn-container {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 997;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL2Nvc21vcy9jb3Ntb3Mtc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9jb3Ntb3MvY29zbW9zLXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1idG4tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjNweDtcbiAgYm90dG9tOiAyM3B4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgei1pbmRleDogOTk3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/status/cosmos/cosmos-status.component.html":
/*!************************************************************!*\
  !*** ./src/app/status/cosmos/cosmos-status.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item *ngFor=\"let endpoint of objectKeys(current)\">\n    {{endpoint}} endpoint is {{current[endpoint].status}}\n    <div fxFlex></div>\n    <mat-icon>{{current[endpoint].logo}}</mat-icon>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n</mat-list>\n<div class=\"fab-btn-container\">\n  <button (click)=\"updateStatus()\" color=\"accent\" mat-icon-button>\n    <mat-icon style=\"font-size: 2.3rem; width: 2.3rem; height: 2.3rem;\">autorenew</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/status/cosmos/cosmos-status.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/status/cosmos/cosmos-status.component.ts ***!
  \**********************************************************/
/*! exports provided: cosmosEndpoints, initialCosmosStatus, CosmosStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosmosEndpoints", function() { return cosmosEndpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCosmosStatus", function() { return initialCosmosStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosmosStatusComponent", function() { return CosmosStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var cosmosEndpoints = {
    api: 'https://coris.network/cosmos/api/validators',
    rpc1: 'https://coris.network/cosmos/rpc1/node_info',
    rpc2: 'https://coris.network/cosmos/rpc2/status'
};
var initialCosmosStatus = {
    api: {
        status: 'syncing',
        logo: 'loop'
    },
    rpc1: {
        status: 'syncing',
        logo: 'loop'
    },
    rpc2: {
        status: 'syncing',
        logo: 'loop'
    }
};
var CosmosStatusComponent = /** @class */ (function () {
    function CosmosStatusComponent(httpClient) {
        this.httpClient = httpClient;
        this.objectKeys = Object.keys;
        this.current = initialCosmosStatus;
    }
    CosmosStatusComponent.prototype.ngOnInit = function () {
        this.updateStatus();
    };
    CosmosStatusComponent.prototype.updateStatus = function () {
        var _this = this;
        this.current = initialCosmosStatus;
        var _loop_1 = function (endpoint) {
            this_1.httpClient.get(cosmosEndpoints[endpoint])
                .subscribe(function (res) {
                if (res === null) {
                    _this.current[endpoint] = { status: 'down', logo: 'error' };
                }
                else {
                    _this.current[endpoint] = { status: 'up', logo: 'check' };
                }
            }, function (error) {
                _this.current[endpoint] = { status: 'down', logo: 'error' };
            });
        };
        var this_1 = this;
        for (var endpoint in cosmosEndpoints) {
            _loop_1(endpoint);
        }
    };
    CosmosStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cosmos-status',
            template: __webpack_require__(/*! ./cosmos-status.component.html */ "./src/app/status/cosmos/cosmos-status.component.html"),
            styles: [__webpack_require__(/*! ./cosmos-status.component.css */ "./src/app/status/cosmos/cosmos-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CosmosStatusComponent);
    return CosmosStatusComponent;
}());



/***/ }),

/***/ "./src/app/status/regen/regen-status.component.css":
/*!*********************************************************!*\
  !*** ./src/app/status/regen/regen-status.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-btn-container {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 997;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3JlZ2VuL3JlZ2VuLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdGF0dXMvcmVnZW4vcmVnZW4tc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiLWJ0bi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyM3B4O1xuICBib3R0b206IDIzcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTc7XG59Il19 */"

/***/ }),

/***/ "./src/app/status/regen/regen-status.component.html":
/*!**********************************************************!*\
  !*** ./src/app/status/regen/regen-status.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item *ngFor=\"let endpoint of objectKeys(current)\">\n    {{endpoint}} endpoint is {{current[endpoint].status}}\n    <div fxFlex></div>\n    <mat-icon>{{current[endpoint].logo}}</mat-icon>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n</mat-list>\n<div class=\"fab-btn-container\">\n  <button (click)=\"updateStatus()\" color=\"accent\" mat-icon-button>\n    <mat-icon style=\"font-size: 2.3rem; width: 2.3rem; height: 2.3rem;\">autorenew</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/status/regen/regen-status.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status/regen/regen-status.component.ts ***!
  \********************************************************/
/*! exports provided: regenEndpoints, initialRegenStatus, RegenStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regenEndpoints", function() { return regenEndpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRegenStatus", function() { return initialRegenStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegenStatusComponent", function() { return RegenStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var regenEndpoints = {
    api: 'https://libration.xyz/regen/api/validators',
    rpc1: 'https://libration.xyz/regen/rpc1/node_info',
    rpc2: 'https://libration.xyz/regen/rpc2/status',
    faucet: 'https://regen.coris.network/api/faucet/status'
};
var initialRegenStatus = {
    api: {
        status: 'syncing',
        logo: 'loop'
    },
    rpc1: {
        status: 'syncing',
        logo: 'loop'
    },
    rpc2: {
        status: 'syncing',
        logo: 'loop'
    },
    faucet: {
        status: 'syncing',
        logo: 'loop'
    }
};
var RegenStatusComponent = /** @class */ (function () {
    function RegenStatusComponent(httpClient) {
        this.httpClient = httpClient;
        this.objectKeys = Object.keys;
        this.current = initialRegenStatus;
    }
    RegenStatusComponent.prototype.ngOnInit = function () {
        this.updateStatus();
    };
    RegenStatusComponent.prototype.updateStatus = function () {
        var _this = this;
        this.current = initialRegenStatus;
        var _loop_1 = function (endpoint) {
            this_1.httpClient.get(regenEndpoints[endpoint])
                .subscribe(function (res) {
                if (res === null) {
                    _this.current[endpoint] = { status: 'down', logo: 'error' };
                }
                else {
                    _this.current[endpoint] = { status: 'up', logo: 'check' };
                }
            }, function (error) {
                _this.current[endpoint] = { status: 'down', logo: 'error' };
            });
        };
        var this_1 = this;
        for (var endpoint in regenEndpoints) {
            _loop_1(endpoint);
        }
    };
    RegenStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regen-status',
            template: __webpack_require__(/*! ./regen-status.component.html */ "./src/app/status/regen/regen-status.component.html"),
            styles: [__webpack_require__(/*! ./regen-status.component.css */ "./src/app/status/regen/regen-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegenStatusComponent);
    return RegenStatusComponent;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"!ongoingTrain\">\n    <mat-tab label=\"Cosmos\">\n      <app-cosmos-status></app-cosmos-status>\n    </mat-tab>\n    <mat-tab label=\"Regen\">\n      <app-regen-status></app-regen-status>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
        this.ongoingTrain = false;
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/cyphercore-dev/coris-api-status/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map