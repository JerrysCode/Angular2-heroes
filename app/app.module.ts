//root module:告诉系统如何组装应用
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   //如果要在Form中实现双向绑定，就需要引入才Module
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent }  from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent
  ],
   //告诉Angular创建一个HeroService的实例
   providers:[
       HeroService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

