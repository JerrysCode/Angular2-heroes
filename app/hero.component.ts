import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

/*根组件
 * @Component最重要的作用是通过selector属性（值为CSS选择符），指定这个组件渲染到哪个DOM对象上。
 * @View最重要的作用是通过template属性，指定渲染的模板。
 * */

@Component({
    //文件引用方式，moduleId是必须的
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'hero.component.html',
    styleUrls: [ 'hero.component.css']


})
export class HeroesComponent implements OnInit{
    heros : Hero[];
    selectedHero : Hero;

    //定义构造函数的同时，定义了一个私有变量，这个变量会被注入值
    constructor(
        private heroService: HeroService,
        private router: Router){

    }

    //实现OnInit接口，Component初始化的时候回调用
    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero:Hero): void{
        this.selectedHero = hero;
    }

    getHeroes(): void{
        //Promise数据异步调用，当heroService.getHeroes()执行完毕时，执行then里面的callback方法
        this.heroService.getHeroes().then(heroes =>this.heros = heroes);
    }

    gotoDetail():void{
        //和[routerLink]绑定是一样的
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: String): void{
        name = name.trim();
        if(!name){return;}
        this.heroService.create(name)
             .then(hero => {
             this.heros.push(hero);
             this.selectedHero = null;
            })
    }

    delete(hero: Hero){
            this.heroService.delete(hero.id)
                .then(() => {
                    this.heros = this.heros.filter(h => h!=hero);
                    if(this.selectedHero==hero){
                        this.selectedHero = null;
                    }
                });
    }

}
