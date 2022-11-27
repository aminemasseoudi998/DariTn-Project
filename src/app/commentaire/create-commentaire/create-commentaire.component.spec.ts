import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentaireComponent } from './create-commentaire.component';

describe('CreateCommentaireComponent', () => {
  let component: CreateCommentaireComponent;
  let fixture: ComponentFixture<CreateCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
