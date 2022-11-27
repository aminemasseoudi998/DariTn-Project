package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.Annonce;

public interface AnnonceService  {
	Annonce saveAnnonce(Annonce a, Long idUser );
	Annonce updateAnnonce(Annonce a);
	void acheterAnnonce (Long idAnnonce, Long idUser);
	void affecterAgent (Long idAnnonce, Long idAgent);
	void deleteAnnonce(Annonce a);
	void deleteAnnonceById(Long id);
	Annonce getAnnonce(Long id);
	void AffecterAnnonce(Long idAnnonce, String code);
	List<Annonce> getAllAnnonces();
	Long getUserFromAnnonce(Long idannonce);
	Long checkCoupon(Long idCoupon);
	Long verifEtatCoupon(String code);
	int AnnonceBooster();
	int AnnonceNonBooster();
}