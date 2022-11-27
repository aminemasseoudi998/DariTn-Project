import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransporteurComponent } from './create-transporteur.component';

describe('CreateTransporteurComponent', () => {
  let component: CreateTransporteurComponent;
  let fixture: ComponentFixture<CreateTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransporteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
