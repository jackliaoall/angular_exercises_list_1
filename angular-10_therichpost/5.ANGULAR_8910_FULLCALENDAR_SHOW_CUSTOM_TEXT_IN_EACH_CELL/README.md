1. VERY FIRST, HERE ARE COMMON BASICS STEPS TO ADD ANGULAR 10 APPLICATION ON YOUR MACHINE:
ng new angularfullcalendar // Set Angular 10 Application on your pc
cd angularfullcalendar

2. NOW RUN BELOW COMMANDS TO SET FULLCALENDAR MODULES MODULES INTO YOUR ANGULAR 10 APPLICATION:
npm install --save @fullcalendar/angular @fullcalendar/daygrid
npm i @fullcalendar/interaction

3. ADD BELOW CODE INTO YOUR APP.MODULE.TS FILE:
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

 4. NOW ADD BELOW CODE INTO YOUR APP.COMPONENT.TS FILE:
 ...
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
export class AppComponent {
  ...
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dayCellContent: this.handleDayRender.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  };handleDayRender(arg)
  {
     let customHtml = "Therichpost";
     let mystring = arg.dayNumberText;
     return mystring+customHtml;
  }
}

5. NOW ADD BELOW CODE INTO APP.COMPONENT.HTML FILE:
<full-calendar [options]="calendarOptions"></full-calendar>
