package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.RDV;

public interface RDVService {
	RDV saveRDV(RDV u,Long idUser,Long idAnno);
	RDV updateRDV(RDV u);
	void deleteRDV(RDV u);
	 void deleteRDVById(Long id);
	RDV getRDV(Long id);
	List<RDV> getAllRDVs();
	
}
