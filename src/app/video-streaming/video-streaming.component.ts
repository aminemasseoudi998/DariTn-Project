import { Component, OnInit } from '@angular/core';
import {
  NgModule,
  VERSION,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
@Component({
  selector: 'app-video-streaming',
  templateUrl: './video-streaming.component.html',
  styleUrls: ['./video-streaming.component.css']
})
export class VideoStreamingComponent implements  AfterViewInit {

  title = 'live-video-demo';
  @ViewChild('video') video: ElementRef;
  ngVersion: string;
  streaming = false;
  error: any;

  private stream: MediaStream = null;
  private constraints = {
    audio: false,
    video: true,
  };

  constructor() {
    this.ngVersion = `Angular! v${VERSION.full}`;
  }

  ngAfterViewInit() {}

  initVideo(e) {
    this.getMediaStream()
      .then((stream) => {
        this.stream = stream;
        this.streaming = true;
      })
      .catch((err) => {
        this.streaming = false;
        this.error =
          err.message + ' (' + err.name + ':' + err.constraintName + ')';
      });
  }
  private getMediaStream(): Promise<MediaStream> {
    const video_constraints = { video: true };
    const _video = this.video.nativeElement;
    return new Promise<MediaStream>((resolve, reject) => {
      // (get the stream)
      return navigator.mediaDevices
        .getUserMedia(video_constraints)
        .then((stream) => {
          (<any>window).stream = stream; // make variable available to browser console
          _video.srcObject = stream;
          // _video.src = window.URL.createObjectURL(stream);
          _video.onloadedmetadata = function (e: any) {};
          console.log('aaa' + _video.onloadedmetadata);
          _video.play();
          return resolve(stream);
        })
        .catch((err) => reject(err));
    });
  }
}
