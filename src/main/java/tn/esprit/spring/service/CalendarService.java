package tn.esprit.spring.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.entity.Calendar;
import tn.esprit.spring.entity.Demenagement;
import tn.esprit.spring.entity.Transporteur;
import tn.esprit.spring.interfaces.CalendarInterface;
import tn.esprit.spring.repository.CalendarRepository;
import tn.esprit.spring.repository.TransporteurRepository;

@Service
@Slf4j
public class CalendarService implements CalendarInterface {

	@Autowired
	CalendarRepository calendartRepository;
	
	@Autowired
	TransporteurRepository transporteurRepository;
	
	
	@Override
	public List<Calendar> retrieveAllCalendar() {
		List<Calendar> listCalendar = (List<Calendar>) calendartRepository.findAll();
		for(Calendar d : listCalendar) {
		//	System.out.println(D);
			log.info(d.toString());
		}
		return listCalendar;
	}

	@Override
	public Calendar addCalendar(Calendar d) {
		calendartRepository.save(d);
		 return d;
	}
	

	@Override
	public void deleteCalendar(Long id) {
		calendartRepository.deleteById(id);
		
	}

	@Override
	public Calendar updateCalendar(Calendar d) {
		calendartRepository.save(d);
		 return d;
	}

	@Override
	public Calendar retrieveCalendar(Long id) {
		return calendartRepository.findById(id).orElse(null);
		
	}
	
	
}
