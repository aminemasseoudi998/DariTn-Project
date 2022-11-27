import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTransporteurComponent } from './front-transporteur.component';

describe('FrontTransporteurComponent', () => {
  let component: FrontTransporteurComponent;
  let fixture: ComponentFixture<FrontTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontTransporteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
