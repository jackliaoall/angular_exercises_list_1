1. VERY FIRST, YOU NEED TO BELOW COMMAND INTO YOUR ANGULAR 10 APPLICATION:
npm install select2
npm install jquery --save

2. NOW YOU NEED TO ADD BELOW CODE INTO YOUR ANGULAR.JSON FILE:
"styles": [
       "node_modules/select2/dist/css/select2.min.css",
              ...
          ],
"scripts": [
       "node_modules/jquery/dist/jquery.min.js", 
       "node_modules/select2/dist/js/select2.min.js"
              ...
      ]

3. NOW YOU NEED TO ADD BELOW CODE INTO YOUR APP.COMPONENT.TS FILE:
...
declare let $: any;
...
export class AppComponent {
...
   
   ngOnInit() {
    
    $('.js-example-basic-single').select2();
    $('.js-example-basic-single').on("change", function(){
     alert($(this).val());
    });
  }
...
}

4. NOW YOU NEED TO ADD BELOW CODE INTO APP.COMPONENT.HTML FILE:
<select class="js-example-basic-single" name="state" style="width: 150px;">
  <option value="AL">Alabama</option>
  <option value="WY">Wyoming</option>
</select>