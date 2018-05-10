webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailPageModule", function() { return TodoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_detail__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodoDetailPageModule = (function () {
    function TodoDetailPageModule() {
    }
    TodoDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__todo_detail__["a" /* TodoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo_detail__["a" /* TodoDetailPage */]),
            ],
        })
    ], TodoDetailPageModule);
    return TodoDetailPageModule;
}());

//# sourceMappingURL=todo-detail.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_class_ToDo__ = __webpack_require__(201);
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
 * Generated class for the TodoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoDetailPage = (function () {
    function TodoDetailPage(mViewController, navCtrl, navParams) {
        this.mViewController = mViewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = new __WEBPACK_IMPORTED_MODULE_2__providers_class_ToDo__["a" /* ToDos */]();
        if (navParams.data["todo"]) {
            this.todo = navParams.get("todo");
        }
    }
    TodoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoDetailPage');
        console.log(this.todo);
    };
    TodoDetailPage.prototype.closeView = function () {
        this.mViewController.dismiss();
    };
    TodoDetailPage.prototype.checkDone = function () {
        this.todo.state = true;
    };
    TodoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo-detail',template:/*ion-inline-start:"C:\Users\Thao Phuong\Downloads\todo\src\pages\todo-detail\todo-detail.html"*/'<!--\n  Generated template for the TodoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content >\n  <div class="backdropt" (click)="closeView()" tappable></div>\n  <div class="detail-container animated zoomIn">\n    <div class="d-header">\n      <div class="icon">\n        <img src="{{todo.icon}}" alt="">\n      </div>\n      <div class="name">\n        <span>{{todo.name}}</span>\n      </div>\n      <div class="date-time">\n        <span>{{todo.date | date: \'d LLLL\'}}, </span>\n        <span> {{todo.time | date: \'HH : mm\'}}</span>\n      </div>\n    </div>\n    <div class="d-description">\n      <div text-center class="title"><span>Description</span></div>\n      <div class="description" text-left>\n        {{todo.description}}\n      </div>\n    </div>\n    <button class="f-button" (click)="checkDone()">Done</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thao Phuong\Downloads\todo\src\pages\todo-detail\todo-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TodoDetailPage);
    return TodoDetailPage;
}());

//# sourceMappingURL=todo-detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map