import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../domain/hero';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private api_url;
  private headers;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/heroes';
    this.headers = apiService.getHeaders();
}

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  getHeroes(): Promise<Hero[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => JSON.parse(JSON.stringify(res)).data as Hero[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

  getHeroById(id: number): Promise<Hero> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => JSON.parse(JSON.stringify(res)).data as Hero)
        .catch(this.handleError);
  }

  // 新建Hero
  createHero(hero: Hero): Promise<Hero> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(res => JSON.parse(JSON.stringify(res)).data as Hero)
      .catch(this.handleError);
  }

  // 按name新建Hero
  createHeroByName(name: string): Promise<Hero> {
    let hero = {
      name: name
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(res => JSON.parse(JSON.stringify(res)).data as Hero)
      .catch(this.handleError);
  }

  // 修改Hero
  updateHero(hero: Hero): Promise<Hero> {
    const url = `${this.api_url}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(res => JSON.parse(JSON.stringify(res)).data as Hero)
      .catch(this.handleError);
  }

  // 删除某个Hero
  deleteHero(hero: Hero): Promise<void> {
    const url = `${this.api_url}/${hero.id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // 按id删除某个Hero
  deleteHeroById(id: number): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
