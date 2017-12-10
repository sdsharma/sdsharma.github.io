webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n\t<router-outlet></router-outlet>\n</clr-main-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var clarity_angular_1 = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var business_component_1 = __webpack_require__("../../../../../src/app/business/business.component.ts");
var sight_component_1 = __webpack_require__("../../../../../src/app/sight/sight.component.ts");
var organization_component_1 = __webpack_require__("../../../../../src/app/organization/organization.component.ts");
var viewsight_component_1 = __webpack_require__("../../../../../src/app/viewsight/viewsight.component.ts");
var viewbusiness_component_1 = __webpack_require__("../../../../../src/app/viewbusiness/viewbusiness.component.ts");
var vieworganization_component_1 = __webpack_require__("../../../../../src/app/vieworganization/vieworganization.component.ts");
var viewpost_component_1 = __webpack_require__("../../../../../src/app/viewpost/viewpost.component.ts");
var post_component_1 = __webpack_require__("../../../../../src/app/post/post.component.ts");
var state_1 = __webpack_require__("../../../../../src/app/store/state.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/index.js");
var angularfire2_1 = __webpack_require__("../../../../angularfire2/index.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var auth_1 = __webpack_require__("../../../../angularfire2/auth.js");
var store_devtools_1 = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
var ng2_imageupload_1 = __webpack_require__("../../../../ng2-imageupload/index.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var userReducer_1 = __webpack_require__("../../../../../src/app/store/reducers/userReducer.ts");
var viewReducer_1 = __webpack_require__("../../../../../src/app/store/reducers/viewReducer.ts");
var dataReducer_1 = __webpack_require__("../../../../../src/app/store/reducers/dataReducer.ts");
var appEffects_1 = __webpack_require__("../../../../../src/app/store/effects/appEffects.ts");
var accesscontrol_service_1 = __webpack_require__("../../../../../src/app/shared/guards/accesscontrol.service.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var reducers = {
    user: userReducer_1.UserReducer,
    view: viewReducer_1.ViewReducer,
    data: dataReducer_1.DataReducer
};
var effects = [
    effects_1.EffectsModule.run(appEffects_1.AppEffects)
];
var combinedReducers = store_1.combineReducers(reducers);
function appReducers(state, action) {
    if (state === void 0) { state = state_1.INITIAL_APP_STATE; }
    return combinedReducers(state, action);
}
exports.appReducers = appReducers;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                business_component_1.NewBusinessComponent,
                sight_component_1.NewSightComponent,
                organization_component_1.NewOrganizationComponent,
                viewsight_component_1.ViewSightComponent,
                viewbusiness_component_1.ViewBusinessComponent,
                vieworganization_component_1.ViewOrganizationComponent,
                post_component_1.PostComponent,
                viewpost_component_1.ViewPostComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                clarity_angular_1.ClarityModule.forRoot(),
                app_routing_1.ROUTING,
                shared_module_1.SharedModule,
                store_1.StoreModule.provideStore(appReducers),
                effects,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule,
                store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension({
                    maxAge: 3
                }),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyABiswPMWw1sZTcTxheEI1PStdF-Tup3Fw',
                    libraries: ["places"]
                }),
                ng2_imageupload_1.ImageUploadModule
            ],
            providers: [accesscontrol_service_1.AccessControlGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var business_component_1 = __webpack_require__("../../../../../src/app/business/business.component.ts");
var organization_component_1 = __webpack_require__("../../../../../src/app/organization/organization.component.ts");
var sight_component_1 = __webpack_require__("../../../../../src/app/sight/sight.component.ts");
var viewbusiness_component_1 = __webpack_require__("../../../../../src/app/viewbusiness/viewbusiness.component.ts");
var vieworganization_component_1 = __webpack_require__("../../../../../src/app/vieworganization/vieworganization.component.ts");
var post_component_1 = __webpack_require__("../../../../../src/app/post/post.component.ts");
var viewpost_component_1 = __webpack_require__("../../../../../src/app/viewpost/viewpost.component.ts");
var viewsight_component_1 = __webpack_require__("../../../../../src/app/viewsight/viewsight.component.ts");
var accesscontrol_service_1 = __webpack_require__("../../../../../src/app/shared/guards/accesscontrol.service.ts");
exports.ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'business', component: business_component_1.NewBusinessComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'sight', component: sight_component_1.NewSightComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'organization', component: organization_component_1.NewOrganizationComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'viewsight', component: viewsight_component_1.ViewSightComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'viewbusiness', component: viewbusiness_component_1.ViewBusinessComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'vieworganization', component: vieworganization_component_1.ViewOrganizationComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'post', component: post_component_1.PostComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] },
    { path: 'viewpost', component: viewpost_component_1.ViewPostComponent, canActivate: [accesscontrol_service_1.AccessControlGuard] }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/business/business.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Business</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Experiences\" formControlName=\"category\" value=\"Experiences\">\n\t\t\t\t\t\t<label for=\"Experiences\">Experiences</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Entertainment\" formControlName=\"category\" value=\"Entertainment\">\n\t\t\t\t\t\t<label for=\"Entertainment\">Entertainment</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Grub\" formControlName=\"category\" value=\"Grub\">\n\t\t\t\t\t\t<label for=\"Grub\">Grub</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"21+\" formControlName=\"category\" value=\"21+\">\n\t\t\t\t\t\t<label for=\"21+\">21+</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">City</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>San Diego</option>\n\t\t                    <option>Santa Barbara</option>\n\t\t                    <!-- <option>Davis</option> -->\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Hours</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openHours = true\">Set Hours</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Phone Number</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"(123)-456-7890\" size=\"45\" formControlName=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Email</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"me@example.com\" size=\"45\" formControlName=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n\n\t<clr-modal [(clrModalOpen)]=\"openHours\">\n\t\t<h3 class=\"modal-title\">Business Hours</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Monday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"mondayStart\"> to <input type=\"time\" formControlName=\"mondayEnd\">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Tuesday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"tuesdayStart\"> to <input type=\"time\" formControlName=\"tuesdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Wednesday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"wednesdayStart\"> to <input type=\"time\" formControlName=\"wednesdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Thursday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"thursdayStart\"> to <input type=\"time\" formControlName=\"thursdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Friday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"fridayStart\"> to <input type=\"time\" formControlName=\"fridayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Saturday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"saturdayStart\"> to <input type=\"time\" formControlName=\"saturdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sunday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"sundayStart\"> to <input type=\"time\" formControlName=\"sundayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openHours = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n</form>"

/***/ }),

/***/ "../../../../../src/app/business/business.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/business/business.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var NewBusinessComponent = /** @class */ (function () {
    function NewBusinessComponent(store, router, ngZone, db) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        this.db = db;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            category: new forms_1.FormControl('Experiences', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            mondayStart: new forms_1.FormControl('', forms_1.Validators.required),
            mondayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            tuesdayStart: new forms_1.FormControl('', forms_1.Validators.required),
            tuesdayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            wednesdayStart: new forms_1.FormControl('', forms_1.Validators.required),
            wednesdayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            thursdayStart: new forms_1.FormControl('', forms_1.Validators.required),
            thursdayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            fridayStart: new forms_1.FormControl('', forms_1.Validators.required),
            fridayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            saturdayStart: new forms_1.FormControl('', forms_1.Validators.required),
            saturdayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            sundayStart: new forms_1.FormControl('', forms_1.Validators.required),
            sundayEnd: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            phone: new forms_1.FormControl('', forms_1.Validators.required),
            website: new forms_1.FormControl('', forms_1.Validators.required),
            city: new forms_1.FormControl('San Diego', forms_1.Validators.required),
            zipcode: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('')
        });
        this.logo = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.zoom = 4;
    }
    NewBusinessComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    NewBusinessComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    NewBusinessComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    NewBusinessComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    NewBusinessComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    NewBusinessComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    NewBusinessComponent.prototype.submit = function () {
        var _this = this;
        if (this.model.valid && this.logo) {
            var submissionModel = {
                businessHours: {
                    monday: this.tConvert(this.model.value.mondayStart) + ' - ' + this.tConvert(this.model.value.mondayEnd),
                    tuesday: this.tConvert(this.model.value.tuesdayStart) + ' - ' + this.tConvert(this.model.value.tuesdayEnd),
                    wednesday: this.tConvert(this.model.value.wednesdayStart) + ' - ' + this.tConvert(this.model.value.wednesdayEnd),
                    thursday: this.tConvert(this.model.value.thursdayStart) + ' - ' + this.tConvert(this.model.value.thursdayEnd),
                    friday: this.tConvert(this.model.value.fridayStart) + ' - ' + this.tConvert(this.model.value.fridayEnd),
                    saturday: this.tConvert(this.model.value.satudayStart) + ' - ' + this.tConvert(this.model.value.saturdayEnd),
                    sunday: this.tConvert(this.model.value.sundayStart) + ' - ' + this.tConvert(this.model.value.sundayEnd),
                },
                logo_url: this.logo,
                longitude: this.longitude,
                latitude: this.latitude,
                isOrg: false,
                image1_url: this.img1,
                image2_url: this.img2,
                image3_url: this.img3,
                name: this.model.value.name,
                type: this.model.value.type,
                category: this.model.value.category,
                ranking: this.model.value.ranking,
                email: this.model.value.email,
                phone: this.model.value.phone,
                website: this.model.value.website,
                zipcode: this.model.value.zipcode,
                description: this.model.value.description
            };
            var info = this.db.list('/city_entities_info/' + this.model.value.city + '/');
            info.push(submissionModel).then(function (item) {
                var clientModel = {
                    businessHours: {
                        monday: _this.tConvert(_this.model.value.mondayStart) + ' - ' + _this.tConvert(_this.model.value.mondayEnd),
                        tuesday: _this.tConvert(_this.model.value.tuesdayStart) + ' - ' + _this.tConvert(_this.model.value.tuesdayEnd),
                        wednesday: _this.tConvert(_this.model.value.wednesdayStart) + ' - ' + _this.tConvert(_this.model.value.wednesdayEnd),
                        thursday: _this.tConvert(_this.model.value.thursdayStart) + ' - ' + _this.tConvert(_this.model.value.thursdayEnd),
                        friday: _this.tConvert(_this.model.value.fridayStart) + ' - ' + _this.tConvert(_this.model.value.fridayEnd),
                        saturday: _this.tConvert(_this.model.value.satudayStart) + ' - ' + _this.tConvert(_this.model.value.saturdayEnd),
                        sunday: _this.tConvert(_this.model.value.sundayStart) + ' - ' + _this.tConvert(_this.model.value.sundayEnd),
                    },
                    category: _this.model.value.category,
                    isOrg: false,
                    latitude: _this.latitude,
                    logo_url: _this.logo,
                    longitude: _this.longitude,
                    name: _this.model.value.name,
                    ranking: _this.model.value.ranking,
                    type: _this.model.value.type
                };
                var client = _this.db.list('/city_entities/' + _this.model.value.city + '/');
                client.update(item.key, clientModel);
            });
            this.router.navigate(['/admin/' + this.model.value.category.toLowerCase()]);
        }
    };
    NewBusinessComponent.prototype.tConvert = function (time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? 'AM' : 'PM';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    };
    NewBusinessComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    NewBusinessComponent.prototype.cancel = function () {
        this.router.navigate(['/admin']);
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], NewBusinessComponent.prototype, "agmMap", void 0);
    NewBusinessComponent = __decorate([
        core_1.Component({
            selector: 'app-newbusiness',
            template: __webpack_require__("../../../../../src/app/business/business.component.html"),
            styles: [__webpack_require__("../../../../../src/app/business/business.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _e || Object])
    ], NewBusinessComponent);
    return NewBusinessComponent;
    var _a, _b, _c, _d, _e;
}());
exports.NewBusinessComponent = NewBusinessComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/business/business.component.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/app.module.ts"));
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <form class=\"login\">\n        <label class=\"title\">\n            <h3 class=\"welcome\">Welcome to</h3>\n            MyLive\n        </label>\n        <div class=\"login-group\">\n            <form [formGroup]=\"model\">\n                <div>\n                    <input class=\"username\" type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n                </div>\n                <div>\n                    <input class=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                </div>\n            </form>\n            <p *ngIf=\"loginFail == true\">Login Failed</p>\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"login()\">Login</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-wrapper {\n  background: #007FC4; }\n\n.username {\n  width: 100%; }\n\n.password {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(store, router) {
        this.store = store;
        this.router = router;
        this.model = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.loggedIn = false;
        this.loginFail = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.user;
        }).subscribe(function (user) {
            _this.loggedIn = user.loggedIn;
            _this.loginFail = user.loginFail;
            if (_this.loggedIn) {
                _this.router.navigate(['/admin']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        if (this.model.valid) {
            this.store.dispatch({ type: appActions_1.AppActions.LOGIN, payload: this.model.value });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/login/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/organization/organization.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Organization</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"CampusAffiliated\" formControlName=\"category\" value=\"Campus Affiliated\">\n\t\t\t\t\t\t<label for=\"CampusAffiliated\">Campus Affiliated</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Organizations\" formControlName=\"category\" value=\"Campus Organization\">\n\t\t\t\t\t\t<label for=\"Organizations\">Organizations</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Businesses\" formControlName=\"category\" value=\"Business\">\n\t\t\t\t\t\t<label for=\"Businesses\">Businesses</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">School</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>UC San Diego</option>\n\t\t                    <option>UC Santa Barbara</option>\n\t\t                    <!-- <option>UC Davis</option> -->\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Phone Number</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"(123)-456-7890\" size=\"45\" formControlName=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Email</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"me@example.com\" size=\"45\" formControlName=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/organization/organization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/organization/organization.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var NewOrganizationComponent = /** @class */ (function () {
    function NewOrganizationComponent(store, router, db) {
        this.store = store;
        this.router = router;
        this.db = db;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            category: new forms_1.FormControl('Campus Affiliated', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            phone: new forms_1.FormControl('', forms_1.Validators.required),
            website: new forms_1.FormControl('', forms_1.Validators.required),
            city: new forms_1.FormControl('UC San Diego', forms_1.Validators.required),
            zipcode: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('')
        });
        this.logo = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
    }
    NewOrganizationComponent.prototype.ngOnInit = function () {
    };
    NewOrganizationComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    NewOrganizationComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    NewOrganizationComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    NewOrganizationComponent.prototype.submit = function () {
        var _this = this;
        if (this.model.valid && this.logo) {
            var submissionModel = {
                logo_url: this.logo,
                isOrg: true,
                image1_url: this.img1,
                image2_url: this.img2,
                image3_url: this.img3,
                name: this.model.value.name,
                type: this.model.value.type,
                category: this.model.value.category,
                ranking: this.model.value.ranking,
                email: this.model.value.email,
                phone: this.model.value.phone,
                website: this.model.value.website,
                zipcode: this.model.value.zipcode,
                description: this.model.value.description
            };
            var info = this.db.list('/school_entities_info/' + this.getCity(this.model.value.city) + '/' + this.model.value.city + '/');
            info.push(submissionModel).then(function (item) {
                var clientModel = {
                    category: _this.model.value.category,
                    isOrg: true,
                    logo_url: _this.logo,
                    name: _this.model.value.name,
                    ranking: _this.model.value.ranking,
                    type: _this.model.value.type
                };
                var client = _this.db.list('/school_entities/' + _this.getCity(_this.model.value.city) + '/' + _this.model.value.city + '/');
                client.update(item.key, clientModel);
            });
            this.router.navigate(['/admin/campus']);
        }
    };
    NewOrganizationComponent.prototype.getCity = function (school) {
        if (school == 'UC San Diego') {
            return 'San Diego';
        }
        else if (school == 'UC Santa Barbara') {
            return 'Santa Barbara';
        }
        else if (school == 'UC Davis') {
            return 'Davis';
        }
    };
    NewOrganizationComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    NewOrganizationComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/campus']);
    };
    NewOrganizationComponent = __decorate([
        core_1.Component({
            selector: 'app-neworganization',
            template: __webpack_require__("../../../../../src/app/organization/organization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _c || Object])
    ], NewOrganizationComponent);
    return NewOrganizationComponent;
    var _a, _b, _c;
}());
exports.NewOrganizationComponent = NewOrganizationComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/organization/organization.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Post for {{this.poster.name}}</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Title</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.type == 'Experience'\">\n\t\t\t\t\t<label class=\"required\">Experience Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"viewState.service == 'CampusLive'\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Type</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Event\" formControlName=\"type\" value=\"Event\">\n\t\t\t\t\t\t<label for=\"Event\">Event</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Deal\" formControlName=\"type\" value=\"Deal\">\n\t\t\t\t\t\t<label for=\"Deal\">Deal</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Experience\" formControlName=\"type\" value=\"Experience\">\n\t\t\t\t\t\t<label for=\"Experience\">Experience</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Start Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"start_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">End Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"end_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Deal/Purchase Page URL</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t            <label>Featured</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" name=\"isFeatured\" id=\"isFeatured\" formControlName=\"isFeatured\">\n\t\t            </div>\n\t\t        </div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>"

/***/ }),

/***/ "../../../../../src/app/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var PostComponent = /** @class */ (function () {
    function PostComponent(store, router, ngZone, db) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        this.db = db;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('Event', forms_1.Validators.required),
            start_date: new forms_1.FormControl('', forms_1.Validators.required),
            end_date: new forms_1.FormControl('', forms_1.Validators.required),
            website: new forms_1.FormControl(''),
            description: new forms_1.FormControl(''),
            isFeatured: new forms_1.FormControl(false)
        });
        this.logo = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.zoom = 4;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state;
        }).subscribe(function (state) {
            _this.poster = state.data.newPoster;
            _this.viewState = state.view;
            if (_this.viewState.service != 'CampusLive') {
                _this.longitude = _this.poster.longitude;
                _this.latitude = _this.poster.latitude;
            }
            else {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        _this.latitude = position.coords.latitude;
                        _this.longitude = position.coords.longitude;
                        _this.zoom = 12;
                    });
                }
            }
        });
    };
    PostComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    PostComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    PostComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    PostComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    PostComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    PostComponent.prototype.submit = function () {
        if (this.model.valid) {
            var submissionModel = {
                logo_url: this.logo,
                longitude: this.longitude,
                latitude: this.latitude,
                isEntityOrg: false,
                name: this.model.value.name,
                type: this.model.value.type,
                website: this.model.value.website,
                description: this.model.value.description,
                start_date: this.model.value.start_date,
                end_date: this.model.value.end_date,
                location: this.poster.name,
                isFeatured: this.model.value.isFeatured,
                entity_id: this.poster.$key
            };
            if (this.viewState.service == 'CampusLive') {
                submissionModel.isEntityOrg = true;
                var info = this.db.list('/school_posts/' + this.getCity(this.poster.school) + '/' + this.poster.school + '/');
                info.push(submissionModel);
                this.router.navigate(['/vieworganization']);
            }
            else {
                var info = this.db.list('/city_posts/' + this.poster.city + '/');
                info.push(submissionModel);
                this.router.navigate(['/viewbusiness']);
            }
        }
    };
    PostComponent.prototype.getCity = function (school) {
        if (school == 'UC San Diego') {
            return 'San Diego';
        }
        else if (school == 'UC Santa Barbara') {
            return 'Santa Barbara';
        }
        else if (school == 'UC Davis') {
            return 'Davis';
        }
    };
    PostComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    PostComponent.prototype.cancel = function () {
        this.router.navigate(['/admin']);
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], PostComponent.prototype, "agmMap", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _e || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b, _c, _d, _e;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/post/post.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/googleplace.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var GoogleplaceDirective = /** @class */ (function () {
    function GoogleplaceDirective(el, model, mapsAPILoader) {
        var _this = this;
        this.model = model;
        this.mapsAPILoader = mapsAPILoader;
        this.setAddress = new core_1.EventEmitter();
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;
        this.mapsAPILoader.load().then(function () {
            _this.autocomplete = new google.maps.places.Autocomplete(input, {});
            google.maps.event.addListener(_this.autocomplete, 'place_changed', function () {
                var place = _this.autocomplete.getPlace();
                _this.invokeEvent(place);
            });
        });
    }
    GoogleplaceDirective.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    GoogleplaceDirective.prototype.onInputChange = function () {
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], GoogleplaceDirective.prototype, "setAddress", void 0);
    GoogleplaceDirective = __decorate([
        core_1.Directive({
            selector: '[googleplace]',
            providers: [forms_1.NgModel],
            host: {
                '(input)': 'onInputChange()'
            }
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof forms_1.NgModel !== "undefined" && forms_1.NgModel) === "function" && _c || Object, typeof (_d = typeof core_2.MapsAPILoader !== "undefined" && core_2.MapsAPILoader) === "function" && _d || Object])
    ], GoogleplaceDirective);
    return GoogleplaceDirective;
    var _a, _b, _c, _d;
}());
exports.GoogleplaceDirective = GoogleplaceDirective;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/shared/directives/googleplace.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/accesscontrol.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AccessControlGuard = /** @class */ (function () {
    function AccessControlGuard(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.loggedIn = false;
        this.store.select(function (state) {
            return state.user;
        }).subscribe(function (user) {
            _this.loggedIn = user.loggedIn;
        });
    }
    // canActivate gets fired activated on loading of the parent route and once on the hard reload of any child routes
    AccessControlGuard.prototype.canActivate = function (route, state) {
        if (!this.loggedIn && !state.url.includes('login')) {
            this.router.navigate(['/login']);
        }
        else {
            return true;
        }
    };
    AccessControlGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], AccessControlGuard);
    return AccessControlGuard;
    var _a, _b;
}());
exports.AccessControlGuard = AccessControlGuard;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/shared/guards/accesscontrol.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/searchbox/searchbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\n\t<clr-icon shape=\"search\" size=\"24\"></clr-icon>\n\t<input id=\"searchField\" type=\"text\" class=\"field\" placeholder=\"Search\" size=\"59\" [ngModel]=\"query\" (ngModelChange)=\"updateSearch($event)\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/searchbox/searchbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inner {\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: 13px;\n  padding-top: 4px;\n  height: 40px;\n  display: inline-block; }\n\n.field {\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/searchbox/searchbox.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchboxComponent = /** @class */ (function () {
    function SearchboxComponent() {
        this.query = '';
        this.change = new core_1.EventEmitter();
    }
    SearchboxComponent.prototype.ngOnInit = function () {
    };
    SearchboxComponent.prototype.updateSearch = function (value) {
        this.query = value;
        this.change.emit(this.query);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], SearchboxComponent.prototype, "change", void 0);
    SearchboxComponent = __decorate([
        core_1.Component({
            selector: 'app-searchbox',
            template: __webpack_require__("../../../../../src/app/shared/searchbox/searchbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/searchbox/searchbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchboxComponent);
    return SearchboxComponent;
    var _a;
}());
exports.SearchboxComponent = SearchboxComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/shared/searchbox/searchbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var clarity_angular_1 = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
var googleplace_directive_1 = __webpack_require__("../../../../../src/app/shared/directives/googleplace.directive.ts");
var searchbox_component_1 = __webpack_require__("../../../../../src/app/shared/searchbox/searchbox.component.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                clarity_angular_1.ClarityModule.forRoot(),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                googleplace_directive_1.GoogleplaceDirective,
                searchbox_component_1.SearchboxComponent
            ],
            exports: [
                common_1.CommonModule,
                googleplace_directive_1.GoogleplaceDirective,
                searchbox_component_1.SearchboxComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/shared/shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/sight/sight.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Sight</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">City</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>San Diego</option>\n\t\t                    <option>Santa Barbara</option>\n\t\t                    <option>Davis</option>\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Sight Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n</form>"

/***/ }),

/***/ "../../../../../src/app/sight/sight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sight/sight.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var NewSightComponent = /** @class */ (function () {
    function NewSightComponent(store, router, ngZone, db) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        this.db = db;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            city: new forms_1.FormControl('San Diego', forms_1.Validators.required),
            zipcode: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl(''),
            category: new forms_1.FormControl('Campus Affiliated', forms_1.Validators.required)
        });
        this.logo = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.zoom = 4;
    }
    NewSightComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    NewSightComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    NewSightComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    NewSightComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    NewSightComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    NewSightComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    NewSightComponent.prototype.submit = function () {
        if (this.model.valid && this.logo) {
            var submissionModel = {
                logo_url: this.logo,
                longitude: this.longitude,
                latitude: this.latitude,
                image1_url: this.img1,
                image2_url: this.img2,
                image3_url: this.img3,
                name: this.model.value.name,
                type: this.model.value.type,
                ranking: this.model.value.ranking,
                zipcode: this.model.value.zipcode,
                description: this.model.value.description
            };
            var info = this.db.list('/sights/' + this.model.value.city + '/');
            info.push(submissionModel);
            this.router.navigate(['/admin/sights']);
        }
    };
    NewSightComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    NewSightComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/sights']);
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], NewSightComponent.prototype, "agmMap", void 0);
    NewSightComponent = __decorate([
        core_1.Component({
            selector: 'app-newsight',
            template: __webpack_require__("../../../../../src/app/sight/sight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sight/sight.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _e || Object])
    ], NewSightComponent);
    return NewSightComponent;
    var _a, _b, _c, _d, _e;
}());
exports.NewSightComponent = NewSightComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/sight/sight.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/actions/appActions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppActions = /** @class */ (function () {
    function AppActions() {
    }
    AppActions.LOGIN = "LOGIN";
    AppActions.LOGGED_IN = "LOGGED_IN";
    AppActions.LOGIN_FAILED = "LOGIN_FAILED";
    AppActions.LOGOUT = "LOGOUT";
    AppActions.CHANGE_SERVICE = "CHANGE_SERVICE";
    AppActions.CHANGE_CITY = "CHANGE_CITY";
    AppActions.CHANGE_SCHOOL = "CHANGE_SCHOOL";
    AppActions.GET_CITY_ENTITIES = "GET_CITY_ENTITIES";
    AppActions.GET_CAMPUS_ENTITIES = "GET_CAMPUS_ENTITIES";
    AppActions.GET_SIGHT_ENTITIES = "GET_SIGHT_ENTITIES";
    AppActions.RECIEVED_CITY_ENTITIES = "RECIEVED_CITY_ENTITIES";
    AppActions.RECIEVED_CAMPUS_ENTITIES = "RECIEVED_CAMPUS_ENTITIES";
    AppActions.RECIEVED_SIGHT_ENTITIES = "RECIEVED_SIGHT_ENTITIES";
    AppActions.SET_VIEW_SIGHT = "SET_VIEW_SIGHT";
    AppActions.SET_VIEW_BUSINESS = "SET_VIEW_BUSINESS";
    AppActions.SET_VIEW_ORGANIZATION = "SET_VIEW_ORGANIZATION";
    AppActions.SET_NEW_POSTER = "SET_NEW_POSTER";
    AppActions.SET_VIEW_POST = "SET_VIEW_POST";
    return AppActions;
}());
exports.AppActions = AppActions;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/store/actions/appActions.js.map

/***/ }),

/***/ "../../../../../src/app/store/effects/appEffects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = __webpack_require__("../../../../@ngrx/effects/index.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var auth_1 = __webpack_require__("../../../../angularfire2/auth.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var AppEffects = /** @class */ (function () {
    function AppEffects(action$, _http, afAuth, db) {
        var _this = this;
        this.action$ = action$;
        this._http = _http;
        this.afAuth = afAuth;
        this.db = db;
        this.login$ = this.action$
            .ofType(appActions_1.AppActions.LOGIN)
            .map(effects_1.toPayload)
            .switchMap(function (payload) {
            return rxjs_1.Observable.fromPromise(_this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password))
                .catch(function (err) {
                return rxjs_1.Observable.of({ type: appActions_1.AppActions.LOGIN_FAILED });
            })
                .switchMap(function (credentials) {
                if (credentials.type && credentials.type == appActions_1.AppActions.LOGIN_FAILED) {
                    return rxjs_1.Observable.of({ type: appActions_1.AppActions.LOGIN_FAILED });
                }
                return rxjs_1.Observable.of({
                    type: appActions_1.AppActions.LOGGED_IN,
                    payload: credentials
                });
            });
        });
        this.getCampus$ = this.action$
            .ofType(appActions_1.AppActions.GET_CAMPUS_ENTITIES)
            .map(effects_1.toPayload)
            .switchMap(function (payload) {
            return _this.db.list('/school_entities_info/' + payload.city + '/' + payload.school)
                .switchMap(function (entities) {
                return rxjs_1.Observable.of({
                    type: appActions_1.AppActions.RECIEVED_CAMPUS_ENTITIES,
                    payload: entities
                });
            });
        });
        this.getCity$ = this.action$
            .ofType(appActions_1.AppActions.GET_CITY_ENTITIES)
            .map(effects_1.toPayload)
            .switchMap(function (payload) {
            return _this.db.list('/city_entities_info/' + payload)
                .switchMap(function (entities) {
                return rxjs_1.Observable.of({
                    type: appActions_1.AppActions.RECIEVED_CITY_ENTITIES,
                    payload: entities
                });
            });
        });
        this.getSight$ = this.action$
            .ofType(appActions_1.AppActions.GET_SIGHT_ENTITIES)
            .map(effects_1.toPayload)
            .switchMap(function (payload) {
            return _this.db.list('/sights/' + payload)
                .switchMap(function (entities) {
                return rxjs_1.Observable.of({
                    type: appActions_1.AppActions.RECIEVED_SIGHT_ENTITIES,
                    payload: entities
                });
            });
        });
    }
    AppEffects.prototype.prepareRequest = function (payload) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var content = JSON.stringify(payload);
        return {
            headers: headers,
            content: content
        };
    };
    AppEffects.prototype.prepareGetRequestParams = function (url, payload) {
        var keys = Object.keys(payload);
        var params = "?";
        keys.forEach(function (key) {
            params += key + "=" + payload[key] + "&";
        });
        if (params == "?") {
            return url;
        }
        return url + params.slice(0, -1);
    };
    AppEffects.prototype.extractData = function (resp) {
        var body = resp.json();
        return body.result || null;
    };
    AppEffects.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_1.Observable.throw(errMsg);
    };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "login$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "getCampus$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "getCity$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AppEffects.prototype, "getSight$", void 0);
    AppEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof effects_1.Actions !== "undefined" && effects_1.Actions) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof auth_1.AngularFireAuth !== "undefined" && auth_1.AngularFireAuth) === "function" && _c || Object, typeof (_d = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _d || Object])
    ], AppEffects);
    return AppEffects;
    var _a, _b, _c, _d;
}());
exports.AppEffects = AppEffects;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/store/effects/appEffects.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/dataReducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__("../../../../../src/app/store/state.ts");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
function DataReducer(state, action) {
    if (state === void 0) { state = state_1.INITIAL_DATA_STATE; }
    // clones object for modification and return
    var newState = Object.assign({}, state);
    switch (action.type) {
        case appActions_1.AppActions.RECIEVED_CITY_ENTITIES:
            newState.cityEntities = action.payload;
            return newState;
        case appActions_1.AppActions.RECIEVED_CAMPUS_ENTITIES:
            newState.campusEntities = action.payload;
            return newState;
        case appActions_1.AppActions.RECIEVED_SIGHT_ENTITIES:
            newState.sightEntities = action.payload;
            return newState;
        case appActions_1.AppActions.SET_VIEW_SIGHT:
            newState.viewSight = action.payload;
            return newState;
        case appActions_1.AppActions.SET_VIEW_BUSINESS:
            newState.viewBusiness = action.payload;
            return newState;
        case appActions_1.AppActions.SET_VIEW_ORGANIZATION:
            newState.viewOrganization = action.payload;
            return newState;
        case appActions_1.AppActions.SET_NEW_POSTER:
            newState.newPoster = action.payload;
            return newState;
        case appActions_1.AppActions.SET_VIEW_POST:
            newState.viewPost = action.payload;
            return newState;
        default:
            return state;
    }
}
exports.DataReducer = DataReducer;
;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/store/reducers/dataReducer.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/userReducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__("../../../../../src/app/store/state.ts");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
function UserReducer(state, action) {
    if (state === void 0) { state = state_1.INITIAL_USER_STATE; }
    // clones object for modification and return
    var newState = Object.assign({}, state);
    switch (action.type) {
        case appActions_1.AppActions.LOGGED_IN:
            newState.loggedIn = true;
            newState.loginFail = false;
            newState.userData = action.payload;
            return newState;
        case appActions_1.AppActions.LOGIN_FAILED:
            newState.loggedIn = false;
            newState.loginFail = true;
            newState.userData = null;
            return newState;
        case appActions_1.AppActions.LOGOUT:
            newState.loggedIn = false;
            newState.userData = null;
            return newState;
        default:
            return state;
    }
}
exports.UserReducer = UserReducer;
;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/store/reducers/userReducer.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/viewReducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__("../../../../../src/app/store/state.ts");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
function ViewReducer(state, action) {
    if (state === void 0) { state = state_1.INITIAL_VIEW_STATE; }
    // clones object for modification and return
    var newState = Object.assign({}, state);
    switch (action.type) {
        case appActions_1.AppActions.CHANGE_SERVICE:
            newState.service = action.payload;
            return newState;
        case appActions_1.AppActions.CHANGE_SCHOOL:
            newState.school = action.payload;
            return newState;
        case appActions_1.AppActions.CHANGE_CITY:
            newState.city = action.payload;
            return newState;
        default:
            return state;
    }
}
exports.ViewReducer = ViewReducer;
;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/store/reducers/viewReducer.js.map

/***/ }),

/***/ "../../../../../src/app/store/state.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_USER_STATE = {
    loggedIn: false,
    loginFail: false,
    userData: null
};
exports.INITIAL_VIEW_STATE = {
    service: 'CityLive',
    city: 'San Diego',
    school: 'UC San Diego'
};
exports.INITIAL_DATA_STATE = {
    cityEntities: null,
    campusEntities: null,
    sightEntities: null,
    viewSight: null,
    viewBusiness: null,
    viewOrganization: null,
    newPoster: null,
    viewPost: null
};
exports.INITIAL_APP_STATE = {
    user: exports.INITIAL_USER_STATE,
    view: exports.INITIAL_VIEW_STATE,
    data: exports.INITIAL_DATA_STATE
};
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/store/state.js.map

/***/ }),

/***/ "../../../../../src/app/viewbusiness/viewbusiness.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n<form [formGroup]=\"model\">\n<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Name</label>\n\t\t\t\t\t<input formControlName=\"name\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Experiences\" formControlName=\"category\" value=\"Experiences\">\n\t\t\t\t\t\t<label for=\"Experiences\">Experiences</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Entertainment\" formControlName=\"category\" value=\"Entertainment\">\n\t\t\t\t\t\t<label for=\"Entertainment\">Entertainment</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Grub\" formControlName=\"category\" value=\"Grub\">\n\t\t\t\t\t\t<label for=\"Grub\">Grub</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"21+\" formControlName=\"category\" value=\"21+\">\n\t\t\t\t\t\t<label for=\"21+\">21+</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Save</button>\n\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n</div>\n</form>\n\n<app-searchbox (change)=\"searchUpdate($event)\"></app-searchbox>\n<button type=\"button\" class=\"btn btn-icon btn-primary\" (click)=\"newPost()\">\n    <clr-icon shape=\"plus\"></clr-icon>\n</button>\n<div class=\"row row-align\">\n\t<ng-container *ngFor=\"let post of posts | async\">\n\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"qualify(post)\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t{{post.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t{{post.description}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<button class=\"btn btn-sm btn-link\" (click)=\"edit(post)\">View/Edit</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>"

/***/ }),

/***/ "../../../../../src/app/viewbusiness/viewbusiness.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\n.logo-img {\n  width: 250px;\n  border: 2px solid transparent;\n  border-radius: 10%;\n  margin-top: 15px; }\n\nagm-map {\n  height: 300px; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewbusiness/viewbusiness.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var ViewBusinessComponent = /** @class */ (function () {
    function ViewBusinessComponent(db, store, router, ngZone) {
        this.db = db;
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.query = '';
        this.zoom = 12;
        this.logo = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            description: new forms_1.FormControl(''),
            category: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    ViewBusinessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.data;
        }).subscribe(function (data) {
            _this.business = data.viewBusiness;
            _this.model.patchValue(data.viewBusiness);
            _this.ngZone.run(function () {
                _this.longitude = data.viewBusiness.longitude;
                _this.latitude = data.viewBusiness.latitude;
            });
            _this.logo = _this.business.logo_url;
            _this.img1 = _this.business.image1_url;
            _this.img2 = _this.business.image2_url;
            _this.img3 = _this.business.image3_url;
            _this.posts = _this.db.list('/city_posts/' + _this.business.city, { query: { orderByChild: 'entity_id', equalTo: _this.business.$key } });
        });
    };
    ViewBusinessComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    ViewBusinessComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    ViewBusinessComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    ViewBusinessComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    ViewBusinessComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ViewBusinessComponent.prototype.submit = function () {
        if (this.model.valid) {
            var submissionModel = {
                logo_url: this.logo || null,
                longitude: this.longitude,
                latitude: this.latitude,
                image1_url: this.img1 || null,
                image2_url: this.img2 || null,
                image3_url: this.img3 || null,
                name: this.model.value.name,
                type: this.model.value.type,
                ranking: this.model.value.ranking,
                zipcode: this.business.zipcode || null,
                description: this.model.value.description,
                email: this.business.email || null,
                phone: this.business.phone || null,
                website: this.business.website || null,
                category: this.model.value.category,
                businessHours: this.business.businessHours || null,
                irOrg: false
            };
            var info = this.db.list('/city_entities_info/' + this.business.city + '/');
            info.update(this.business.$key, submissionModel);
            var clientModel = {
                category: this.model.value.category,
                isOrg: false,
                latitude: this.latitude,
                logo_url: this.business.logo_url || null,
                longitude: this.longitude,
                name: this.model.value.name,
                ranking: this.model.value.ranking,
                type: this.model.value.type,
                businessHours: this.business.businessHours || null
            };
            var client = this.db.list('/city_entities/' + this.business.city + '/');
            client.update(this.business.$key, clientModel);
            this.router.navigate(['/admin']);
        }
    };
    ViewBusinessComponent.prototype.qualify = function (entity) {
        if (entity.type.toLowerCase().indexOf(this.query) > -1 || entity.name.toLowerCase().indexOf(this.query) > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    ViewBusinessComponent.prototype.searchUpdate = function (value) {
        if (value.target) {
            this.query = value.target.value.toLowerCase();
        }
        else {
            this.query = value.toLowerCase();
        }
    };
    ViewBusinessComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    ViewBusinessComponent.prototype.newPost = function () {
        this.store.dispatch({ type: appActions_1.AppActions.SET_NEW_POSTER, payload: this.business });
        this.router.navigate(['/post']);
    };
    ViewBusinessComponent.prototype.cancel = function () {
        this.router.navigate(['/admin']);
    };
    ViewBusinessComponent.prototype.edit = function (post) {
        this.store.dispatch({ type: appActions_1.AppActions.SET_VIEW_POST, payload: post });
        this.router.navigate(['/viewpost']);
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], ViewBusinessComponent.prototype, "agmMap", void 0);
    ViewBusinessComponent = __decorate([
        core_1.Component({
            selector: 'app-viewbusiness',
            template: __webpack_require__("../../../../../src/app/viewbusiness/viewbusiness.component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewbusiness/viewbusiness.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _b || Object, typeof (_c = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object])
    ], ViewBusinessComponent);
    return ViewBusinessComponent;
    var _a, _b, _c, _d, _e;
}());
exports.ViewBusinessComponent = ViewBusinessComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/viewbusiness/viewbusiness.component.js.map

/***/ }),

/***/ "../../../../../src/app/vieworganization/vieworganization.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n<form [formGroup]=\"model\">\n<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Name</label>\n\t\t\t\t\t<input formControlName=\"name\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"CampusAffiliated\" formControlName=\"category\" value=\"Campus Affiliated\">\n\t\t\t\t\t\t<label for=\"CampusAffiliated\">Campus Affiliated</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Organizations\" formControlName=\"category\" value=\"Campus Organization\">\n\t\t\t\t\t\t<label for=\"Organizations\">Organizations</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Businesses\" formControlName=\"category\" value=\"Business\">\n\t\t\t\t\t\t<label for=\"Businesses\">Businesses</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Email</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"me@example.com\" size=\"45\" formControlName=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Save</button>\n\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n</div>\n</form>\n\n<app-searchbox (change)=\"searchUpdate($event)\"></app-searchbox>\n<button type=\"button\" class=\"btn btn-icon btn-primary\" (click)=\"newPost()\">\n    <clr-icon shape=\"plus\"></clr-icon>\n</button>\n<div class=\"row row-align\">\n\t<ng-container *ngFor=\"let post of posts | async\">\n\t\t<div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"qualify(post)\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t{{post.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t{{post.description}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<button class=\"btn btn-sm btn-link\" (click)=\"edit(post)\">View/Edit</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vieworganization/vieworganization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\n.logo-img {\n  width: 250px;\n  border: 2px solid transparent;\n  border-radius: 10%;\n  margin-top: 15px; }\n\nagm-map {\n  height: 300px; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vieworganization/vieworganization.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var ViewOrganizationComponent = /** @class */ (function () {
    function ViewOrganizationComponent(db, store, router) {
        this.db = db;
        this.store = store;
        this.router = router;
        this.query = '';
        this.logo = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            description: new forms_1.FormControl(''),
            category: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            website: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    ViewOrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.data;
        }).subscribe(function (data) {
            _this.organization = data.viewOrganization;
            _this.model.patchValue(data.viewOrganization);
            _this.logo = _this.organization.logo_url;
            _this.img1 = _this.organization.image1_url;
            _this.img2 = _this.organization.image2_url;
            _this.img3 = _this.organization.image3_url;
            _this.posts = _this.db.list('/school_posts/' + _this.getCity(_this.organization.school) + '/' + _this.organization.school + '/', { query: { orderByChild: 'entity_id', equalTo: _this.organization.$key } });
        });
    };
    ViewOrganizationComponent.prototype.submit = function () {
        if (this.model.valid) {
            var submissionModel = {
                logo_url: this.logo || null,
                isOrg: true,
                image1_url: this.img1 || null,
                image2_url: this.img2 || null,
                image3_url: this.img3 || null,
                name: this.model.value.name,
                type: this.model.value.type,
                category: this.model.value.category,
                ranking: this.model.value.ranking,
                email: this.model.value.email,
                phone: this.organization.phone || null,
                website: this.model.value.website,
                zipcode: this.organization.zipcode || null,
                description: this.model.value.description
            };
            var info = this.db.list('/school_entities_info/' + this.getCity(this.organization.school) + '/' + this.organization.school + '/');
            info.update(this.organization.$key, submissionModel);
            var clientModel = {
                category: this.model.value.category,
                isOrg: true,
                logo_url: this.organization.logo_url || null,
                name: this.model.value.name,
                ranking: this.model.value.ranking,
                type: this.model.value.type
            };
            var client = this.db.list('/school_entities/' + this.getCity(this.organization.school) + '/' + this.organization.school + '/');
            client.update(this.organization.$key, clientModel);
            this.router.navigate(['/admin/campus']);
        }
    };
    ViewOrganizationComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    ViewOrganizationComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    ViewOrganizationComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ViewOrganizationComponent.prototype.qualify = function (entity) {
        if (entity.type.toLowerCase().indexOf(this.query) > -1 || entity.name.toLowerCase().indexOf(this.query) > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    ViewOrganizationComponent.prototype.searchUpdate = function (value) {
        if (value.target) {
            this.query = value.target.value.toLowerCase();
        }
        else {
            this.query = value.toLowerCase();
        }
    };
    ViewOrganizationComponent.prototype.getCity = function (school) {
        if (school == 'UC San Diego') {
            return 'San Diego';
        }
        else if (school == 'UC Santa Barbara') {
            return 'Santa Barbara';
        }
        else if (school == 'UC Davis') {
            return 'Davis';
        }
    };
    ViewOrganizationComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    ViewOrganizationComponent.prototype.newPost = function () {
        this.store.dispatch({ type: appActions_1.AppActions.SET_NEW_POSTER, payload: this.organization });
        this.router.navigate(['/post']);
    };
    ViewOrganizationComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/campus']);
    };
    ViewOrganizationComponent.prototype.edit = function (post) {
        this.store.dispatch({ type: appActions_1.AppActions.SET_VIEW_POST, payload: post });
        this.router.navigate(['/viewpost']);
    };
    ViewOrganizationComponent = __decorate([
        core_1.Component({
            selector: 'app-vieworganization',
            template: __webpack_require__("../../../../../src/app/vieworganization/vieworganization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vieworganization/vieworganization.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
    ], ViewOrganizationComponent);
    return ViewOrganizationComponent;
    var _a, _b, _c;
}());
exports.ViewOrganizationComponent = ViewOrganizationComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/vieworganization/vieworganization.component.js.map

/***/ }),

/***/ "../../../../../src/app/viewpost/viewpost.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Edit Post for {{this.post.location}}</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Title</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.type == 'Experience'\">\n\t\t\t\t\t<label class=\"required\">Experience Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"viewState.service == 'CampusLive'\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Type</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Event\" formControlName=\"type\" value=\"Event\">\n\t\t\t\t\t\t<label for=\"Event\">Event</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Deal\" formControlName=\"type\" value=\"Deal\">\n\t\t\t\t\t\t<label for=\"Deal\">Deal</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Experience\" formControlName=\"type\" value=\"Experience\">\n\t\t\t\t\t\t<label for=\"Experience\">Experience</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Start Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"start_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">End Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"end_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Deal/Purchase Page URL</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t            <label>Featured</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" name=\"isFeatured\" id=\"isFeatured\" formControlName=\"isFeatured\">\n\t\t            </div>\n\t\t        </div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Save</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>"

/***/ }),

/***/ "../../../../../src/app/viewpost/viewpost.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewpost/viewpost.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var firebase = __webpack_require__("../../../../firebase/firebase-browser.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var ViewPostComponent = /** @class */ (function () {
    function ViewPostComponent(store, router, ngZone, db) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        this.db = db;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('Event', forms_1.Validators.required),
            start_date: new forms_1.FormControl('', forms_1.Validators.required),
            end_date: new forms_1.FormControl('', forms_1.Validators.required),
            website: new forms_1.FormControl(''),
            description: new forms_1.FormControl(''),
            isFeatured: new forms_1.FormControl(false)
        });
        this.logo = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.zoom = 4;
    }
    ViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state;
        }).subscribe(function (state) {
            _this.post = state.data.viewPost;
            _this.viewState = state.view;
            _this.model.patchValue(_this.post);
            _this.logo = _this.post.logo_url;
            if (_this.viewState.service != 'CampusLive') {
                _this.longitude = _this.post.longitude;
                _this.latitude = _this.post.latitude;
            }
            else {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        _this.latitude = position.coords.latitude;
                        _this.longitude = position.coords.longitude;
                        _this.zoom = 12;
                    });
                }
            }
        });
    };
    ViewPostComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    ViewPostComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    ViewPostComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    ViewPostComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = this.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    ViewPostComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ViewPostComponent.prototype.submit = function () {
        if (this.model.valid) {
            var submissionModel = {
                logo_url: this.logo,
                longitude: this.longitude,
                latitude: this.latitude,
                isEntityOrg: this.post.isEntityOrg,
                name: this.model.value.name,
                type: this.model.value.type,
                website: this.model.value.website,
                description: this.model.value.description,
                start_date: this.model.value.start_date,
                end_date: this.model.value.end_date,
                location: this.post.location,
                isFeatured: this.model.value.isFeatured,
                entity_id: this.post.entity_id
            };
            if (this.viewState.service == 'CampusLive') {
                var info = this.db.list('/school_posts/' + this.getCity(this.viewState.school) + '/' + this.viewState.school + '/');
                info.update(this.post.$key, submissionModel);
                this.router.navigate(['/vieworganization']);
            }
            else {
                var info = this.db.list('/city_posts/' + this.viewState.city + '/');
                info.update(this.post.$key, submissionModel);
                this.router.navigate(['/viewbusiness']);
            }
        }
    };
    ViewPostComponent.prototype.getCity = function (school) {
        if (school == 'UC San Diego') {
            return 'San Diego';
        }
        else if (school == 'UC Santa Barbara') {
            return 'Santa Barbara';
        }
        else if (school == 'UC Davis') {
            return 'Davis';
        }
    };
    ViewPostComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    ViewPostComponent.prototype.cancel = function () {
        if (this.viewState.service == 'CampusLive') {
            this.router.navigate(['/vieworganization']);
        }
        else {
            this.router.navigate(['/viewbusiness']);
        }
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], ViewPostComponent.prototype, "agmMap", void 0);
    ViewPostComponent = __decorate([
        core_1.Component({
            selector: 'app-viewpost',
            template: __webpack_require__("../../../../../src/app/viewpost/viewpost.component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewpost/viewpost.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _e || Object])
    ], ViewPostComponent);
    return ViewPostComponent;
    var _a, _b, _c, _d, _e;
}());
exports.ViewPostComponent = ViewPostComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/viewpost/viewpost.component.js.map

/***/ }),

/***/ "../../../../../src/app/viewsight/viewsight.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-5\">\n\t\t<div class=\"branding\">\n\t\t\t<span class=\"title\">MyLive</span>\n\t\t</div>\n\t\t<div class=\"header-actions\">\n\t\t\t<a (click)=\"logout()\" class=\"nav-link nav-text logout\">\n\t\t\t\tLogout\n\t\t\t</a>\n\t\t</div>\n\t</header>\n<form [formGroup]=\"model\">\n<div class=\"row row-align\">\n\t\t<div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<input formControlName=\"name\" type=\"text\">\n\t\t</div>\n\t\t<div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"sight.logo_url\">\n\t\t\t<img src={{sight.logo_url}} class=\"logo-img\">\n\t\t</div>\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"sight.image1_url\">\n\t\t\t<img src={{sight.image1_url}} class=\"logo-img\">\n\t\t</div>\n\t\t<div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"sight.image2_url\">\n\t\t\t<img src={{sight.image2_url}} class=\"logo-img\">\n\t\t</div>\n\t\t<div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"sight.image3_url\">\n\t\t\t<img src={{sight.image3_url}} class=\"logo-img\">\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Save</button>\n\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n</div>\n</form>\n\n<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Sight Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>"

/***/ }),

/***/ "../../../../../src/app/viewsight/viewsight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\n.logo-img {\n  width: 250px;\n  border: 2px solid transparent;\n  border-radius: 10%;\n  margin-top: 15px; }\n\nagm-map {\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewsight/viewsight.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var database_1 = __webpack_require__("../../../../angularfire2/database.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/index.js");
var appActions_1 = __webpack_require__("../../../../../src/app/store/actions/appActions.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var ViewSightComponent = /** @class */ (function () {
    function ViewSightComponent(db, store, router, ngZone) {
        this.db = db;
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.zoom = 12;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            description: new forms_1.FormControl(''),
        });
    }
    ViewSightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.data;
        }).subscribe(function (data) {
            _this.sight = data.viewSight;
            _this.model.patchValue(data.viewSight);
            _this.ngZone.run(function () {
                _this.longitude = data.viewSight.longitude;
                _this.latitude = data.viewSight.latitude;
            });
        });
    };
    ViewSightComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    ViewSightComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    ViewSightComponent.prototype.submit = function () {
        if (this.model.valid) {
            var submissionModel = {
                logo_url: this.sight.logo_url || null,
                longitude: this.longitude,
                latitude: this.latitude,
                image1_url: this.sight.image1_url || null,
                image2_url: this.sight.image2_url || null,
                image3_url: this.sight.image3_url || null,
                name: this.model.value.name,
                type: this.model.value.type,
                ranking: this.model.value.ranking,
                zipcode: this.sight.zipcode || null,
                description: this.model.value.description
            };
            var info = this.db.list('/sights/' + this.sight.city + '/');
            info.update(this.sight.$key, submissionModel);
            this.router.navigate(['/admin/sights']);
        }
    };
    ViewSightComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    ViewSightComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/sights']);
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], ViewSightComponent.prototype, "agmMap", void 0);
    ViewSightComponent = __decorate([
        core_1.Component({
            selector: 'app-viewsight',
            template: __webpack_require__("../../../../../src/app/viewsight/viewsight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewsight/viewsight.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _b || Object, typeof (_c = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object])
    ], ViewSightComponent);
    return ViewSightComponent;
    var _a, _b, _c, _d, _e;
}());
exports.ViewSightComponent = ViewSightComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/viewsight/viewsight.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    name: "mylive-webtest",
    firebase: {
        apiKey: "AIzaSyCRj7F32Y7CgdA02J-vKWH_lB4p8x29cIY",
        authDomain: "mylive-webtest.firebaseapp.com",
        databaseURL: "https://mylive-webtest.firebaseio.com",
        projectId: "mylive-webtest",
        storageBucket: "mylive-webtest.appspot.com",
        messagingSenderId: "422178994969"
    }
};
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/environments/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var _1 = __webpack_require__("../../../../../src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map