/**
 * Created by Administrator on 2016/11/27.
 */
import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HEROS} from './mock-heroes'

//@Injectable表示class可能以来其他的服务的注入
@Injectable()
export class HeroService{
    //Promise表示异步调用
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROS);
    }

    getHero(id: number): Promise<Hero>{
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id==id));
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
}