import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemenagementComponent } from './create-demenagement.component';

describe('CreateDemenagementComponent', () => {
  let component: CreateDemenagementComponent;
  let fixture: ComponentFixture<CreateDemenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDemenagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
