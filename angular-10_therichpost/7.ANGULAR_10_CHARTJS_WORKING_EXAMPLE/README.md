1. HERE ARE THE BASICS COMMANDS, YOU NEED TO USE INTO YOUR TERMINAL OR COMMAND PROMPT TO INSTALL ANGULAR 10  FRESH SET UP:
$ ng new angular10chartjs //Install New Angular App
$ cd angular10chartjs //Go inside the Angular 10 

2. AFTER INSTALL ANGULAR 10  FRESH SETUP AND GO INSIDE THE ANGULAR 10 SETUP, RUN BELOW COMMAND INTO YOUR TERMINAL TO INSTALL CHARTJS MODULE AND BOOTSTRAP:
npm install --save chart.js
npm install bootstrap --save

3. AFTER DONE WITH COMMANDS ADD BELOW CODE INTO YOU ANGULAR.JSON FILE:
...
"styles": [
              ...
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
             
            ],
            "scripts": [
           ...
            "node_modules/bootstrap/dist/js/bootstrap.js",
            
            ]
...

4. AFTER ALL ABOVE SETUP, HERE IS CODE, YOU NEED TO ADD INTO YOUR APP.COMPONENT.TS FILE:
...
import * as Chart from 'chart.js';
export class AppComponent {
canvas:any; ctx:any; canvas2:any; ctx2:any; canvas3:any; ctx3:any;
...
ngOnInit(){
...
this.canvas = document.getElementById('myChart');
this.canvas2 = document.getElementById('myChart2');
this.canvas3 = document.getElementById('myChart3');
this.ctx = this.canvas.getContext('2d');
this.ctx2 = this.canvas2.getContext('2d');
  this.ctx3 = this.canvas3.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["Angular 10", "Angular 9", "Angular 8"],
          datasets: [{
              label: 'Active Angular Vesrions',
              data: [85, 100, 60],
              backgroundColor: ["red","blue", "orange"],
              borderWidth: 1
          }]
      },
      options: {
    legend: {
        display: true
    },
        responsive: true,
        display:true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
      }
    });
  
  let myChart2 = new Chart(this.ctx2, {
      type: 'pie',
      data: {
          labels: ["Angular 10", "Angular 9", "Angular 8"],
          datasets: [{
              label: 'Active Angular Vesrions',
              data: [85, 100, 60],
              backgroundColor: ["red","blue", "orange"],
              borderWidth: 1
          }]
      },
      options: {
    legend: {
        display: true
    },
        responsive: true,
        display:true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
      }
    });
  
  let myChart3 = new Chart(this.ctx3, {
      type: 'line',
      data: {
          labels: ["Angular 10", "Angular 9", "Angular 8"],
          datasets: [{
              label: 'Active Angular Vesrions',
              data: [85, 100, 60],
              backgroundColor: ["red","blue", "orange"],
              borderWidth: 1
          }]
      },
      options: {
    legend: {
        display: true
    },
        responsive: true,
        display:true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
      }
    });
}
}

5. Now add below code into your app.component.html file:
<div class="container mt-5 mb-5">
<canvas id="myChart" width="1200px" height="400"></canvas>
<canvas class="mt-5" id="myChart2" width="1200px" height="400"></canvas>
<canvas class="mt-5" id="myChart3" width="1200px" height="400"></canvas>
</div>