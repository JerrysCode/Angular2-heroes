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
/**
 * Created by Administrator on 2016/12/2.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var hero_search_service_1 = require('./hero-search.service');
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        //Subject是一个可观察的事件流中的生产者。s生成一个产生字符串的Observable
        this.searchTerms = new Subject_1.Subject();
    }
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    //如果直接把每一次用户按键都直接传给HeroSearchService，就会发起一场HTTP请求风暴
    HeroSearchComponent.prototype.ngOnInit = function () {
        /* this.heroes = this.searchTerms
             .debounceTime(300)  //等待300ms
             .distinctUntilChanged()  //如果没变化，不搜索
             //switchMap会为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。它会取消并丢弃以前的搜索可观察对象，只保留最近的
             .switchMap(term =>
                 term ? this.heroSearchService.search(term)
                     : Observable.of<Hero[]>([]))
             .catch(error =>{
                     console.log(error);
                     return Observable.of<Hero[]>([]);
             });*/
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.heroSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-search',
            templateUrl: 'hero-search.component.html',
            styleUrls: ['hero-search.component.css'],
            providers: [hero_search_service_1.HeroSearchService]
        }), 
        __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map