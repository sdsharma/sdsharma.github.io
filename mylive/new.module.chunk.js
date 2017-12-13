webpackJsonp(["new.module"],{

/***/ "../../../../../src/app/new/business/business.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Business</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Business Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Experiences\" formControlName=\"category\" value=\"Experiences\">\n\t\t\t\t\t\t<label for=\"Experiences\">Experiences</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Entertainment\" formControlName=\"category\" value=\"Entertainment\">\n\t\t\t\t\t\t<label for=\"Entertainment\">Entertainment</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Grub\" formControlName=\"category\" value=\"Grub\">\n\t\t\t\t\t\t<label for=\"Grub\">Grub</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"21+\" formControlName=\"category\" value=\"21+\">\n\t\t\t\t\t\t<label for=\"21+\">21+</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">City</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>San Diego</option>\n\t\t                    <option>Santa Barbara</option>\n\t\t                    <!-- <option>Davis</option> -->\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Hours</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openHours = true\">Set Hours</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Phone Number</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"(123)-456-7890\" size=\"45\" formControlName=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"100\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n\n\t<clr-modal [(clrModalOpen)]=\"openHours\">\n\t\t<h3 class=\"modal-title\">Business Hours</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Monday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"mondayStart\"> to <input type=\"time\" formControlName=\"mondayEnd\">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Tuesday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"tuesdayStart\"> to <input type=\"time\" formControlName=\"tuesdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Wednesday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"wednesdayStart\"> to <input type=\"time\" formControlName=\"wednesdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Thursday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"thursdayStart\"> to <input type=\"time\" formControlName=\"thursdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Friday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"fridayStart\"> to <input type=\"time\" formControlName=\"fridayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Saturday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"saturdayStart\"> to <input type=\"time\" formControlName=\"saturdayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Sunday</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"time\" formControlName=\"sundayStart\"> to <input type=\"time\" formControlName=\"sundayEnd\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openHours = false\">Save</button>\n\t\t</div>\n\t</clr-modal>\n</form>"

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
                    monday: functions_1.tConvert(this.model.value.mondayStart) + ' - ' + functions_1.tConvert(this.model.value.mondayEnd),
                    tuesday: functions_1.tConvert(this.model.value.tuesdayStart) + ' - ' + functions_1.tConvert(this.model.value.tuesdayEnd),
                    wednesday: functions_1.tConvert(this.model.value.wednesdayStart) + ' - ' + functions_1.tConvert(this.model.value.wednesdayEnd),
                    thursday: functions_1.tConvert(this.model.value.thursdayStart) + ' - ' + functions_1.tConvert(this.model.value.thursdayEnd),
                    friday: functions_1.tConvert(this.model.value.fridayStart) + ' - ' + functions_1.tConvert(this.model.value.fridayEnd),
                    saturday: functions_1.tConvert(this.model.value.satudayStart) + ' - ' + functions_1.tConvert(this.model.value.saturdayEnd),
                    sunday: functions_1.tConvert(this.model.value.sundayStart) + ' - ' + functions_1.tConvert(this.model.value.sundayEnd),
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
                        monday: functions_1.tConvert(_this.model.value.mondayStart) + ' - ' + functions_1.tConvert(_this.model.value.mondayEnd),
                        tuesday: functions_1.tConvert(_this.model.value.tuesdayStart) + ' - ' + functions_1.tConvert(_this.model.value.tuesdayEnd),
                        wednesday: functions_1.tConvert(_this.model.value.wednesdayStart) + ' - ' + functions_1.tConvert(_this.model.value.wednesdayEnd),
                        thursday: functions_1.tConvert(_this.model.value.thursdayStart) + ' - ' + functions_1.tConvert(_this.model.value.thursdayEnd),
                        friday: functions_1.tConvert(_this.model.value.fridayStart) + ' - ' + functions_1.tConvert(_this.model.value.fridayEnd),
                        saturday: functions_1.tConvert(_this.model.value.satudayStart) + ' - ' + functions_1.tConvert(_this.model.value.saturdayEnd),
                        sunday: functions_1.tConvert(_this.model.value.sundayStart) + ' - ' + functions_1.tConvert(_this.model.value.sundayEnd),
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
                ng2_img_tools_1.Ng2ImgToolsModule
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

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Organization</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Name</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Logo Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Type</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type\" size=\"45\" formControlName=\"type\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Organization Ranking</label>\n\t\t\t\t\t<input type=\"number\" size=\"45\" formControlName=\"ranking\" min=\"1\" max=\"50\" placeholder=\"1-50\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Category</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"CampusAffiliated\" formControlName=\"category\" value=\"Campus Affiliated\">\n\t\t\t\t\t\t<label for=\"CampusAffiliated\">Campus Affiliated</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Organizations\" formControlName=\"category\" value=\"Campus Organization\">\n\t\t\t\t\t\t<label for=\"Organizations\">Organizations</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"category\" id=\"Businesses\" formControlName=\"category\" value=\"Business\">\n\t\t\t\t\t\t<label for=\"Businesses\">Businesses</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">School</label>\n\t\t\t\t\t<div class=\"select\">\n\t\t                <select formControlName=\"city\">\n\t\t                    <option>UC San Diego</option>\n\t\t                    <option>UC Santa Barbara</option>\n\t\t                    <!-- <option>UC Davis</option> -->\n\t\t                </select>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Zip Code</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"99999\" size=\"45\" formControlName=\"zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.category == 'Business'\">\n\t\t\t\t\t<label class=\"required\">Phone Number</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"(123)-456-7890\" size=\"45\" formControlName=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Website</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.category != 'Business'\">\n\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"me@example.com\" size=\"45\" formControlName=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"100\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 1</label>\n\t\t\t\t\t<img [src]=\"img1\" *ngIf=\"img1\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img1')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 2</label>\n\t\t\t\t\t<img [src]=\"img2\" *ngIf=\"img2\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img2')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Featured Image 3</label>\n\t\t\t\t\t<img [src]=\"img3\" *ngIf=\"img3\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'img3')\">\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n</form>"

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

module.exports = "<form [formGroup]=\"model\" class=\"unpad\">\n\t<div class=\"row row-align\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<section class=\"form-block\">\n\t\t\t\t<label>Create a New Post for {{this.poster.name}}</label>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Title</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" size=\"45\" formControlName=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"model.value.type == 'Experience'\">\n\t\t\t\t\t<label class=\"required\">Experience Image</label>\n\t\t\t\t\t<img [src]=\"logo\" *ngIf=\"logo\" class=\"img-restrict\"><br>\n\t\t\t\t\t<input type=\"file\" imageUpload [resizeOptions]=\"options\" (imageSelected)=\"selected($event, 'logo')\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" *ngIf=\"viewState.service == 'CampusLive'\">\n\t\t\t\t\t<label class=\"required\">Location</label>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"openMap = true; agmMap.triggerResize()\">Set Location</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Post Type</label>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Event\" formControlName=\"type\" value=\"Event\">\n\t\t\t\t\t\t<label for=\"Event\">Event</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Deal\" formControlName=\"type\" value=\"Deal\">\n\t\t\t\t\t\t<label for=\"Deal\">Deal</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type\" id=\"Experience\" formControlName=\"type\" value=\"Experience\">\n\t\t\t\t\t\t<label for=\"Experience\">Experience</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">Start Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"start_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"required\">End Date/Time</label>\n\t\t\t\t\t<input type=\"datetime-local\" formControlName=\"end_date\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<textarea rows=\"3\" formControlName=\"description\" maxlength=\"250\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Deal/Purchase Page URL</label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"http://example.com\" size=\"45\" formControlName=\"website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t            <label>Featured</label>\n\t\t            <div class=\"radio-inline\">\n\t\t                <input type=\"checkbox\" name=\"isFeatured\" id=\"isFeatured\" formControlName=\"isFeatured\">\n\t\t            </div>\n\t\t        </div>\n\t\t\t</section>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Create</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</div>\n\n\t<clr-modal [(clrModalOpen)]=\"openMap\">\n\t\t<h3 class=\"modal-title\">Business Address</h3>\n\t\t<div class=\"modal-body\">\n\t\t\t<input placeholder=\"Search for Location\" type=\"text\" (setAddress)=\"setAddress($event)\" googleplace size=\"45\" class=\"pad-bottom\">\n\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" #agmMap>\n\t\t\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEnd(m, $event)\"></agm-marker>\n\t\t\t</agm-map>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openMap = false\">Save</button>\n\t\t</div>\n\t</clr-modal>"

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
                start_date: this.model.value.start_date,
                end_date: this.model.value.end_date,
                location: this.poster.name,
                isFeatured: this.model.value.isFeatured,
                entity_id: this.poster.$key
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

/***/ })

});
//# sourceMappingURL=new.module.chunk.js.map