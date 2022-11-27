
//remerge
package tn.esprit.spring.interfaces;

import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.ReactionCommentaire;

import java.util.List;

public interface CommentaireInterface {
	List<Commentaire> retrieveAllCommentaires();

	Commentaire addCommentaire(Commentaire s);

	Commentaire updateCommentaire(Commentaire s);

	Commentaire retrieveCommentaire(Long id);

	void removeCommentaire(Long id);
	
	void addAndAssignReactionCommentaireToCommentaire(Long sujetId , ReactionCommentaire reactionCommentaire);
	


}
