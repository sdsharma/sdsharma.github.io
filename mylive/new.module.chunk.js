webpackJsonp(["new.module"],{

/***/ "../../../../../src/app/new/business/business.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Business</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Experiences\" formControlName=\"category\" value=\"Experiences\">\n\t\t\t\t\t\t<label for=\"Experiences\">Experiences</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Entertainment\" formControlName=\"category\" value=\"Entertainment\">\n\t\t\t\t\t\t<label for=\"Entertainment\">Entertainment</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Grub\" formControlName=\"category\" value=\"Grub\">\n\t\t\t\t\t\t<label for=\"Grub\">Grub</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"21+\" formControlName=\"category\" value=\"21+\">\n\t\t\t\t\t\t<label for=\"21+\">21+</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">City</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>San Diego</option>\n\t\t                    <option>Santa Barbara</option>\n\t\t                    <!-- <option>Davis</option> -->\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Hours</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openHours = true\">Set Hours</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Phone Number</label>\n\t\t\t\t\t<input [textMask]=\"{mask: mask}\" type=\"text\" placeholder=\"(123)-456-7890\" size=\"45\" formControlName=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"100\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n\n\t<clr-modal [(clrModalOpen)]=\"openHours\">\n\t\t<h3 class=\"modal-title\">Business Hours</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Monday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"mondayStart\"> to <input type=\"time\" formControlName=\"mondayEnd\">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Tuesday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"tuesdayStart\"> to <input type=\"time\" formControlName=\"tuesdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Wednesday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"wednesdayStart\"> to <input type=\"time\" formControlName=\"wednesdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Thursday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"thursdayStart\"> to <input type=\"time\" formControlName=\"thursdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Friday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"fridayStart\"> to <input type=\"time\" formControlName=\"fridayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Saturday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"saturdayStart\"> to <input type=\"time\" formControlName=\"saturdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sunday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"sundayStart\"> to <input type=\"time\" formControlName=\"sundayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openHours = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n</form>"

/***/ }),

/***/ "../../../../../src/app/new/business/business.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/business/business.component.ts":
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
var functions_1 = __webpack_require__("../../../../../src/app/shared/functions/functions.ts");
var ng2_img_tools_1 = __webpack_require__("../../../../ng2-img-tools/dist/ng2-img-tools.js");
var NewBusinessComponent = /** @class */ (function () {
    function NewBusinessComponent(ng2ImgToolsService, store, router, ngZone, db) {
        this.ng2ImgToolsService = ng2ImgToolsService;
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
            phone: new forms_1.FormControl('', forms_1.Validators.required),
            website: new forms_1.FormControl('', forms_1.Validators.required),
            city: new forms_1.FormControl('San Diego', forms_1.Validators.required),
            zipcode: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('')
        });
        this.logo = null;
        this.logo_resized = null;
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
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
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
        this.store.select(function (state) {
            return state.view;
        }).subscribe(function (view) {
            _this.subroute = view.subroute;
        });
    };
    NewBusinessComponent.prototype.selected = function (imageResult, dest) {
        var _this = this;
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
        this.ng2ImgToolsService.resize([imageResult.file], 50, 50).subscribe(function (result) {
            _this.pushFileToStorage(result, 'logo_resized');
        }, function (error) {
            console.log(error);
        });
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
        var uuid = functions_1.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    NewBusinessComponent.prototype.submit = function () {
        var _this = this;
        if (this.model.valid && this.logo) {
            var submissionModel = {
                businessHours: {
                    monday: this.model.value.mondayStart + ' - ' + this.model.value.mondayEnd,
                    tuesday: this.model.value.tuesdayStart + ' - ' + this.model.value.tuesdayEnd,
                    wednesday: this.model.value.wednesdayStart + ' - ' + this.model.value.wednesdayEnd,
                    thursday: this.model.value.thursdayStart + ' - ' + this.model.value.thursdayEnd,
                    friday: this.model.value.fridayStart + ' - ' + this.model.value.fridayEnd,
                    saturday: this.model.value.satudayStart + ' - ' + this.model.value.saturdayEnd,
                    sunday: this.model.value.sundayStart + ' - ' + this.model.value.sundayEnd,
                },
                logo_url: this.logo || null,
                longitude: this.longitude,
                latitude: this.latitude,
                isOrg: false,
                image1_url: this.img1 || null,
                image2_url: this.img2 || null,
                image3_url: this.img3 || null,
                name: this.model.value.name,
                type: this.model.value.type,
                category: this.model.value.category,
                ranking: this.model.value.ranking,
                phone: this.model.value.phone,
                website: this.model.value.website,
                zipcode: this.model.value.zipcode,
                description: this.model.value.description
            };
            var info = this.db.list('/city_entities_info/' + this.model.value.city + '/');
            info.push(submissionModel).then(function (item) {
                var clientModel = {
                    businessHours: {
                        monday: _this.model.value.mondayStart + ' - ' + _this.model.value.mondayEnd,
                        tuesday: _this.model.value.tuesdayStart + ' - ' + _this.model.value.tuesdayEnd,
                        wednesday: _this.model.value.wednesdayStart + ' - ' + _this.model.value.wednesdayEnd,
                        thursday: _this.model.value.thursdayStart + ' - ' + _this.model.value.thursdayEnd,
                        friday: _this.model.value.fridayStart + ' - ' + _this.model.value.fridayEnd,
                        saturday: _this.model.value.satudayStart + ' - ' + _this.model.value.saturdayEnd,
                        sunday: _this.model.value.sundayStart + ' - ' + _this.model.value.sundayEnd,
                    },
                    category: _this.model.value.category,
                    isOrg: false,
                    latitude: _this.latitude,
                    logo_url: _this.logo_resized || null,
                    longitude: _this.longitude,
                    name: _this.model.value.name,
                    ranking: _this.model.value.ranking,
                    type: _this.model.value.type
                };
                var client = _this.db.list('/city_entities/' + _this.model.value.city + '/');
                client.update(item.key, clientModel);
            });
            this.router.navigate(['/admin/' + this.subroute]);
        }
    };
    NewBusinessComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    NewBusinessComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/' + this.subroute]);
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], NewBusinessComponent.prototype, "agmMap", void 0);
    NewBusinessComponent = __decorate([
        core_1.Component({
            selector: 'app-newbusiness',
            template: __webpack_require__("../../../../../src/app/new/business/business.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/business/business.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof ng2_img_tools_1.Ng2ImgToolsService !== "undefined" && ng2_img_tools_1.Ng2ImgToolsService) === "function" && _b || Object, typeof (_c = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object, typeof (_f = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _f || Object])
    ], NewBusinessComponent);
    return NewBusinessComponent;
    var _a, _b, _c, _d, _e, _f;
}());
exports.NewBusinessComponent = NewBusinessComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/business/business.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/new/new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
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
var NewComponent = /** @class */ (function () {
    function NewComponent() {
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/new.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/new.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.module.ts":
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
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var new_component_1 = __webpack_require__("../../../../../src/app/new/new.component.ts");
var new_routes_1 = __webpack_require__("../../../../../src/app/new/new.routes.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var sight_component_1 = __webpack_require__("../../../../../src/app/new/sight/sight.component.ts");
var business_component_1 = __webpack_require__("../../../../../src/app/new/business/business.component.ts");
var organization_component_1 = __webpack_require__("../../../../../src/app/new/organization/organization.component.ts");
var post_component_1 = __webpack_require__("../../../../../src/app/new/post/post.component.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var ng2_img_tools_1 = __webpack_require__("../../../../ng2-img-tools/dist/ng2-img-tools.js");
var ng2_imageupload_1 = __webpack_require__("../../../../ng2-imageupload/index.js");
var angular2_text_mask_1 = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
var NewModule = /** @class */ (function () {
    function NewModule() {
    }
    NewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(new_routes_1.NewRoutes),
                clarity_angular_1.ClarityModule.forRoot(),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule.forRoot(),
                core_2.AgmCoreModule,
                ng2_imageupload_1.ImageUploadModule,
                ng2_img_tools_1.Ng2ImgToolsModule,
                angular2_text_mask_1.TextMaskModule
            ],
            declarations: [
                new_component_1.NewComponent,
                sight_component_1.NewSightComponent,
                business_component_1.NewBusinessComponent,
                organization_component_1.NewOrganizationComponent,
                post_component_1.NewPostComponent
            ]
        })
    ], NewModule);
    return NewModule;
}());
exports.NewModule = NewModule;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/new.module.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var new_component_1 = __webpack_require__("../../../../../src/app/new/new.component.ts");
var sight_component_1 = __webpack_require__("../../../../../src/app/new/sight/sight.component.ts");
var business_component_1 = __webpack_require__("../../../../../src/app/new/business/business.component.ts");
var organization_component_1 = __webpack_require__("../../../../../src/app/new/organization/organization.component.ts");
var post_component_1 = __webpack_require__("../../../../../src/app/new/post/post.component.ts");
exports.NewRoutes = [
    {
        path: '',
        component: new_component_1.NewComponent,
        children: [
            {
                path: 'post',
                component: post_component_1.NewPostComponent
            },
            {
                path: 'organization',
                component: organization_component_1.NewOrganizationComponent
            },
            {
                path: 'business',
                component: business_component_1.NewBusinessComponent
            },
            {
                path: 'sight',
                component: sight_component_1.NewSightComponent
            }
        ]
    }
];
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/new.routes.js.map

/***/ }),

/***/ "../../../../../src/app/new/organization/organization.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Organization</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"CampusAffiliated\" formControlName=\"category\" value=\"Campus Affiliated\">\n\t\t\t\t\t\t<label for=\"CampusAffiliated\">Campus Affiliated</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Organizations\" formControlName=\"category\" value=\"Campus Organization\">\n\t\t\t\t\t\t<label for=\"Organizations\">Organizations</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Businesses\" formControlName=\"category\" value=\"Business\">\n\t\t\t\t\t\t<label for=\"Businesses\">Businesses</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">School</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>UC San Diego</option>\n\t\t                    <option>UC Santa Barbara</option>\n\t\t                    <!-- <option>UC Davis</option> -->\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.category == 'Business'\">\n\t\t\t\t\t<label class=\"required\">Phone Number</label>\n\t\t\t\t\t<input [textMask]=\"{mask: mask}\" type=\"text\" placeholder=\"(123)-456-7890\" size=\"45\" formControlName=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.category != 'Business'\">\n\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"me@example.com\" size=\"45\" formControlName=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"100\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/new/organization/organization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/organization/organization.component.ts":
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
var ng2_img_tools_1 = __webpack_require__("../../../../ng2-img-tools/dist/ng2-img-tools.js");
var functions_1 = __webpack_require__("../../../../../src/app/shared/functions/functions.ts");
var NewOrganizationComponent = /** @class */ (function () {
    function NewOrganizationComponent(ng2ImgToolsService, store, router, db) {
        this.ng2ImgToolsService = ng2ImgToolsService;
        this.store = store;
        this.router = router;
        this.db = db;
        this.model = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            category: new forms_1.FormControl('Campus Affiliated', forms_1.Validators.required),
            ranking: new forms_1.FormControl(1, forms_1.Validators.required),
            email: new forms_1.FormControl('', forms_1.Validators.email),
            phone: new forms_1.FormControl(''),
            website: new forms_1.FormControl('', forms_1.Validators.required),
            city: new forms_1.FormControl('UC San Diego', forms_1.Validators.required),
            zipcode: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('')
        });
        this.logo_resized = null;
        this.logo = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
    }
    NewOrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.view;
        }).subscribe(function (view) {
            _this.subroute = view.subroute;
        });
    };
    NewOrganizationComponent.prototype.selected = function (imageResult, dest) {
        var _this = this;
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
        this.ng2ImgToolsService.resize([imageResult.file], 50, 50).subscribe(function (result) {
            _this.pushFileToStorage(result, 'logo_resized');
        }, function (error) {
            console.log(error);
        });
    };
    NewOrganizationComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = functions_1.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
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
            var info = this.db.list('/school_entities_info/' + functions_1.getCity(this.model.value.city) + '/' + this.model.value.city + '/');
            info.push(submissionModel).then(function (item) {
                var clientModel = {
                    category: _this.model.value.category,
                    isOrg: true,
                    logo_url: _this.logo_resized,
                    name: _this.model.value.name,
                    ranking: _this.model.value.ranking,
                    type: _this.model.value.type
                };
                var client = _this.db.list('/school_entities/' + functions_1.getCity(_this.model.value.city) + '/' + _this.model.value.city + '/');
                client.update(item.key, clientModel);
            });
            this.router.navigate(['/admin/' + this.subroute]);
        }
    };
    NewOrganizationComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    NewOrganizationComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/' + this.subroute]);
    };
    NewOrganizationComponent = __decorate([
        core_1.Component({
            selector: 'app-neworganization',
            template: __webpack_require__("../../../../../src/app/new/organization/organization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ng2_img_tools_1.Ng2ImgToolsService !== "undefined" && ng2_img_tools_1.Ng2ImgToolsService) === "function" && _a || Object, typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _d || Object])
    ], NewOrganizationComponent);
    return NewOrganizationComponent;
    var _a, _b, _c, _d;
}());
exports.NewOrganizationComponent = NewOrganizationComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/organization/organization.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Post for {{this.poster.name}}</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Title</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.type == 'Experience'\">\n\t\t\t\t\t<label class=\"required\">Experience Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"viewState.service == 'CampusLive'\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Type</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Event\" formControlName=\"type\" value=\"Event\">\n\t\t\t\t\t\t<label for=\"Event\">Event</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Deal\" formControlName=\"type\" value=\"Deal\">\n\t\t\t\t\t\t<label for=\"Deal\">Deal</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Experience\" formControlName=\"type\" value=\"Experience\">\n\t\t\t\t\t\t<label for=\"Experience\">Experience</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Start Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"start_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">End Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"end_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"250\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Deal/Purchase Page URL</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t            <label>Featured</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" name=\"isFeatured\" id=\"isFeatured\" formControlName=\"isFeatured\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\">\n\t\t            <label>Recurring</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" name=\"isRecurring\" id=\"isRecurring\" formControlName=\"isRecurring\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Monday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Monday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Tuesday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Tuesday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Wednesday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Wednesday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Thursday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Thursday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Friday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Friday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Saturday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Saturday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"form-group\" *ngIf=\"model.value.isRecurring == true\">\n\t\t            <label>Every Sunday</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" (change)=\"modifyRecurringDay('Sunday')\">\n\t\t            </div>\n\t\t        </div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>"

/***/ }),

/***/ "../../../../../src/app/new/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  cursor: pointer; }\n\n.row-align {\n  margin-left: .5rem;\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\nagm-map {\n  height: 300px; }\n\n.pad-bottom {\n  margin-bottom: 6px; }\n\n.unpad {\n  padding: 0; }\n\n.img-restrict {\n  max-height: 128px;\n  max-width: 128px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/post/post.component.ts":
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
var functions_1 = __webpack_require__("../../../../../src/app/shared/functions/functions.ts");
var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(store, router, ngZone, db) {
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
            isFeatured: new forms_1.FormControl(false),
            isRecurring: new forms_1.FormControl(false)
        });
        this.logo = null;
        this.options = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.zoom = 4;
        this.recurringDays = [];
    }
    NewPostComponent.prototype.ngOnInit = function () {
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
    NewPostComponent.prototype.selected = function (imageResult, dest) {
        if (imageResult.error)
            alert(imageResult.error);
        this[dest] = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.pushFileToStorage(imageResult, dest);
    };
    NewPostComponent.prototype.setAddress = function (place) {
        var _this = this;
        this.ngZone.run(function () {
            _this.latitude = place.geometry.location.lat();
            _this.longitude = place.geometry.location.lng();
            _this.zoom = 12;
        });
    };
    NewPostComponent.prototype.markerDragEnd = function (m, $event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
    };
    NewPostComponent.prototype.pushFileToStorage = function (imageResult, dest) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        var uuid = functions_1.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
    };
    NewPostComponent.prototype.submit = function () {
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
                start_date: (new Date(this.model.value.start_date)).toLocaleString([], { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'numeric', day: 'numeric' }).replace(/,/g, ''),
                end_date: (new Date(this.model.value.end_date)).toLocaleString([], { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'numeric', day: 'numeric' }).replace(/,/g, ''),
                location: this.poster.name,
                isFeatured: this.model.value.isFeatured,
                isRecurring: this.model.value.isRecurring,
                entity_id: this.poster.$key,
                recurring_days: this.model.value.isRecurring ? this.recurringDays : null
            };
            if (this.viewState.service == 'CampusLive') {
                submissionModel.isEntityOrg = true;
                var info = this.db.list('/school_posts/' + functions_1.getCity(this.poster.school) + '/' + this.poster.school + '/');
                info.push(submissionModel);
                this.router.navigate(['/view/organization']);
            }
            else {
                var info = this.db.list('/city_posts/' + this.poster.city + '/');
                info.push(submissionModel);
                this.router.navigate(['/view/business']);
            }
        }
    };
    NewPostComponent.prototype.modifyRecurringDay = function (day) {
        var idx = this.recurringDays.indexOf(day);
        if (idx == -1) {
            this.recurringDays.push(day);
        }
        else {
            this.recurringDays.splice(idx, 1);
        }
    };
    NewPostComponent.prototype.logout = function () {
        this.store.dispatch({ type: appActions_1.AppActions.LOGOUT, payload: null });
        this.router.navigate(['login']);
    };
    NewPostComponent.prototype.cancel = function () {
        if (this.viewState.service == 'CampusLive') {
            this.router.navigate(['/view/organization']);
        }
        else {
            this.router.navigate(['/view/business']);
        }
    };
    __decorate([
        core_1.ViewChild('agmMap'),
        __metadata("design:type", typeof (_a = typeof core_2.AgmMap !== "undefined" && core_2.AgmMap) === "function" && _a || Object)
    ], NewPostComponent.prototype, "agmMap", void 0);
    NewPostComponent = __decorate([
        core_1.Component({
            selector: 'app-newpost',
            template: __webpack_require__("../../../../../src/app/new/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _e || Object])
    ], NewPostComponent);
    return NewPostComponent;
    var _a, _b, _c, _d, _e;
}());
exports.NewPostComponent = NewPostComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/post/post.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/sight/sight.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Sight</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sight Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">City</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>San Diego</option>\n\t\t                    <option>Santa Barbara</option>\n\t\t                    <option>Davis</option>\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"100\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Sight Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n</form>"

/***/ }),

/***/ "../../../../../src/app/new/sight/sight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pad-bottom {\n  margin-bottom: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/sight/sight.component.ts":
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
var functions_1 = __webpack_require__("../../../../../src/app/shared/functions/functions.ts");
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
        var uuid = functions_1.generateUUID();
        var uploadTask = storageRef.child(uuid + "_" + imageResult.file.name).put(imageResult.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
            var snap = snapshot;
        }, function (error) {
            console.log(error);
        }, function () {
            _this[dest] = uploadTask.snapshot.downloadURL;
        });
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
            template: __webpack_require__("../../../../../src/app/new/sight/sight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/sight/sight.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _e || Object])
    ], NewSightComponent);
    return NewSightComponent;
    var _a, _b, _c, _d, _e;
}());
exports.NewSightComponent = NewSightComponent;
//# sourceMappingURL=/Users/shivam/Repositories/MyLive/src/src/src/app/new/sight/sight.component.js.map

/***/ }),

/***/ "../../../../angular2-text-mask/dist/angular2TextMask.js":
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var textMaskCore_1 = __webpack_require__("../../../../text-mask-core/dist/textMaskCore.js");
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
var MaskedInputDirective = (function () {
    function MaskedInputDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this.setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this.setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this.renderer.setElementProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype.onInput = function (value) {
        this.setupMask();
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
            // get the updated value
            value = this.inputElement.value;
            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype.setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this.element.nativeElement.tagName === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this.element.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    return MaskedInputDirective;
}());
__decorate([
    core_1.Input('textMask'),
    __metadata("design:type", Object)
], MaskedInputDirective.prototype, "textMaskConfig", void 0);
MaskedInputDirective = __decorate([
    core_1.Directive({
        host: {
            '(input)': 'onInput($event.target.value)',
            '(blur)': '_onTouched()'
        },
        selector: '[textMask]',
        exportAs: 'textMask',
        providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
    }),
    __param(0, core_1.Inject(core_1.Renderer)), __param(1, core_1.Inject(core_1.ElementRef)),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MaskedInputDirective);
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = (function () {
    function TextMaskModule() {
    }
    return TextMaskModule;
}());
TextMaskModule = __decorate([
    core_1.NgModule({
        declarations: [MaskedInputDirective],
        exports: [MaskedInputDirective]
    })
], TextMaskModule);
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__("../../../../text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "../../../../text-mask-core/dist/textMaskCore.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,v=e.indexesOfPipedChars,p=void 0===v?n:v,h=e.caretTrapIndexes,g=void 0===h?n:h;if(0===l)return 0;var m=f.length,y=t.length,b=c.length,C=s.length,P=m-y,x=P>0,O=0===y,k=P>1&&!x&&!O;if(k)return l;var j=x&&(t===s||s===c),M=0,T=void 0,w=void 0;if(j)M=l-P;else{var _=s.toLowerCase(),V=f.toLowerCase(),S=V.substr(0,l).split(o),N=S.filter(function(e){return _.indexOf(e)!==-1});w=N[N.length-1];var E=a.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,A=c.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,R=A!==E,I=void 0!==a[N.length-1]&&void 0!==c[N.length-2]&&a[N.length-1]!==d&&a[N.length-1]!==c[N.length-1]&&a[N.length-1]===c[N.length-2];!x&&(R||I)&&E>0&&c.indexOf(w)>-1&&void 0!==f[l]&&(T=!0,w=f[l]);for(var J=p.map(function(e){return _[e]}),q=J.filter(function(e){return e===w}).length,F=N.filter(function(e){return e===w}).length,L=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===w&&f[r]!==e}).length,W=L+F+q+(T?1:0),z=0,B=0;B<C;B++){var D=_[B];if(M=B+1,D===w&&z++,z>=W)break}}if(x){for(var G=M,H=M;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||g.indexOf(H)!==-1||H===b)return G}else if(T){for(var K=M-1;K>=0;K--)if(s[K]===w||g.indexOf(K)!==-1||0===K)return K}else for(var Q=M;Q>=0;Q--)if(c[Q-1]===d||g.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?a:l,f=t.placeholderChar,d=void 0===f?i.placeholderChar:f,c=t.placeholder,v=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,p=t.currentCaretPosition,h=t.keepCharPositions,g=u===!1&&void 0!==s,m=e.length,y=s.length,b=v.length,C=r.length,P=m-y,x=P>0,O=p+(x?-P:0),k=O+Math.abs(P);if(h===!0&&!x){for(var j=a,M=O;M<k;M++)v[M]===d&&(j+=d);e=e.slice(0,O)+j+e.slice(O,m)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=O&&r<k}}),w=m-1;w>=0;w--){var _=T[w].char;if(_!==d){var V=w>=O&&y===C;_===v[V?w-P:w]&&T.splice(w,1)}}var S=a,N=!1;e:for(var E=0;E<b;E++){var A=v[E];if(A===d){if(T.length>0)for(;T.length>0;){var R=T.shift(),I=R.char,J=R.isNew;if(I===d&&g!==!0){S+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&s!==a&&u!==!1&&x){for(var q=T.length,F=null,L=0;L<q;L++){var W=T[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(S+=I,T.splice(F,1)):E--}else S+=I;continue e}N=!0}g===!1&&(S+=v.substr(E,b));break}S+=A}if(g&&x===!1){for(var z=null,B=0;B<S.length;B++)v[B]===d&&(z=B);S=null!==z?S.substr(0,z+1):a}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],s="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?p.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P,O=n.showMask,k=void 0!==O&&O;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var j=void 0,M=void 0;if(s instanceof Array&&(j=(0,v.convertMaskToPlaceholder)(s,C)),s!==!1){var T=a(t),w=o.selectionEnd,_=r.previousConformedValue,V=r.previousPlaceholder,S=void 0;if(("undefined"==typeof s?"undefined":l(s))===h){if(M=s(T,{currentCaretPosition:w,previousConformedValue:_,placeholderChar:C}),M===!1)return;var N=(0,v.processCaretTraps)(M),E=N.maskWithoutCaretTraps,A=N.indexes;M=E,S=A,j=(0,v.convertMaskToPlaceholder)(M,C)}else M=s;var R={previousConformedValue:_,guide:d,placeholderChar:C,pipe:m,placeholder:j,currentCaretPosition:w,keepCharPositions:x},I=(0,c.default)(T,M,R),J=I.conformedValue,q=("undefined"==typeof m?"undefined":l(m))===h,F={};q&&(F=m(J,u({rawValue:T},R)),F===!1?F={value:_,rejected:!0}:(0,v.isString)(F)&&(F={value:F}));var L=q?F.value:J,W=(0,f.default)({previousConformedValue:_,previousPlaceholder:V,conformedValue:L,placeholder:j,rawValue:T,currentCaretPosition:w,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:S}),z=L===j&&0===W,B=k?j:g,D=z?B:L;r.previousConformedValue=D,r.previousPlaceholder=j,o.value!==D&&(o.value=D,i(o,W))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,v.isString)(e))return e;if((0,v.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),v=t(4),p=t(1),h="function",g="",m="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ })

});
//# sourceMappingURL=new.module.chunk.js.map
