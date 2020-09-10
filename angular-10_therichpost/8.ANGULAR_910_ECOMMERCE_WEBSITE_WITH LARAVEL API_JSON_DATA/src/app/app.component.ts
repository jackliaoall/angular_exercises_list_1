import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'angularshop';

  data = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getPosts().subscribe((ret: any[]) => {
          setTimeout(() => {
        this.data = ret;
        }, 3000);
        });
    }

  therichpost_close(): void {

  }
}
