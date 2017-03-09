import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [HeroService]
})
export class DashboardComponent implements OnInit{
    constructor(private heroService: HeroService){}

    heroes : Hero[] = [];
    ngOnInit():void{
        this.heroService.getHeroes()
            .then(resolved_heroes=>this.heroes = resolved_heroes.slice(1,5));
    }
    
}