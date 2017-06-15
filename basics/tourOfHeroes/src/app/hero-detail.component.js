"use strict";
var _this = this;
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_service_1 = require("./hero.service");
require("rxjs/add/operator/switchMap");
constructor(private, heroService, hero_service_1.HeroService, private, route, router_1.ActivatedRoute, private, location, common_1.Location);
{ }
ngOnInit();
void {
    this: .route.params.switchMap(function (params) { return _this.heroService.getHero(+params['id']); }).subscribe(function (hero) { return _this.hero = hero; })
};
//# sourceMappingURL=hero-detail.component.js.map