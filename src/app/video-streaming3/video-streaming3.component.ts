import {
  Component,
  VERSION,
  ViewChild,
  OnInit,
  ElementRef
} from '@angular/core';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-video-streaming3',
  templateUrl: './video-streaming3.component.html',
  styleUrls: ['./video-streaming3.component.css']
})
export class VideoStreaming3Component implements OnInit {

  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef;
  @ViewChild('video') videoElementRef: ElementRef;

  videoElement: HTMLVideoElement;
  recordVideoElement: HTMLVideoElement;
  mediaRecorder: any;
  recordedBlobs: Blob[];
  isRecording: boolean = false;
  downloadUrl: string;
  stream: MediaStream;
  mySubscription: Subscription
  constructor() {
   /* this.mySubscription= interval(10000).subscribe((x =>{
      this.doStuff();
    }));*/

  }
  doStuff(){
    //doing stuff with unsubscribe at end to only run once
   // this.mySubscription.unsubscribe();
    this.startRecording();
    setTimeout(() => {
      console.log('hide');
      this.stopRecording();
      console.log(this.recordedBlobs);
    //  this.downloadMyFile();
    }, 9000);
  }

  async ngOnInit() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 360
        }
      })
      .then(stream => {
        this.videoElement = this.videoElementRef.nativeElement;
        this.recordVideoElement = this.recordVideoElementRef.nativeElement;

        this.stream = stream;
        this.videoElement.srcObject = this.stream;
      });
  }

  startRecording() {
    this.recordedBlobs = [];
    let options: any = { mimeType: 'video/webm' };

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      console.log(err);
    }

    this.mediaRecorder.start(); // collect 100ms of data
    this.isRecording = !this.isRecording;
    this.onDataAvailableEvent();
    this.onStopRecordingEvent();


  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = !this.isRecording;
    console.log('Recorded Blobs: ', this.recordedBlobs);
  }

  playRecording() {
    if (!this.recordedBlobs || !this.recordedBlobs.length) {
      console.log('cannot play.');
      return;
    }
    this.recordVideoElement.play();
  }


  onDataAvailableEvent() {
    try {
      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }

  onStopRecordingEvent() {
    try {
      this.mediaRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.recordedBlobs, {
          type: 'video/webm'
        });
        this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag
        this.recordVideoElement.src = this.downloadUrl;
      };
    } catch (error) {
      console.log(error);
    }
  }


  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.downloadUrl);
    link.setAttribute('download', 'video.webm');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
