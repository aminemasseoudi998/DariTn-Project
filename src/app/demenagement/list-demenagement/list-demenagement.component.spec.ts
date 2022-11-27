import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemenagementComponent } from './list-demenagement.component';

describe('ListDemenagementComponent', () => {
  let component: ListDemenagementComponent;
  let fixture: ComponentFixture<ListDemenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemenagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
