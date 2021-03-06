/**
 * Created by Administrator on 2016/12/2.
 */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit{
    heroes: Observable<Hero[]>;

    //Subject是一个可观察的事件流中的生产者。生成一个产生字符串的Observable
    private  searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ){}

    search(term: string): void{
            this.searchTerms.next(term);
    }

    //如果直接把每一次用户按键都直接传给HeroSearchService，就会发起一场HTTP请求风暴
    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)  //等待300ms
            .distinctUntilChanged()  //如果没变化，不搜索
            //switchMap会为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。它会取消并丢弃以前的搜索可观察对象，只保留最近的
            .switchMap(term => term
                ? this.heroSearchService.search(term)
                : Observable.of<Hero[]>([])
            )
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);

            });
    }

    gotoDetail(hero: Hero): void{
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}