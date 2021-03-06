"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({ selector: 'my-app', template: " <h1>{{title}}</h1> <nav> <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a> <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a> </nav> <router-outlet></router-outlet> ", styleUrls: ['./app.component.css'] })
], AppComponent);
exports.AppComponent = AppComponent;
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var hero_detail_component_1 = require("./hero-detail.component");
var heroes_component_1 = require("./heroes.component");
var hero_service_1 = require("./hero.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.Component({ selector: 'my-dashboard', templateUrl: './templates/dashboard.component.html', }),
    core_2.NgModule({ imports: [platform_browser_1.BrowserModule, forms_1.FormsModule], declarations: [AppComponent, hero_detail_component_1.HeroDetailComponent, heroes_component_1.HeroesComponent], providers: [hero_service_1.HeroService], bootstrap: [AppComponent] })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.component.js.map