import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceListComponent } from './annonce-list.component';

describe('AnnonceListComponent', () => {
  let component: AnnonceListComponent;
  let fixture: ComponentFixture<AnnonceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
