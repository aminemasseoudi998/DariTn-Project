import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransporteurComponent } from './list-transporteur.component';

describe('ListTransporteurComponent', () => {
  let component: ListTransporteurComponent;
  let fixture: ComponentFixture<ListTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransporteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
