package tn.esprit.spring.service;

import java.nio.file.Files;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.entity.Calendar;
import tn.esprit.spring.entity.Demenagement;
import tn.esprit.spring.entity.Transporteur;
import tn.esprit.spring.interfaces.ITransporteur;
import tn.esprit.spring.repository.CalendarRepository;
import tn.esprit.spring.repository.DemenagementRepository;
import tn.esprit.spring.repository.TransporteurRepository;


@Service
@Slf4j
public class TransporteurService implements ITransporteur {
	private final Path root = Paths.get("E:/picloud/src/assets/img/Transporteurimages");

	@Autowired
	TransporteurRepository transporteurRepository;
	@Autowired
	DemenagementRepository demenagementRepository;
	@Autowired
	CalendarRepository calendartRepository;

	@Override
	public List<Transporteur> retrieveAllTransporteur() {
		List<Transporteur> listTransporteur = (List<Transporteur>) transporteurRepository.findAll();
		for(Transporteur t : listTransporteur) {
		//	System.out.println(t);
			log.info(t.toString());
		}
		return listTransporteur;
	}

	@Override
	public Transporteur addTransporteur(Transporteur t) {
		
		transporteurRepository.save(t);
		return null;
	}

	@Override
	public void deleteTransporteur(Long id) {
		transporteurRepository.deleteById(id);
		
	}

	@Override
	public Transporteur updateTransporteur(Transporteur t) {
		return transporteurRepository.save(t);
		
	}

	@Override
	public Transporteur retrieveTransporteur(Long id) {
		return transporteurRepository.findById(id).orElse(null);
		
	}

	@Override
	public List<Transporteur> retrieveTransporteursByName(String nom) {
		
		return transporteurRepository.TransporteurByName(nom);
	}

	@Override
	public List<Transporteur> TrierTransporteurASC() {
		
		return transporteurRepository.TrierTransporteurASC();
	}

	@Override
	public List<Transporteur> TrierTransporteurDESC() {
		return transporteurRepository.TrierTransporteurDESC();
	}

	@Transactional
	public void assignDemenagementToTransporteur(Long id, Demenagement demenagement) {
		Transporteur t =transporteurRepository.findById(id).orElse(null);
		demenagement.setTransporteur(t);
		demenagementRepository.save(demenagement);	
	}	
	
	@Transactional
	public void assignTransporteurtToCalendar(Long id, Calendar calendar) {
		Transporteur t =transporteurRepository.findById(id).orElse(null);
		calendar.setTransporteur(t);
		calendartRepository.save(calendar);	
	}

	 
}
