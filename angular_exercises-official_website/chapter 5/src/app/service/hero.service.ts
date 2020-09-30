import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../domain/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
