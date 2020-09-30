import { HeroService } from './../service/hero.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../domain/hero';
//import { HEROES } from '../mock-heroes'; <== 删掉此行

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {

  constructor(private heroService: HeroService) { } //增加了heroService

  title = '';

  /*hero: Hero = {
    id: 1,
    name: 'The Monkey King',
    desc: 'I can fly!'
  };*/

  //heroes = HEROES;
  heroes: Hero[]; //原来是：heroes = HEROES;
  selectedHero: Hero;

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
