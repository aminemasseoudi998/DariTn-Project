import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSujetComponent } from './create-sujet.component';

describe('CreateSujetComponent', () => {
  let component: CreateSujetComponent;
  let fixture: ComponentFixture<CreateSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
