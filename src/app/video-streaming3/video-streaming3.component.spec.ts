import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStreaming3Component } from './video-streaming3.component';

describe('VideoStreaming3Component', () => {
  let component: VideoStreaming3Component;
  let fixture: ComponentFixture<VideoStreaming3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoStreaming3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStreaming3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
