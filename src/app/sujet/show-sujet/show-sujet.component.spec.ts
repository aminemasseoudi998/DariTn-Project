import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSujetComponent } from './show-sujet.component';

describe('ShowSujetComponent', () => {
  let component: ShowSujetComponent;
  let fixture: ComponentFixture<ShowSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
