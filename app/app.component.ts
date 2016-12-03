import {Component} from "@angular/core";
/**
 * Created by Administrator on 2016/11/28.
 */
@Component(
    {
        moduleId: module.id,
        selector: 'my-app',
        template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <!--加了这一句，就可以把路由器跳转的内容显示在这里-->
        <router-outlet></router-outlet>
        `,
        styleUrls:['app.component.css'],
    }

)
export class AppComponent{
    title = 'Tour of Heroes';
}