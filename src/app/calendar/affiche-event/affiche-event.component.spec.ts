import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheEventComponent } from './affiche-event.component';

describe('AfficheEventComponent', () => {
  let component: AfficheEventComponent;
  let fixture: ComponentFixture<AfficheEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
