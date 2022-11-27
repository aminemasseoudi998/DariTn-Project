package tn.esprit.spring.interfaces;

import java.util.List;

import tn.esprit.spring.entity.Calendar;
import tn.esprit.spring.entity.Transporteur;

public interface CalendarInterface {
	
	List<Calendar> retrieveAllCalendar();

	Calendar addCalendar (Calendar c);

	void deleteCalendar (Long id);

	Calendar updateCalendar (Calendar c);

	Calendar retrieveCalendar (Long id);
	
	
}
