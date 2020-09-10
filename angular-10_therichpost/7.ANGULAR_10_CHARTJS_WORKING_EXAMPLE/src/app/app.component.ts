import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular10chartjs';

  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;

  ngOnInit(){
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
