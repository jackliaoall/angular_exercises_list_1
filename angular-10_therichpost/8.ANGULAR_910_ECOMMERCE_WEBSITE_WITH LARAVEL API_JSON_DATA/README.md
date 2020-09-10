1. HERE ARE THE BASICS COMMANDS, YOU NEED TO USE INTO YOUR TERMINAL OR COMMAND PROMPT TO INSTALL ANGULAR  FRESH SET UP:
$ ng new angularshop //Install New Angular App
$ cd angularshop

3. NOW CREATE NEW APP.SERVICE.TS FILE INSIDE ANGULARSHOP/SRC/APP FOLDER AND ADD BELOW CODE INSIDE IT:
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
@Injectable()
export class appService { 
constructor(private http:HttpClient) { }
public getPosts()
    {
        //Here will your laravel project api path
  return this.http.get("http://localhost/blog/public/api/sample-restful-apis");
    }
}

4. NOW ADD BELOW CODE INSIDE YOUR  ANGULARSHOP/SRC/APP/APP.MODULE.TS FILE:
...
import { HttpClientModule } from '@angular/common/http';
...
imports: [
          ...
          HttpClientModule 
         ],

5. ADD BELOW CODE INSIDE YOU ANGULARSHOP/SRC/APP/APP.COMPONENT.TS FILE:
...
import { appService } from './app.service'; 
@Component({
  ...
  providers: [appService]
})
export class AppComponent {
...
data = [];
constructor(private appservice: appService) {} 
...
ngOnInit() {
...
this.appservice.getPosts().subscribe((ret: any[])=>{
      setTimeout(()=>{    
    this.data = ret;
    
    }, 3000);
      
    })
}

6.ADD FRESH BELOW CODE  INTO YOUR ANGULARSHOP/SRC/APP/APP.COMPONENT.HTML FILE:
<!-- Sidebar/menu -->
<nav class="therichpost-sidebar therichpost-bar-block therichpost-white therichpost-collapse therichpost-top" style="z-index:3;width:250px" id="mySidebar">
  <div class="therichpost-container therichpost-display-container therichpost-padding-16">
    <i (click)="therichpost_close()" class="fa fa-remove therichpost-hide-large therichpost-button therichpost-display-topright"></i>
    <h3 class="therichpost-wide"><b>Therichpost</b></h3>
  </div>
  <div class="therichpost-padding-64 therichpost-large therichpost-text-grey" style="font-weight:bold">
    <a href="#" class="therichpost-bar-item therichpost-button">Shirts</a>
    <a href="#" class="therichpost-bar-item therichpost-button">Dresses</a>
    <a href="javascript:void(0)" class="therichpost-button therichpost-block therichpost-left-align" id="myBtn">
      Jeans 
    </a>
   
    <a href="#" class="therichpost-bar-item therichpost-button">Jackets</a>
    <a href="#" class="therichpost-bar-item therichpost-button">Gymwear</a>
    <a href="#" class="therichpost-bar-item therichpost-button">Blazers</a>
    <a href="#" class="therichpost-bar-item therichpost-button">Shoes</a>
  </div>
  <a href="#footer" class="therichpost-bar-item therichpost-button therichpost-padding">Contact</a> 
  <a href="javascript:void(0)" class="therichpost-bar-item therichpost-button therichpost-padding" onclick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
  <a href="#footer"  class="therichpost-bar-item therichpost-button therichpost-padding">Subscribe</a>
</nav>
<!-- Top menu on small screens -->
<header class="therichpost-bar therichpost-top therichpost-hide-large therichpost-black therichpost-xlarge">
  <div class="therichpost-bar-item therichpost-padding-24 therichpost-wide">LOGO</div>
  <a href="javascript:void(0)" class="therichpost-bar-item therichpost-button therichpost-padding-24 therichpost-right" (click)="therichpost_open()"><i class="fa fa-bars"></i></a>
</header>
<!-- Overlay effect when opening sidebar on small screens -->
<div class="therichpost-overlay therichpost-hide-large" (click)="therichpost_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
<!-- !PAGE CONTENT! -->
<div class="therichpost-main" style="margin-left:250px">
  <!-- Push down content on small screens -->
  <div class="therichpost-hide-large" style="margin-top:83px"></div>
  
  <!-- Top header -->
  <header class="therichpost-container therichpost-xlarge">
    <p class="therichpost-left">Jeans</p>
    <p class="therichpost-right">
      <i class="fa fa-shopping-cart therichpost-margin-right"></i>
      <i class="fa fa-search"></i>
    </p>
  </header>
  <!-- Image header -->
  <div class="therichpost-display-container therichpost-container">
    <img src="assets/shopimages/jeans.jpg" alt="Jeans" style="width:100%">
    <div class="therichpost-display-topleft therichpost-text-white" style="padding:24px 48px">
      <h1 class="therichpost-jumbo therichpost-hide-small">New arrivals</h1>
      <h1 class="therichpost-hide-large therichpost-hide-medium">New arrivals</h1>
      <h1 class="therichpost-hide-small">COLLECTION 2016</h1>
      <p><a href="#jeans" class="therichpost-button therichpost-black therichpost-padding-large therichpost-large">SHOP NOW</a></p>
    </div>
  </div>
  <div class="therichpost-container therichpost-text-grey" id="jeans">
    <p>8 items</p>
  </div>
  <!-- Product grid -->
  <div class="therichpost-row therichpost-grayscale">
    <div class="therichpost-col l3 s6" *ngFor="let post of data">
      <div class="therichpost-container">
        <img src="{{post.img}}" style="width:100%">
        <p>{{post.title}}<br><b>${{post.price}}</b></p>
      </div>
    </div>
  </div>
  <!-- Subscribe section -->
  <div class="therichpost-container therichpost-black therichpost-padding-32">
    <h1>Subscribe</h1>
    <p>To get special offers and VIP treatment:</p>
    <p><input class="therichpost-input therichpost-border" type="text" placeholder="Enter e-mail" style="width:100%"></p>
    <button type="button" class="therichpost-button therichpost-red therichpost-margin-bottom">Subscribe</button>
  </div>
  
  <!-- Footer -->
  <footer class="therichpost-padding-64 therichpost-light-grey therichpost-small therichpost-center" id="footer">
    <div class="therichpost-row-padding">
      <div class="therichpost-col s4">
        <h4>Contact</h4>
        <p>Questions? Go ahead.</p>
        
          <p><input class="therichpost-input therichpost-border" type="text" placeholder="Name" name="Name" required></p>
          <p><input class="therichpost-input therichpost-border" type="text" placeholder="Email" name="Email" required></p>
          <p><input class="therichpost-input therichpost-border" type="text" placeholder="Subject" name="Subject" required></p>
          <p><input class="therichpost-input therichpost-border" type="text" placeholder="Message" name="Message" required></p>
          <button type="submit" class="therichpost-button therichpost-block therichpost-black">Send</button>
        
      </div>
      <div class="therichpost-col s4">
        <h4>About</h4>
        <p><a href="#">About us</a></p>
        <p><a href="#">We're hiring</a></p>
        <p><a href="#">Support</a></p>
        <p><a href="#">Find store</a></p>
        <p><a href="#">Shipment</a></p>
        <p><a href="#">Payment</a></p>
        <p><a href="#">Gift card</a></p>
        <p><a href="#">Return</a></p>
        <p><a href="#">Help</a></p>
      </div>
      <div class="therichpost-col s4 therichpost-justify">
        <h4>Store</h4>
        <p><i class="fa fa-fw fa-map-marker"></i> Company Name</p>
        <p><i class="fa fa-fw fa-phone"></i> 0044123123</p>
        <p><i class="fa fa-fw fa-envelope"></i> ex@mail.com</p>
        <h4>We accept</h4>
        <p><i class="fa fa-fw fa-cc-amex"></i> Amex</p>
        <p><i class="fa fa-fw fa-credit-card"></i> Credit Card</p>
        <br>
        <i class="fa fa-facebook-official therichpost-hover-opacity therichpost-large"></i>
        <i class="fa fa-instagram therichpost-hover-opacity therichpost-large"></i>
        <i class="fa fa-snapchat therichpost-hover-opacity therichpost-large"></i>
        <i class="fa fa-pinterest-p therichpost-hover-opacity therichpost-large"></i>
        <i class="fa fa-twitter therichpost-hover-opacity therichpost-large"></i>
        <i class="fa fa-linkedin therichpost-hover-opacity therichpost-large"></i>
      </div>
    </div>
  </footer>
  <div class="therichpost-black therichpost-center therichpost-padding-24"><a href="https://therichpost.com/" title="W3.CSS" target="_blank" class="therichpost-hover-opacity">therichpost.com</a></div>
  <!-- End page content -->
</div>
<!-- Newsletter Modal -->
<div id="newsletter" class="therichpost-modal">
  <div class="therichpost-modal-content therichpost-animate-zoom" style="padding:32px">
    <div class="therichpost-container therichpost-white therichpost-center">
      <i onclick="document.getElementById('newsletter').style.display='none'" class="fa fa-remove therichpost-right therichpost-button therichpost-transparent therichpost-xxlarge"></i>
      <h2 class="therichpost-wide">NEWSLETTER</h2>
      <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
      <p><input class="therichpost-input therichpost-border" type="text" placeholder="Enter e-mail"></p>
      <button type="button" class="therichpost-button therichpost-padding-large therichpost-red therichpost-margin-bottom" onclick="document.getElementById('newsletter').style.display='none'">Subscribe</button>
    </div>
  </div>
</div>

7. FINALLY HERE IS THE LARAVEL API CODE AND YOU NEED TO ADD INTO YOUR YOURLARAVELPROJECTNAME/ROUTES/API.PHP FILE:
Route::get('sample-restful-apis', function()
{
  $data = [ 
          [ 'id' => 1, 'price' => 83, 'title' => 'Ripped Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans1.jpg' ],
        [ 'id' => 2, 'price' => 27, 'title' => 'Mega Ripped Jeans', 'img' => 'http://localhost/blog/public/images/jeans2.jpg' ],
        [ 'id' => 3, 'price' => 180, 'title' => 'Washed Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans3.jpg' ],
        [ 'id' => 4, 'price' => 40, 'title' => 'Vintage Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans4.jpg' ],
        ['id'  => 5, 'price' => 83, 'title' => 'Ripped Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans1.jpg' ],
        [ 'id' => 6, 'price' => 27, 'title' => 'Mega Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans2.jpg' ],
        [ 'id' => 7, 'price' => 180, 'title' => 'Washed Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans3.jpg' ],
        [ 'id' => 8, 'price' => 40, 'title' => 'Vintage Skinny Jeans', 'img' => 'http://localhost/blog/public/images/jeans4.jpg' ]
      ];
   return Response::json($data, 200);
});