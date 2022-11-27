import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransporteurComponent } from './update-transporteur.component';

describe('UpdateTransporteurComponent', () => {
  let component: UpdateTransporteurComponent;
  let fixture: ComponentFixture<UpdateTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTransporteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
