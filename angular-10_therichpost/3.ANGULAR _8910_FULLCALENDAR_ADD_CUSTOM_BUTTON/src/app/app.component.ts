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

  calendarOptions: CalendarOptions = {
      customButtons: {
        myCustomButton: {
        text: 'Add Event',
        click: function() {
              alert("Custom Button");
          }
        }
      },
      headerToolbar: {
      right: 'today prev,next',
      left: 'title',
      center:'myCustomButton'
    },
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  }

  constructor(private http: HttpClient) { }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  ngOnInit(): void { }

}
