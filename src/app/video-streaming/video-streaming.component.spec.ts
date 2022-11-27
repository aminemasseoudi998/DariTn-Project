import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStreamingComponent } from './video-streaming.component';

describe('VideoStreamingComponent', () => {
  let component: VideoStreamingComponent;
  let fixture: ComponentFixture<VideoStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
