1. VERY FIRST, HERE ARE COMMON BASICS STEPS TO ADD ANGULAR 9 APPLICATION ON YOUR MACHINE:
ng new angularfullcalendar
cd angularfullcalendar

2. NOW RUN BELOW COMMANDS TO SET FULLCALENDAR MODULES INTO YOUR ANGULAR 9 APPLICATION:
npm install --save @fullcalendar/angular @fullcalendar/daygrid
npm i @fullcalendar/interaction

3.NOW ADD BELOW CODE INTO YOUR APP.MODULE.TS FILE:
...
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
...
  imports: [
    ...
  FullCalendarModule 
  ],
...

4.NOW ADD BELOW CODE INTO YOUR APP.COMPONENT.TS FILE:
...
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
export class AppComponent {
  ...
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}

5.FINALLY ADD BELOW CODE INTO YOUR APP.COMPONENT.HTML FILE:
<full-calendar [options]="calendarOptions"></full-calendar>
