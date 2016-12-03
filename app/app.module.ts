//root module:告诉系统如何组装应用
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   //如果要在Form中实现双向绑定，就需要引入才Module
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent }  from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent,
      HeroSearchComponent
  ],
   //告诉Angular创建一个HeroService的实例
   providers:[
       HeroService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

