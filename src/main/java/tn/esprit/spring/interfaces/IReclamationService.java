package tn.esprit.spring.interfaces;

import java.util.List;

import tn.esprit.spring.entity.Reclamation;



public interface IReclamationService {
	
	List<Reclamation> retrieveAllReclamation();
	Reclamation addReclamation (Reclamation r);
	Reclamation updateReclamation (Reclamation r);
	Reclamation retrieveReclamation (Long id);
	void removeReclamation (Long id);

    List<Reclamation> findFixedReclamations();

	List<Reclamation> saveAll(List<Reclamation> reclamations);
}
