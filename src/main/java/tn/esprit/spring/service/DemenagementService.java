package tn.esprit.spring.service;

import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.interfaces.IDemenagement;
import tn.esprit.spring.repository.DemenagementRepository;
import tn.esprit.spring.repository.TransporteurRepository;

import tn.esprit.spring.entity.Demenagement;



@Service
@Slf4j
public class DemenagementService implements IDemenagement {

	@Autowired
	DemenagementRepository demenagementRepository;
	@Autowired
	TransporteurRepository transporteurRepository;
	@Override
	public List<Demenagement> retrieveAllDemenagement() {
		List<Demenagement> listDemenagement = (List<Demenagement>) demenagementRepository.findAll();
		for(Demenagement d : listDemenagement) {
		//	System.out.println(D);
			log.info(d.toString());
		}
		return listDemenagement;
	}

	@Override
	public Demenagement addDemenagement(Demenagement d) {
		d.setDateDemenagement(new Date());
		 demenagementRepository.save(d);
		 return d;
	}
	

	@Override
	public void deleteDemenagement(Long id) {
		demenagementRepository.deleteById(id);
		
	}

	@Override
	public Demenagement updateDemenagement(Demenagement d) {
		d.setDateDemenagement(new Date());
		 demenagementRepository.save(d);
		 return d;
	}

	@Override
	public Demenagement retrieveDemenagement(Long id) {
		return demenagementRepository.findById(id).orElse(null);
		
	}

	
	}


