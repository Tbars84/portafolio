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

module.exports = "<app-menu></app-menu>\n<app-inicio></app-inicio>\n<app-perfil></app-perfil>\n<app-habilidades [itemsArr]=\"arrExpertise\"></app-habilidades>\n<app-experience [experienceArr]=\"arrExperience\"></app-experience>\n"

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
    function LandingHome() {
        this.arrExpertise = [
            { name: 'Photoshop', expertise: '80' },
            { name: 'Illustrator', expertise: '60' },
            { name: 'Adobe XD', expertise: '45' },
            { name: 'HTML / CSS', expertise: '85' },
            { name: 'JAVASCRIPT', expertise: '45' },
            { name: 'ANGULAR / TYPESCRIPT', expertise: '65' },
            { name: 'WORDPRESS', expertise: '80' },
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
    LandingHome = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-home',
            template: __webpack_require__(/*! ./landing-home.component.html */ "./src/app/landing-container/main-components/landing-home/landing-home.component.html"),
            styles: [__webpack_require__(/*! ./landing-home.component.scss */ "./src/app/landing-container/main-components/landing-home/landing-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<section class=\"section-4\">\n  <div class=\"blob-2\">\n    <img src=\"./assets/blob-2.svg\" alt=\"\">\n  </div>\n  <div class=\"blob-3\">\n    <img src=\"./assets/blob-3.svg\" alt=\"\">\n  </div>\n  <div class=\"works-contenedor\">\n    <img class=\"works-title\" src=\"./assets/works-title.svg\" alt=\"\">\n    <div class=\"snippets--works\">\n      <!-- tooltip work -->\n      <ng-template [ngIf]=\"experienceArr\">\n        <div class=\"item-work\" *ngFor=\"let itemWr of experienceArr; let i= index;\">\n          <div class=\"item-work-wrapper\">\n            <div class=\"info-item\">\n              <img class=\"icono-work\" src=\"{{itemWr.iconUrl}}\" alt=\"\">\n              <h4>{{itemWr.name}}</h4>\n              <p>\n                {{itemWr.description}}\n                <span>{{itemWr.season}}</span>\n              </p>\n            </div>\n            <img src=\"{{itemWr.bgUrl}}\" alt=\"\">\n            <div class=\"img-bg gradientGuard\"></div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/experience/experience.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/landing-container/pages/experience/experience.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.section-4 {\n  align-items: flex-start; }\n.section-4 .works-contenedor {\n    padding-top: 5%;\n    display: flex;\n    flex-direction: column;\n    min-width: 95%; }\n.section-4 .works-contenedor .works-title {\n      display: block;\n      min-width: 320px;\n      max-width: 50vw;\n      align-self: flex-start; }\n.section-4 .works-contenedor .snippets--works {\n      display: flex;\n      justify-content: space-around;\n      align-self: center;\n      align-items: center;\n      min-height: calc(100vh - 350px);\n      padding: 5% 0%;\n      flex-wrap: wrap; }\n.section-4 .works-contenedor .snippets--works .item-work {\n        -webkit-perspective: 30px;\n                perspective: 30px;\n        max-width: 85%;\n        position: relative;\n        z-index: 10; }\n@media (min-width: 768px) {\n          .section-4 .works-contenedor .snippets--works .item-work {\n            max-width: 35%; } }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper {\n          padding: 11px 12px 9px;\n          margin-bottom: 2%;\n          position: relative;\n          transition: -webkit-transform 0.5s;\n          transition: transform 0.5s;\n          transition: transform 0.5s, -webkit-transform 0.5s;\n          transition: 200ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item {\n            opacity: 0;\n            font-family: \"Oswald\", sans-serif;\n            width: 90%;\n            padding: 0% 2.5%;\n            text-align: center;\n            position: absolute;\n            top: 60%;\n            left: 50%;\n            right: auto;\n            bottom: auto;\n            z-index: 11;\n            -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item h4, .section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item p {\n              margin: 0;\n              color: var(--white); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item h4 {\n              font-size: 1.5em;\n              margin-bottom: 2%; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item p {\n              font-family: \"Fira Sans Condensed\", sans-serif;\n              font-weight: 400;\n              font-size: 0.8em;\n              -webkit-font-smoothing: antialiased; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .info-item p span {\n                display: block;\n                margin-top: 2%; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper img {\n            max-width: 100%;\n            position: relative;\n            z-index: 10;\n            display: block;\n            margin: 0;\n            padding: 0; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper img.icono-work {\n              max-width: 35%;\n              margin-bottom: 5%;\n              margin: 0 auto; }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .img-bg {\n            opacity: 0;\n            position: absolute;\n            z-index: 9;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100%;\n            height: 100%;\n            -webkit-transform: scale3d(0.9, 0.9, 0.9);\n                    transform: scale3d(0.9, 0.9, 0.9);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper .img-bg.gradientGuard {\n              background: #0F4763;\n              background: linear-gradient(to bottom, #0F4763 0%, #178BE3 53%, #0F4763 100%);\n              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0F4763', endColorstr='#0F4763', GradientType=0); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover {\n            -webkit-transform: scale3d(1.01, 1.01, 1.01);\n                    transform: scale3d(1.01, 1.01, 1.01);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover > .info-item {\n              opacity: 1;\n              top: 58%;\n              transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover > .img-bg {\n              opacity: 1;\n              -webkit-transform: scale3d(1, 1, 1);\n                      transform: scale3d(1, 1, 1);\n              transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .works-contenedor .snippets--works .item-work .item-work-wrapper:hover > img {\n              opacity: 0.4;\n              transition-delay: 2s;\n              transition: 650ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-4 .blob-2 {\n    position: absolute;\n    bottom: 0%;\n    right: 0%;\n    opacity: 0.3;\n    min-width: 45vw;\n    z-index: 9; }\n.section-4 .blob-3 {\n    min-width: 25vw;\n    opacity: 0.35;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    bottom: auto;\n    z-index: 10;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMEVBQVk7QUFDWiwyRkFBWTtBQU1aO0VBQ0UsaUJBQVE7RUFDUixnQkFBTztFQUNQLHNCQUFhO0VBQ2IsaUJBQVE7RUFDUixpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asb0JBQVc7RUFDWCxxQkFBWTtFQUNaLGlCQUFRO0VBQ1IscUJBQVk7RUFDWixzQkFBYSxFQUNkO0FBc0NEOztFQUVFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBSXRCO0FBOUJDO0lBaUJGOztNQVdJLGdCQUFlLEVBRWxCLEVBQUE7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFRcEI7QUFmRDtJQVNJLDBCQUF5QixFQUMxQjtBQVZIO0lBWUksNEJBQTJCLEVBQzVCO0FBR0g7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQUNGLEVBQUE7RUFDQTtJQUNFLDhDQUFxQztZQUFy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MEQ7SUFDMUQsNkNBQWtELEVDbUdqRCIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElNUE9SVEFSIEZVRU5URVNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjMwMCw0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6MzAwLDQwMCw1MDAsNzAwJyk7XG5cbiRmb250LW9zd2FsZDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4kZm9udC1maXJhOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cbiRvZmZzZXQ6IDAuOGVtO1xuOnJvb3Qge1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLWRhcms6ICMxNzE3MTc7XG4gIC0tbWlkZGxlRGFyazogIzU1NTU1NTtcbiAgLS1saWdodDogI0QzRDNEMztcbiAgLS13aGl0ZTogI0ZGRkZGRjtcbiAgLS1ibHVlOiAjMUE4MkI1O1xuICAtLWRhcmtCbHVlOiAjMEY0NzYzO1xuICAtLWxpZ2h0Qmx1ZTogIzE3OEJFMztcbiAgLS1ncmVlbjogIzU2RkZEMjtcbiAgLS1kYXJrR3JlZW46ICM0N0QxQUM7XG4gIC0tbGlnaHRHcmVlbjogIzc0RkZEQTtcbn1cbi8vIE1JWElOUyBQQVJBIFBST1BJRURBREVTXG5AbWl4aW4gcG9zLWRpc3BsYXktYWJzb2x1dG8oJHRvcCwgJGxlZnQsICRyaWdodCwgJGJvdHRvbSwgJHRyYW5zWCwgJHRyYW5zWSAsICRpbmRleCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgei1pbmRleDogJGluZGV4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xufVxuXG4vLyBNSVhJTlMgUEFSQSBSRVNQT05TSVZFXG4kdGFibGV0OiA3NjhweDtcbiRkZXNrdG9wOiAxMDI0cHg7XG4kZGVza3RvcExnOiAxMjYwcHg7XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgIEBjb250ZW50IDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3BMZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wTGd9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaWRhZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDE1cHgsIDgwcHgpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTVweCwgODBweCk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xuJG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7XG5cbi5zZWN0aW9uLTQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLndvcmtzLWNvbnRlbmVkb3Ige1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiA5NSU7XG4gICAgLndvcmtzLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5zbmlwcGV0cy0td29ya3Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6ICRtaW4taGVpZ2h0O1xuICAgICAgcGFkZGluZzogNSUgMCU7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAuaXRlbS13b3JrIHtcbiAgICAgICAgcGVyc3BlY3RpdmU6IDMwcHg7XG4gICAgICAgIG1heC13aWR0aDogODUlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgIG1heC13aWR0aDogMzUlO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtLXdvcmstd3JhcHBlciB7XG4gICAgICAgICAgcGFkZGluZzogMTFweCAxMnB4IDlweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgLmluZm8taXRlbXtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtb3N3YWxkO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAlIDIuNSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3MtZGlzcGxheS1hYnNvbHV0byg2MCUsIDUwJSwgYXV0bywgYXV0bywgLTUwJSwgLTUwJSwgMTEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgaDQgLCBwe1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmlyYTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAmLmljb25vLXdvcmt7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzUlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWctYmd7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgIHRvcDogMDsgbGVmdDogMDtyaWdodDogMDtib3R0b206MDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgICAmLmdyYWRpZW50R3VhcmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwRjQ3NjM7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMEY0NzYzIDAlLCAjMTc4QkUzIDUzJSwgIzBGNDc2MyAxMDAlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMwRjQ3NjMnLCBlbmRDb2xvcnN0cj0nIzBGNDc2MycsIEdyYWRpZW50VHlwZT0wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDEsIDEuMDEsIDEuMDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgPi5pbmZvLWl0ZW0ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0b3A6IDU4JTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPi5pbWctYmcge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDI1MG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gaW1nIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAycztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYmxvYi0yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwJTtcbiAgICByaWdodDogMCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIG1pbi13aWR0aDogNDV2dztcbiAgICB6LWluZGV4OiA5O1xuICB9XG4gIC5ibG9iLTMge1xuICAgIG1pbi13aWR0aDogMjV2dztcbiAgICBvcGFjaXR5OiAwLjM1O1xuICAgIEBpbmNsdWRlIHBvcy1kaXNwbGF5LWFic29sdXRvKDUwJSwgNTAlLCBhdXRvLCBhdXRvLCAtNTAlLCAtNTAlLCAxMCk7XG4gIH1cblxufVxuIl19 */"

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

module.exports = "<section class=\"section-3\">\n  <div class=\"blob-1\">\n    <img src=\"./assets/blob-1.svg\" alt=\"\">\n  </div>\n  <div class=\"skills-contenedor\">\n    <img class=\"skills-title\" src=\"./assets/skills-title.svg\" alt=\"\">\n    <div class=\"desc--skills\">\n      <!-- tooltip progress -->\n      <ng-template [ngIf]=\"itemsArr\">\n        <div *ngFor=\"let item of itemsArr; let i= index;\" id=\"html5\" class=\"barWrapper\" >\n            <span class=\"progressText\"><b> {{item.name ? (item.name): 'Not specified'}} </b></span>\n            <span class=\"descText\">{{item.description ? (item.description): ''}}</span>\n            <div class=\"progress\">\n              <div class=\"bar overlap\" [attr.data-expertise]=\"item.expertise\"></div>\n            </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/habilidades/habilidades.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/landing-container/pages/habilidades/habilidades.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.section-3 {\n  align-items: flex-start; }\n.section-3 .skills-contenedor {\n    padding-top: 5%;\n    display: flex;\n    flex-direction: column;\n    min-width: 95%; }\n.section-3 .skills-contenedor .skills-title {\n      display: block;\n      min-width: 320px;\n      max-width: 350px;\n      align-self: flex-end; }\n.section-3 .skills-contenedor .desc--skills {\n      display: flex;\n      justify-content: space-around;\n      align-self: center;\n      align-items: center;\n      min-height: calc(100vh - 350px);\n      padding-top: 5%;\n      flex-wrap: wrap;\n      flex-direction: column;\n      width: 100%; }\n@media (min-width: 768px) {\n        .section-3 .skills-contenedor .desc--skills {\n          flex-direction: row;\n          width: auto; } }\n.section-3 .skills-contenedor .desc--skills .barWrapper {\n        min-width: 95%;\n        margin-bottom: 5%; }\n@media (min-width: 768px) {\n          .section-3 .skills-contenedor .desc--skills .barWrapper {\n            min-width: 45%;\n            margin-bottom: 0%; } }\n.section-3 .skills-contenedor .desc--skills .barWrapper span.progressText {\n          color: var(--dark);\n          font-family: \"Fira Sans Condensed\", sans-serif;\n          font-size: 1.2em;\n          margin: 1% 0%;\n          display: block;\n          letter-spacing: 0.8px; }\n.section-3 .skills-contenedor .desc--skills .barWrapper span.descText {\n          color: var(--middleDark);\n          font-family: \"Fira Sans Condensed\", sans-serif;\n          font-size: 0.8em;\n          margin-bottom: 1%;\n          margin-top: -1%; }\n.section-3 .skills-contenedor .desc--skills .barWrapper .progress {\n          display: block;\n          width: 100%;\n          height: 15px;\n          border-radius: 40px;\n          background: var(--light); }\n.section-3 .skills-contenedor .desc--skills .barWrapper .progress .bar {\n            border-radius: 40px;\n            width: 0%;\n            height: 100%;\n            transition: 100ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.section-3 .skills-contenedor .desc--skills .barWrapper .progress .bar.overlap {\n              background-image: linear-gradient(to right, #74FFDA, #178BE3 42%, #0F4763); }\n.section-3 .blob-1 {\n    position: absolute;\n    top: 50%;\n    left: 0%;\n    opacity: 0.2;\n    min-width: 25vw;\n    z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9oYWJpbGlkYWRlcy9oYWJpbGlkYWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwwRUFBWTtBQUNaLDJGQUFZO0FBTVo7RUFDRSxpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asc0JBQWE7RUFDYixpQkFBUTtFQUNSLGlCQUFRO0VBQ1IsZ0JBQU87RUFDUCxvQkFBVztFQUNYLHFCQUFZO0VBQ1osaUJBQVE7RUFDUixxQkFBWTtFQUNaLHNCQUFhLEVBQ2Q7QUFzQ0Q7O0VBRUUsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFJdEI7QUE5QkM7SUFpQkY7O01BV0ksZ0JBQWUsRUFFbEIsRUFBQTtBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQVFwQjtBQWZEO0lBU0ksMEJBQXlCLEVBQzFCO0FBVkg7SUFZSSw0QkFBMkIsRUFDNUI7QUFHSDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0U7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQTtFQUNBO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQUNGLEVBQUE7RUFDQTtJQUNFLGdEQUF1QztZQUF2Qyx3Q0FBdUM7SUFDdkMsYUFBWSxFQUFBO0VBRWQ7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQTtFQUNBO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQUNGLEVBQUE7RUFDQTtJQUNFLGdEQUF1QztZQUF2Qyx3Q0FBdUM7SUFDdkMsYUFBWSxFQUFBO0VBRWQ7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQSxFQUFBO0FDL0hGO0VBQ0Usd0JBQXVCLEVBZ0Z4QjtBQWpGRDtJQUdJLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixlQUFjLEVBa0VmO0FBeEVIO01BUU0sZUFBYztNQUNkLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIscUJBQW9CLEVBQ3JCO0FBWkw7TUFjTSxjQUFhO01BQ2IsOEJBQTZCO01BQzdCLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsZ0NBbkIwQjtNQW9CMUIsZ0JBQWU7TUFDZixnQkFBZTtNQUNmLHVCQUFzQjtNQUN0QixZQUFXLEVBaURaO0FEaENIO1FDdkNGO1VBd0JRLG9CQUFtQjtVQUNuQixZQUFXLEVBOENkLEVBQUE7QUF2RUw7UUE2QlEsZUFBYztRQUNkLGtCQUFpQixFQXdDbEI7QUQvQkw7VUN2Q0Y7WUFnQ1UsZUFBYztZQUNkLGtCQUFpQixFQXFDcEIsRUFBQTtBQXRFUDtVQW9DVSxtQkFBa0I7VUFDbEIsK0NEbENtQztVQ21DbkMsaUJBQWdCO1VBQ2hCLGNBQWE7VUFDYixlQUFjO1VBQ2Qsc0JBQXFCLEVBQ3RCO0FBMUNUO1VBNENVLHlCQUF3QjtVQUN4QiwrQ0QxQ21DO1VDMkNuQyxpQkFBZ0I7VUFDaEIsa0JBQWlCO1VBQ2pCLGdCQUFlLEVBRWhCO0FBbERUO1VBb0RVLGVBQWM7VUFDZCxZQUFXO1VBQ1gsYUFBWTtVQUNaLG9CQUFtQjtVQUNuQix5QkFBd0IsRUFhekI7QUFyRVQ7WUEwRFksb0JBQW1CO1lBQ25CLFVBQVM7WUFDVCxhQUFZO1lBQ1osMkRBQXNELEVBT3ZEO0FBcEVYO2NBa0VjLDJFQUEwRSxFQUMzRTtBQW5FYjtJQTBFSSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFNBQVE7SUFDUixhQUFZO0lBQ1osZ0JBQWU7SUFDZixXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9oYWJpbGlkYWRlcy9oYWJpbGlkYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElNUE9SVEFSIEZVRU5URVNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjMwMCw0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6MzAwLDQwMCw1MDAsNzAwJyk7XG5cbiRmb250LW9zd2FsZDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4kZm9udC1maXJhOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cbiRvZmZzZXQ6IDAuOGVtO1xuOnJvb3Qge1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLWRhcms6ICMxNzE3MTc7XG4gIC0tbWlkZGxlRGFyazogIzU1NTU1NTtcbiAgLS1saWdodDogI0QzRDNEMztcbiAgLS13aGl0ZTogI0ZGRkZGRjtcbiAgLS1ibHVlOiAjMUE4MkI1O1xuICAtLWRhcmtCbHVlOiAjMEY0NzYzO1xuICAtLWxpZ2h0Qmx1ZTogIzE3OEJFMztcbiAgLS1ncmVlbjogIzU2RkZEMjtcbiAgLS1kYXJrR3JlZW46ICM0N0QxQUM7XG4gIC0tbGlnaHRHcmVlbjogIzc0RkZEQTtcbn1cbi8vIE1JWElOUyBQQVJBIFBST1BJRURBREVTXG5AbWl4aW4gcG9zLWRpc3BsYXktYWJzb2x1dG8oJHRvcCwgJGxlZnQsICRyaWdodCwgJGJvdHRvbSwgJHRyYW5zWCwgJHRyYW5zWSAsICRpbmRleCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgei1pbmRleDogJGluZGV4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xufVxuXG4vLyBNSVhJTlMgUEFSQSBSRVNQT05TSVZFXG4kdGFibGV0OiA3NjhweDtcbiRkZXNrdG9wOiAxMDI0cHg7XG4kZGVza3RvcExnOiAxMjYwcHg7XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgIEBjb250ZW50IDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3BMZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wTGd9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaWRhZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDE1cHgsIDgwcHgpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTVweCwgODBweCk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xuJG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7XG4uc2VjdGlvbi0zIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC5za2lsbHMtY29udGVuZWRvciB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDk1JTtcbiAgICAuc2tpbGxzLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmRlc2MtLXNraWxsc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAkbWluLWhlaWdodDtcbiAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuYmFyV3JhcHBlcntcbiAgICAgICAgbWluLXdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XG4gICAgICAgICAgbWluLXdpZHRoOiA0NSU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5wcm9ncmVzc1RleHR7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1maXJhO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgbWFyZ2luOiAxJSAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5kZXNjVGV4dHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbWlkZGxlRGFyayk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZpcmE7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMSU7XG5cbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3N7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xuICAgICAgICAgIC5iYXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEwMG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KTtcbiAgICAgICAgICAgICYub3ZlcmxhcCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCM3NEZGREEpLCBjb2xvci1zdG9wKDQyJSwgIzE3OEJFMyksIHRvKCMwRjQ3NjMpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzc0RkZEQSwgIzE3OEJFMyA0MiUsICMwRjQ3NjMpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzc0RkZEQSwgIzE3OEJFMyA0MiUsICMwRjQ3NjMpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3NEZGREEsICMxNzhCRTMgNDIlLCAjMEY0NzYzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJsb2ItMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDAlO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICBtaW4td2lkdGg6IDI1dnc7XG4gICAgei1pbmRleDogOTtcbiAgfVxufVxuIl19 */"

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
        // bar.forEach((bar, index) => {
        //   bar.style.width = `0%`;
        //   setTimeout(() => {
        //     const randomTiming = Math.floor((Math.random() * 2) + 2);
        //     console.log(randomTiming);
        //     bar.style.transitionDuration = `${randomTiming}s`;
        //     bar.style.width = `${progress}%`;
        //   }, 1200);
        // })
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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.section-0 .inicio-contendor {\n  text-align: center;\n  position: relative;\n  width: 90%;\n  margin: 0 5%; }\n@media (min-width: 768px) {\n    .section-0 .inicio-contendor {\n      width: auto;\n      margin: unset; } }\n@media (min-width: 1024px) {\n    .section-0 .inicio-contendor {\n      min-width: 50%;\n      width: auto; } }\n.section-0 .inicio-contendor .logo {\n    min-width: 280px; }\n@media (min-width: 768px) {\n      .section-0 .inicio-contendor .logo {\n        min-width: 320px; } }\n@media (min-width: 1024px) {\n      .section-0 .inicio-contendor .logo {\n        width: 60%; } }\n.section-0 .inicio-contendor .descripcion {\n    text-align: left;\n    font-family: \"Oswald\", sans-serif;\n    line-height: 1.7em;\n    padding: 0.8em 0 0 0.5em;\n    color: var(--dark);\n    position: relative; }\n.section-0 .inicio-contendor .descripcion.offset {\n      width: 95%;\n      padding-left: 0%; }\n@media (min-width: 1024px) {\n        .section-0 .inicio-contendor .descripcion.offset {\n          padding-left: 12%;\n          width: unset; } }\n.section-0 .inicio-contendor .descripcion.offset ::before {\n        content: '';\n        position: absolute;\n        width: 40%;\n        height: 2px;\n        top: 0.8em;\n        left: 0%;\n        background: var(--lightBlue); }\n@media (min-width: 1024px) {\n          .section-0 .inicio-contendor .descripcion.offset ::before {\n            left: -2%; } }\n.section-0 .inicio-contendor .descripcion span {\n      color: var(--lightBlue);\n      font-size: 1.1em; }\n.section-0 .inicio-contendor .btn-scroll {\n    position: absolute;\n    cursor: pointer;\n    right: 3%;\n    min-width: 55px;\n    top: 100%;\n    -webkit-animation: opacidad 4s infinite;\n            animation: opacidad 4s infinite; }\n@media (min-width: 768px) {\n      .section-0 .inicio-contendor .btn-scroll {\n        min-width: 65px;\n        right: 1%; } }\n@media (min-width: 1024px) {\n      .section-0 .inicio-contendor .btn-scroll {\n        top: 120%;\n        min-width: 65px;\n        right: 0%; } }\n@media (min-width: 1024px) {\n    .section-0 .inicio-contendor.offSet-right {\n      margin-right: 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDBFQUFZO0FBQ1osMkZBQVk7QUFNWjtFQUNFLGlCQUFRO0VBQ1IsZ0JBQU87RUFDUCxzQkFBYTtFQUNiLGlCQUFRO0VBQ1IsaUJBQVE7RUFDUixnQkFBTztFQUNQLG9CQUFXO0VBQ1gscUJBQVk7RUFDWixpQkFBUTtFQUNSLHFCQUFZO0VBQ1osc0JBQWEsRUFDZDtBQXNDRDs7RUFFRSxVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUl0QjtBQTlCQztJQWlCRjs7TUFXSSxnQkFBZSxFQUVsQixFQUFBO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBUXBCO0FBZkQ7SUFTSSwwQkFBeUIsRUFDMUI7QUFWSDtJQVlJLDRCQUEyQixFQUM1QjtBQUdIO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRTtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBO0VBQ0E7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQTtFQUNBO0lBQ0UsZ0RBQXVDO1lBQXZDLHdDQUF1QztJQUN2QyxhQUFZLEVBQUE7RUFFZDtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBO0VBQ0E7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQTtFQUNBO0lBQ0UsZ0RBQXVDO1lBQXZDLHdDQUF1QztJQUN2QyxhQUFZLEVBQUE7RUFFZDtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBLEVBQUE7QUMvSEY7RUFFSSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixhQUFZLEVBMEViO0FEeENEO0lDdkNGO01BT00sWUFBVztNQUNYLGNBQWEsRUF1RWhCLEVBQUE7QURuQ0Q7SUM1Q0Y7TUFXTSxlQUFjO01BQ2QsWUFBVyxFQW1FZCxFQUFBO0FBL0VIO0lBZ0JNLGlCQUFnQixFQU9qQjtBRGdCSDtNQ3ZDRjtRQWtCUSxpQkFBZ0IsRUFLbkIsRUFBQTtBRHFCSDtNQzVDRjtRQXFCUSxXQUFVLEVBRWIsRUFBQTtBQXZCTDtJQXlCTSxpQkFBZ0I7SUFDaEIsa0NEeEI0QjtJQ3lCNUIsbUJBQWtCO0lBQ2xCLHlCQUEwQjtJQUMxQixtQkFBa0I7SUFDbEIsbUJBQWtCLEVBeUJuQjtBQXZETDtNQWdDUSxXQUFVO01BQ1YsaUJBQWdCLEVBaUJqQjtBRE5MO1FDNUNGO1VBbUNVLGtCQUFpQjtVQUNqQixhQUFZLEVBY2YsRUFBQTtBQWxEUDtRQXVDVSxZQUFXO1FBQ1gsbUJBQWtCO1FBQ2xCLFdBQVU7UUFDVixZQUFXO1FBQ1gsV0R0Q0k7UUN1Q0osU0FBUTtRQUNSLDZCQUE0QixFQUk3QjtBRExQO1VDNUNGO1lBK0NZLFVBQVMsRUFFWixFQUFBO0FBakRUO01Bb0RRLHdCQUF1QjtNQUN2QixpQkFBZ0IsRUFDakI7QUF0RFA7SUF5RE0sbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsVUFBUztJQUNULGdCQUFlO0lBQ2YsVUFBUztJQUNULHdDQUErQjtZQUEvQixnQ0FBK0IsRUFVaEM7QURqQ0g7TUN2Q0Y7UUFnRVEsZ0JBQWU7UUFDZixVQUFTLEVBT1osRUFBQTtBRDVCSDtNQzVDRjtRQW9FUSxVQUFTO1FBQ1QsZ0JBQWU7UUFDZixVQUFTLEVBRVosRUFBQTtBRDVCSDtJQzVDRjtNQTJFUSxrQkFBaUIsRUFHcEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlRBUiBGVUVOVEVTXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwLDcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnMrQ29uZGVuc2VkOjMwMCw0MDAsNTAwLDcwMCcpO1xuXG4kZm9udC1vc3dhbGQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmlyYTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4kb2Zmc2V0OiAwLjhlbTtcbjpyb290IHtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS1kYXJrOiAjMTcxNzE3O1xuICAtLW1pZGRsZURhcms6ICM1NTU1NTU7XG4gIC0tbGlnaHQ6ICNEM0QzRDM7XG4gIC0td2hpdGU6ICNGRkZGRkY7XG4gIC0tYmx1ZTogIzFBODJCNTtcbiAgLS1kYXJrQmx1ZTogIzBGNDc2MztcbiAgLS1saWdodEJsdWU6ICMxNzhCRTM7XG4gIC0tZ3JlZW46ICM1NkZGRDI7XG4gIC0tZGFya0dyZWVuOiAjNDdEMUFDO1xuICAtLWxpZ2h0R3JlZW46ICM3NEZGREE7XG59XG4vLyBNSVhJTlMgUEFSQSBQUk9QSUVEQURFU1xuQG1peGluIHBvcy1kaXNwbGF5LWFic29sdXRvKCR0b3AsICRsZWZ0LCAkcmlnaHQsICRib3R0b20sICR0cmFuc1gsICR0cmFuc1kgLCAkaW5kZXgpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR0b3A7XG4gIGxlZnQ6ICRsZWZ0O1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIHotaW5kZXg6ICRpbmRleDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRyYW5zWCkgdHJhbnNsYXRlWSgkdHJhbnNZKTtcbn1cblxuLy8gTUlYSU5TIFBBUkEgUkVTUE9OU0lWRVxuJHRhYmxldDogNzY4cHg7XG4kZGVza3RvcDogMTAyNHB4O1xuJGRlc2t0b3BMZzogMTI2MHB4O1xuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICBAY29udGVudCA7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBkZXNrdG9wTGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcExnfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbmgxLCBoMiwgaDMsIGg0e1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5we1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbnNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLmFsLXJpZ2h0e1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgJi5hbC1sZWZ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxufVxucC5ib2xke1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2lkYWQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAxNXB4LCA4MHB4KTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDE1cHgsIDgwcHgpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLnNlY3Rpb24tMHtcbiAgLmluaWNpby1jb250ZW5kb3J7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCA1JTtcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46IHVuc2V0O1xuICAgIH1cbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWluLXdpZHRoOiAyODBweDtcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRlc2NyaXBjaW9ue1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1vc3dhbGQ7XG4gICAgICBsaW5lLWhlaWdodDogMS43ZW07XG4gICAgICBwYWRkaW5nOiAkb2Zmc2V0IDAgMCAwLjVlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICYub2Zmc2V0e1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgICAgOjpiZWZvcmV7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgdG9wOiAkb2Zmc2V0O1xuICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgICBsZWZ0OiAtMiU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4tc2Nyb2xsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHJpZ2h0OiAzJTtcbiAgICAgIG1pbi13aWR0aDogNTVweDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGFuaW1hdGlvbjogb3BhY2lkYWQgNHMgaW5maW5pdGU7XG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBtaW4td2lkdGg6IDY1cHg7XG4gICAgICAgIHJpZ2h0OiAxJTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICB0b3A6IDEyMCU7XG4gICAgICAgIG1pbi13aWR0aDogNjVweDtcbiAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm9mZlNldC1yaWdodCB7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<button class=\"hamburger hamburger--spin-r\" type=\"button\" aria-label=\"Menu\" aria-controls=\"navigation\">\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n<section class=\"about-me\">\n  <div class=\"perfil-contenedor\">\n    <div class=\"contenedor--info\">\n      <h2><span>Hi,</span> My name is Camilo Tabares</h2>\n      <p>\n        I'm a UX/UI designer, constantly falling for Javascript scripting code, quantum realities, super powers and all kinds of\n        concepts Marvel's comic histories has given to us along time.\n        <br>\n        I live in Medellin, but one of my main goals is travel all over the world,\n        <br>\n        if you want to contact me, i´m always open to share a delicious cup of\n        <br>\n        colombian coffee...\n        Anyway here you can find my c.v. or you can contact me directly by mail - camilo.tabares.84@gmail.com\n      </p>\n      <a href=\"mailto:email@address.com\">Resume</a>\n      <a href=\"mailto:email@address.com\">Click to email</a>\n    </div>\n    <div class=\"contenedor--imagen\">\n      <div class=\"item-work\" >\n        <div class=\"item-work-wrapper\">\n          <div class=\"info-item\">\n          </div>\n          <img src=\"./assets/foto-perfil.jpg\" alt=\"\">\n          <div class=\"img-bg gradientGuard\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"blob-menu\">\n    <img src=\"./assets/menu-blob.svg\" alt=\"\">\n  </div>\n  <div class=\"bg-menu\"></div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-container/pages/menu/menu.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/landing-container/pages/menu/menu.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\n.hamburger {\n  position: fixed;\n  right: 1px;\n  top: 1px;\n  z-index: 13;\n  outline: none; }\n.about-me {\n  visibility: hidden;\n  position: fixed;\n  z-index: 12;\n  width: 100%;\n  height: 100vh;\n  background: rgba(250, 250, 250, 0.7);\n  opacity: 0;\n  transition: 100ms all ease-in-out 100ms; }\n.about-me .perfil-contenedor {\n    position: relative;\n    z-index: 10;\n    display: flex;\n    padding: 0%;\n    width: 100%;\n    align-items: center;\n    flex-direction: column; }\n@media (min-width: 1024px) {\n      .about-me .perfil-contenedor {\n        flex-direction: row;\n        padding: 0% 15% 0% 0%; } }\n.about-me .perfil-contenedor .contenedor--info, .about-me .perfil-contenedor .contenedor--imagen {\n      padding: 0% 5%;\n      opacity: 0;\n      min-width: 85%;\n      transition: 520ms all cubic-bezier(0.36, 0.55, 0.63, 0.48) 1100ms; }\n@media (min-width: 1024px) {\n        .about-me .perfil-contenedor .contenedor--info, .about-me .perfil-contenedor .contenedor--imagen {\n          min-width: 45%; } }\n.about-me .perfil-contenedor .contenedor--info img, .about-me .perfil-contenedor .contenedor--imagen img {\n        margin: 0 auto; }\n.about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen h2, .about-me .perfil-contenedor .contenedor--imagen p {\n        color: var(--dark);\n        font-size: 0.9em;\n        font-family: \"Fira Sans Condensed\", sans-serif;\n        letter-spacing: 0.5px;\n        font-weight: 300;\n        margin-bottom: 0%; }\n@media (min-width: 768px) {\n          .about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen h2, .about-me .perfil-contenedor .contenedor--imagen p {\n            margin-bottom: 5%; } }\n.about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen p {\n        margin-bottom: 2%;\n        line-height: 1.6em;\n        display: none; }\n@media (min-width: 768px) {\n          .about-me .perfil-contenedor .contenedor--info p, .about-me .perfil-contenedor .contenedor--imagen p {\n            display: block;\n            margin-bottom: 10%; } }\n.about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--imagen h2 {\n        font-family: \"Oswald\", sans-serif;\n        font-size: 2em; }\n@media (min-width: 1024px) {\n          .about-me .perfil-contenedor .contenedor--info h2, .about-me .perfil-contenedor .contenedor--imagen h2 {\n            font-size: 1.5em; } }\n.about-me .perfil-contenedor .contenedor--info h2 span, .about-me .perfil-contenedor .contenedor--imagen h2 span {\n          color: var(--lightBlue);\n          font-size: 1.3em; }\n.about-me .perfil-contenedor .contenedor--info a, .about-me .perfil-contenedor .contenedor--imagen a {\n        display: inline-block;\n        text-decoration: none;\n        color: var(--dark);\n        font-family: \"Fira Sans Condensed\", sans-serif;\n        text-transform: uppercase;\n        border: 2px solid var(--lightBlue);\n        padding: 2% 5%;\n        margin: 0% 3% 0% 0%;\n        transition: 200ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .contenedor--info a:hover, .about-me .perfil-contenedor .contenedor--imagen a:hover {\n          background: var(--lightBlue);\n          color: var(--white); }\n.about-me .perfil-contenedor .contenedor--info {\n      -webkit-transform: translateX(-20px);\n              transform: translateX(-20px);\n      order: 2; }\n@media (min-width: 1024px) {\n        .about-me .perfil-contenedor .contenedor--info {\n          order: 1; } }\n.about-me .perfil-contenedor .contenedor--info.intro {\n        opacity: 1;\n        -webkit-transform: translateX(0px);\n                transform: translateX(0px); }\n.about-me .perfil-contenedor .contenedor--imagen {\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px);\n      order: 1; }\n@media (min-width: 1024px) {\n        .about-me .perfil-contenedor .contenedor--imagen {\n          order: 2; } }\n.about-me .perfil-contenedor .contenedor--imagen.intro {\n        opacity: 1;\n        -webkit-transform: translateX(-20px);\n                transform: translateX(-20px); }\n.about-me .perfil-contenedor .item-work {\n      -webkit-perspective: 30px;\n              perspective: 30px;\n      position: relative;\n      z-index: 10; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper {\n        padding: 11px 12px 9px;\n        margin-bottom: 2%;\n        position: relative;\n        transition: -webkit-transform 0.5s;\n        transition: transform 0.5s;\n        transition: transform 0.5s, -webkit-transform 0.5s;\n        transition: 200ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item {\n          opacity: 0;\n          font-family: \"Oswald\", sans-serif;\n          width: 90%;\n          padding: 0% 2.5%;\n          text-align: center;\n          position: absolute;\n          top: 60%;\n          left: 50%;\n          right: auto;\n          bottom: auto;\n          z-index: 11;\n          -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n          transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item h4,\n          .about-me .perfil-contenedor .item-work .item-work-wrapper .info-item p {\n            margin: 0;\n            color: var(--white); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item h4 {\n            font-size: 1.5em;\n            margin-bottom: 2%; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item p {\n            font-family: \"Fira Sans Condensed\", sans-serif;\n            font-weight: 400;\n            font-size: 0.8em;\n            -webkit-font-smoothing: antialiased; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .info-item p span {\n              display: block;\n              margin-top: 2%; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper img {\n          max-width: 100%;\n          position: relative;\n          z-index: 10;\n          display: block;\n          margin: 0;\n          padding: 0; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper img.icono-work {\n            max-width: 35%;\n            margin-bottom: 5%;\n            margin: 0 auto; }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .img-bg {\n          opacity: 0;\n          position: absolute;\n          z-index: 9;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          width: 100%;\n          height: 100%;\n          -webkit-transform: scale3d(0.9, 0.9, 0.9);\n                  transform: scale3d(0.9, 0.9, 0.9);\n          transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper .img-bg.gradientGuard {\n            background: #0F4763;\n            background: linear-gradient(to bottom, #0F4763 0%, #178BE3 53%, #0F4763 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0F4763', endColorstr='#0F4763', GradientType=0); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover {\n          -webkit-transform: scale3d(1.01, 1.01, 1.01);\n                  transform: scale3d(1.01, 1.01, 1.01);\n          transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover > .info-item {\n            opacity: 1;\n            top: 58%;\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover > .img-bg {\n            opacity: 1;\n            -webkit-transform: scale3d(1, 1, 1);\n                    transform: scale3d(1, 1, 1);\n            transition: 250ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .perfil-contenedor .item-work .item-work-wrapper:hover > img {\n            opacity: 0.4;\n            transition-delay: 2s;\n            transition: 650ms all cubic-bezier(0.36, 0.55, 0.63, 0.48); }\n.about-me .blob-menu {\n    position: absolute;\n    width: 30%;\n    right: 0;\n    top: 5%;\n    z-index: 9;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n    transition: 200ms all ease-in-out 200ms;\n    display: none; }\n@media (min-width: 768px) {\n      .about-me .blob-menu {\n        display: block; } }\n.about-me .bg-menu {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    z-index: 8;\n    opacity: 0;\n    transition: 300ms all ease-in-out 300ms;\n    background: var(--white); }\n.about-me.display {\n    opacity: 1;\n    visibility: visible;\n    transition: 300ms all ease-in-out; }\n.about-me.display > .blob-menu {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n      opacity: 1; }\n.about-me.display > .bg-menu {\n      opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMEVBQVk7QUFDWiwyRkFBWTtBQU1aO0VBQ0UsaUJBQVE7RUFDUixnQkFBTztFQUNQLHNCQUFhO0VBQ2IsaUJBQVE7RUFDUixpQkFBUTtFQUNSLGdCQUFPO0VBQ1Asb0JBQVc7RUFDWCxxQkFBWTtFQUNaLGlCQUFRO0VBQ1IscUJBQVk7RUFDWixzQkFBYSxFQUNkO0FBc0NEOztFQUVFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBSXRCO0FBOUJDO0lBaUJGOztNQVdJLGdCQUFlLEVBRWxCLEVBQUE7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFRcEI7QUFmRDtJQVNJLDBCQUF5QixFQUMxQjtBQVZIO0lBWUksNEJBQTJCLEVBQzVCO0FBR0g7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFO0lBQ0UsOENBQXFDO1lBQXJDLHNDQUFxQztJQUNyQyxXQUNGLEVBQUE7RUFDQTtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFD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QVU7SUFDVix3Q0FBdUM7SUFDdkMseUJBQXdCLEVBQ3pCO0FBek9IO0lBMk9JLFdBQVU7SUFDVixvQkFBbUI7SUFDbkIsa0NBQWlDLEVBUWxDO0FBclBIO01BK09NLGtDQUF5QjtjQUF6QiwwQkFBeUI7TUFDekIsV0FBVSxFQUNYO0FBalBMO01BbVBNLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctY29udGFpbmVyL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElNUE9SVEFSIEZVRU5URVNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjMwMCw0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6MzAwLDQwMCw1MDAsNzAwJyk7XG5cbiRmb250LW9zd2FsZDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4kZm9udC1maXJhOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cbiRvZmZzZXQ6IDAuOGVtO1xuOnJvb3Qge1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLWRhcms6ICMxNzE3MTc7XG4gIC0tbWlkZGxlRGFyazogIzU1NTU1NTtcbiAgLS1saWdodDogI0QzRDNEMztcbiAgLS13aGl0ZTogI0ZGRkZGRjtcbiAgLS1ibHVlOiAjMUE4MkI1O1xuICAtLWRhcmtCbHVlOiAjMEY0NzYzO1xuICAtLWxpZ2h0Qmx1ZTogIzE3OEJFMztcbiAgLS1ncmVlbjogIzU2RkZEMjtcbiAgLS1kYXJrR3JlZW46ICM0N0QxQUM7XG4gIC0tbGlnaHRHcmVlbjogIzc0RkZEQTtcbn1cbi8vIE1JWElOUyBQQVJBIFBST1BJRURBREVTXG5AbWl4aW4gcG9zLWRpc3BsYXktYWJzb2x1dG8oJHRvcCwgJGxlZnQsICRyaWdodCwgJGJvdHRvbSwgJHRyYW5zWCwgJHRyYW5zWSAsICRpbmRleCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgei1pbmRleDogJGluZGV4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xufVxuXG4vLyBNSVhJTlMgUEFSQSBSRVNQT05TSVZFXG4kdGFibGV0OiA3NjhweDtcbiRkZXNrdG9wOiAxMDI0cHg7XG4kZGVza3RvcExnOiAxMjYwcHg7XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgIEBjb250ZW50IDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3BMZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wTGd9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaWRhZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDE1cHgsIDgwcHgpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTVweCwgODBweCk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xuLmhhbWJ1cmdlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDFweDtcbiAgdG9wOiAxcHg7XG4gIHotaW5kZXg6IDEzO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmFib3V0LW1le1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNyk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDEwMG1zIGFsbCBlYXNlLWluLW91dCAxMDBtcztcbiAgLnBlcmZpbC1jb250ZW5lZG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZzogMCUgMTUlIDAlIDAlO1xuICAgIH1cbiAgICAuY29udGVuZWRvci0taW5mbywgLmNvbnRlbmVkb3ItLWltYWdlbiB7XG4gICAgICAgICAgcGFkZGluZzogMCUgNSU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBtaW4td2lkdGg6IDg1JTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiA1MjBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCkgMTEwMG1zO1xuICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0NSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiwgcHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmlyYTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW9zd2FsZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZpcmE7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRCbHVlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlIDUlO1xuICAgICAgICAgICAgbWFyZ2luOiAwJSAzJSAwJSAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBjdWJpYy1iZXppZXIoLjM2LCAuNTUsIC42MywgLjQ4KTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGVuZWRvci0taW5mb3tcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBvcmRlcjoyO1xuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIG9yZGVyOjE7XG4gICAgICB9XG4gICAgICAmLmludHJve1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRlbmVkb3ItLWltYWdlbiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgICBvcmRlcjoxO1xuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgfVxuICAgICAgJi5pbnRybyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0td29yayB7XG4gICAgICAgIHBlcnNwZWN0aXZlOiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtLXdvcmstd3JhcHBlciB7XG4gICAgICAgICAgcGFkZGluZzogMTFweCAxMnB4IDlweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG5cbiAgICAgICAgICAuaW5mby1pdGVtIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtb3N3YWxkO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAlIDIuNSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3MtZGlzcGxheS1hYnNvbHV0byg2MCUsIDUwJSwgYXV0bywgYXV0bywgLTUwJSwgLTUwJSwgMTEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuXG4gICAgICAgICAgICBoNCxcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmlyYTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgICYuaWNvbm8td29yayB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzUlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1iZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuXG4gICAgICAgICAgICAmLmdyYWRpZW50R3VhcmQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEY0NzYzO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMwRjQ3NjMgMCUsICMxNzhCRTMgNTMlLCAjMEY0NzYzIDEwMCUpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMEY0NzYzIDAlLCAjMTc4QkUzIDUzJSwgIzBGNDc2MyAxMDAlKTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzBGNDc2MycsIGVuZENvbG9yc3RyPScjMEY0NzYzJywgR3JhZGllbnRUeXBlPTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDEsIDEuMDEsIDEuMDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGN1YmljLWJlemllciguMzYsIC41NSwgLjYzLCAuNDgpO1xuXG4gICAgICAgICAgICA+LmluZm8taXRlbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRvcDogNTglO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4uaW1nLWJnIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID5pbWcge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDJzO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA2NTBtcyBhbGwgY3ViaWMtYmV6aWVyKC4zNiwgLjU1LCAuNjMsIC40OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgLmJsb2ItbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1JTtcbiAgICB6LWluZGV4OiA5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDIwMG1zIGFsbCBlYXNlLWluLW91dCAyMDBtcztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLmJnLW1lbnV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogODtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlLWluLW91dCAzMDBtcztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIH1cbiAgJi5kaXNwbGF5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsIGVhc2UtaW4tb3V0O1xuICAgID4uYmxvYi1tZW51e1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgID4uYmctbWVudXtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"

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

module.exports = "<section id=\"perfil\" class=\"section-1\">\n  <div class=\"perfil-contenedor\">\n    <div class=\"contenedor--info\">\n      <h1>As a FrontEnd Developer,</h1>\n      <p>\n        <b>I enjoy building web sites that are functional</b>, user friendly and that also satisfy customers needs. My working\n        experience includes the use of several I.T. technologies and scripting languages.\n      </p>\n    </div>\n    <div class=\"contenedor--imagen\">\n        <img src=\"./assets/perfil-icono.svg\" alt=\"\">\n    </div>\n  </div>\n  <img src=\"./assets/perfil-bg.svg\" alt=\"\" class=\"perfil-bg desktop\">\n  <img src=\"./assets/perfil-bg-movil.svg\" alt=\"\" class=\"perfil-bg movil\">\n</section>\n<section id=\"perfil\" class=\"section-2\">\n  <div class=\"perfil-contenedor desc\">\n    <div class=\"contenedor--info invertido\">\n      <h2>Also...</h2>\n      <p>\n        I have a bachelor degree in Graphic Communication but from the beggining I oriented my career\n        <br/>\n        and my university projects around digital strategies based on programs like Flash and Dreamweaver.\n        <br />\n        During my early years as a professional\n        <br />\n        I found myself immersed in the use of ActionScript and that was my first programming experience. Soon\n        after, my knowlege expanded in the use of languages like Javascript(JQUERY - ANGULAR), PHP, HTML and CSS(SASS).\n      </p>\n    </div>\n    <div class=\"contenedor--imagen invertido\">\n      <img src=\"./assets/perfil-idea.svg\" alt=\"\">\n    </div>\n  </div>\n  <img src=\"./assets/perfil-bg-desc.svg\" alt=\"\" class=\"perfil-bg-desc desktop\">\n  <!-- <img src=\"./assets/perfil-bg-desc.svg\" alt=\"\" class=\"perfil-bg-desc movil\"> -->\n</section>\n\n"

/***/ }),

/***/ "./src/app/landing-container/pages/perfil/perfil.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/landing-container/pages/perfil/perfil.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Oswald:300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,700\");\n:root {\n  --black: #000000;\n  --dark: #171717;\n  --middleDark: #555555;\n  --light: #D3D3D3;\n  --white: #FFFFFF;\n  --blue: #1A82B5;\n  --darkBlue: #0F4763;\n  --lightBlue: #178BE3;\n  --green: #56FFD2;\n  --darkGreen: #47D1AC;\n  --lightGreen: #74FFDA; }\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: relative;\n  font-size: 15px;\n  color: var(--dark);\n  font-weight: 400;\n  letter-spacing: 0.5px; }\n@media (min-width: 768px) {\n    html,\n    body {\n      font-size: 18px; } }\nh1, h2, h3, h4 {\n  font-weight: 400;\n  letter-spacing: 0.5px; }\np {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 1.5em; }\nsection {\n  width: 100%;\n  height: auto;\n  min-height: 95vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.al-right {\n    justify-content: flex-end; }\nsection.al-left {\n    justify-content: flex-start; }\np.bold {\n  font-weight: 500; }\n@-webkit-keyframes opacidad {\n  0% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  30% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  40% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  50% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  60% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translate3d(0px, 15px, 80px);\n            transform: translate3d(0px, 15px, 80px);\n    opacity: 0.6; }\n  100% {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    opacity: 1; } }\nsection.section-1,\nsection.section-2 {\n  background: var(--lightBlue); }\n.perfil-contenedor {\n  min-width: 90%;\n  padding-top: 10%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  flex-basis: 48%;\n  flex-shrink: 1; }\n@media (min-width: 1024px) {\n    .perfil-contenedor {\n      flex-direction: row; } }\n@media (min-width: 768px) {\n    .perfil-contenedor .contenedor--info {\n      max-width: 60%;\n      align-self: flex-start; } }\n@media (min-width: 1260px) {\n    .perfil-contenedor .contenedor--info {\n      max-width: 60%; } }\n.perfil-contenedor .contenedor--info h1, .perfil-contenedor .contenedor--info p, .perfil-contenedor .contenedor--info h2 {\n    color: var(--white);\n    font-family: \"Fira Sans Condensed\", sans-serif;\n    font-size: 1em; }\n.perfil-contenedor .contenedor--info h1, .perfil-contenedor .contenedor--info h2 {\n    font-family: \"Oswald\", sans-serif;\n    font-size: 2em; }\n.perfil-contenedor .contenedor--info.invertido {\n    order: 2; }\n@media (min-width: 768px) {\n      .perfil-contenedor .contenedor--info.invertido {\n        max-width: unset;\n        order: 1;\n        align-self: flex-start; } }\n@media (min-width: 768px) {\n      .perfil-contenedor .contenedor--info.invertido {\n        padding-top: 5%;\n        max-width: 55%;\n        order: 2; } }\n.perfil-contenedor .contenedor--info.invertido h2, .perfil-contenedor .contenedor--info.invertido p {\n      text-align: center; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--info.invertido h2, .perfil-contenedor .contenedor--info.invertido p {\n          text-align: right; } }\n.perfil-contenedor .contenedor--imagen {\n    position: relative; }\n@media (min-width: 768px) {\n      .perfil-contenedor .contenedor--imagen {\n        padding: 1% 0%; } }\n.perfil-contenedor .contenedor--imagen img {\n      display: block;\n      z-index: 10;\n      position: relative;\n      padding: 0 5%;\n      width: 250px; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--imagen img {\n          width: 680px; } }\n.perfil-contenedor .contenedor--imagen.invertido {\n      order: 2;\n      padding: 0; }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--imagen.invertido {\n          width: 680px;\n          order: 1; } }\n@media (min-width: 768px) {\n        .perfil-contenedor .contenedor--imagen.invertido img {\n          width: 350px; } }\n.perfil-contenedor.desc {\n    padding-top: 0%; }\n.perfil-bg {\n  position: absolute;\n  width: auto;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  display: none; }\n.perfil-bg.movil {\n    display: block;\n    max-width: 55%;\n    top: -11px; }\n@media (min-width: 768px) {\n    .perfil-bg {\n      max-width: 60vw; }\n      .perfil-bg.desktop {\n        display: block;\n        top: -1px; }\n      .perfil-bg.movil {\n        display: none; } }\nsection.section-2 {\n  align-items: flex-start; }\nimg.perfil-bg-desc {\n  position: absolute;\n  width: auto;\n  left: 0;\n  bottom: 0;\n  z-index: 9;\n  display: none; }\nimg.perfil-bg-desc.movil {\n    display: block;\n    max-width: 55%; }\n@media (min-width: 768px) {\n    img.perfil-bg-desc {\n      max-width: 60vw; }\n      img.perfil-bg-desc.desktop {\n        display: block;\n        bottom: -1px; }\n      img.perfil-bg-desc.movil {\n        display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9jYW1pbG90YWJhcmVzL0Ryb3Bib3gvZW1wcmVzYXMvcG9ydGFmb2xpby1jYW1pbG9UYWJhcmVzL3BvcnRhZm9saW8vc3JjL2FwcC9sYW5kaW5nLWNvbnRhaW5lci9wYWdlcy9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDBFQUFZO0FBQ1osMkZBQVk7QUFNWjtFQUNFLGlCQUFRO0VBQ1IsZ0JBQU87RUFDUCxzQkFBYTtFQUNiLGlCQUFRO0VBQ1IsaUJBQVE7RUFDUixnQkFBTztFQUNQLG9CQUFXO0VBQ1gscUJBQVk7RUFDWixpQkFBUTtFQUNSLHFCQUFZO0VBQ1osc0JBQWEsRUFDZDtBQXNDRDs7RUFFRSxVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUl0QjtBQTlCQztJQWlCRjs7TUFXSSxnQkFBZSxFQUVsQixFQUFBO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBUXBCO0FBZkQ7SUFTSSwwQkFBeUIsRUFDMUI7QUFWSDtJQVlJLDRCQUEyQixFQUM1QjtBQUdIO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRTtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBO0VBQ0E7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQTtFQUNBO0lBQ0UsZ0RBQXVDO1lBQXZDLHdDQUF1QztJQUN2QyxhQUFZLEVBQUE7RUFFZDtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBO0VBQ0E7SUFDRSw4Q0FBcUM7WUFBckMsc0NBQXFDO0lBQ3JDLFdBQ0YsRUFBQTtFQUNBO0lBQ0UsZ0RBQXVDO1lBQXZDLHdDQUF1QztJQUN2QyxhQUFZLEVBQUE7RUFFZDtJQUNFLDhDQUFxQztZQUFyQyxzQ0FBcUM7SUFDckMsV0FDRixFQUFBLEVBQUE7QUMvSEY7O0VBRUUsNkJBQTRCLEVBQzdCO0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGVBQWMsRUEyRWpCO0FEM0NDO0lDeENGO01BVU0sb0JBQW1CLEVBeUV4QixFQUFBO0FEaERDO0lDbkNGO01BY1EsZUFBYztNQUNkLHVCQUFzQixFQW1DekIsRUFBQTtBRExIO0lDN0NGO01Ba0JRLGVBQWMsRUFnQ2pCLEVBQUE7QUFsREw7SUFzQlEsb0JBQW1CO0lBQ25CLCtDRHhCcUM7SUN5QnJDLGVBQWMsRUFDZjtBQXpCUDtJQTJCUSxrQ0Q3QjBCO0lDOEIxQixlQUFjLEVBQ2Y7QUE3QlA7SUErQlEsU0FBUSxFQWtCVDtBRGRMO01DbkNGO1FBaUNVLGlCQUFnQjtRQUNoQixTQUFRO1FBQ1IsdUJBQXNCLEVBY3pCLEVBQUE7QURkTDtNQ25DRjtRQXNDVSxnQkFBZTtRQUNmLGVBQWM7UUFDZCxTQUFRLEVBU1gsRUFBQTtBQWpEUDtNQTJDVSxtQkFBa0IsRUFJbkI7QURaUDtRQ25DRjtVQTZDWSxrQkFBaUIsRUFFcEIsRUFBQTtBQS9DVDtJQW9ETSxtQkFBa0IsRUEyQm5CO0FENUNIO01DbkNGO1FBc0RRLGVBQWMsRUF5QmpCLEVBQUE7QUEvRUw7TUF5RFEsZUFBYztNQUNkLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsY0FBYTtNQUNiLGFBQVksRUFJYjtBRDlCTDtRQ25DRjtVQStEVSxhQUFZLEVBRWYsRUFBQTtBQWpFUDtNQW1FUSxTQUFRO01BQ1IsV0FBVSxFQVVYO0FEM0NMO1FDbkNGO1VBc0VVLGFBQVk7VUFDWixTQUFRLEVBT1gsRUFBQTtBRDNDTDtRQ25DRjtVQTJFWSxhQUFZLEVBRWYsRUFBQTtBQTdFVDtJQWlGTSxnQkFBZSxFQUNoQjtBQUVMO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxTQUFRO0VBQ1IsT0FBTTtFQUNOLFdBQVU7RUFDVixjQUFhLEVBZ0JoQjtBQXRCRDtJQVFNLGVBQWM7SUFDZCxlQUFjO0lBQ2QsV0FBVSxFQUNYO0FENURIO0lDaURGO01BYU0sZ0JBQWUsRUFTcEI7TUF0QkQ7UUFlUSxlQUFjO1FBQ2QsVUFBUyxFQUNWO01BakJQO1FBbUJRLGNBQWEsRUFDZCxFQUFBO0FBR1A7RUFDRSx3QkFBdUIsRUFDeEI7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsUUFBTztFQUNQLFVBQVM7RUFDVCxXQUFVO0VBQ1YsY0FBYSxFQWdCaEI7QUF0QkQ7SUFRTSxlQUFjO0lBQ2QsZUFBYyxFQUVmO0FEdEZIO0lDMkVGO01BYU0sZ0JBQWUsRUFTcEI7TUF0QkQ7UUFlUSxlQUFjO1FBQ2QsYUFBWSxFQUNiO01BakJQO1FBbUJRLGNBQWEsRUFDZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1jb250YWluZXIvcGFnZXMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElNUE9SVEFSIEZVRU5URVNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjMwMCw0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6MzAwLDQwMCw1MDAsNzAwJyk7XG5cbiRmb250LW9zd2FsZDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4kZm9udC1maXJhOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cbiRvZmZzZXQ6IDAuOGVtO1xuOnJvb3Qge1xuICAtLWJsYWNrOiAjMDAwMDAwO1xuICAtLWRhcms6ICMxNzE3MTc7XG4gIC0tbWlkZGxlRGFyazogIzU1NTU1NTtcbiAgLS1saWdodDogI0QzRDNEMztcbiAgLS13aGl0ZTogI0ZGRkZGRjtcbiAgLS1ibHVlOiAjMUE4MkI1O1xuICAtLWRhcmtCbHVlOiAjMEY0NzYzO1xuICAtLWxpZ2h0Qmx1ZTogIzE3OEJFMztcbiAgLS1ncmVlbjogIzU2RkZEMjtcbiAgLS1kYXJrR3JlZW46ICM0N0QxQUM7XG4gIC0tbGlnaHRHcmVlbjogIzc0RkZEQTtcbn1cbi8vIE1JWElOUyBQQVJBIFBST1BJRURBREVTXG5AbWl4aW4gcG9zLWRpc3BsYXktYWJzb2x1dG8oJHRvcCwgJGxlZnQsICRyaWdodCwgJGJvdHRvbSwgJHRyYW5zWCwgJHRyYW5zWSAsICRpbmRleCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgei1pbmRleDogJGluZGV4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0cmFuc1gpIHRyYW5zbGF0ZVkoJHRyYW5zWSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkdHJhbnNYKSB0cmFuc2xhdGVZKCR0cmFuc1kpO1xufVxuXG4vLyBNSVhJTlMgUEFSQSBSRVNQT05TSVZFXG4kdGFibGV0OiA3NjhweDtcbiRkZXNrdG9wOiAxMDI0cHg7XG4kZGVza3RvcExnOiAxMjYwcHg7XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgIEBjb250ZW50IDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGRlc2t0b3BMZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wTGd9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuaDEsIGgyLCBoMywgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbnB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYuYWwtcmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAmLmFsLWxlZnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG59XG5wLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaWRhZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDE1cHgsIDgwcHgpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTVweCwgODBweCk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xuXG5zZWN0aW9uLnNlY3Rpb24tMSxcbnNlY3Rpb24uc2VjdGlvbi0yIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRCbHVlKTtcbn1cbi5wZXJmaWwtY29udGVuZWRvciB7XG4gICAgbWluLXdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWJhc2lzOiA0OCU7XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAuY29udGVuZWRvci0taW5mb3tcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgZGVza3RvcExnIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICB9XG5cbiAgICAgIGgxLCBwLCBoMntcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZpcmE7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgfVxuICAgICAgaDEsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW9zd2FsZDtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICB9XG4gICAgICAmLmludmVydGlkb3tcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgICAgIG1heC13aWR0aDogNTUlO1xuICAgICAgICAgIG9yZGVyOiAyO1xuICAgICAgICB9XG4gICAgICAgIGgyICxwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW5lZG9yLS1pbWFnZW57XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBwYWRkaW5nOiAxJSAwJTtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICB3aWR0aDogNjgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuaW52ZXJ0aWRvIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgd2lkdGg6IDY4MHB4O1xuICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5kZXNjIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgICB9XG59XG4ucGVyZmlsLWJne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYubW92aWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXgtd2lkdGg6IDU1JTtcbiAgICAgIHRvcDogLTExcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBtYXgtd2lkdGg6IDYwdnc7XG4gICAgICAmLmRlc2t0b3B7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICB9XG4gICAgICAmLm1vdmlsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG59XG5zZWN0aW9uLnNlY3Rpb24tMntcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pbWcucGVyZmlsLWJnLWRlc2Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5tb3ZpbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1heC13aWR0aDogNTUlO1xuICAgICAgLy8gdG9wOiAtMTFweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIG1heC13aWR0aDogNjB2dztcbiAgICAgICYuZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICB9XG4gICAgICAmLm1vdmlsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

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

module.exports = __webpack_require__(/*! /Users/camilotabares/Dropbox/empresas/portafolio-camiloTabares/portafolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map