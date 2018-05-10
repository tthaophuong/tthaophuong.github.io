webpackJsonp([3],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneTaskPageModule", function() { return DoneTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__done_task__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoneTaskPageModule = (function () {
    function DoneTaskPageModule() {
    }
    DoneTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__done_task__["a" /* DoneTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__done_task__["a" /* DoneTaskPage */]),
            ],
        })
    ], DoneTaskPageModule);
    return DoneTaskPageModule;
}());

//# sourceMappingURL=done-task.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoneTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoneTaskPage = (function () {
    function DoneTaskPage(mModalController, appController, navCtrl, navParams) {
        this.mModalController = mModalController;
        this.appController = appController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listFillter = [];
        this.listFillter = [];
    }
    DoneTaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoneTaskPage');
        this.loadData();
    };
    DoneTaskPage.prototype.loadData = function () {
        // this.listFillter = this.appController.getFakeData();
        this.listFillter = this.appController.data.filter(function (data) {
            return data.state;
        });
    };
    DoneTaskPage.prototype.goToDetail = function (item) {
        this.appController.showModal("TodoDetailPage", { todo: item });
    };
    DoneTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-done-task',template:/*ion-inline-start:"C:\Users\Thao Phuong\Downloads\todo\src\pages\done-task\done-task.html"*/'<!--\n  Generated template for the DoneTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-olny navPop>\n        <!-- <ion-icon name="arrow-back"></ion-icon> -->\n        <img src="../assets/icon/arrow-back.png" alt="">\n      </button>\n    </ion-buttons>\n    <ion-title text-center class="header-title">Done Task</ion-title>\n    <ion-buttons right style="opacity: 0">\n      <button ion-button icon-olny navPop>\n        <!-- <ion-icon name="arrow-back"></ion-icon> -->\n        <img src="../assets/icon/arrow-back.png" alt="">\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="background-image">\n    <div class="todo-content">\n      <ion-row (click)="goToDetail(item)" tappable *ngFor="let item of listFillter" class="work-item" align-items-center>\n        <div [style.color]="item.color" class="dot-color">\n          <ion-icon name="checkmark"></ion-icon>\n        </div>\n        <ion-col col-3 class="work-icon">\n          <!-- <ion-icon name="{{item.icon}}"></ion-icon> -->\n          <img src="{{item.icon}}" alt="">\n        </ion-col>\n        <ion-col col-6 class="work-name">\n          <span>{{item.name}}</span>\n        </ion-col>\n        <ion-col col-3 class="date-time">\n          <div class="work-date">\n            <span>{{item.dateString}}</span>\n          </div>\n          <div class="work-time">\n            <span>{{item.timeString}}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <div class="fake-height"></div> -->\n    </div>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Thao Phuong\Downloads\todo\src\pages\done-task\done-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DoneTaskPage);
    return DoneTaskPage;
}());

//# sourceMappingURL=done-task.js.map

/***/ })

});
//# sourceMappingURL=3.js.map