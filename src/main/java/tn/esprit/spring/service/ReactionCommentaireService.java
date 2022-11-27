//remerge
package tn.esprit.spring.service;

import tn.esprit.spring.entity.ReactionCommentaire;
import tn.esprit.spring.interfaces.ReactionCommentaireInterface;
import tn.esprit.spring.repository.ReactionCommentaireRepository;

import java.util.List;

public class ReactionCommentaireService implements ReactionCommentaireInterface {
	
	ReactionCommentaireRepository reactionCommenairetRepository;
	@Override
	public List<ReactionCommentaire> retrieveAllReactionCommentaires() {
		List<ReactionCommentaire> commenataireList = reactionCommenairetRepository.findAll();
		for(ReactionCommentaire commentaire : commenataireList) {
		
		}
		return commenataireList;
	}

	@Override
	public ReactionCommentaire addReactionCommentaire(ReactionCommentaire rc) {
		
		return reactionCommenairetRepository.save(rc);
	}

	@Override
	public ReactionCommentaire updateReactionCommentaire(ReactionCommentaire rc) {
		return reactionCommenairetRepository.save(rc);
	}

	@Override
	public ReactionCommentaire retrieveReactionCommentaire(Long id) {
		return reactionCommenairetRepository.findById(id).orElse(null);
	}

	@Override
	public void removeReactionCommentaire(Long id) {
		reactionCommenairetRepository.deleteById(id);
		
	}
	
}
