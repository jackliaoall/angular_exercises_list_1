1. VERY FIRST, HERE ARE COMMON BASICS STEPS TO ADD ANGULAR 10 APPLICATION ON YOUR MACHINE:
ng new angularwebcam
cd angularwebcam

2. NOW RUN BELOW COMMAND INTO YOUR TERMINAL TO INCLUDE NGX WEBCAM PACKAGE INTO YOUR ANGULAR 10 APPLICATION:
npm i ngx-webcam

3. NOW ADD BELOW CODE INTO YOUR APP.MODULE.TS FILE:
...
import {WebcamModule} from 'ngx-webcam';
...
imports: [
    ...
    WebcamModule
]

4. NOW ADD BELOW CODE INTO YOUR APP.COMPONENT.TS FILE:
...
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
...
export class AppComponent {
...
   // latest snapshot
   public webcamImage: WebcamImage = null;
   // webcam snapshot trigger
   private trigger: Subject<void> = new Subject<void>();
   triggerSnapshot(): void {
    this.trigger.next();
   }
   handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
   }
  
   public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
   }
}

5. FINALLY HERE IS THE CODE FOR APP.COMPONENT.HTML FILE:
<webcam [height]="500" [width]="500" [trigger]="triggerObservable" (imageCapture)="handleImage($event)"></webcam>
<!-- Button Takes Photo -->
<button class="actionBtn" (click)="triggerSnapshot();">Take A Snapshot</button>
<!-- Snapshot Div where image will be shown -->
<div class="snapshot" *ngIf="webcamImage">
  <h2>Take your image or get another</h2>
  <img [src]="webcamImage.imageAsDataUrl"/>
</div>
