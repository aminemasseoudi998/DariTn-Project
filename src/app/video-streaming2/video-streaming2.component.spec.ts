import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStreaming2Component } from './video-streaming2.component';

describe('VideoStreaming2Component', () => {
  let component: VideoStreaming2Component;
  let fixture: ComponentFixture<VideoStreaming2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoStreaming2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStreaming2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
