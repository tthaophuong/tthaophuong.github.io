webpackJsonp([1],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddPageModule", function() { return TodoAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_add__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodoAddPageModule = (function () {
    function TodoAddPageModule() {
    }
    TodoAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__todo_add__["a" /* TodoAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo_add__["a" /* TodoAddPage */]),
            ],
        })
    ], TodoAddPageModule);
    return TodoAddPageModule;
}());

//# sourceMappingURL=todo-add.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_class_ToDo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_untils_untils__ = __webpack_require__(51);
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
 * Generated class for the TodoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoAddPage = (function () {
    function TodoAddPage(appController, mRenderer2, mViewController, navCtrl, navParams) {
        this.appController = appController;
        this.mRenderer2 = mRenderer2;
        this.mViewController = mViewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = [];
        this.date = "";
        this.time = "00:00";
        this.indexIconActive = 0;
        var now = new Date();
        this.date = this.appController.convertDate(now);
        this.time = this.appController.convertTime(now);
        console.log(this.time);
        this.indexIconActive = 0;
        this.todo = new __WEBPACK_IMPORTED_MODULE_3__providers_class_ToDo__["a" /* ToDos */]();
    }
    TodoAddPage.prototype.selectedIcon = function (i) {
        this.indexIconActive = i;
    };
    TodoAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoAddPage');
        this.loadIcons();
    };
    TodoAddPage.prototype.loadIcons = function () {
        this.icons = [];
        this.icons = this.appController.getIcons();
    };
    TodoAddPage.prototype.closeView = function () {
        var _this = this;
        this.mRenderer2.addClass(this.taContainer.nativeElement, "slideOutRight");
        setTimeout(function () {
            _this.mViewController.dismiss();
        }, 200);
    };
    TodoAddPage.prototype.add = function () {
        if (!this.todo.name || this.todo.name.length == 0 || this.todo.name == "") {
            this.closeView();
            return;
        }
        this.appController.showLoading();
        this.todo.icon = this.icons[this.indexIconActive].icon;
        this.todo.color = this.icons[this.indexIconActive].color;
        var time = new Date(this.date);
        time.setHours(parseInt(this.time.split(":")[0]), parseInt(this.time.split(":")[1]));
        this.todo.date = new Date(this.date);
        this.todo.time = time;
        this.todo.state = false;
        this.todo.dateString = this.todo.date.getDate() + " " + __WEBPACK_IMPORTED_MODULE_4__providers_untils_untils__["a" /* Untils */].getMonthString(this.todo.date);
        this.todo.timeString = this.time;
        this.todo.createID();
        console.log("Todo create new", this.todo);
        this.appController.data.push(this.todo);
        this.appController.saveData(this.appController.data);
        this.appController.hideLoading();
        this.appController.showToast("Add new task success", 1000);
        this.closeView();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("taContainer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TodoAddPage.prototype, "taContainer", void 0);
    TodoAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo-add',template:/*ion-inline-start:"C:\Users\Thao Phuong\Downloads\todo\src\pages\todo-add\todo-add.html"*/'<!--\n  Generated template for the TodoAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <div class="backdropt" (click)="closeView()" tappable></div>\n  <div class="ta-container animated slideInRight" #taContainer>\n    <div class="background-image"></div>\n    <div class="header-title">\n      <span>New Task</span>\n    </div>\n    <div class="icon-group">\n      <div class="title">\n        <span>Icon</span>\n      </div>\n      <ion-row align-items-center>\n        <ion-col col-2 *ngFor="let icon of icons; let i = index" tappable (click)="selectedIcon(i)">\n          <img src="{{icon.icon}}" alt="">\n          <div [style.background]="icon.color" class="dot" *ngIf="indexIconActive == i"></div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="name">\n      <div class="title">\n        <span>Name</span>\n      </div>\n      <ion-item no-padding>\n        <ion-input [(ngModel)]="todo.name" clearInput type="text"></ion-input>\n      </ion-item>\n      <div class="line-border"></div>\n    </div>\n    <div class="description">\n      <div class="title">\n        <span>Description</span>\n      </div>\n      <ion-textarea [(ngModel)]="todo.description" rows="3"></ion-textarea>\n    </div>\n    <div class="date">\n      <div class="title">\n        <span>Date</span>\n      </div>\n      <ion-item no-padding>\n        <ion-icon item-end name="arrow-dropdown"></ion-icon>\n        <ion-datetime displayFormat="D - MMMM - YYYY" [(ngModel)]="date"></ion-datetime>\n      </ion-item>\n      <div class="line-border"></div>\n    </div>\n    <div class="time">\n      <div class="title">\n        <span>Time</span>\n      </div>\n      <ion-item no-padding>\n        <ion-icon item-end name="arrow-dropdown"></ion-icon>\n        <ion-datetime displayFormat="HH : mm" [(ngModel)]="time"></ion-datetime>\n      </ion-item>\n      <div class="line-border"></div>\n    </div>\n    <button class="f-button" (click)="add()">Add</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thao Phuong\Downloads\todo\src\pages\todo-add\todo-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TodoAddPage);
    return TodoAddPage;
}());

//# sourceMappingURL=todo-add.js.map

/***/ })

});
//# sourceMappingURL=1.js.map