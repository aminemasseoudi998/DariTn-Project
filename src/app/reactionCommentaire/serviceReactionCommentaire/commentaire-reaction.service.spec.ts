import { TestBed } from '@angular/core/testing';

import { CommentaireReactionService } from './commentaire-reaction.service';

describe('CommentaireReactionService', () => {
  let service: CommentaireReactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireReactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
