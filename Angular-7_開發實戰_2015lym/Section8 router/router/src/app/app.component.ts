import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-router';

  constructor(private router: Router) {}

  routerToC() {
    this.router.navigate(['/C']);
  }
}
