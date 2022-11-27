import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorndonneesComponent } from './coorndonnees.component';

describe('CoorndonneesComponent', () => {
  let component: CoorndonneesComponent;
  let fixture: ComponentFixture<CoorndonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoorndonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorndonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
