//remerge
package tn.esprit.spring.interfaces;

import tn.esprit.spring.entity.ReactionCommentaire;

import java.util.List;



public interface ReactionCommentaireInterface {
	List<ReactionCommentaire> retrieveAllReactionCommentaires();

	ReactionCommentaire addReactionCommentaire(ReactionCommentaire rc);

	ReactionCommentaire updateReactionCommentaire(ReactionCommentaire rc);

	ReactionCommentaire retrieveReactionCommentaire(Long id);

	void removeReactionCommentaire(Long id);

}
