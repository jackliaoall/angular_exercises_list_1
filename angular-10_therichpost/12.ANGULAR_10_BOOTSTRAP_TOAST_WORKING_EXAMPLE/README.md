1. HERE ARE THE BASICS COMMANDS TO INSTALL ANGULAR 10 ON YOUR SYSTEM:
ng new angularpopup //Create new Angular Project
cd angularpopup

2. AFTER DONE WITH ABOVE, YOU NEED TO RUN BELOW COMMANDS TO SET BOOTSTRAP ENVIRONMENT INTO YOUR ANGULAR 10 APPLICATION:
npm install --save bootstrap
npm install jquery --save
npm install --save @types/jquery
npm install popper.js --save

3. NOW YOU NEED TO ADD BELOW CODE INTO YOUR ANGULAR.JSON FILE:
...
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
"scripts": ["node_modules/jquery/dist/jquery.min.js", 
              "node_modules/popper.js/dist/umd/popper.min.js", 
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
           ]
...

4. NOW YOU NEED TO ADD BELOW CODE INTO YOUR SRC/APP/APP.COMPONENT.TS FILE:
import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
      $(".showtoast").click(function(){
    $('.toast').toast('show');
    })
  }
}

5. NOW YOU NEED TO ADD BELOW CODE INTO SRC/APP/APP.COMPONENT.HTML FILE:
<button class="btn btn-primary showtoast">Show Toast</button>
<div class="toast">
  <div class="toast-header">
    Toast Header
  </div>
  <div class="toast-body">
    Some text inside the toast body
  </div>
</div>