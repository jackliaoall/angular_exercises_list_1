1. FIRSTLY FRIENDS WE NEED FRESH ANGULAR 10 SETUP AND FOR THIS WE NEED TO RUN BELOW COMMANDS BUT IF YOU ALREADY HAVE ANGULAR 10 SETUP THEN YOU CAN AVOID BELOW COMMANDS. SECONDLY WE SHOULD ALSO HAVE LATEST NODE VERSION INSTALLED ON OUR SYSTEM:
ng new parentchild //Create new Angular Project
cd parentchild

2. NOW FRIENDS, HERE WE NEED TO RUN BELOW COMMANDS INTO OUR PROJECT TERMINAL TO INSTALL BOOTSTRAP(GOOD RESPONSIVE LOOKS) AND JQUERY MODULES INTO OUR ANGULAR APPLICATION:
npm i --save bootstrap
npm i jquery --save
npm i popper.js --save

3. NOW FRIENDS, HERE WE NEED TO ADD BELOW  INTO OUR ANGULAR.JSON FILE:
"styles": [
             ...
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
      "node_modules/jquery/dist/jquery.min.js", 
      "node_modules/bootstrap/dist/js/bootstrap.min.js",  
      "node_modules/popper.js/dist/umd/popper.min.js"]

4. AFTER DONE WITH THE POINT 1 AND POINT 2, YOU NEED TO RUN BELOW COMMANDS TO CREATE NEW PARENT, CHILD COMPONENTS INTO YOUR ANGULAR 10 APPLICATION:
ng g c parent
ng g c parent/child

5. NOW FRIENDS, WE NEED TO ADD BELOW CODE INTO OUR PROJECT SRC/APP/APP-ROUTING.MODULE.TS FILE TO MAKE PARENT CHILD COMPONENT ROUTING:
...
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'parent', component: ParentComponent,
  children:[
    { path: 'child', component:ChildComponent }
  ]
}
];
...

6. NOW FRIENDS WE JUST NEED TO ADD BELOW CODE INTO SRC/APP/APP.COMPONENT.HTML FILE TO GET FINAL OUT ON THE WEB BROWSER:
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" [routerLink]="['']">Therihpost</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" [routerLink]="['']">Home
          </a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['parent']">Parent</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['parent/child']">Child</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Page Content -->
<div class="container mt-5">
  <!-- Heading Row -->
  <div class="row align-items-center my-5 mt-5">
    <div class="col-lg-12">
      <h1 class="font-weight-light">Therichpost.com</h1>
      Therichpost.com Therichpost.com Therichpost.com Therichpost.com
      Therichpost.com Therichpost.com Therichpost.com Therichpost.com
    </div>
    <!-- /.col-lg-8 -->
    
  </div>
  <!-- /.row -->
  <div class="row align-items-center my-5 mt-5">
    <h2 class="font-weight-light"><router-outlet></router-outlet></h2>
  </div>
 
</div>
<!-- /.container -->

7. NOW FRIENDS WE JUST NEED TO ADD BELOW CODE INTO SRC/APP/PARENT/PARENT.COMPONENT.HTML FILE:
<h3 class="font-weight-bold">parent works!</h3>
<!--Inside below router, child component data will be shown -->
<h4 class="font-weight-light"><router-outlet></router-outlet></h4>

8.app.module.ts
import { RouterModule } from '@angular/router';

imports: [
    ...
    RouterModule
  ],
