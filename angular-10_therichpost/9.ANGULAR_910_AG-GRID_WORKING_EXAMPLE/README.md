1. HERE ARE THE BASICS COMMANDS, YOU NEED TO USE INTO YOUR TERMINAL OR COMMAND PROMPT TO INSTALL ANGULAR 10  FRESH SET UP:
ng new angular10grid //Install New Angular App
cd angular10grid

2. AFTER INSTALL ANGULAR 10  FRESH SETUP AND GO INSIDE THE ANGULAR 10 SETUP, RUN BELOW COMMAND INTO YOUR TERMINAL TO INSTALL AG-GRID MODULE AND BOOTSTRAP:
npm install --save ag-grid-community ag-grid-angular
npm install bootstrap --save

3. AFTER DONE WITH COMMANDS ADD BELOW CODE INTO YOU ANGULAR.JSON FILE:
...
"styles": [
              ...
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/ag-grid-community/dist/styles/ag-grid.css",
        "node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.min.css",
           ],
"scripts": [
               ...
               "node_modules/bootstrap/dist/js/bootstrap.js",
            
            ]
...

4. ADD BELOW CODE INSIDE YOUR APP.MODULE.TS FILE:
...
import { AgGridModule } from 'ag-grid-angular';
...
imports: [
...
AgGridModule.withComponents([]),
]

5. ADD BELOW CODE INSIDE YOUR APP.COMPONENT.TS FILE:
export class AppComponent {
  ...
  columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true },
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];
    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
}

6. FINALLY ADD BELOW CODE INSIDE YOUR APP.COMPONENT.HTML FILE:
<div class="container mt-5 mb-5">
<ag-grid-angular
    style="width: 620px; height: 300px;" 
  class="ag-theme-balham-dark"
    [rowData]="rowData"
    [columnDefs]="columnDefs"
    >
</ag-grid-angular>
</div>