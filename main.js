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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routesConfig = [
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"] },
    { path: 'detail/:id/:name/:phoneNumber', component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"] },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routesConfig), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/contacts\">Contacts</a>\r\n<a routerLink=\"/detail\">Detail</a>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./word/word.component */ "./src/app/word/word.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _words_words_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./words/words.component */ "./src/app/words/words.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-person/list-person.component */ "./src/app/list-person/list-person.component.ts");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parent.component */ "./src/app/parent.component.ts");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card.component */ "./src/app/card.component.ts");
/* harmony import */ var _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./learn-pipe/learn-pipe.component */ "./src/app/learn-pipe/learn-pipe.component.ts");
/* harmony import */ var _ip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ip.component */ "./src/app/ip.component.ts");
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./round.pipe */ "./src/app/round.pipe.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sign-in.component */ "./src/app/sign-in.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _word_word_component__WEBPACK_IMPORTED_MODULE_5__["WordComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
                _words_words_component__WEBPACK_IMPORTED_MODULE_8__["WordsComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_9__["PersonComponent"],
                _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_10__["ListPersonComponent"],
                _parent_component__WEBPACK_IMPORTED_MODULE_11__["ParentComponent"],
                _child_component__WEBPACK_IMPORTED_MODULE_12__["ChildComponent"],
                _card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_16__["RoundPipe"],
                _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_14__["LearnPipeComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_17__["TodoComponent"],
                _ip_component__WEBPACK_IMPORTED_MODULE_15__["IpComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_19__["WeatherComponent"],
                _sign_in_component__WEBPACK_IMPORTED_MODULE_20__["SignInComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/card.component.ts":
/*!***********************************!*\
  !*** ./src/app/card.component.ts ***!
  \***********************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: "\n        <div class=\"card\">\n            <div class=\"header\">\n                <ng-content select=\".card-header\"></ng-content>\n            </div>\n            \n            <div class=\"body\">\n                <ng-content select=\".card-body\"></ng-content>\n            </div>\n        </div>\n    ",
            styles: ["\n        .card {\n            padding: 5px;\n            margin: 5px;\n            background: #fff;\n            border-radius: 2px;\n            display: inline-block;\n            width: 300px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n        }\n    "]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/child.component.ts":
/*!************************************!*\
  !*** ./src/app/child.component.ts ***!
  \************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.value = 0;
    }
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '<app-child>',
            template: "\n        <h3>{{ value }}</h3>\n    "
        })
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGV0YWlsL2NvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(route) {
        this.route = route;
        this.name = '';
        this.phoneNumber = '';
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.name = params.get('name');
            _this.phoneNumber = params.get('phoneNumber');
        });
    };
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-detail',
            template: '<p>Ten: {{ name }}</p> <p>phone: {{ phoneNumber }}</p>',
            styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let contact of contacts\">\n  <a routerLink=\"/detail/{{ contact.id }}/{{ contact.name }}/{{ contact.phoneNumber }}\">{{ contact.name }}</a>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.contacts = [
            { id: 1, name: 'teo', phoneNumber: '0123' },
            { id: 2, name: 'mai', phoneNumber: '0456' },
            { id: 3, name: 'lan', phoneNumber: '0789' }
        ];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/ip.component.ts":
/*!*********************************!*\
  !*** ./src/app/ip.component.ts ***!
  \*********************************/
/*! exports provided: IpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpComponent", function() { return IpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IpComponent = /** @class */ (function () {
    function IpComponent(http) {
        this.http = http;
        this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return console.log(resJson); })
            .catch(function (err) { return console.log(err); });
    }
    IpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ip',
            template: '<h3>Hello</h3>'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], IpComponent);
    return IpComponent;
}());



/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuLXBpcGUvbGVhcm4tcGlwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.html":
/*!******************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ 2.6 | roundNum: true }}\n</p>\n<p>\n  {{ 2.5 | roundNum: false }}\n</p>"

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.ts ***!
  \****************************************************/
/*! exports provided: LearnPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipeComponent", function() { return LearnPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnPipeComponent = /** @class */ (function () {
    function LearnPipeComponent() {
        this.birthday = new Date(1998, 10, 5);
        this.person = { name: 'thanh tan', age: 20 };
        this.address = Promise.resolve('503 trung nu vuong');
    }
    LearnPipeComponent.prototype.ngOnInit = function () {
    };
    LearnPipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learn-pipe',
            template: __webpack_require__(/*! ./learn-pipe.component.html */ "./src/app/learn-pipe/learn-pipe.component.html"),
            styles: [__webpack_require__(/*! ./learn-pipe.component.css */ "./src/app/learn-pipe/learn-pipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnPipeComponent);
    return LearnPipeComponent;
}());



/***/ }),

/***/ "./src/app/list-person/list-person.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-person/list-person.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcGVyc29uL2xpc3QtcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list-person/list-person.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-person/list-person.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor = \"let person of arrPeople\">\n  <app-person \n  [name] = \"person.name\" \n  [age]=\"person.age\"\n  (removePerson)= \"removePersonByName($event)\"\n  ></app-person>\n</ng-container>"

/***/ }),

/***/ "./src/app/list-person/list-person.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-person/list-person.component.ts ***!
  \******************************************************/
/*! exports provided: ListPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPersonComponent", function() { return ListPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPersonComponent = /** @class */ (function () {
    function ListPersonComponent() {
        this.arrPeople = [
            { name: 'Adrew', age: 29 },
            { name: 'mary', age: 25 },
            { name: 'david', age: 20 }
        ];
    }
    ListPersonComponent.prototype.ngOnInit = function () {
    };
    ListPersonComponent.prototype.removePersonByName = function (name) {
        var index = this.arrPeople.findIndex(function (a) { return a.name === name; });
        this.arrPeople.splice(index, 1);
    };
    ;
    ListPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-person',
            template: __webpack_require__(/*! ./list-person.component.html */ "./src/app/list-person/list-person.component.html"),
            styles: [__webpack_require__(/*! ./list-person.component.css */ "./src/app/list-person/list-person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPersonComponent);
    return ListPersonComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/parent.component.ts":
/*!*************************************!*\
  !*** ./src/app/parent.component.ts ***!
  \*************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.onAddForChild = function () {
        this.myChild.value++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_child_component__WEBPACK_IMPORTED_MODULE_1__["ChildComponent"]),
        __metadata("design:type", _child_component__WEBPACK_IMPORTED_MODULE_1__["ChildComponent"])
    ], ParentComponent.prototype, "myChild", void 0);
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '<app-parent>',
            template: "\n    <button (click)=\"onAddForChild()\">ADD</button>\n    <app-child></app-child>\n    "
        })
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Tên: {{ name }}</h3>\n<p>Tuổi: {{ age }}</p>\n<button (click)=\"removeByClick()\">Xoa</button>"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.removePerson = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.removeByClick = function () {
        this.removePerson.emit(this.name);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PersonComponent.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonComponent.prototype, "removePerson", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/round.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/round.pipe.ts ***!
  \*******************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, isUpper) {
        if (isUpper) {
            return Math.ceil(value);
        }
        return Math.floor(value);
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'roundNum' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/sign-in.component.ts":
/*!**************************************!*\
  !*** ./src/app/sign-in.component.ts ***!
  \**************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.onSubmit = function (formSignIn) {
        console.log(formSignIn);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: "\n        <form  (ngSubmit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\n            <input placeholder=\"Email\" \n                ngModel \n                #txtEmail=\"ngModel\"\n                name=\"email\" \n                required\n                email\n            >\n            <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">\n                Email is required\n            </p>\n            <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">\n                Email is not valid\n            </p>\n            <br><br>\n            <input type=\"password\" \n                placeholder=\"Password\" \n                ngModel \n                name=\"password\"\n                minlength=\"6\"\n                #txtPassword = \"ngModel\"\n                pattern=\"[a-z]*\"\n            >\n            <br><br>\n            <div ngModelGroup = \"subject\">\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"PUBG\">PUBG </label>\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"LOL\">LOL </label>\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"PUBGM\">PUBGM </label>\n            </div>\n            <br><br>\n            <button [disabled]=\"formSignIn.invalid\">Submit</button>\n        </form>\n        <p>{{ txtEmail.errors | json }}</p>\n        <p>{{ txtPassword.errors | json }}</p>\n        <p>{{ formSignIn.value | json }}</p>\n    "
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-6\">\n    <div class=\"todolist not-done\">\n      <h1>Todos</h1>\n      <input type=\"text\" class=\"form-control add-todo\" placeholder=\"Add todo\">\n      <button id=\"checkAll\" class=\"btn btn-success\">Add Todo</button>\n\n      <hr>\n      <div>\n        <input type=\"button\" [class]=\"filter=='SHOW_ALL' ? 'btn btn-primary': 'btn btn-default'\" value=\"All\" (click)=\"changeFilter('SHOW_ALL')\">\n        <input type=\"button\" [class]=\"filter==='IN_PROGRESS' ? 'btn btn-primary': 'btn btn-default'\" value=\"In Process\"\n          (click)=\"changeFilter('IN_PROGRESS')\">\n        <input type=\"button\" [class]=\"filter==='DONE' ? 'btn btn-primary' : 'btn btn-default'\" value=\"Done\" (click)=\"changeFilter('DONE')\">\n      </div>\n\n      <hr>\n      <ul id=\"sortable\" class=\"list-unstyled\" *ngFor=\"let todo of todos\">\n        <li class=\"ui-state-default\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"!todo.completed\" />{{ todo.name }}</label>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.todoData = [
            { id: 1, name: 'Todo 1', completed: true },
            { id: 2, name: 'Todo 2', completed: false },
            { id: 3, name: 'Todo 3', completed: false },
            { id: 4, name: 'Todo 4', completed: true },
            { id: 5, name: 'Todo 5', completed: false }
        ];
        this.filter = 'SHOW_ALL';
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.changeFilter = function (filter) {
        this.filter = filter;
        switch (filter) {
            case 'SHOW_ALL':
                this.todos = this.todoData;
                break;
            case 'IN_PROGRESS':
                this.todos = this.todoData.filter(function (t) { return t.completed; });
                console.log(this.todos);
                break;
            case 'DONE':
                this.todos = this.todoData.filter(function (t) { return !t.completed; });
                console.log(this.todos);
                break;
        }
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background-color: blue;\r\n}\r\n.square {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 2px;\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnNxdWFyZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input placeholder=\"Enter Username: \" [(ngModel)]=\"name\" #txtUserName>\n<h3 [style.color]=\"isHighlight ? 'red' : 'blue'\">\n  Your name is: {{ name }} \n</h3>\n<div [class]=\"isHighlight ? 'square' : 'circle'\"></div>\n\n<div [class.circle]=\"!isHighlight\"></div>\n<button (click) = \"isHighlight = !isHighlight\">Click</button>\n<code>{{ txtUserName.value | json }}</code>\n"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFormComponent = /** @class */ (function () {
    function UserFormComponent() {
        this.name = '';
        this.isHighlight = true;
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ getMessage() }} </h3>\n<input type=\"text\" placeholder=\"Enter your city name\" [(ngModel)]=\"txtCityName\">\n<br><br>\n<button (click)=\"getWeather();\">Get weather</button>"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.txtCityName = '';
        this.cityName = '';
        this.temp = null;
        this.isLoading = false;
    }
    WeatherComponent.prototype.ngOnInit = function () { };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this.isLoading = true;
        this.weatherService.getTemp(this.txtCityName)
            .then(function (temp) {
            _this.cityName = _this.txtCityName;
            _this.temp = temp;
            _this.isLoading = false;
        })
            .catch(function (err) {
            alert('cannot find your city!');
            _this.isLoading = false;
            _this.cityName = '';
            _this.txtCityName = '';
        });
    };
    WeatherComponent.prototype.getMessage = function () {
        if (this.isLoading) {
            return 'Loading...';
        }
        return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")],
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]]
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getTemp = function (cityName) {
        var url = 'https://api.openweathermap.org/data/2.5/weather?appid=030eda695410cea0b7307507e9204e6a&&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.main.temp; });
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/word/word.component.css":
/*!*****************************************!*\
  !*** ./src/app/word/word.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    color: blue;\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/word/word.component.html":
/*!******************************************!*\
  !*** ./src/app/word/word.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> {{ en }} </h3>\r\n<h2> {{ vn }} </h2>"

/***/ }),

/***/ "./src/app/word/word.component.ts":
/*!****************************************!*\
  !*** ./src/app/word/word.component.ts ***!
  \****************************************/
/*! exports provided: WordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordComponent", function() { return WordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WordComponent = /** @class */ (function () {
    function WordComponent() {
        this.en = 'hello';
        this.vn = 'xin chao';
        this.imageUrl = 'https://i.ytimg.com/an_webp/Wino_5XKhV4/mqdefault_6s.webp?du=3000&sqp=CLDaut4F&rs=AOn4CLCMhT6XmwkJIL53fEhxmnzt5NU92w';
        this.forgot = true;
    }
    WordComponent.prototype.toggleForgot = function () {
        this.forgot = !this.forgot;
    };
    WordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./word.component.html */ "./src/app/word/word.component.html"),
            selector: 'app-word',
            styles: [__webpack_require__(/*! ./word.component.css */ "./src/app/word/word.component.css")]
        })
    ], WordComponent);
    return WordComponent;
}());



/***/ }),

/***/ "./src/app/words/words.component.css":
/*!*******************************************!*\
  !*** ./src/app/words/words.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".word{\r\n    background-color: blanchedalmond;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    width: 100px;\r\n    border-radius: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZHMvd29yZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC93b3Jkcy93b3Jkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/words/words.component.html":
/*!********************************************!*\
  !*** ./src/app/words/words.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShowFrom\">\n  <input placeholder=\"English\" [(ngModel)]=\"newEn\" /> <br>\n  <input placeholder=\"Vietnamese\" [(ngModel)]=\"newVn\" /> <br>\n  <button (click)=\"addWord()\">ADD</button>\n</div>\n\n<button (click)=\"isShowFrom = true\" *ngIf=\"!isShowFrom\">ADD</button>\n<br>\n\n\n<select [(ngModel)]=\"filterStatus\">\n  <option value=\"xemTatCa\">Xem tất cả</option>\n  <option value=\"daNho\">Đã nhớ</option>\n  <option value=\"chuaNho\">Chưa nhớ</option>\n</select>\n\n\n<div *ngFor=\"let word of arrWords\" >\n  <div class=\"word\" *ngIf=\"getShowStatus(word.memorized)\">\n    <h3 [ngStyle]=\"{ color: word.memorized ? 'blue' : 'red' }\"> {{ word.en }} </h3>\n    <p> {{ word.vn }} </p>\n    <button (click)=\"removeWord(word.id);\"> Delete</button>\n    <button (click)=\"word.memorized = !word.memorized\">\n      {{ word.memorized ? 'Chưa thuộc' : 'Đã Thuộc' }} \n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/words/words.component.ts":
/*!******************************************!*\
  !*** ./src/app/words/words.component.ts ***!
  \******************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsComponent = /** @class */ (function () {
    function WordsComponent() {
        this.newEn = '';
        this.newVn = '';
        this.isShowFrom = false;
        this.filterStatus = "xemTatCa";
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: true },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: false },
            { id: 4, en: 'bath', vn: 'tắm', memorized: true },
            { id: 5, en: 'bedroom', vn: 'phòng ngủ', memorized: false },
        ];
    }
    WordsComponent.prototype.ngOnInit = function () {
    };
    WordsComponent.prototype.addWord = function () {
        this, this.arrWords.unshift({
            id: this.addWord.length + 1, en: this.newEn, vn: this.newVn, memorized: false
        });
        this.newEn = '';
        this.newVn = '';
        this.isShowFrom = false;
    };
    WordsComponent.prototype.removeWord = function (id) {
        var index = this.arrWords.findIndex(function (word) { return word.id === id; });
        this.arrWords.splice(index, 1);
    };
    WordsComponent.prototype.getShowStatus = function (memorized) {
        var dkXemTatCa = this.filterStatus === 'xemTatCa';
        var dkDaNho = this.filterStatus === 'daNho' && memorized;
        var dkChuaNho = this.filterStatus === 'chuaNho' && !memorized;
        return dkXemTatCa || dkDaNho || dkChuaNho;
    };
    ;
    WordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-words',
            template: __webpack_require__(/*! ./words.component.html */ "./src/app/words/words.component.html"),
            styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/words/words.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WordsComponent);
    return WordsComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Desktop\Hello\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map