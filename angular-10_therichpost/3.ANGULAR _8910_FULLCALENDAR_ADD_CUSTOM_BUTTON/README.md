1. VERY FIRST, YOU NEED TO ADD FULLCALENDAR INTO YOUR ANGULAR APPLICATION AND FOR THIS, PLEASE FOLLOW BELOW TUTORIAL LINK:
Implement FullCalendar into Angular 8/9/10

2.AFTER FOLLOW THE PROPERLY POINT NUMBER 1, OPEN YOUR APP.COMPONENT.TS FILE AND ADD BELOW CODE INTO IT:
export class AppComponent {
  ...
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
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
