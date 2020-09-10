import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularfullcalendar';

  posts = [];


  calendarOptions: CalendarOptions;

  constructor(private http: HttpClient) { }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: this.posts
      };
    }, 3000);
  }

}
