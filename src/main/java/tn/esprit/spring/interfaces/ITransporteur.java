package tn.esprit.spring.interfaces;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entity.Calendar;
import tn.esprit.spring.entity.Demenagement;
import tn.esprit.spring.entity.Transporteur;

public interface ITransporteur {
	List<Transporteur> retrieveAllTransporteur();

	Transporteur addTransporteur (Transporteur t);

	void deleteTransporteur (Long id);

	Transporteur updateTransporteur (Transporteur t);
	void assignDemenagementToTransporteur(Long id, Demenagement demenagement);
	void assignTransporteurtToCalendar(Long id, Calendar calendar);
	
	Transporteur retrieveTransporteur (Long id);
	List<Transporteur>retrieveTransporteursByName(String nom);
	List<Transporteur>TrierTransporteurASC();
	List<Transporteur>TrierTransporteurDESC();
}
