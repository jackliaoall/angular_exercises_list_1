import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfullcalendar';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dayCellContent: this.handleDayRender.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  };

  handleDayRender(arg): string
  {
     let customHtml = 'Therichpost';
     let mystring = arg.dayNumberText;
     return mystring + customHtml;
  }
}
