import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit{ 
  constructor(
    private heroService: HeroService,
    private router: Router
    ){}
  ngOnInit():void{
    this.getHeroes();
  }
  
  /*hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  selectedHero: Hero
  heroes: Hero[];

  //heroes = this.heroService.getHeroes(); // way 1

  getHeroes(): void{
    //this.heroService.getHeroesSlowly().then(resolved_heroes => this.heroPromiseSolve(resolved_heroes)) // resolved_heroes is Hero array after resolve Promise
    this.heroService.getHeroes().then(resolved_hero => this.heroes = resolved_hero);
}

  /*heroPromiseSolve(resolved_heroes: Hero[]):void{
    this.heroes = resolved_heroes
  }*/
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}
