import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {Hero} from './hero'
import {HeroService} from './hero.service'

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
