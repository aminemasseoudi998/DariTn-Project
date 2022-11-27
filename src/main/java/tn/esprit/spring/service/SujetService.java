//remerge
package tn.esprit.spring.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.Sujet;
import tn.esprit.spring.interfaces.SujetInterface;
import tn.esprit.spring.repository.CommentaireRepository;
import tn.esprit.spring.repository.SujetRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Slf4j
public class SujetService implements SujetInterface{
	
	@Autowired
	SujetRepository sujetRepository;
	
	@Autowired
	CommentaireRepository commentaireRepository;
	@Override
	public List<Sujet> retrieveAllSujets() {
		List<Sujet> SujetList = sujetRepository.findAll();
		for(Sujet Sujet : SujetList) {
		
		}
		return SujetList;
	}

	@Override
	public Sujet addSujet(Sujet s) {
		return sujetRepository.save(s);
	}

	@Override
	public Sujet updateSujet(Sujet s) {
		return sujetRepository.save(s);
	}

	@Override
	public Sujet retrieveSujet(Long id) {
		return sujetRepository.findById(id).orElse(null);
	}
	
	@Override
	public void removeSujet(Long id) {
		sujetRepository.deleteById(id);	
	}
	
	@Transactional
	public void assignCommentaireToSujet(Long sujetId , Commentaire commentaire) {
		
		Sujet s =sujetRepository.findById(sujetId).orElse(null);
		commentaire.setSujet(s);
		commentaireRepository.save(commentaire);
		//Commentaire co= commentaireRepository.findById(commentaireId).orElse(null);
		s.getCommentaires().add(commentaire); //not working
		sujetRepository.save(s); //not working
		//commentaireRepository.save(co);
	}
}
