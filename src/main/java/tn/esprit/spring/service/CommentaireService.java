//remerge
package tn.esprit.spring.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.ReactionCommentaire;
import tn.esprit.spring.interfaces.CommentaireInterface;
import tn.esprit.spring.repository.CommentaireRepository;
import tn.esprit.spring.repository.ReactionCommentaireRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Slf4j
public class CommentaireService implements CommentaireInterface{
	
	@Autowired
	CommentaireRepository commenairetRepository;
	@Autowired
	ReactionCommentaireRepository reactionCommenairetRepository;
	@Override
	public List<Commentaire> retrieveAllCommentaires() {
		List<Commentaire> commenataireList = commenairetRepository.findAll();
		for(Commentaire commentaire : commenataireList) {
		
		}
		return commenataireList;
	}

	@Override
	public Commentaire addCommentaire(Commentaire s) {
		return commenairetRepository.save(s);
	}

	@Override
	public Commentaire updateCommentaire(Commentaire s) {
		return commenairetRepository.save(s);
	}

	@Override
	public Commentaire retrieveCommentaire(Long id) {
		return commenairetRepository.findById(id).orElse(null);
	}

	@Override
	public void removeCommentaire(Long id) {
		commenairetRepository.deleteById(id);
		
	}
	
	@Transactional
	public void addAndAssignReactionCommentaireToCommentaire(Long sujetId , ReactionCommentaire reactionCommentaire) {
		Commentaire c =commenairetRepository.findById(sujetId).orElse(null);
		int reacted=0;
		for (ReactionCommentaire r : c.getReactions()) {
	        if (r.getIduser()==reactionCommentaire.getIduser()) {
	        	reacted=1;
	        	r.setReaction(reactionCommentaire.getReaction());
	        	commenairetRepository.save(c); 
	        }
	    }
		if(reacted==0) {
			reactionCommentaire.setCommentaire(c);
			reactionCommenairetRepository.save(reactionCommentaire);
			//Commentaire co= commentaireRepository.findById(commentaireId).orElse(null);
			c.getReactions().add(reactionCommentaire); //not working
			commenairetRepository.save(c); //not working
			//commentaireRepository.save(co);
		}
		
	}
}
