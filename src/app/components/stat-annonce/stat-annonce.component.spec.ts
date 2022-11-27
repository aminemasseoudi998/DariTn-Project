import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAnnonceComponent } from './stat-annonce.component';

describe('StatAnnonceComponent', () => {
  let component: StatAnnonceComponent;
  let fixture: ComponentFixture<StatAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
