import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  ngOnInit(): void {
    $('.js-example-basic-single').select2();
    $('.js-example-basic-single').on('change', function(){
     alert($(this).val());
    });
  }
}
