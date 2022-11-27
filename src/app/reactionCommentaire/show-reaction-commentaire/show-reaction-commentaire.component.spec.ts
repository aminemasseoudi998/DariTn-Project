import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReactionCommentaireComponent } from './show-reaction-commentaire.component';

describe('ShowReactionCommentaireComponent', () => {
  let component: ShowReactionCommentaireComponent;
  let fixture: ComponentFixture<ShowReactionCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReactionCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReactionCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
