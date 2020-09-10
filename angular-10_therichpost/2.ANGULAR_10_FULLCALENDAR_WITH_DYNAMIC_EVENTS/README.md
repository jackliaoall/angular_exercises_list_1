1. NOW RUN BELOW COMMANDS TO SET FULLCALENDAR MODULES INTO YOUR ANGULAR 10 APPLICATION:
npm install --save @fullcalendar/angular @fullcalendar/daygrid
npm i @fullcalendar/interaction

2. NOW YOU NEED TO ADD BELOW CODE INTO YOUR APP.MODULE.TS FILE:
...
import { HttpClientModule } from '@angular/common/http';
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
        BrowserModule,
  FullCalendarModule,
  HttpClientModule
  ]
...

3.NOW YOU NEED TO ADD BELOW CODE INTO YOUR APP.COMPONENT.TS FILE:
...
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { HttpClient } from '@angular/common/http';
...
export class AppComponent {
  ...
  posts = [];
  calendarOptions: CalendarOptions;
  constructor(private http: HttpClient) { }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(){
  setTimeout(() => {
        //Api call to get data from php file
  return this.http.get('http://localhost/mypage.php').subscribe(data => {
       this.posts.push(data);
       console.log(this.posts);
  });
  }, 2000);
  setTimeout(() => {
     this.calendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.posts
    };
  }, 3000);
       
   }
}

4.NOW YOU NEED TO ADD BELOW CODE INTO YOUR APP.COMPONENT.HTML FILE:
<full-calendar [options]="calendarOptions"></full-calendar>

5.FINALLY HERE IS THE CODE FOR MYPAGE.PHP FILE:
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$events = array('title' => 'This is your','start' => '2020-06-29');
echo json_encode($events);
