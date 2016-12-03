/**
 * Created by Administrator on 2016/11/27.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero'

//@Injectable表示class可能以来其他的服务的注入
@Injectable()
export class HeroService{
    private  heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    //Promise表示异步调用
    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
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

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    /*
     Http服务中的每个方法都返回一个HTTP Response对象的Observable实例,
     把Observable对象转换成了Promise，返回给调用者
     */
    update(hero: Hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: String) {
        return this.http.post(this.heroesUrl,
            JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);

    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}