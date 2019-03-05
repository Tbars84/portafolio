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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-home></app-landing-home>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'portafolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _landing_container_landing_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-container/landing-container.module */ "./src/app/landing-container/landing-container.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _landing_container_landing_container_module__WEBPACK_IMPORTED_MODULE_0__["LandingContainerModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing-container/landing-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/landing-container/landing-container.module.ts ***!
  \***************************************************************/
/*! exports provided: LandingContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingContainerModule", function() { return LandingContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_components_landing_home_landing_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-components/landing-home/landing-home.component */ "./src/app/landing-container/main-components/landing-home/landing-home.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/landing-container/pages/menu/menu.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/landing-container/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/perfil/perfil.component */ "./src/app/landing-container/pages/perfil/perfil.component.ts");
/* harmony import */ var _pages_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/habilidades/habilidades.component */ "./src/app/landing-container/pages/habilidades/habilidades.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/landing-container/pages/experience/experience.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LandingContainerModule = /** @class */ (function () {
    function LandingContainerModule() {
    }
    LandingContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _main_components_landing_home_landing_home_component__WEBPACK_IMPORTED_MODULE_2__["LandingHome"],
                _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
                _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"],
                _pages_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_6__["HabilidadesComponent"],
                _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _main_components_landing_home_landing_home_component__WEBPACK_IMPORTED_MODULE_2__["LandingHome"]
            ]
        })
    ], LandingContainerModule);
    return LandingContainerModule;
}());



/***/ }),

/***/ "./src/app/landing-container/main-components/landing-home/landing-home.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/landing-container/main-components/landing-home/landing-home.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bodyLanding\">\n  <app-menu></app-menu>\n  <app-inicio></app-inicio>\n  <app-perfil></app-perfil>\n  <app-habilidades [itemsArr]=\"arrExpertise\"></app-habilidades>\n  <app-experience [experienceArr]=\"arrExperience\"></app-experience>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-container/main-components/landing-home/landing-home.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/landing-container/main-components/landing-home/landing-home.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL21haW4tY29tcG9uZW50cy9sYW5kaW5nLWhvbWUvbGFuZGluZy1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing-container/main-components/landing-home/landing-home.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing-container/main-components/landing-home/landing-home.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LandingHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHome", function() { return LandingHome; });
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

var LandingHome = /** @class */ (function () {
    function LandingHome(_body) {
        this._body = _body;
        // ARRAY INFO
        this.arrExpertise = [
            { name: 'Photoshop', expertise: '80' },
            { name: 'Illustrator', expertise: '60' },
            { name: 'Adobe XD', expertise: '45' },
            { name: 'HTML / CSS', expertise: '85' },
            { name: 'JAVASCRIPT', expertise: '45' },
            { name: 'ANGULAR 7 / TYPESCRIPT', expertise: '65' },
            { name: 'WORDPRESS', expertise: '80' },
            { name: 'GITHUB', expertise: '72' },
            { name: 'JIRA', expertise: '58' },
            { name: 'ENGLISH', expertise: '70', description: 'IELTS certificade' },
        ];
        this.arrExperience = [
            { name: 'VideoBase Agencia', bgUrl: './assets/works/video-base.jpg', description: 'Participación como desarrollador FrontEnd en la realización del portafolio empresarial de la Agencia de comunicaciones Video Base', season: '2016 - 2017', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
            { name: 'Ilumno', bgUrl: './assets/works/ilumno.png', description: 'MOnitoreo y soporte de comunidad de estudio como Desarrollador Frontend para un correcto funcionamiento conforme a las necesidades del cliente', season: '2018', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
            { name: 'FincApp', bgUrl: './assets/works/fincApp.png', description: 'Intervención como desarrollador FronEnd en la construcción de la aplicación web', season: '2018 - 2019', iconUrl: './assets/works/iconos/angular-icon.svg' },
            { name: 'Creciendo una nación', bgUrl: './assets/works/creciendo-nacion.png', description: 'Participación como desarrollador FrontEnd en la creación de Serie web de Bancoldex', season: '2016 - 2017', iconUrl: './assets/works/iconos/wordpress-icon.svg' },
        ];
    }
    LandingHome.prototype.ngOnInit = function () { };
    LandingHome.prototype.ngAfterViewInit = function () {
        // MEDIDAS GLOBALES PARA ANIMACION DE SCROLL
        var dom = this._body;
        var textSection1 = this._body.nativeElement.querySelector('#perfilDesc');
        var textSection2 = this._body.nativeElement.querySelector('#perfilComplem');
        var scrollBtn = this._body.nativeElement.querySelector('.btn-scroll');
        scrollBtn.addEventListener('click', function () {
            window.scroll({
                top: textSection1.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        });
        window.addEventListener('scroll', function (e) {
            if (window.pageYOffset >= (textSection1.offsetTop - 380)) {
                if (dom.nativeElement.querySelector('.contenedor--info.hide-animate')) {
                    dom.nativeElement.querySelector('.contenedor--info.hide-animate').classList.add("show-animate");
                    dom.nativeElement.querySelector('.contenedor--info.hide-animate').classList.remove("hide-animate");
                }
            }
            else {
                if (dom.nativeElement.querySelector('.contenedor--info.show-animate')) {
                    dom.nativeElement.querySelector('.contenedor--info.show-animate').classList.add("hide-animate");
                    dom.nativeElement.querySelector('.contenedor--info.show-animate').classList.remove("show-animate");
                }
            }
            if (window.pageYOffset >= (textSection2.offsetTop - 380)) {
                if (dom.nativeElement.querySelector('.contenedor--info.invertido.hide-animate')) {
                    dom.nativeElement.querySelector('.contenedor--info.invertido.hide-animate').classList.add("show-animate");
                    dom.nativeElement.querySelector('.contenedor--info.invertido.hide-animate').classList.remove("hide-animate");
                }
            }
            else {
                if (dom.nativeElement.querySelector('.contenedor--info.invertido.show-animate')) {
                    dom.nativeElement.querySelector('.contenedor--info.invertido.show-animate').classList.add("hide-animate");
                    dom.nativeElement.querySelector('.contenedor--info.invertido.show-animate').classList.remove("show-animate");
                }
            }
        });
    };
    LandingHome = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-home',
            template: __webpack_require__(/*! ./landing-home.component.html */ "./src/app/landing-container/main-components/landing-home/landing-home.component.html"),
            styles: [__webpack_require__(/*! ./landing-home.component.scss */ "./src/app/landing-container/main-components/landing-home/landing-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LandingHome);
    return LandingHome;
}());



/***/ }),

/***/ "./src/app/landing-container/pages/experience/experience.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/landing-container/pages/experience/experience.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"experience\" class=\"section-4\">\n  <div class=\"blob-2\">\n    <img src=\"./assets/blob-2.svg\" alt=\"\">\n  </div>\n  <div class=\"blob-3\">\n    <img src=\"./assets/blob-3.svg\" alt=\"\">\n  </div>\n  <div class=\"works-contenedor\">\n    <img class=\"works-title\" src=\"./assets/works-title.svg\" alt=\"\">\n    <div class=\"snippets--works\">\n      <!-- tooltip work -->\n      <ng-template [ngIf]=\"experienceArr\">\n        <div class=\"item-work\" *ngFor=\"let itemWr of experienceArr; let i= index;\">\n          <div class=\"item-work-wrapper\">\n            <div class=\"info-item\">\n              <img class=\"icono-work\" src=\"{{itemWr.iconUrl}}\" alt=\"\">\n              <h4>{{itemWr.name}}</h4>\n              <p>\n                {{itemWr.description}}\n                <span>{{itemWr.season}}</span>\n              </p>\n            </div>\n            <img src=\"{{itemWr.bgUrl}}\" alt=\"\">\n            <div class=\"img-bg gradientGuard\"></div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/experience/experience.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/landing-container/pages/experience/experience.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  overflow-x: hidden;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes rebote-regular {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n@-webkit-keyframes rebote-opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.section-4 {\n  align-items: flex-start; }\n.section-4 .works-contenedor {\n    padding-top: 5%;\n    display: flex;\n    flex-direction: column;\n    min-width: 95%; }\n.section-4 .works-contenedor .works-title {\n      display: block;\n      min-width: 320px;\n      max-width: 50vw;\n      align-self: flex-start; }\n.section-4 .works-contenedor .snippets--works {\n      display: flex;\n      justify-content: space-around;\n      align-self: center;\n      align-items: center;\n      min-height: calc(100vh - 350px);\n      padding: 5% 0%;\n      flex-wrap: wrap; }\n.section-4 .works-contenedor .snippets--works .item-work {\n        -webkit-perspective: 30px;\n                perspective: 30px;\n        max-width: 85%;\n        position: relative;\n        z-index: 10; }\n@media (min-width: 768px) {\n          .section-4 .works-contenedor .snippets--works .item-work {\n            max-width: 35%; } }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper {\n          padding: 11px 12px 9px;\n          margin-bottom: 2%;\n          position: relative;\n          transition: -webkit-transform 0.5s;\n          transition: transform 0.5s;\n          transition: transform 0.5s, -webkit-transform 0.5s;\n          transition: 200ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item {\n            opacity: 0;\n            font-family: \"Oswald\", sans-serif;\n            width: 90%;\n            padding: 0% 2.5%;\n            text-align: center;\n            position: absolute;\n            top: 60%;\n            left: 50%;\n            right: auto;\n            bottom: auto;\n            z-index: 11;\n            -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item h4, .section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item p {\n              margin: 0;\n              color: var(--white); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item h4 {\n              font-size: 1.5em;\n              margin-bottom: 2%; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item p {\n              font-family: \"Fira Sans Condensed\", sans-serif;\n              font-weight: 400;\n              font-size: 0.8em;\n              -webkit-font-smoothing: antialiased; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item p span {\n                display: block;\n                margin-top: 2%; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper img {\n            max-width: 100%;\n            position: relative;\n            z-index: 10;\n            display: block;\n            margin: 0;\n            padding: 0; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper img.icono-work {\n              max-width: 35%;\n              margin-bottom: 5%;\n              margin: 0 auto; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .img-bg {\n            opacity: 0;\n            position: absolute;\n            z-index: 9;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100%;\n            height: 100%;\n            -webkit-transform: scale3d(0.9, 0.9, 0.9);\n                    transform: scale3d(0.9, 0.9, 0.9);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .img-bg.gradientGuard {\n              background: #0F4763;\n              background: linear-gradient(to bottom, #0F4763 0%, #178BE3 53%, #0F4763 100%);\n              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0F4763', endColorstr='#0F4763', GradientType=0); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover {\n            -webkit-transform: scale3d(1.01, 1.01, 1.01);\n                    transform: scale3d(1.01, 1.01, 1.01);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover > .info-item {\n              opacity: 1;\n              top: 58%;\n              transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover > .img-bg {\n              opacity: 1;\n              -webkit-transform: scale3d(1, 1, 1);\n                      transform: scale3d(1, 1, 1);\n              transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover > img {\n              opacity: 0.4;\n              transition-delay: 2s;\n              transition: 650ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .blob-2 {\n    position: absolute;\n    bottom: 0%;\n    right: 0%;\n    opacity: 0.3;\n    min-width: 45vw;\n    z-index: 9; }\n.section-4 .blob-3 {\n    min-width: 25vw;\n    opacity: 0.35;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    bottom: auto;\n    z-index: 10;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG9fdGFiYXJlcy9Ecm9wYm94L2VtcHJlc2FzL3BvcnRhZm9saW8tY2FtaWxvVGFiYXJlcy9wb3J0YWZvbGlvL3NyYy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvY2FtaWxvX3RhYmFyZXMvRHJvcGJveC9lbXByZXNhcy9wb3J0YWZvbGlvLWNhbWlsb1RhYmFyZXMvcG9ydGFmb2xpby9zcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwwRUFBWTtBQUNaLDJGQUFZO0FBTVo7RUFDRSxpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asc0JBQWE7RUFDYixpQkFBUTtFQUNSLGlCQUFRO0VBQ1IsZ0JBQU87RUFDUCxvQkFBVztFQUNYLHFCQUFZO0VBQ1osaUJBQVE7RUFDUixxQkFBWTtFQUNaLHNCQUFhLEVBQ2Q7QUFzQ0Q7O0VBRUUsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsc0JBQXFCLEVBSXRCO0FBL0JDO0lBaUJGOztNQVlJLGdCQUFlLEVBRWxCLEVBQUE7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFRcEI7QUFmRDtJQVNJLDBCQUF5QixFQUMxQjtBQVZIO0lBWUksNEJBQTJCLEVBQzVCO0FBR0g7RUFDRSxpQkFBZ0IsRUFDakI7QUFJQztFQUNFO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQStCc0MsRUFBQTtFQTdC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QztvQkFBcEMscUNBQW9DO1lBQ3BDLDJEQUFzRCxFQWdCdkQ7QUEvR1g7Y0FpR2MsV0FBVTtjQUNWLFNBQVE7Y0FDUiwyREFBc0QsRUFDdkQ7QUFwR2I7Y0FzR1ksV0FBVTtjQUNWLG9DQUEyQjtzQkFBM0IsNEJBQTJCO2NBQzNCLDJEQUFzRCxFQUNyRDtBQXpHYjtjQTJHYyxhQUFZO2NBQ1oscUJBQW9CO2NBQ3BCLDJEQUFzRCxFQUN2RDtBQTlHYjtJQXFISSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFVBQVM7SUFDVCxhQUFZO0lBQ1osZ0JBQWU7SUFDZixXQUFVLEVBQ1g7QUEzSEg7SUE2SEksZ0JBQWU7SUFDZixjQUFhO0lEMUdmLG1CQUFrQjtJQUNsQixTQzBHbUM7SUR6R25DLFVDeUd3QztJRHhHeEMsWUN3RzhDO0lEdkc5QyxhQ3VHb0Q7SUR0R3BELFlDc0dvRTtJRG5HcEUscURBQTBEO0lBQzFELDZDQUFrRCxFQ21HakQiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlRBUiBGVUVOVEVTXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMrQ29uZGVuc2VkOjMwMCw0MDAsNTAwLDcwMCcpO1xuXG4kZm9udC1vc3dhbGQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmlyYTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4kb2Zmc2V0OiAwLjhlbTtcbjpyb290IHtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS1kYXJrOiAjMTcxNzE3O1xuICAtLW1pZGRsZURhcms6ICM1NTU1NTU7XG4gIC0tbGlnaHQ6ICNEM0QzRDM7XG4gIC0td2hpdGU6ICNGRkZGRkY7XG4gIC0tYmx1ZTogIzFBODJCNTtcbiAgLS1kYXJrQmx1ZTogIzBGNDc2MztcbiAgLS1saWdodEJsdWU6ICMxNzhCRTM7XG4gIC0tZ3JlZW46ICM1NkZGRDI7XG4gIC0tZGFya0dyZWVuOiAjNDdEMUFDO1xuICAtLWxpZ2h0R3JlZW46ICM3NEZGREE7XG59XG4vLyBNSVhJTlMgUEFSQSBQUk9QSUVEQURFU1xuQG1peGluIHBvcy1kaXNwbGF5LWFic29sdXRvKCR0b3AsICRsZWZ0LCAkcmlnaHQsICRib3R0b20sICR0cmFuc1gsICR0cmFuc1kgLCAkaW5kZXgpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR0b3A7XG4gIGxlZnQ6ICRsZWZ0O1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIHotaW5kZXg6ICRpbmRleDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbn1cblxuLy8gTUlYSU5TIFBBUkEgUkVTUE9OU0lWRVxuJHRhYmxldDogNzY4cHg7XG4kZGVza3RvcDogMTAyNHB4O1xuJGRlc2t0b3BMZzogMTI2MHB4O1xuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICBAY29udGVudCA7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wTGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcExnfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIE1JWElOUyBQQVJBIEFOSU1BQ0lPTlxuQG1peGluIGFuaW1hdGlvbi1taXhpbiggJG5vbWJyZUFuaW0gLCRvcEluaSwgJG9wRkluICwgJHJlYm90ZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbm9tYnJlQW5pbX0ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAkcmVib3RlLCA4MHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEZJbjtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEluaVxuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsICRyZWJvdGUsIDgwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wRkluO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYW5pbWF0aW9uLW1peGluKCdyZWJvdGUtcmVndWxhcicsIDEgLCAxLCAxNXB4KTtcbkBpbmNsdWRlIGFuaW1hdGlvbi1taXhpbigncmVib3RlLW9wYWNpZGFkJywgMSwgMC43LCAxNXB4KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG4kbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcblxuLnNlY3Rpb24tNCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAud29ya3MtY29udGVuZWRvciB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDk1JTtcbiAgICAud29ya3MtdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLnNuaXBwZXRzLS13b3JrcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogJG1pbi1oZWlnaHQ7XG4gICAgICBwYWRkaW5nOiA1JSAwJTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIC5pdGVtLXdvcmsge1xuICAgICAgICBwZXJzcGVjdGl2ZTogMzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0td29yay13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMXB4IDEycHggOXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KTtcbiAgICAgICAgICAuaW5mby1pdGVte1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1vc3dhbGQ7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCUgMi41JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvcy1kaXNwbGF5LWFic29sdXRvKDYwJSwgNTAlLCBhdXRvLCBhdXRvLCAtNTAlLCAtNTAlLCAxMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICBoNCAsIHB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1maXJhO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICYuaWNvbm8td29ya3tcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy1iZ3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgdG9wOiAwOyBsZWZ0OiAwO3JpZ2h0OiAwO2JvdHRvbTowO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICAgICYuZ3JhZGllbnRHdWFyZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBGNDc2MztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzBGNDc2MyAwJSwgIzE3OEJFMyA1MyUsICMwRjQ3NjMgMTAwJSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBGNDc2MyAwJSwgIzE3OEJFMyA1MyUsICMwRjQ3NjMgMTAwJSk7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzBGNDc2MycsIGVuZENvbG9yc3RyPScjMEY0NzYzJywgR3JhZGllbnRUeXBlPTApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMSwgMS4wMSwgMS4wMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICA+LmluZm8taXRlbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRvcDogNTglO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+LmltZy1iZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPiBpbWcge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDJzO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA2NTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ibG9iLTIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgbWluLXdpZHRoOiA0NXZ3O1xuICAgIHotaW5kZXg6IDk7XG4gIH1cbiAgLmJsb2ItMyB7XG4gICAgbWluLXdpZHRoOiAyNXZ3O1xuICAgIG9wYWNpdHk6IDAuMzU7XG4gICAgQGluY2x1ZGUgcG9zLWRpc3BsYXktYWJzb2x1dG8oNTAlLCA1MCUsIGF1dG8sIGF1dG8sIC01MCUsIC01MCUsIDEwKTtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-container/pages/experience/experience.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/landing-container/pages/experience/experience.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(_el) {
        this._el = _el;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent.prototype.ngAfterViewInit = function () {
        if (this._el.nativeElement.querySelectorAll('.item-work')) {
            var arrItems = this._el.nativeElement.querySelectorAll('.item-work');
            var arrItemsWrapp = this._el.nativeElement.querySelectorAll('.item-work-wrapper');
            this.overWorks(arrItems, arrItemsWrapp);
        }
    };
    ExperienceComponent.prototype.overWorks = function (contItem, contItemWrapp) {
        var _this = this;
        contItem.forEach(function (element, key) {
            _this.moveItems(element, contItemWrapp[key]);
        });
    };
    ExperienceComponent.prototype.moveItems = function (contItem, inner) {
        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(contItem);
        var counter = 0;
        var refreshRate = 10;
        var isTimeToUpdate = function () { return counter++ % refreshRate === 0; };
        // HANDLERS DEL EVENTO DE CADA BOTON
        contItem.addEventListener("mouseover", function (event) { update(event); });
        contItem.addEventListener("mouseout", function () { inner.style = ""; });
        contItem.addEventListener("mousemove", function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        });
        var update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle((mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
        };
        var updateTransformStyle = function (x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ExperienceComponent.prototype, "experienceArr", void 0);
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/landing-container/pages/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/landing-container/pages/experience/experience.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());

// Mouse
var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
        return "(" + this.x + ", " + this.y + ")";
    }
};


/***/ }),

/***/ "./src/app/landing-container/pages/habilidades/habilidades.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/landing-container/pages/habilidades/habilidades.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"section-3\">\n  <div class=\"blob-1\">\n    <img src=\"./assets/blob-1.svg\" alt=\"\">\n  </div>\n  <div class=\"skills-contenedor\">\n    <img class=\"skills-title\" src=\"./assets/skills-title.svg\" alt=\"\">\n    <div class=\"desc--skills\">\n      <!-- tooltip progress -->\n      <ng-template [ngIf]=\"itemsArr\">\n        <div *ngFor=\"let item of itemsArr; let i= index;\" id=\"html5\" class=\"barWrapper\" >\n            <span class=\"progressText\"><b> {{item.name ? (item.name): 'Not specified'}} </b></span>\n            <span class=\"descText\">{{item.description ? (item.description): ''}}</span>\n            <div class=\"progress\">\n              <div class=\"bar overlap\" [attr.data-expertise]=\"item.expertise\"></div>\n            </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/habilidades/habilidades.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/landing-container/pages/habilidades/habilidades.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  overflow-x: hidden;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes rebote-regular {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n@-webkit-keyframes rebote-opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.section-3 {\n  align-items: flex-start; }\n.section-3 .skills-contenedor {\n    padding-top: 5%;\n    display: flex;\n    flex-direction: column;\n    min-width: 95%; }\n.section-3 .skills-contenedor .skills-title {\n      display: block;\n      min-width: 320px;\n      max-width: 350px;\n      align-self: flex-end; }\n.section-3 .skills-contenedor .desc--skills {\n      display: flex;\n      justify-content: space-around;\n      align-self: center;\n      align-items: center;\n      min-height: calc(100vh - 350px);\n      padding-top: 5%;\n      flex-wrap: wrap;\n      flex-direction: column;\n      width: 100%; }\n@media (min-width: 768px) {\n        .section-3 .skills-contenedor .desc--skills {\n          flex-direction: row;\n          width: auto; } }\n.section-3 .skills-contenedor .desc--skills .barWrapper {\n        min-width: 95%;\n        margin-bottom: 5%; }\n@media (min-width: 768px) {\n          .section-3 .skills-contenedor .desc--skills .barWrapper {\n            min-width: 45%;\n            margin-bottom: 0%; } }\n.section-3 .skills-contenedor .desc--skills .barWrapper span.progressText {\n          color: var(--dark);\n          font-family: \"Fira Sans Condensed\", sans-serif;\n          font-size: 1.2em;\n          margin: 1% 0%;\n          display: block;\n          letter-spacing: 0.8px; }\n.section-3 .skills-contenedor .desc--skills .barWrapper span.descText {\n          color: var(--middleDark);\n          font-family: \"Fira Sans Condensed\", sans-serif;\n          font-size: 0.8em;\n          margin-bottom: 1%;\n          margin-top: -1%; }\n.section-3 .skills-contenedor .desc--skills .barWrapper .progress {\n          display: block;\n          width: 100%;\n          height: 15px;\n          border-radius: 40px;\n          background: var(--light); }\n.section-3 .skills-contenedor .desc--skills .barWrapper .progress .bar {\n            border-radius: 40px;\n            width: 0%;\n            height: 100%;\n            transition: 100ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-3 .skills-contenedor .desc--skills .barWrapper .progress .bar.overlap {\n              background-image: linear-gradient(to right, #74FFDA, #178BE3 42%, #0F4763); }\n.section-3 .blob-1 {\n    position: absolute;\n    top: 50%;\n    left: 0%;\n    opacity: 0.2;\n    min-width: 25vw;\n    z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG9fdGFiYXJlcy9Ecm9wYm94L2VtcHJlc2FzL3BvcnRhZm9saW8tY2FtaWxvVGFiYXJlcy9wb3J0YWZvbGlvL3NyYy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvY2FtaWxvX3RhYmFyZXMvRHJvcGJveC9lbXByZXNhcy9wb3J0YWZvbGlvLWNhbWlsb1RhYmFyZXMvcG9ydGFmb2xpby9zcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL2hhYmlsaWRhZGVzL2hhYmlsaWRhZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDBFQUFZO0FBQ1osMkZBQVk7QUFNWjtFQUNFLGlCQUFRO0VBQ1IsZ0JBQU87RUFDUCxzQkFBYTtFQUNiLGlCQUFRO0VBQ1IsaUJBQVE7RUFDUixnQkFBTztFQUNQLG9CQUFXO0VBQ1gscUJBQVk7RUFDWixpQkFBUTtFQUNSLHFCQUFZO0VBQ1osc0JBQWEsRUFDZDtBQXNDRDs7RUFFRSxVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFJdEI7QUEvQkM7SUFpQkY7O01BWUksZ0JBQWUsRUFFbEIsRUFBQTtBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQVFwQjtBQWZEO0lBU0ksMEJBQXlCLEVBQzFCO0FBVkg7SUFZSSw0QkFBMkIsRUFDNUI7QUFHSDtFQUNFLGlCQUFnQixFQUNqQjtBQUlDO0VBQ0U7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBK0JzQyxFQUFBO0VBN0J4QztJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0EyQnNDLEVBQUE7RUF6QnhDO0lBQ0UsZ0RBQTBDO1lBQTFDLHdDQUEwQztJQUMxQyxXQXVCMEMsRUFBQTtFQXJCNUM7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBbUJzQyxFQUFBO0VBaEJ4QztJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0Fjc0MsRUFBQTtFQVp4QztJQUNFLGdEQUEwQztZQUExQyx3Q0FBMEM7SUFDMUMsV0FVMEMsRUFBQTtFQVA1QztJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBLEVBQUE7QUE5QkY7RUFDRTtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FnQ3VDLEVBQUE7RUE5QnpDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQTRCdUMsRUFBQTtFQTFCekM7SUFDRSxnREFBMEM7WUFBMUMsd0NBQTBDO0lBQzFDLGFBd0I0QyxFQUFBO0VBdEI5QztJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FvQnVDLEVBQUE7RUFqQnpDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQWV1QyxFQUFBO0VBYnpDO0lBQ0UsZ0RBQTBDO1lBQTFDLHdDQUEwQztJQUMxQyxhQVc0QyxFQUFBO0VBUjlDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQUNGLEVBQUEsRUFBQTtBQ3BJSjtFQUNFLHdCQUF1QixFQWdGeEI7QUFqRkQ7SUFHSSxnQkFBZTtJQUNmLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsZUFBYyxFQWtFZjtBQXhFSDtNQVFNLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsaUJBQWdCO01BQ2hCLHFCQUFvQixFQUNyQjtBQVpMO01BY00sY0FBYTtNQUNiLDhCQUE2QjtNQUM3QixtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLGdDQW5CMEI7TUFvQjFCLGdCQUFlO01BQ2YsZ0JBQWU7TUFDZix1QkFBc0I7TUFDdEIsWUFBVyxFQWlEWjtBRGhDSDtRQ3ZDRjtVQXdCUSxvQkFBbUI7VUFDbkIsWUFBVyxFQThDZCxFQUFBO0FBdkVMO1FBNkJRLGVBQWM7UUFDZCxrQkFBaUIsRUF3Q2xCO0FEL0JMO1VDdkNGO1lBZ0NVLGVBQWM7WUFDZCxrQkFBaUIsRUFxQ3BCLEVBQUE7QUF0RVA7VUFvQ1UsbUJBQWtCO1VBQ2xCLCtDRGxDbUM7VUNtQ25DLGlCQUFnQjtVQUNoQixjQUFhO1VBQ2IsZUFBYztVQUNkLHNCQUFxQixFQUN0QjtBQTFDVDtVQTRDVSx5QkFBd0I7VUFDeEIsK0NEMUNtQztVQzJDbkMsaUJBQWdCO1VBQ2hCLGtCQUFpQjtVQUNqQixnQkFBZSxFQUVoQjtBQWxEVDtVQW9EVSxlQUFjO1VBQ2QsWUFBVztVQUNYLGFBQVk7VUFDWixvQkFBbUI7VUFDbkIseUJBQXdCLEVBYXpCO0FBckVUO1lBMERZLG9CQUFtQjtZQUNuQixVQUFTO1lBQ1QsYUFBWTtZQUNaLDJEQUFzRCxFQU92RDtBQXBFWDtjQWtFYywyRUFBMEUsRUFDM0U7QUFuRWI7SUEwRUksbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixTQUFRO0lBQ1IsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1jb250YWluZXIvcGFnZXMvaGFiaWxpZGFkZXMvaGFiaWxpZGFkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlRBUiBGVUVOVEVTXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMrQ29uZGVuc2VkOjMwMCw0MDAsNTAwLDcwMCcpO1xuXG4kZm9udC1vc3dhbGQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmlyYTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4kb2Zmc2V0OiAwLjhlbTtcbjpyb290IHtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS1kYXJrOiAjMTcxNzE3O1xuICAtLW1pZGRsZURhcms6ICM1NTU1NTU7XG4gIC0tbGlnaHQ6ICNEM0QzRDM7XG4gIC0td2hpdGU6ICNGRkZGRkY7XG4gIC0tYmx1ZTogIzFBODJCNTtcbiAgLS1kYXJrQmx1ZTogIzBGNDc2MztcbiAgLS1saWdodEJsdWU6ICMxNzhCRTM7XG4gIC0tZ3JlZW46ICM1NkZGRDI7XG4gIC0tZGFya0dyZWVuOiAjNDdEMUFDO1xuICAtLWxpZ2h0R3JlZW46ICM3NEZGREE7XG59XG4vLyBNSVhJTlMgUEFSQSBQUk9QSUVEQURFU1xuQG1peGluIHBvcy1kaXNwbGF5LWFic29sdXRvKCR0b3AsICRsZWZ0LCAkcmlnaHQsICRib3R0b20sICR0cmFuc1gsICR0cmFuc1kgLCAkaW5kZXgpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR0b3A7XG4gIGxlZnQ6ICRsZWZ0O1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIHotaW5kZXg6ICRpbmRleDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbn1cblxuLy8gTUlYSU5TIFBBUkEgUkVTUE9OU0lWRVxuJHRhYmxldDogNzY4cHg7XG4kZGVza3RvcDogMTAyNHB4O1xuJGRlc2t0b3BMZzogMTI2MHB4O1xuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICBAY29udGVudCA7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wTGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcExnfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIE1JWElOUyBQQVJBIEFOSU1BQ0lPTlxuQG1peGluIGFuaW1hdGlvbi1taXhpbiggJG5vbWJyZUFuaW0gLCRvcEluaSwgJG9wRkluICwgJHJlYm90ZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbm9tYnJlQW5pbX0ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAkcmVib3RlLCA4MHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEZJbjtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEluaVxuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsICRyZWJvdGUsIDgwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wRkluO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYW5pbWF0aW9uLW1peGluKCdyZWJvdGUtcmVndWxhcicsIDEgLCAxLCAxNXB4KTtcbkBpbmNsdWRlIGFuaW1hdGlvbi1taXhpbigncmVib3RlLW9wYWNpZGFkJywgMSwgMC43LCAxNXB4KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG4kbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcbi5zZWN0aW9uLTMge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLnNraWxscy1jb250ZW5lZG9yIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogOTUlO1xuICAgIC5za2lsbHMtdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuZGVzYy0tc2tpbGxze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6ICRtaW4taGVpZ2h0O1xuICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5iYXJXcmFwcGVye1xuICAgICAgICBtaW4td2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQ1JTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLnByb2dyZXNzVGV4dHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZpcmE7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICBtYXJnaW46IDElIDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLmRlc2NUZXh0e1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1taWRkbGVEYXJrKTtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmlyYTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xJTtcblxuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzc3tcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XG4gICAgICAgICAgLmJhciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMTAwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgJi5vdmVybGFwIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzc0RkZEQSksIGNvbG9yLXN0b3AoNDIlLCAjMTc4QkUzKSwgdG8oIzBGNDc2MykpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjNzRGRkRBLCAjMTc4QkUzIDQyJSwgIzBGNDc2Myk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjNzRGRkRBLCAjMTc4QkUzIDQyJSwgIzBGNDc2Myk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzc0RkZEQSwgIzE3OEJFMyA0MiUsICMwRjQ3NjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYmxvYi0xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMCU7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIG1pbi13aWR0aDogMjV2dztcbiAgICB6LWluZGV4OiA5O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-container/pages/habilidades/habilidades.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/landing-container/pages/habilidades/habilidades.component.ts ***!
  \******************************************************************************/
/*! exports provided: HabilidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesComponent", function() { return HabilidadesComponent; });
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

var HabilidadesComponent = /** @class */ (function () {
    function HabilidadesComponent(_el) {
        this._el = _el;
    }
    HabilidadesComponent.prototype.ngOnInit = function () { };
    HabilidadesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._el.nativeElement.querySelectorAll('.bar')) {
            var arrBars = this._el.nativeElement.querySelectorAll('.bar');
            arrBars.forEach(function (element) {
                _this.progressBar(element, element.getAttribute('data-expertise'));
            });
        }
    };
    HabilidadesComponent.prototype.progressBar = function (bar, progress) {
        bar.style.width = "0%";
        setTimeout(function () {
            var randomTiming = Math.floor((Math.random() * 2) + 2);
            // console.log(randomTiming);
            bar.style.transitionDuration = randomTiming + "s";
            bar.style.width = progress + "%";
        }, 1200);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HabilidadesComponent.prototype, "itemsArr", void 0);
    HabilidadesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-habilidades',
            template: __webpack_require__(/*! ./habilidades.component.html */ "./src/app/landing-container/pages/habilidades/habilidades.component.html"),
            styles: [__webpack_require__(/*! ./habilidades.component.scss */ "./src/app/landing-container/pages/habilidades/habilidades.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HabilidadesComponent);
    return HabilidadesComponent;
}());



/***/ }),

/***/ "./src/app/landing-container/pages/inicio/inicio.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing-container/pages/inicio/inicio.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"inicio\" class=\"section-0 al-right\">\n<div class=\"inicio-contendor offSet-right\">\n    <div class=\"logo\">\n      <img src=\"./assets/logo-camilo-tabares.svg\" alt=\"Logo Camilo Tabares\">\n    </div>\n    <div class=\"descripcion offset\">\n      <p>\n        <b>Welcome,</b> my name is Camilo Tabares FrontEnd Developer and this is my history in a <span>Landing page...</span>\n      </p>\n    </div>\n    <div class=\"btn-scroll\">\n      <img src=\"./assets/dropown.svg\" alt=\"Scroll Down\">\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/inicio/inicio.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/landing-container/pages/inicio/inicio.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  overflow-x: hidden;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes rebote-regular {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n@-webkit-keyframes rebote-opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.section-0 .inicio-contendor {\n  text-align: center;\n  position: relative;\n  width: 90%;\n  margin: 0 5%; }\n@media (min-width: 768px) {\n    .section-0 .inicio-contendor {\n      width: auto;\n      margin: unset; } }\n@media (min-width: 1024px) {\n    .section-0 .inicio-contendor {\n      min-width: 50%;\n      width: auto; } }\n.section-0 .inicio-contendor .logo {\n    min-width: 280px; }\n@media (min-width: 768px) {\n      .section-0 .inicio-contendor .logo {\n        min-width: 320px; } }\n@media (min-width: 1024px) {\n      .section-0 .inicio-contendor .logo {\n        width: 60%; } }\n.section-0 .inicio-contendor .descripcion {\n    text-align: left;\n    font-family: \"Oswald\", sans-serif;\n    line-height: 1.7em;\n    padding: 0.8em 0 0 0.5em;\n    color: var(--dark);\n    position: relative; }\n.section-0 .inicio-contendor .descripcion.offset {\n      width: 95%;\n      padding-left: 0%; }\n@media (min-width: 1024px) {\n        .section-0 .inicio-contendor .descripcion.offset {\n          padding-left: 12%;\n          width: unset; } }\n.section-0 .inicio-contendor .descripcion.offset ::before {\n        content: '';\n        position: absolute;\n        width: 40%;\n        height: 2px;\n        top: 0.8em;\n        left: 0%;\n        background: var(--lightBlue); }\n@media (min-width: 1024px) {\n          .section-0 .inicio-contendor .descripcion.offset ::before {\n            left: -2%; } }\n.section-0 .inicio-contendor .descripcion span {\n      color: var(--lightBlue);\n      font-size: 1.1em; }\n.section-0 .inicio-contendor .btn-scroll {\n    position: absolute;\n    cursor: pointer;\n    right: 3%;\n    min-width: 55px;\n    top: 100%;\n    -webkit-animation: rebote-opacidad 4s infinite;\n            animation: rebote-opacidad 4s infinite; }\n@media (min-width: 768px) {\n      .section-0 .inicio-contendor .btn-scroll {\n        min-width: 65px;\n        right: 1%; } }\n@media (min-width: 1024px) {\n      .section-0 .inicio-contendor .btn-scroll {\n        top: 120%;\n        min-width: 65px;\n        right: 0%; } }\n@media (min-width: 1024px) {\n    .section-0 .inicio-contendor.offSet-right {\n      margin-right: 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG9fdGFiYXJlcy9Ecm9wYm94L2VtcHJlc2FzL3BvcnRhZm9saW8tY2FtaWxvVGFiYXJlcy9wb3J0YWZvbGlvL3NyYy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvY2FtaWxvX3RhYmFyZXMvRHJvcGJveC9lbXByZXNhcy9wb3J0YWZvbGlvLWNhbWlsb1RhYmFyZXMvcG9ydGFmb2xpby9zcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMEVBQVk7QUFDWiwyRkFBWTtBQU1aO0VBQ0UsaUJBQVE7RUFDUixnQkFBTztFQUNQLHNCQUFhO0VBQ2IsaUJBQVE7RUFDUixpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asb0JBQVc7RUFDWCxxQkFBWTtFQUNaLGlCQUFRO0VBQ1IscUJBQVk7RUFDWixzQkFBYSxFQUNkO0FBc0NEOztFQUVFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHNCQUFxQixFQUl0QjtBQS9CQztJQWlCRjs7TUFZSSxnQkFBZSxFQUVsQixFQUFBO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBUXBCO0FBZkQ7SUFTSSwwQkFBeUIsRUFDMUI7QUFWSDtJQVlJLDRCQUEyQixFQUM1QjtBQUdIO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBSUM7RUFDRTtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0ErQnNDLEVBQUE7RUE3QnhDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQTJCc0MsRUFBQTtFQXpCeEM7SUFDRSxnREFBMEM7WUFBMUMsd0NBQTBDO0lBQzFDLFdBdUIwQyxFQUFBO0VBckI1QztJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FtQnNDLEVBQUE7RUFoQnhDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQWNzQyxFQUFBO0VBWnhDO0lBQ0UsZ0RBQTBDO1lBQTFDLHdDQUEwQztJQUMxQyxXQVUwQyxFQUFBO0VBUDVDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQUNGLEVBQUEsRUFBQTtBQTlCRjtFQUNFO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQWdDdUMsRUFBQTtFQTlCekM7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBNEJ1QyxFQUFBO0VBMUJ6QztJQUNFLGdEQUEwQztZQUExQyx3Q0FBMEM7SUFDMUMsYUF3QjRDLEVBQUE7RUF0QjlDO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQW9CdUMsRUFBQTtFQWpCekM7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBZXVDLEVBQUE7RUFiekM7SUFDRSxnREFBMEM7WUFBMUMsd0NBQTBDO0lBQzFDLGFBVzRDLEVBQUE7RUFSOUM7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQSxFQUFBO0FDcElKO0VBRUksbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsYUFBWSxFQTBFYjtBRHhDRDtJQ3ZDRjtNQU9NLFlBQVc7TUFDWCxjQUFhLEVBdUVoQixFQUFBO0FEbkNEO0lDNUNGO01BV00sZUFBYztNQUNkLFlBQVcsRUFtRWQsRUFBQTtBQS9FSDtJQWdCTSxpQkFBZ0IsRUFPakI7QURnQkg7TUN2Q0Y7UUFrQlEsaUJBQWdCLEVBS25CLEVBQUE7QURxQkg7TUM1Q0Y7UUFxQlEsV0FBVSxFQUViLEVBQUE7QUF2Qkw7SUF5Qk0saUJBQWdCO0lBQ2hCLGtDRHhCNEI7SUN5QjVCLG1CQUFrQjtJQUNsQix5QkFBMEI7SUFDMUIsbUJBQWtCO0lBQ2xCLG1CQUFrQixFQXlCbkI7QUF2REw7TUFnQ1EsV0FBVTtNQUNWLGlCQUFnQixFQWlCakI7QUROTDtRQzVDRjtVQW1DVSxrQkFBaUI7VUFDakIsYUFBWSxFQWNmLEVBQUE7QUFsRFA7UUF1Q1UsWUFBVztRQUNYLG1CQUFrQjtRQUNsQixXQUFVO1FBQ1YsWUFBVztRQUNYLFdEdENJO1FDdUNKLFNBQVE7UUFDUiw2QkFBNEIsRUFJN0I7QURMUDtVQzVDRjtZQStDWSxVQUFTLEVBRVosRUFBQTtBQWpEVDtNQW9EUSx3QkFBdUI7TUFDdkIsaUJBQWdCLEVBQ2pCO0FBdERQO0lBeURNLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLFVBQVM7SUFDVCxnQkFBZTtJQUNmLFVBQVM7SUFDVCwrQ0FBc0M7WUFBdEMsdUNBQXNDLEVBVXZDO0FEakNIO01DdkNGO1FBZ0VRLGdCQUFlO1FBQ2YsVUFBUyxFQU9aLEVBQUE7QUQ1Qkg7TUM1Q0Y7UUFvRVEsVUFBUztRQUNULGdCQUFlO1FBQ2YsVUFBUyxFQUVaLEVBQUE7QUQ1Qkg7SUM1Q0Y7TUEyRVEsa0JBQWlCLEVBR3BCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSU1QT1JUQVIgRlVFTlRFU1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6MzAwLDQwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zK0NvbmRlbnNlZDozMDAsNDAwLDUwMCw3MDAnKTtcblxuJGZvbnQtb3N3YWxkOiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiRmb250LWZpcmE6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblxuJG9mZnNldDogMC44ZW07XG46cm9vdCB7XG4gIC0tYmxhY2s6ICMwMDAwMDA7XG4gIC0tZGFyazogIzE3MTcxNztcbiAgLS1taWRkbGVEYXJrOiAjNTU1NTU1O1xuICAtLWxpZ2h0OiAjRDNEM0QzO1xuICAtLXdoaXRlOiAjRkZGRkZGO1xuICAtLWJsdWU6ICMxQTgyQjU7XG4gIC0tZGFya0JsdWU6ICMwRjQ3NjM7XG4gIC0tbGlnaHRCbHVlOiAjMTc4QkUzO1xuICAtLWdyZWVuOiAjNTZGRkQyO1xuICAtLWRhcmtHcmVlbjogIzQ3RDFBQztcbiAgLS1saWdodEdyZWVuOiAjNzRGRkRBO1xufVxuLy8gTUlYSU5TIFBBUkEgUFJPUElFREFERVNcbkBtaXhpbiBwb3MtZGlzcGxheS1hYnNvbHV0bygkdG9wLCAkbGVmdCwgJHJpZ2h0LCAkYm90dG9tLCAkdHJhbnNYLCAkdHJhbnNZICwgJGluZGV4KSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAkdG9wO1xuICBsZWZ0OiAkbGVmdDtcbiAgcmlnaHQ6ICRyaWdodDtcbiAgYm90dG9tOiAkYm90dG9tO1xuICB6LWluZGV4OiAkaW5kZXg7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG59XG5cbi8vIE1JWElOUyBQQVJBIFJFU1BPTlNJVkVcbiR0YWJsZXQ6IDc2OHB4O1xuJGRlc2t0b3A6IDEwMjRweDtcbiRkZXNrdG9wTGc6IDEyNjBweDtcblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgQGNvbnRlbnQgO1xuICB9XG59XG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gZGVza3RvcExnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3BMZ30pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLWRhcmspO1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbmgxLCBoMiwgaDMsIGg0e1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5we1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbnNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLmFsLXJpZ2h0e1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgJi5hbC1sZWZ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxufVxucC5ib2xke1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vLyBNSVhJTlMgUEFSQSBBTklNQUNJT05cbkBtaXhpbiBhbmltYXRpb24tbWl4aW4oICRub21icmVBbmltICwkb3BJbmksICRvcEZJbiAsICRyZWJvdGUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5vbWJyZUFuaW19IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wSW5pXG4gICAgfVxuICAgIDMwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wSW5pXG4gICAgfVxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgJHJlYm90ZSwgODBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BGSW47XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wSW5pXG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAkcmVib3RlLCA4MHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEZJbjtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGFuaW1hdGlvbi1taXhpbigncmVib3RlLXJlZ3VsYXInLCAxICwgMSwgMTVweCk7XG5AaW5jbHVkZSBhbmltYXRpb24tbWl4aW4oJ3JlYm90ZS1vcGFjaWRhZCcsIDEsIDAuNywgMTVweCk7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xuXG4uc2VjdGlvbi0we1xuICAuaW5pY2lvLWNvbnRlbmRvcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDUlO1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuZGVzY3JpcGNpb257XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LW9zd2FsZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICAgIHBhZGRpbmc6ICRvZmZzZXQgMCAwIDAuNWVtO1xuICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJi5vZmZzZXR7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMCU7XG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIlO1xuICAgICAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgICA6OmJlZm9yZXtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB0b3A6ICRvZmZzZXQ7XG4gICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICAgIGxlZnQ6IC0yJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1zY3JvbGwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcmlnaHQ6IDMlO1xuICAgICAgbWluLXdpZHRoOiA1NXB4O1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgYW5pbWF0aW9uOiByZWJvdGUtb3BhY2lkYWQgNHMgaW5maW5pdGU7XG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBtaW4td2lkdGg6IDY1cHg7XG4gICAgICAgIHJpZ2h0OiAxJTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICB0b3A6IDEyMCU7XG4gICAgICAgIG1pbi13aWR0aDogNjVweDtcbiAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm9mZlNldC1yaWdodCB7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing-container/pages/inicio/inicio.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing-container/pages/inicio/inicio.component.ts ***!
  \********************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
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

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
        this.turnScroll = true;
    }
    InicioComponent.prototype.ngOnInit = function () { };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/landing-container/pages/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/landing-container/pages/inicio/inicio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/landing-container/pages/menu/menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/landing-container/pages/menu/menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"hamburger hamburger--spin-r\" type=\"button\" aria-label=\"Menu\" aria-controls=\"navigation\">\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n<section id=\"menu\" class=\"about-me\">\n  <div class=\"perfil-contenedor\">\n    <div class=\"contenedor--info\">\n      <h2><span>Hi,</span> My name is Camilo Tabares</h2>\n      <p>\n        I'm a UX/UI designer, \n        constantly falling for Javascript scripting code, \n        quantum realities, \n        super powers and all kinds of concepts Marvel's comic histories has given me along time.\n        <br>\n        I live in Medellin Colombia, but one of my main goals is to travel all over the world\n        <br>\n        I´m always open to share a delicious cup of Colombian coffee\n        <br>\n        and talk about new exciting programming projects.\n        You can contact me directly by mail - camilo.tabares.84@gmail.com\n      </p>\n      <a href=\"https://firebasestorage.googleapis.com/v0/b/datamockup.appspot.com/o/files_240484%2Fcamilo-tabares-hv-actualizada.pdf?alt=media&token=bcd9369f-d0cf-4368-8347-dc07b07ae985\" target=\"_blank\">Resume</a>\n      <a href=\"mailto:camilo.tabares.portafolio@gmail.com\">Click to email</a>\n      <a href=\"https://wa.me/573013802590?text=Hola me gustaria conocer un poco mas de tu trabajo\" target=\"_blank\">Whatsapp</a>\n    </div>\n    <div class=\"contenedor--imagen\">\n      <div class=\"item-work\" >\n        <div class=\"item-work-wrapper\">\n          <div class=\"info-item\">\n          </div>\n          <img src=\"./assets/foto-perfil-camilo-tabares.jpg\" alt=\"\">\n          <div class=\"img-bg gradientGuard\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"blob-menu\">\n    <img src=\"./assets/menu-blob.svg\" alt=\"\">\n  </div>\n  <div class=\"bg-menu\"></div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/menu/menu.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/landing-container/pages/menu/menu.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  overflow-x: hidden;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes rebote-regular {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n@-webkit-keyframes rebote-opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.hamburger {\n  position: fixed;\n  right: 1px;\n  top: 1px;\n  z-index: 13;\n  outline: none; }\n.about-me {\n  visibility: hidden;\n  position: fixed;\n  z-index: 12;\n  width: 100%;\n  height: 100vh;\n  background: rgba(250, 250, 250, 0.7);\n  opacity: 0;\n  transition: 100ms all ease-in-out 100ms; }\n.about-me .perfil-contenedor {\n    position: relative;\n    z-index: 10;\n    display: flex;\n    padding: 0%;\n    width: 100%;\n    align-items: center;\n    flex-direction: column; }\n@media (min-width: 1024px) {\n      .about-me .perfil-contenedor {\n        flex-direction: row;\n        padding: 0% 15% 0% 0%; } }\n.about-me .perfil-contenedor .contenedor--info, .about-me .perfil-contenedor .contenedor--imagen {\n      padding: 0%;\n      opacity: 0;\n      min-width: 85%;\n      transition: 520ms all cubic-bezier(0.36, 0.55, 0.63, 0.48) 1100ms; }\n@media (min-width: 768px) {\n        .about-me .perfil-contenedor .contenedor--info, .about-me .perfil-contenedor .contenedor--imagen {\n          padding: 0% 5%; } }\n@media (min-width: 1024px) {\n        .about-me .perfil-contenedor .contenedor--info, .about-me .perfil-contenedor .contenedor--imagen {\n          min-width: 45%; } }\n.about-me .perfil-contenedor .contenedor--info img, .about-me .perfil-contenedor .contenedor--imagen img {\n        margin: 0 auto; }\n.about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen h2, .about-me .perfil-contenedor .contenedor--imagen p {\n        color: var(--dark);\n        font-size: 0.9em;\n        font-family: \"Fira Sans Condensed\", sans-serif;\n        letter-spacing: 0.5px;\n        font-weight: 300;\n        margin-bottom: 0%; }\n@media (min-width: 768px) {\n          .about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen h2, .about-me .perfil-contenedor .contenedor--imagen p {\n            margin-bottom: 5%; } }\n.about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen p {\n        margin-bottom: 2%;\n        line-height: 1.6em;\n        display: none; }\n@media (min-width: 768px) {\n          .about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen p {\n            display: block;\n            margin-bottom: 10%; } }\n.about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--imagen h2 {\n        font-family: \"Oswald\", sans-serif;\n        font-size: 1.5em; }\n.about-me .perfil-contenedor .contenedor--info h2 span, .about-me .perfil-contenedor .contenedor--imagen h2 span {\n          color: var(--lightBlue);\n          font-size: 1.3em; }\n.about-me .perfil-contenedor .contenedor--info a, .about-me .perfil-contenedor .contenedor--imagen a {\n        display: inline-block;\n        text-decoration: none;\n        color: var(--dark);\n        font-family: \"Fira Sans Condensed\", sans-serif;\n        text-transform: uppercase;\n        border: 2px solid var(--lightBlue);\n        padding: 2% 5%;\n        margin: 0% 3% 3% 0%;\n        transition: 200ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .contenedor--info a:hover, .about-me .perfil-contenedor .contenedor--imagen a:hover {\n          background: var(--lightBlue);\n          color: var(--white); }\n@media (min-width: 1024px) {\n          .about-me .perfil-contenedor .contenedor--info a, .about-me .perfil-contenedor .contenedor--imagen a {\n            margin: 0% 3% 0% 0%; } }\n.about-me .perfil-contenedor .contenedor--info {\n      -webkit-transform: translateX(-20px);\n              transform: translateX(-20px);\n      order: 2; }\n@media (min-width: 1024px) {\n        .about-me .perfil-contenedor .contenedor--info {\n          order: 1; } }\n.about-me .perfil-contenedor .contenedor--info.intro {\n        opacity: 1;\n        -webkit-transform: translateX(0px);\n                transform: translateX(0px); }\n.about-me .perfil-contenedor .contenedor--imagen {\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px);\n      order: 1; }\n@media (min-width: 1024px) {\n        .about-me .perfil-contenedor .contenedor--imagen {\n          order: 2; } }\n.about-me .perfil-contenedor .contenedor--imagen.intro {\n        opacity: 1;\n        -webkit-transform: translateX(-20px);\n                transform: translateX(-20px); }\n.about-me .perfil-contenedor .item-work {\n      -webkit-perspective: 30px;\n              perspective: 30px;\n      position: relative;\n      z-index: 10; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper {\n        padding: 11px 12px 9px;\n        margin-bottom: 2%;\n        position: relative;\n        transition: -webkit-transform 0.5s;\n        transition: transform 0.5s;\n        transition: transform 0.5s, -webkit-transform 0.5s;\n        transition: 200ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item {\n          opacity: 0;\n          font-family: \"Oswald\", sans-serif;\n          width: 90%;\n          padding: 0% 2.5%;\n          text-align: center;\n          position: absolute;\n          top: 60%;\n          left: 50%;\n          right: auto;\n          bottom: auto;\n          z-index: 11;\n          -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n          transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item h4,\n          .about-me .perfil-contenedor .item-work .item-work-wrapper .info-item p {\n            margin: 0;\n            color: var(--white); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item h4 {\n            font-size: 1.5em;\n            margin-bottom: 2%; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item p {\n            font-family: \"Fira Sans Condensed\", sans-serif;\n            font-weight: 400;\n            font-size: 0.8em;\n            -webkit-font-smoothing: antialiased; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item p span {\n              display: block;\n              margin-top: 2%; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper img {\n          width: 100%;\n          max-width: 280px;\n          position: relative;\n          z-index: 10;\n          display: block;\n          margin: 0 auto;\n          padding: 0; }\n@media (min-width: 768px) {\n            .about-me .perfil-contenedor .item-work .item-work-wrapper img {\n              max-width: unset;\n              margin: 0; } }\n.about-me .perfil-contenedor .item-work .item-work-wrapper img.icono-work {\n            max-width: 35%;\n            margin-bottom: 5%;\n            margin: 0 auto; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .img-bg {\n          opacity: 0;\n          position: absolute;\n          z-index: 9;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          width: 100%;\n          height: 100%;\n          -webkit-transform: scale3d(0.9, 0.9, 0.9);\n                  transform: scale3d(0.9, 0.9, 0.9);\n          transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .img-bg.gradientGuard {\n            background: #0F4763;\n            background: linear-gradient(to bottom, #0F4763 0%, #178BE3 53%, #0F4763 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0F4763', endColorstr='#0F4763', GradientType=0); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover {\n          -webkit-transform: scale3d(1.01, 1.01, 1.01);\n                  transform: scale3d(1.01, 1.01, 1.01);\n          transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover > .info-item {\n            opacity: 1;\n            top: 58%;\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover > .img-bg {\n            opacity: 1;\n            -webkit-transform: scale3d(1, 1, 1);\n                    transform: scale3d(1, 1, 1);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover > img {\n            opacity: 0.4;\n            transition-delay: 2s;\n            transition: 650ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .blob-menu {\n    position: absolute;\n    width: 30%;\n    right: 0;\n    top: 5%;\n    z-index: 9;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n    transition: 200ms all ease-in-out 200ms;\n    display: none; }\n@media (min-width: 768px) {\n      .about-me .blob-menu {\n        display: block; } }\n.about-me .bg-menu {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    z-index: 8;\n    opacity: 0;\n    transition: 300ms all ease-in-out 300ms;\n    background: var(--white); }\n.about-me.display {\n    opacity: 1;\n    visibility: visible;\n    transition: 300ms all ease-in-out; }\n.about-me.display > .blob-menu {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n      opacity: 1; }\n.about-me.display > .bg-menu {\n      opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG9fdGFiYXJlcy9Ecm9wYm94L2VtcHJlc2FzL3BvcnRhZm9saW8tY2FtaWxvVGFiYXJlcy9wb3J0YWZvbGlvL3NyYy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvY2FtaWxvX3RhYmFyZXMvRHJvcGJveC9lbXByZXNhcy9wb3J0YWZvbGlvLWNhbWlsb1RhYmFyZXMvcG9ydGFmb2xpby9zcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwwRUFBWTtBQUNaLDJGQUFZO0FBTVo7RUFDRSxpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asc0JBQWE7RUFDYixpQkFBUTtFQUNSLGlCQUFRO0VBQ1IsZ0JBQU87RUFDUCxvQkFBVztFQUNYLHFCQUFZO0VBQ1osaUJBQVE7RUFDUixxQkFBWTtFQUNaLHNCQUFhLEVBQ2Q7QUFzQ0Q7O0VBRUUsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsc0JBQXFCLEVBSXRCO0FBL0JDO0lBaUJGOztNQVlJLGdCQUFlLEVBRWxCLEVBQUE7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFRcEI7QUFmRDtJQVNJLDBCQUF5QixFQUMxQjtBQVZIO0lBWUksNEJBQTJCLEVBQzVCO0FBR0g7RUFDRSxpQkFBZ0IsRUFDakI7QUFJQztFQUNFO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQStCc0MsRUFBQTtFQTdCeEM7SUFDRSw4Q0FB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QXNELEVBU3ZEO0FBaE1YO1lBMExjLG9CQUFtQjtZQUduQiw4RUFBNkU7WUFDN0UsbUhBQWtILEVBQ25IO0FBL0xiO1VBbU1ZLDZDQUFvQztrQkFBcEMscUNBQW9DO1VBQ3BDLDJEQUFzRCxFQW1CdkQ7QUF2Tlg7WUF1TWMsV0FBVTtZQUNWLFNBQVE7WUFDUiwyREFBc0QsRUFDdkQ7QUExTWI7WUE2TWMsV0FBVTtZQUNWLG9DQUEyQjtvQkFBM0IsNEJBQTJCO1lBQzNCLDJEQUFzRCxFQUN2RDtBQWhOYjtZQW1OYyxhQUFZO1lBQ1oscUJBQW9CO1lBQ3BCLDJEQUFzRCxFQUN2RDtBQXROYjtJQTROSSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFNBQVE7SUFDUixRQUFPO0lBQ1AsV0FBVTtJQUNWLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0IsV0FBVTtJQUNWLHdDQUF1QztJQUN2QyxjQUFhLEVBSWQ7QUR2TUQ7TUNqQ0Y7UUFzT00sZUFBYyxFQUVqQixFQUFBO0FBeE9IO0lBME9JLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsY0FBYTtJQUNiLFdBQVU7SUFDVixXQUFVO0lBQ1Ysd0NBQXVDO0lBQ3ZDLHlCQUF3QixFQUN6QjtBQWpQSDtJQW1QSSxXQUFVO0lBQ1Ysb0JBQW1CO0lBQ25CLGtDQUFpQyxFQVFsQztBQTdQSDtNQXVQTSxrQ0FBeUI7Y0FBekIsMEJBQXlCO01BQ3pCLFdBQVUsRUFDWDtBQXpQTDtNQTJQTSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlRBUiBGVUVOVEVTXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMrQ29uZGVuc2VkOjMwMCw0MDAsNTAwLDcwMCcpO1xuXG4kZm9udC1vc3dhbGQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmlyYTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4kb2Zmc2V0OiAwLjhlbTtcbjpyb290IHtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS1kYXJrOiAjMTcxNzE3O1xuICAtLW1pZGRsZURhcms6ICM1NTU1NTU7XG4gIC0tbGlnaHQ6ICNEM0QzRDM7XG4gIC0td2hpdGU6ICNGRkZGRkY7XG4gIC0tYmx1ZTogIzFBODJCNTtcbiAgLS1kYXJrQmx1ZTogIzBGNDc2MztcbiAgLS1saWdodEJsdWU6ICMxNzhCRTM7XG4gIC0tZ3JlZW46ICM1NkZGRDI7XG4gIC0tZGFya0dyZWVuOiAjNDdEMUFDO1xuICAtLWxpZ2h0R3JlZW46ICM3NEZGREE7XG59XG4vLyBNSVhJTlMgUEFSQSBQUk9QSUVEQURFU1xuQG1peGluIHBvcy1kaXNwbGF5LWFic29sdXRvKCR0b3AsICRsZWZ0LCAkcmlnaHQsICRib3R0b20sICR0cmFuc1gsICR0cmFuc1kgLCAkaW5kZXgpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR0b3A7XG4gIGxlZnQ6ICRsZWZ0O1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIHotaW5kZXg6ICRpbmRleDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbn1cblxuLy8gTUlYSU5TIFBBUkEgUkVTUE9OU0lWRVxuJHRhYmxldDogNzY4cHg7XG4kZGVza3RvcDogMTAyNHB4O1xuJGRlc2t0b3BMZzogMTI2MHB4O1xuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICBAY29udGVudCA7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wTGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcExnfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIE1JWElOUyBQQVJBIEFOSU1BQ0lPTlxuQG1peGluIGFuaW1hdGlvbi1taXhpbiggJG5vbWJyZUFuaW0gLCRvcEluaSwgJG9wRkluICwgJHJlYm90ZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbm9tYnJlQW5pbX0ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAkcmVib3RlLCA4MHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEZJbjtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEluaVxuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsICRyZWJvdGUsIDgwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wRkluO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYW5pbWF0aW9uLW1peGluKCdyZWJvdGUtcmVndWxhcicsIDEgLCAxLCAxNXB4KTtcbkBpbmNsdWRlIGFuaW1hdGlvbi1taXhpbigncmVib3RlLW9wYWNpZGFkJywgMSwgMC43LCAxNXB4KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG4uaGFtYnVyZ2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMXB4O1xuICB0b3A6IDFweDtcbiAgei1pbmRleDogMTM7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYWJvdXQtbWV7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC43KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMTAwbXMgYWxsIGVhc2UtaW4tb3V0IDEwMG1zO1xuICAucGVyZmlsLWNvbnRlbmVkb3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwYWRkaW5nOiAwJSAxNSUgMCUgMCU7XG4gICAgfVxuICAgIC5jb250ZW5lZG9yLS1pbmZvLCAuY29udGVuZWRvci0taW1hZ2VuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIG1pbi13aWR0aDogODUlO1xuICAgICAgICAgIHRyYW5zaXRpb246IDUyMG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KSAxMTAwbXM7XG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAlIDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIsIHB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZpcmE7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1vc3dhbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZpcmE7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRCbHVlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlIDUlO1xuICAgICAgICAgICAgbWFyZ2luOiAwJSAzJSAzJSAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwJSAzJSAwJSAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgfVxuICAgIC5jb250ZW5lZG9yLS1pbmZve1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICAgIG9yZGVyOjI7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgb3JkZXI6MTtcbiAgICAgIH1cbiAgICAgICYuaW50cm97XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVuZWRvci0taW1hZ2VuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgIG9yZGVyOjE7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICB9XG4gICAgICAmLmludHJvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS13b3JrIHtcbiAgICAgICAgcGVyc3BlY3RpdmU6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0td29yay13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMXB4IDEycHggOXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KTtcblxuICAgICAgICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1vc3dhbGQ7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCUgMi41JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvcy1kaXNwbGF5LWFic29sdXRvKDYwJSwgNTAlLCBhdXRvLCBhdXRvLCAtNTAlLCAtNTAlLCAxMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG5cbiAgICAgICAgICAgIGg0LFxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1maXJhO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaWNvbm8td29yayB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzUlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1iZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuXG4gICAgICAgICAgICAmLmdyYWRpZW50R3VhcmQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEY0NzYzO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMEY0NzYzIDAlLCAjMTc4QkUzIDUzJSwgIzBGNDc2MyAxMDAlKTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzBGNDc2MycsIGVuZENvbG9yc3RyPScjMEY0NzYzJywgR3JhZGllbnRUeXBlPTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDEsIDEuMDEsIDEuMDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuXG4gICAgICAgICAgICA+LmluZm8taXRlbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRvcDogNTglO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4uaW1nLWJnIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID5pbWcge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDJzO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA2NTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgLmJsb2ItbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1JTtcbiAgICB6LWluZGV4OiA5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBlYXNlLWluLW91dCAyMDBtcztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLmJnLW1lbnV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogODtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dCAzMDBtcztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIH1cbiAgJi5kaXNwbGF5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xuICAgID4uYmxvYi1tZW51e1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgID4uYmctbWVudXtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing-container/pages/menu/menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing-container/pages/menu/menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent(_el) {
        this._el = _el;
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (this._el.nativeElement.querySelector('.hamburger')) {
            var menu = this._el.nativeElement.querySelector('.hamburger');
            var prof = this._el.nativeElement.querySelector('.about-me');
            var contInfo = this._el.nativeElement.querySelector('.contenedor--info');
            var contImg = this._el.nativeElement.querySelector('.contenedor--imagen');
            this.openMenuSnack(menu, prof, contInfo, contImg);
        }
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        if (this._el.nativeElement.querySelectorAll('.item-work')) {
            var arrItems = this._el.nativeElement.querySelectorAll('.item-work');
            var arrItemsWrapp = this._el.nativeElement.querySelectorAll('.item-work-wrapper');
            this.overWorks(arrItems, arrItemsWrapp);
        }
    };
    MenuComponent.prototype.openMenuSnack = function (el, prof, contInfo, contImg) {
        el.addEventListener("click", function () {
            el.classList.toggle("is-active");
            if (prof) {
                prof.classList.toggle("display");
                contInfo.classList.toggle("intro");
                contImg.classList.toggle("intro");
            }
        });
    };
    MenuComponent.prototype.overWorks = function (contItem, contItemWrapp) {
        var _this = this;
        contItem.forEach(function (element, key) {
            _this.moveItems(element, contItemWrapp[key]);
        });
    };
    MenuComponent.prototype.moveItems = function (contItem, inner) {
        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(contItem);
        var counter = 0;
        var refreshRate = 10;
        var isTimeToUpdate = function () { return counter++ % refreshRate === 0; };
        // HANDLERS DEL EVENTO DE CADA BOTON
        contItem.addEventListener("mouseover", function (event) { update(event); });
        contItem.addEventListener("mouseout", function () { inner.style = ""; });
        contItem.addEventListener("mousemove", function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        });
        var update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle((mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
        };
        var updateTransformStyle = function (x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/landing-container/pages/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/landing-container/pages/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MenuComponent);
    return MenuComponent;
}());

// Mouse
var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
        return "(" + this.x + ", " + this.y + ")";
    }
};


/***/ }),

/***/ "./src/app/landing-container/pages/perfil/perfil.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing-container/pages/perfil/perfil.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"perfilDesc\" class=\"section-1\">\n  <div class=\"perfil-contenedor\">\n    <div class=\"contenedor--info hide-animate\">\n      <h1>As a FrontEnd Developer,</h1>\n      <p>\n        <b>I enjoy building web sites that are functional</b>, user friendly and that also satisfy customers needs. My working\n        experience includes the use of several I.T. technologies and scripting languages.\n      </p>\n    </div>\n    <div class=\"contenedor--imagen animacion\">\n        <img src=\"./assets/perfil-icono.svg\" alt=\"\">\n    </div>\n  </div>\n  <img src=\"./assets/perfil-bg.svg\" alt=\"\" class=\"perfil-bg desktop\">\n  <img src=\"./assets/perfil-bg-movil.svg\" alt=\"\" class=\"perfil-bg movil\">\n</section>\n<section id=\"perfilComplem\" class=\"section-2\">\n  <div class=\"perfil-contenedor desc\">\n    <div class=\"contenedor--info invertido hide-animate\">\n      <h2>Also...</h2>\n      <p>\n        I have a bachelor degree in Graphic Communication but from the begining I oriented my career\n        <br/>\n        and my university projects around digital strategies based on programs like Flash and Dreamweaver.\n        <br />\n        During my early years as a professional\n        <br />\n        I found myself immersed in the use of ActionScript and that was my first programming experience. Soon\n        after, my knowlege expanded in the use of languages like Javascript(JQUERY - ANGULAR), PHP, HTML and CSS(SASS).\n      </p>\n    </div>\n    <div class=\"contenedor--imagen animacion invertido\">\n      <img src=\"./assets/perfil-idea.svg\" alt=\"\">\n    </div>\n  </div>\n  <img src=\"./assets/perfil-bg-desc.svg\" alt=\"\" class=\"perfil-bg-desc desktop\">\n  <!-- <img src=\"./assets/perfil-bg-desc.svg\" alt=\"\" class=\"perfil-bg-desc movil\"> -->\n</section>\n\n"

/***/ }),

/***/ "./src/app/landing-container/pages/perfil/perfil.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/landing-container/pages/perfil/perfil.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  overflow-x: hidden;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes rebote-regular {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n@-webkit-keyframes rebote-opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\nsection.section-1,\nsection.section-2 {\n  background: var(--lightBlue); }\n.perfil-contenedor {\n  min-width: 90%;\n  padding-top: 10%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  flex-basis: 48%;\n  flex-shrink: 1; }\n@media (min-width: 1024px) {\n    .perfil-contenedor {\n      flex-direction: row; } }\n@media (min-width: 768px) {\n    .perfil-contenedor .contenedor--info {\n      max-width: 60%;\n      align-self: flex-start; } }\n@media (min-width: 1260px) {\n    .perfil-contenedor .contenedor--info {\n      max-width: 60%; } }\n.perfil-contenedor .contenedor--info.hide-animate {\n    transition: 600ms all ease-in-out;\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px); }\n.perfil-contenedor .contenedor--info.hide-animate.invertido {\n      -webkit-transform: translate3d(100%, 0px, 0px);\n              transform: translate3d(100%, 0px, 0px); }\n.perfil-contenedor .contenedor--info.show-animate {\n    transition: 600ms all ease-in-out;\n    opacity: 1;\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px); }\n.perfil-contenedor .contenedor--info.show-animate.invertido {\n      -webkit-transform: translate3d(0%, 0px, 0px);\n              transform: translate3d(0%, 0px, 0px); }\n.perfil-contenedor .contenedor--info h1, .perfil-contenedor .contenedor--info p, .perfil-contenedor .contenedor--info h2 {\n    color: var(--white);\n    font-family: \"Fira Sans Condensed\", sans-serif;\n    font-size: 1em; }\n.perfil-contenedor .contenedor--info h1, .perfil-contenedor .contenedor--info h2 {\n    font-family: \"Oswald\", sans-serif;\n    font-size: 2em; }\n.perfil-contenedor .contenedor--info.invertido {\n    order: 2; }\n@media (min-width: 768px) {\n      .perfil-contenedor .contenedor--info.invertido {\n        max-width: unset;\n        order: 1;\n        align-self: flex-start; } }\n@media (min-width: 768px) {\n      .perfil-contenedor .contenedor--info.invertido {\n        padding-top: 5%;\n        max-width: 55%;\n        order: 2; } }\n.perfil-contenedor .contenedor--info.invertido h2 {\n      text-align: center; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--info.invertido h2 {\n          text-align: right; } }\n.perfil-contenedor .contenedor--info.invertido p {\n      text-align: justify; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--info.invertido p {\n          text-align: center; } }\n@media (min-width: 1024px) {\n        .perfil-contenedor .contenedor--info.invertido p {\n          text-align: right; } }\n.perfil-contenedor .contenedor--imagen {\n    position: relative; }\n@media (min-width: 768px) {\n      .perfil-contenedor .contenedor--imagen {\n        padding: 1% 0%; } }\n.perfil-contenedor .contenedor--imagen img {\n      display: block;\n      z-index: 10;\n      position: relative;\n      padding: 0 5%;\n      width: 250px; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--imagen img {\n          width: 680px; } }\n.perfil-contenedor .contenedor--imagen.invertido {\n      order: 2;\n      padding: 0;\n      bottom: -10px; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--imagen.invertido {\n          width: 680px;\n          order: 1;\n          bottom: 0px; } }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--imagen.invertido img {\n          width: 350px; } }\n.perfil-contenedor .contenedor--imagen.animacion {\n      -webkit-animation: rebote-regular 5s infinite;\n              animation: rebote-regular 5s infinite;\n      z-index: 10; }\n.perfil-contenedor .contenedor--imagen.animacion.invertido {\n        -webkit-animation: rebote-regular 8s infinite;\n                animation: rebote-regular 8s infinite; }\n.perfil-contenedor.desc {\n    padding-top: 0%; }\n.perfil-bg {\n  position: absolute;\n  width: auto;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  display: none; }\n.perfil-bg.movil {\n    display: block;\n    max-width: 55%;\n    top: -11px; }\n@media (min-width: 768px) {\n    .perfil-bg {\n      max-width: 60vw; }\n      .perfil-bg.desktop {\n        display: block;\n        top: -1px; }\n      .perfil-bg.movil {\n        display: none; } }\nsection.section-2 {\n  align-items: flex-start; }\nimg.perfil-bg-desc {\n  position: absolute;\n  width: auto;\n  left: 0;\n  bottom: 0;\n  z-index: 9;\n  display: none; }\nimg.perfil-bg-desc.movil {\n    display: block;\n    max-width: 55%; }\n@media (min-width: 768px) {\n    img.perfil-bg-desc {\n      max-width: 60vw; }\n      img.perfil-bg-desc.desktop {\n        display: block;\n        bottom: -1px; }\n      img.perfil-bg-desc.movil {\n        display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG9fdGFiYXJlcy9Ecm9wYm94L2VtcHJlc2FzL3BvcnRhZm9saW8tY2FtaWxvVGFiYXJlcy9wb3J0YWZvbGlvL3NyYy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvY2FtaWxvX3RhYmFyZXMvRHJvcGJveC9lbXByZXNhcy9wb3J0YWZvbGlvLWNhbWlsb1RhYmFyZXMvcG9ydGFmb2xpby9zcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMEVBQVk7QUFDWiwyRkFBWTtBQU1aO0VBQ0UsaUJBQVE7RUFDUixnQkFBTztFQUNQLHNCQUFhO0VBQ2IsaUJBQVE7RUFDUixpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asb0JBQVc7RUFDWCxxQkFBWTtFQUNaLGlCQUFRO0VBQ1IscUJBQVk7RUFDWixzQkFBYSxFQUNkO0FBc0NEOztFQUVFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHNCQUFxQixFQUl0QjtBQS9CQztJQWlCRjs7TUFZSSxnQkFBZSxFQUVsQixFQUFBO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBUXBCO0FBZkQ7SUFTSSwwQkFBeUIsRUFDMUI7QUFWSDtJQVlJLDRCQUEyQixFQUM1QjtBQUdIO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBSUM7RUFDRTtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0ErQnNDLEVBQUE7RUE3QnhDO0lBQ0Us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SVo7QUFqSFA7UUErR1UsOENBQXFDO2dCQUFyQyxzQ0FBcUMsRUFDdEM7QUFoSFQ7SUFvSE0sZ0JBQWUsRUFDaEI7QUFFTDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsU0FBUTtFQUNSLE9BQU07RUFDTixXQUFVO0VBQ1YsY0FBYSxFQWdCaEI7QUF0QkQ7SUFRTSxlQUFjO0lBQ2QsZUFBYztJQUNkLFdBQVUsRUFDWDtBRC9GSDtJQ29GRjtNQWFNLGdCQUFlLEVBU3BCO01BdEJEO1FBZVEsZUFBYztRQUNkLFVBQVMsRUFDVjtNQWpCUDtRQW1CUSxjQUFhLEVBQ2QsRUFBQTtBQUdQO0VBQ0Usd0JBQXVCLEVBQ3hCO0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFFBQU87RUFDUCxVQUFTO0VBQ1QsV0FBVTtFQUNWLGNBQWEsRUFnQmhCO0FBdEJEO0lBUU0sZUFBYztJQUNkLGVBQWMsRUFFZjtBRHpISDtJQzhHRjtNQWFNLGdCQUFlLEVBU3BCO01BdEJEO1FBZVEsZUFBYztRQUNkLGFBQVksRUFDYjtNQWpCUDtRQW1CUSxjQUFhLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlRBUiBGVUVOVEVTXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMrQ29uZGVuc2VkOjMwMCw0MDAsNTAwLDcwMCcpO1xuXG4kZm9udC1vc3dhbGQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmlyYTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4kb2Zmc2V0OiAwLjhlbTtcbjpyb290IHtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS1kYXJrOiAjMTcxNzE3O1xuICAtLW1pZGRsZURhcms6ICM1NTU1NTU7XG4gIC0tbGlnaHQ6ICNEM0QzRDM7XG4gIC0td2hpdGU6ICNGRkZGRkY7XG4gIC0tYmx1ZTogIzFBODJCNTtcbiAgLS1kYXJrQmx1ZTogIzBGNDc2MztcbiAgLS1saWdodEJsdWU6ICMxNzhCRTM7XG4gIC0tZ3JlZW46ICM1NkZGRDI7XG4gIC0tZGFya0dyZWVuOiAjNDdEMUFDO1xuICAtLWxpZ2h0R3JlZW46ICM3NEZGREE7XG59XG4vLyBNSVhJTlMgUEFSQSBQUk9QSUVEQURFU1xuQG1peGluIHBvcy1kaXNwbGF5LWFic29sdXRvKCR0b3AsICRsZWZ0LCAkcmlnaHQsICRib3R0b20sICR0cmFuc1gsICR0cmFuc1kgLCAkaW5kZXgpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR0b3A7XG4gIGxlZnQ6ICRsZWZ0O1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIHotaW5kZXg6ICRpbmRleDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbn1cblxuLy8gTUlYSU5TIFBBUkEgUkVTUE9OU0lWRVxuJHRhYmxldDogNzY4cHg7XG4kZGVza3RvcDogMTAyNHB4O1xuJGRlc2t0b3BMZzogMTI2MHB4O1xuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICBAY29udGVudCA7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wTGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcExnfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIE1JWElOUyBQQVJBIEFOSU1BQ0lPTlxuQG1peGluIGFuaW1hdGlvbi1taXhpbiggJG5vbWJyZUFuaW0gLCRvcEluaSwgJG9wRkluICwgJHJlYm90ZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbm9tYnJlQW5pbX0ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAkcmVib3RlLCA4MHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEZJbjtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBvcGFjaXR5OiAkb3BJbmlcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6ICRvcEluaVxuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsICRyZWJvdGUsIDgwcHgpO1xuICAgICAgb3BhY2l0eTogJG9wRkluO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYW5pbWF0aW9uLW1peGluKCdyZWJvdGUtcmVndWxhcicsIDEgLCAxLCAxNXB4KTtcbkBpbmNsdWRlIGFuaW1hdGlvbi1taXhpbigncmVib3RlLW9wYWNpZGFkJywgMSwgMC43LCAxNXB4KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbnNlY3Rpb24uc2VjdGlvbi0xLFxuc2VjdGlvbi5zZWN0aW9uLTIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEJsdWUpO1xufVxuLnBlcmZpbC1jb250ZW5lZG9yIHtcbiAgICBtaW4td2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtYmFzaXM6IDQ4JTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5jb250ZW5lZG9yLS1pbmZve1xuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wTGcge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgIH1cbiAgICAgICYuaGlkZS1hbmltYXRle1xuICAgICAgICB0cmFuc2l0aW9uOiA2MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcbiAgICAgICAgJi5pbnZlcnRpZG97XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc2hvdy1hbmltYXRlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogNjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICAmLmludmVydGlkbyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMHB4LCAwcHgpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaDEsIHAsIGgye1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmlyYTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB9XG4gICAgICBoMSwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtb3N3YWxkO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIH1cbiAgICAgICYuaW52ZXJ0aWRve1xuICAgICAgICBvcmRlcjogMjtcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1NSU7XG4gICAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW5lZG9yLS1pbWFnZW57XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBwYWRkaW5nOiAxJSAwJTtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICB3aWR0aDogNjgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuaW52ZXJ0aWRvIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgd2lkdGg6IDY4MHB4O1xuICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuYW5pbWFjaW9ue1xuICAgICAgICBhbmltYXRpb246IHJlYm90ZS1yZWd1bGFyIDVzIGluZmluaXRlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgJi5pbnZlcnRpZG8ge1xuICAgICAgICAgIGFuaW1hdGlvbjogcmVib3RlLXJlZ3VsYXIgOHMgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5kZXNjIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgICB9XG59XG4ucGVyZmlsLWJne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYubW92aWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXgtd2lkdGg6IDU1JTtcbiAgICAgIHRvcDogLTExcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBtYXgtd2lkdGg6IDYwdnc7XG4gICAgICAmLmRlc2t0b3B7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICB9XG4gICAgICAmLm1vdmlsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG59XG5zZWN0aW9uLnNlY3Rpb24tMntcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pbWcucGVyZmlsLWJnLWRlc2Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5tb3ZpbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1heC13aWR0aDogNTUlO1xuICAgICAgLy8gdG9wOiAtMTFweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIG1heC13aWR0aDogNjB2dztcbiAgICAgICYuZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICB9XG4gICAgICAmLm1vdmlsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-container/pages/perfil/perfil.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing-container/pages/perfil/perfil.component.ts ***!
  \********************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
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

var PerfilComponent = /** @class */ (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/landing-container/pages/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/landing-container/pages/perfil/perfil.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
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

module.exports = __webpack_require__(/*! /Users/camilo_tabares/Dropbox/empresas/portafolio-camiloTabares/portafolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map