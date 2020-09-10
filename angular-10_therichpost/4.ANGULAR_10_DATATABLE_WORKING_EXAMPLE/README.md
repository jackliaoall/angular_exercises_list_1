1. HERE ARE THE BASICS COMMANDS, YOU NEED TO RUN FOR LATEST ANGULAR 10 SETUP AND ENVIRONMENT:
$ ng new angulardatatables
$ cd angulardatatables

2. HERE ARE THE BASICS COMMANDS, YOU NEED TO RUN INTO YOUR TERMINAL FOR DATATABLE AND ITS DEPENDENCIES:
npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
npm install bootstrap --save

3. AFTER DONE WITH COMMANDS ADD BELOW CODE INTO YOU ANGULAR.JSON FILE:
...
"styles": [
              "src/styles.css",
              "node_modules/datatables.net-dt/css/jquery.dataTables.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
            ],
            "scripts": [
            "node_modules/jquery/dist/jquery.js",
            "node_modules/datatables.net/js/jquery.dataTables.js",
            "node_modules/bootstrap/dist/js/bootstrap.js",
            ]
...

4. NOW ADD BELOW CODE INTO YOUR APP.MODULE.TS FILE:
...
import {DataTablesModule} from 'angular-datatables';
...
imports: [
...
DataTablesModule
]

5. NOW ADD BELOW CODE INTO APP.COMPONENT.TS FILE:
...
export class AppComponent {
...
public data = [
    {name: 'Ajay', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  ];
dtOptions: any = {};
ngOnInit(){
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}
}

6. NOW ADD BELOW CODE INTO APP.COMPONENT.HTML FILE:
<table class="table table-striped table-bordered table-sm row-border hover" datatable [dtOptions]="dtOptions">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let group of data">
         <td>{{group.name}}</td>
         <td>{{group.email}}</td>
         <td>{{group.website}}</td>
     </tr>
  </tbody>
</table>
