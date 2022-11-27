package tn.esprit.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Calendar;
import tn.esprit.spring.entity.Demenagement;
import tn.esprit.spring.interfaces.CalendarInterface;
import tn.esprit.spring.interfaces.ITransporteur;


@CrossOrigin("*")
@Validated
@RestController
@RequestMapping("/calendar")
public class CalendarController {
	
	@Autowired
	CalendarInterface calendarInterface;
	//ITransporteur transporteurService;
	@Autowired
	ITransporteur transporteurInterface;
	
	
					// http://localhost:8089/SpringMVC/demenagement/ 	
					@GetMapping("/retrieve-all-calendar")
					@ResponseBody
					public List<Calendar> getCalendar() {
						List<Calendar> list = calendarInterface.retrieveAllCalendar();
						
						return list;
					}
			
			
					// http://localhost:8089/SpringMVC/demenagement/retrieve-demenagement/8
					@GetMapping("/retrieve-calendar/{calendar-id}")
					@ResponseBody
					public Calendar retrieveCalendar(@PathVariable("calendar-id") Long calendarId) {
						//return calendarInterface.retrieveCalendar(calendarId);
						return calendarInterface.retrieveCalendar(calendarId);
					}
					
					// http://localhost:8089/SpringMVC/demenagement/add-demenagement
					@PostMapping("/add-calendar")
					@ResponseBody
					public Calendar addCalendar(@RequestBody Calendar d) {
						Calendar calendar = calendarInterface.addCalendar(d);
						return calendar;
					}
					
					// http://localhost:8089/SpringMVC/demenagement/remove-demenagement/{demenagement-id}
					@DeleteMapping("/remove-calendar/{calendar-id}")
					@ResponseBody
					public void removeCalendar(@PathVariable("Calendar-id") Long calendarId) {
						calendarInterface.deleteCalendar(calendarId);
					}
					
					// http://localhost:8089/SpringMVC/demenagement/modify-demenagement
					@PutMapping("/modify-calendar")
					@ResponseBody
					public Calendar modifyDemenagement(@RequestBody Calendar calendar) {
						return calendarInterface.updateCalendar(calendar);
					}
	
				
}
