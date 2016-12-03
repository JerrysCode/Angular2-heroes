"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var router_1 = require("@angular/router");
/*根组件
 * @Component最重要的作用是通过selector属性（值为CSS选择符），指定这个组件渲染到哪个DOM对象上。
 * @View最重要的作用是通过template属性，指定渲染的模板。
 * */
var HeroesComponent = (function () {
    //定义构造函数的同时，定义了一个私有变量，这个变量会被注入值
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    //实现OnInit接口，Component初始化的时候回调用
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //Promise数据异步调用，当heroService.getHeroes()执行完毕时，执行then里面的callback方法
        this.heroService.getHeroes().then(function (heroes) { return _this.heros = heroes; });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        //和[routerLink]绑定是一样的
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heros.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id)
            .then(function () {
            _this.heros = _this.heros.filter(function (h) { return h != hero; });
            if (_this.selectedHero == hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            //文件引用方式，moduleId是必须的
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'hero.component.html',
            styleUrls: ['hero.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=hero.component.js.map