import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webcam';

  private el: ElementRef;
  private videoElement: HTMLVideoElement;
  public constraints: any;
  public videoOption = [];
  public audioOption = [];
  public videoValue: any;
  public audioValue: any;
  private canvasArea: HTMLCanvasElement;
  public imgUrl;

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) {
    this.el = this.element;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.videoElement = <HTMLVideoElement>this.el.nativeElement.querySelector('#video');
    this.canvasArea = <HTMLCanvasElement>this.el.nativeElement.querySelector('#canvasArea');
    navigator.mediaDevices.enumerateDevices()
             // .then( dev => this.gotDevices(dev))
             .then( () => this.getStream())
             .catch(this.handleError);
  }

  // gotDevices(deviceInfos) {
  //   for (let i = 0; i !== deviceInfos.length; ++i) {
  //     const deviceInfo = deviceInfos[i];
  //     if (deviceInfo.kind === 'audioinput') {
  //       let audioObj = {value: '', text: ''};
  //       audioObj.value = deviceInfo.deviceId;
  //       audioObj.text = deviceInfo.label || 'microphone' +
  //                       (this.audioOption.length + 1);
  //       this.audioOption.push(audioObj);
  //     } else if (deviceInfo.kind === 'videoinput') {
  //       let videoObj = { value: '', text: ''};
  //       videoObj.value = deviceInfo.deviceId;
  //       videoObj.text = deviceInfo.label || 'camera' +
  //                       (this.videoOption.length + 1);
  //       this.videoOption.push(videoObj);
  //     } else {
  //       console.log(`Found another kind of device: ${deviceInfo}`);
  //     }
  //   }
  //   this.audioValue = this.audioOption[0].value;
  //   this.videoValue = this.videoOption[0].value;
  // }

  getStream() {

    // this.stopBtn();   // stop stream first
    this.constraints = {
      // audio: {
      //   deviceId: { exact: this.audioValue }
      // },
      video: {
        deviceId: { exact: this.videoValue },
        width: 640,
        height: 480
      }
    };

    navigator.mediaDevices.getUserMedia(this.constraints)
    .then( stream => this.videoElement.srcObject = stream)
    .catch(this.handleError);
  }

  handleError(error) {
    console.log('Error: ', error);
  }

  screenshotBtn() {
    if (this.videoElement.srcObject) {
      this.canvasArea.width = this.videoElement.videoWidth;
      this.canvasArea.height = this.videoElement.videoHeight;
      this.canvasArea.getContext('2d').drawImage(this.videoElement, 0, 0);
      this.imgUrl = this.canvasArea.toDataURL('image/jpeg', 0.8); // 壓縮比0.8
      const img = <HTMLImageElement> this.el.nativeElement.querySelector('img');
      // img.classList.remove('none');
      // download screen shot automatically.
      const link = this.render.createElement('a');
      // this.render.appendChild(document.body, link);
      link.href = this.imgUrl;
      link.download = 'file.jpeg';
      link.click();
    }
  }

  /**
   * 按鈕Stop的code.
   */
  // stopBtn() {
  //   if (this.videoElement.srcObject) {
  //     (<MediaStream>this.videoElement.srcObject).getTracks()
  //     .forEach( stream => stream.stop());
  //   }
  // }

  // ChangeAudioSource(val) {
  //   this.audioValue = val;
  //   this.getStream();
  // }

  // ChangeVideoSource(val) {
  //   this.videoValue = val;
  //   this.getStream();
  // }
}
