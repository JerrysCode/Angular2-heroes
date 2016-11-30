/**
 * Created by Administrator on 2016/11/30.
 */
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }  from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';

//路由抽取到一个变量中
const routes: Routes = [
    //如果路径匹配heroes,则创建HeroesComponent
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    //带参数的路由定义
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    //如果path为‘’，则跳转到/dashboard
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports:      [
        RouterModule.forRoot(routes)
    ],
    exports:[ RouterModule]

})
export class AppRoutingModule { }
