import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheAnnonceComponent } from './affiche-annonce.component';


describe('AfficheAnnonceComponent', () => {
  let component: AfficheAnnonceComponent;
  let fixture: ComponentFixture<AfficheAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
