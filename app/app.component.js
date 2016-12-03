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
var core_1 = require("@angular/core");
/**
 * Created by Administrator on 2016/11/28.
 */
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n            <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n        </nav>\n        <!--\u52A0\u4E86\u8FD9\u4E00\u53E5\uFF0C\u5C31\u53EF\u4EE5\u628A\u8DEF\u7531\u5668\u8DF3\u8F6C\u7684\u5185\u5BB9\u663E\u793A\u5728\u8FD9\u91CC-->\n        <router-outlet></router-outlet>\n        ",
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map