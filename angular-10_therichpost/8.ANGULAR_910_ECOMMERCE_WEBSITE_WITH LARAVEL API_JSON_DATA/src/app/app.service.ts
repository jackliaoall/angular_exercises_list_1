import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getPosts()
  {
      //Here will your laravel project api path
      return this.http.get("http://localhost/blog/public/api/sample-restful-apis");
  }
}
