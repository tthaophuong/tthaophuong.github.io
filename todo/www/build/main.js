webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_untils_untils__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_class_DayInMonth__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(appController, mModalController, navCtrl) {
        this.appController = appController;
        this.mModalController = mModalController;
        this.navCtrl = navCtrl;
        this.listFillter = [];
        this.isCalendarMode = false;
        this.checked = true;
        this.title = "To do";
        this.dayInMonth = 30;
        this.daySelected = 0;
        this.listDayInMonth = [];
        this.ischeckMarkMode = false;
        /**Đánh dấu hoặc huỷ toàn bộ đánh dấu */
        this.isCheckAll = false;
        this.listFillter = [];
        this.listDayInMonth = [];
        this.title = "to do";
        this.isCalendarMode = false;
        this.checked = false;
        this.ischeckMarkMode = false;
        this.today = new Date();
        this.dayInMonth = __WEBPACK_IMPORTED_MODULE_3__providers_untils_untils__["a" /* Untils */].getDayInMonth(this.today);
        this.daySelected = 3;
    }
    HomePage.prototype.loadDayInMonth = function () {
        var mm = this.today.getMonth() + 1;
        var yy = this.today.getFullYear();
        this.listDayInMonth = [];
        for (var index = 1; index <= this.dayInMonth; index++) {
            var day = new __WEBPACK_IMPORTED_MODULE_4__providers_class_DayInMonth__["a" /* DayInMonth */]();
            var date = new Date();
            date.setDate(index);
            day.parse(date);
            this.listDayInMonth.push(day);
        }
    };
    HomePage.prototype.checkMarkMode = function () {
        this.ischeckMarkMode = !this.ischeckMarkMode;
        this.loadCheckAll();
    };
    HomePage.prototype.loadCheckAll = function () {
        var check = this.listFillter.find(function (todo) {
            return todo.state;
        });
        if (check && check.state) {
            this.isCheckAll = true;
        }
        else {
            this.isCheckAll = false;
        }
    };
    HomePage.prototype.changeCalendarMode = function () {
        // this.appController.clearData();
        this.isCalendarMode = !this.isCalendarMode;
    };
    HomePage.prototype.getMonthString = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3__providers_untils_untils__["a" /* Untils */].getMonthString(date);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        // this.appController.clearData();
        this.listFillter = this.appController.loadData();
        this.loadDayInMonth();
        this.loadCheckAll();
        console.log("Load done");
    };
    HomePage.prototype.goToDoneTask = function () {
        // this.appController.clearData();
        this.navCtrl.push("DoneTaskPage");
    };
    HomePage.prototype.checkAllDone = function () {
        if (!this.isCheckAll) {
            this.appController.data.forEach(function (todo) {
                if (!todo.state) {
                    todo.state = true;
                }
            });
            this.listFillter = this.appController.loadData();
            this.appController.saveData(this.listFillter);
            this.isCheckAll = true;
        }
        else {
            this.appController.data.forEach(function (todo) {
                if (todo.state) {
                    todo.state = false;
                }
            });
            this.listFillter = this.appController.loadData();
            this.appController.saveData(this.listFillter);
            this.isCheckAll = false;
        }
    };
    HomePage.prototype.goToAddTodo = function () {
        this.appController.showModal("TodoAddPage");
    };
    HomePage.prototype.goToDetail = function (item) {
        var _this = this;
        var modal = this.appController.showModal("TodoDetailPage", { todo: item });
        modal.onDidDismiss(function (data) {
            _this.listFillter = _this.appController.data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Thao Phuong\Downloads\todo\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button style="opacity: 0" ion-button class="button-header">\n        <img src="../assets/icon/menu_1.png" alt="">\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!isCalendarMode" text-center class="header-title">{{title}}</ion-title>\n    <ion-title *ngIf="isCalendarMode" text-center class="header-title">{{today | date: \'LLLL yyyy\'}}</ion-title>\n\n    <ion-buttons right>\n      <button ion-button class="button-header" (click)="goToDoneTask()">\n        <img src="../assets/icon/menu_1.png" alt="">\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="background-image">\n  <div class="todo-content" *ngIf="!isCalendarMode">\n    <ion-row tappable (click)="goToDetail(item)" tappable *ngFor="let item of listFillter" class="work-item" align-items-center>\n      <div [style.background-color]="item.color" class="dot-color"></div>\n      <ion-col col-2 class="work-icon">\n        <img src="{{item.icon}}" alt="">\n      </ion-col>\n      <ion-col col-7 class="work-name">\n        <span>{{item.name}}</span>\n      </ion-col>\n      <ion-col *ngIf="!ischeckMarkMode" col-3 class="date-time animated fadeIn">\n        <div class="work-date">\n          <span >{{item.dateString}}</span>\n        </div>\n        <div class="work-time">\n          <span>{{item.timeString}}</span>\n        </div>\n      </ion-col>\n      <ion-col col-2 offset-1 *ngIf="ischeckMarkMode" class="animated fadeIn" >\n        <ion-checkbox [(ngModel)]="item.state" ></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <div class="fake-height"></div>\n  </div>\n\n  <div class="todo-calendar-mode" *ngIf="isCalendarMode">\n    <div class="calendar">\n      <div class="calendar-block" *ngFor="let day of listDayInMonth; let i = index" [class.selected]="i==daySelected">\n        <div class="number">\n          <span>{{day.date}}</span>\n        </div>\n        <div class="day-of-week">\n          <span>{{day.dayOfWeek.substring(0,3)}}</span>\n        </div>\n        <div class="dot" *ngIf="i != daySelected"></div>\n      </div>\n    </div>\n    <div class="list-container">\n      <div class="item-container" *ngFor="let item of listFillter">\n        <div class="time">\n          <div class="number">\n            <span>{{item.timeString}}</span>\n          </div>\n          <div class="dot" [style.background]="item.color"></div>\n        </div>\n        <ion-row align-items-center class="td-content" (click)="goToDetail(item)" tappable>\n          <ion-col col-2 text-center>\n            <img src="{{item.icon}}" alt="">\n          </ion-col>\n          <ion-col class="name">\n            <span>{{item.name}}</span>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class="fake-height"></div>\n  </div>\n\n  <div class="footer-container">\n    <div class="footer-content">\n      <div class="backdropt"></div>\n\n      <div *ngIf="!ischeckMarkMode" class="button-footer animated fadeIn">\n        <button class="f-button checkmark" (click)="checkMarkMode()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n        <button class="f-button larger" (click)="changeCalendarMode()">\n          <img *ngIf="isCalendarMode" src="../assets/icon/calendar.png" alt="">\n          <img *ngIf="!isCalendarMode" src="../assets/icon/menu_2.png" alt="">\n        </button>\n        <button class="f-button add" (click)="goToAddTodo()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n\n      <div *ngIf="ischeckMarkMode" class="button-footer animated fadeIn">\n        <button class="f-button close" (click)="checkMarkMode()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button class="f-button checkmark" (click)="checkAllDone()">\n          <ion-icon name="done-all"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thao Phuong\Downloads\todo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/done-task/done-task.module": [
		284,
		3
	],
	"../pages/loading/loading.module": [
		285,
		2
	],
	"../pages/todo-add/todo-add.module": [
		286,
		1
	],
	"../pages/todo-detail/todo-detail.module": [
		287,
		0
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Thao Phuong\Downloads\todo\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thao Phuong\Downloads\todo\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__untils_untils__ = __webpack_require__(51);

var ToDos = (function () {
    function ToDos(data) {
        this.reset();
        if (data)
            this.parseObject(data);
    }
    ToDos.prototype.reset = function () {
        this.id = "";
        this.icon = "";
        this.color = "";
        this.name = "";
        this.description = "";
        this.date = new Date();
        this.dateString = __WEBPACK_IMPORTED_MODULE_0__untils_untils__["a" /* Untils */].getMonthString(this.date);
        this.time = new Date();
        this.timeString = this.time.toTimeString();
        this.state = false;
    };
    ToDos.prototype.parseObject = function (todo) {
        if (todo.id)
            this.id = todo.id;
        if (todo.icon)
            this.icon = todo.icon;
        if (todo.color)
            this.color = todo.color;
        if (todo.name)
            this.name = todo.name;
        if (todo.description)
            this.description = todo.description;
        if (todo.date)
            this.date = todo.date;
        if (todo.time)
            this.time = todo.time;
        if (todo.state)
            this.state = todo.state;
        if (todo.timeString)
            this.timeString = todo.timeString;
        if (todo.dateString)
            this.dateString = todo.dateString;
    };
    ToDos.prototype.createID = function () {
        this.id = this.date.getDate() + "" + (this.date.getMonth() + 1) + "" + this.date.getFullYear() + "" + this.time.getHours() + "" + this.time.getMinutes();
    };
    return ToDos;
}());

//# sourceMappingURL=ToDo.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transitions_fade_in_transition__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transitions_fade_out_transition__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_app_controller_app_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.config.setTransition('fade-in', __WEBPACK_IMPORTED_MODULE_8__transitions_fade_in_transition__["a" /* FadeInTransiton */]);
        this.config.setTransition('fade-out', __WEBPACK_IMPORTED_MODULE_9__transitions_fade_out_transition__["a" /* FadeOutTransition */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/done-task/done-task.module#DoneTaskPageModule', name: 'DoneTaskPage', segment: 'done-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo-add/todo-add.module#TodoAddPageModule', name: 'TodoAddPage', segment: 'todo-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo-detail/todo-detail.module#TodoDetailPageModule', name: 'TodoDetailPage', segment: 'todo-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayInMonth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__untils_untils__ = __webpack_require__(51);

var DayInMonth = (function () {
    function DayInMonth() {
        var today = new Date();
        this.parse(today);
    }
    DayInMonth.prototype.parse = function (today) {
        this.date = today.getDate();
        this.month = today.getMonth() + 1;
        this.year = today.getFullYear();
        this.dayOfWeek = __WEBPACK_IMPORTED_MODULE_0__untils_untils__["a" /* Untils */].getDayOfWeek(today);
    };
    return DayInMonth;
}());

//# sourceMappingURL=DayInMonth.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_controller_app_controller__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(appCtrl, platform, statusBar, splashScreen) {
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = "LoadingPage";
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Thao Phuong\Downloads\todo\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Thao Phuong\Downloads\todo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeInTransiton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FadeInTransiton = (function (_super) {
    __extends(FadeInTransiton, _super);
    function FadeInTransiton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeInTransiton.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 0, 'transform': 'translateY(0%)' });
        wrapper.afterStyles({ 'opacity': 1, 'transform': 'translateY(0%)' });
        wrapper.fromTo('opacity', 0, 1);
        wrapper.fromTo('transform', 'translateY(0%)', 'translateY(0%)');
        this
            .element(this.enteringView.pageRef())
            .duration(100)
            .easing('cubic-bezier(0, 0, 1, 1)')
            .add(wrapper);
    };
    return FadeInTransiton;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* PageTransition */]));

//# sourceMappingURL=fade-in.transition.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeOutTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FadeOutTransition = (function (_super) {
    __extends(FadeOutTransition, _super);
    function FadeOutTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeOutTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        // const contentWrapper = new Animation(this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'opacity': 1, 'transform': 'translateY(0%)' });
        wrapper.afterStyles({ 'opacity': 0, 'transform': 'translateY(0%)' });
        wrapper.fromTo('opacity', 1, 0);
        wrapper.fromTo('transform', 'translateY(0%)', 'translateY(0%)');
        // contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(100)
            .easing('cubic-bezier(0, 0, 1, 1)')
            .add(wrapper);
    };
    return FadeOutTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* PageTransition */]));

//# sourceMappingURL=fade-out.transition.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_ToDo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AppControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppControllerProvider = (function () {
    function AppControllerProvider(http, toastCtrl, loadingCtrl, modalCtrl, storage) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.listFillter = [];
        this.icons = [];
        this.data = [];
        this.loaddata = {
            dataFile: false,
            dataStorage: false
        };
        this.loadedDataChanel = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.fakeData();
        this.loaddata = {
            dataFile: false,
            dataStorage: false
        };
    }
    AppControllerProvider.prototype.clearData = function () {
        this.storage.clear();
    };
    AppControllerProvider.prototype.loadDataFromJSON = function () {
        var _this = this;
        this.icons = [];
        this.loaddata.dataFile = false;
        this.http.get("./assets/data/data.json").map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.icons && data.icons.length > 0) {
                data.icons.forEach(function (iconData) {
                    var icon = {
                        id: iconData.id,
                        icon: iconData.icon,
                        color: iconData.color
                    };
                    _this.icons.push(icon);
                });
            }
            _this.loaddata.dataFile = true;
            _this.loadedDataChanel.next("json");
            console.log("Load icons done");
        });
        this.loaddata.dataFile = true;
        this.loadedDataChanel.next("json");
    };
    AppControllerProvider.prototype.getIcons = function () {
        if (this.icons.length > 0)
            return this.icons;
        else
            return [];
    };
    AppControllerProvider.prototype.saveData = function (value) {
        this.storage.set("data", value).then(function () {
            console.log("Lưu dữ liệu thành công");
        }).catch(function (err) {
            console.log("Lỗi", err.code);
        });
    };
    AppControllerProvider.prototype.loadData = function () {
        return this.data;
    };
    AppControllerProvider.prototype.getData = function () {
        var _this = this;
        this.loaddata.dataStorage = false;
        return this.storage.get("data").then(function (data) {
            if (data) {
                _this.data = [];
                data.forEach(function (todoData) {
                    _this.data.push(new __WEBPACK_IMPORTED_MODULE_4__class_ToDo__["a" /* ToDos */](todoData));
                });
                _this.loaddata.dataStorage = true;
                _this.loadedDataChanel.next("storage");
                return _this.data;
            }
            else {
                _this.loaddata.dataStorage = true;
                _this.loadedDataChanel.next("storage");
            }
        });
    };
    AppControllerProvider.prototype.showModal = function (page, param) {
        var modal = this.modalCtrl.create(page, param ? param : "", {
            enterAnimation: "fade-in",
            leaveAnimation: "fade-out"
        });
        modal.present();
        return modal;
    };
    AppControllerProvider.prototype.showLoading = function (content, cssClass) {
        if (this.loading) {
            this.loading.dismiss();
        }
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
            content: content ? content : "Xin đợi!",
            cssClass: cssClass ? cssClass : ""
        });
        this.loading.present();
    };
    AppControllerProvider.prototype.hideLoading = function () {
        if (this.loading) {
            this.loading.dismiss().catch(function () {
            });
        }
    };
    AppControllerProvider.prototype.showToast = function (message, duration, position) {
        this.toast = this.toastCtrl.create({
            message: message,
            duration: (duration ? duration : 3000),
            position: (position ? position : "bottom")
        });
        this.toast.present();
    };
    AppControllerProvider.prototype.hideToast = function () {
        if (this.toast) {
            this.toast.dismiss();
            this.toast = null;
        }
    };
    AppControllerProvider.prototype.getFakeData = function () {
        if (this.listFillter.length > 0) {
            return this.listFillter;
        }
        else {
            return [];
        }
    };
    AppControllerProvider.prototype.convertDate = function (date) {
        return date.getFullYear() + "-" + ((date.getMonth() + 1) > 9 ? "" : "0") + (date.getMonth() + 1) + "-" + (date.getDate() > 9 ? "" : "0") + date.getDate();
    };
    AppControllerProvider.prototype.convertTime = function (time) {
        console.log(time);
        return (time.getHours() > 9 ? "" : "0") + time.getHours() + ":" + (time.getMinutes() > 9 ? "" : "0") + time.getMinutes();
    };
    AppControllerProvider.prototype.fakeData = function () {
        this.listFillter = [
            {
                icon: "../assets/icon/sport.png",
                name: "Forem",
                description: "desciption skdjfalskdfjalskfjaslkddfkasjdflkasjdflkasjdflkasjdflkasjdflkasjfdlkasjdflaksdjflkasdfjlksafdjalksdfjalksfjaskldfjaslkfjaslkfjaslkfaslkdfajsffjasklfdjaskldfjaslkdfjaskldfjasklfajsfkasdfalsf",
                date: new Date(),
                time: new Date(),
                color: "#FE1E9A"
            },
            {
                icon: "../assets/icon/shopping.png",
                name: "Forem ",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#FEA64C"
            },
            {
                icon: "../assets/icon/party.png",
                name: "Forem",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#00FFFF"
            },
            {
                icon: "../assets/icon/other.png",
                name: "Forem",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#181743"
            },
            {
                icon: "../assets/icon/move.png",
                name: "Forem",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#080D1C"
            },
            {
                icon: "../assets/icon/gym.png",
                name: "Forem",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#FE1E9A"
            },
            {
                icon: "../assets/icon/sport.png",
                name: "Forem",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#FE1E9A"
            },
            {
                icon: "../assets/icon/sport.png",
                name: "Forem",
                description: "desciption",
                date: new Date(),
                time: new Date(),
                color: "#FE1E9A"
            }
        ];
    };
    AppControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppControllerProvider);
    return AppControllerProvider;
}());

//# sourceMappingURL=app-controller.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Untils; });
var Untils = (function () {
    function Untils() {
    }
    Untils.getMonthString = function (date) {
        return this.MONTHSTRING[date.getMonth()];
    };
    Untils.getDayInMonth = function (date) {
        var monthNumber = date.getMonth();
        var yearNumber = date.getFullYear();
        if (yearNumber % 4 == 0 && monthNumber == 1) {
            return this.DAYINMONTHS[monthNumber];
        }
        else {
            return this.DAYINMONTHS[monthNumber];
        }
    };
    Untils.getDayOfWeek = function (date) {
        if (date.getDay() == 0) {
            return this.DAY_OF_WEEK[6];
        }
        else {
            return this.DAY_OF_WEEK[date.getDay() - 1];
        }
    };
    Untils.MONTHSTRING = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    Untils.DAYINMONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    Untils.DAY_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return Untils;
}());

//# sourceMappingURL=untils.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map