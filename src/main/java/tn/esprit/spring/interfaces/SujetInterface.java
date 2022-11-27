//remerge
package tn.esprit.spring.interfaces;

import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.Sujet;

import java.util.List;
public interface SujetInterface {
	
	List<Sujet> retrieveAllSujets();

	Sujet addSujet(Sujet s);

	Sujet updateSujet(Sujet s);

	Sujet retrieveSujet(Long id);

	void removeSujet(Long id);
	
	void assignCommentaireToSujet(Long sujetId , Commentaire commentaire) ;

}
