import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujetComponent } from './list-sujet.component';

describe('ListSujetComponent', () => {
  let component: ListSujetComponent;
  let fixture: ComponentFixture<ListSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
