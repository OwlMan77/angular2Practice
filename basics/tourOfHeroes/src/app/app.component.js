"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// Hero class
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [{ id: 11, name: 'Mr. Nice' }, { id: 12, name: 'Narco' }, { id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }, { id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }, { id: 17, name: 'Dynama' }, { id: 18, name: 'Dr IQ' }, { id: 19, name: 'Magma' }, { id: 20, name: 'Tornado' }];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = { id: 1, name: 'Windstorm' };
        this.heroes = HEROES;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <h1>{{title}}</h1> <h2>{{hero.name}} details!</h2> <div><label>id: </label>{{hero.id}}</div><div><label>name: </label><input [(ngModel)]=\"hero.name\" placeholder=\"name\"></div><h2>My Heroes</h2> <ul class=\"heroes\"> <li *ngFor=\"let hero of heroes\"> <span class=\"badge\">{{hero.id}}</span> {{hero.name}} </li> </ul>\n",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map