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

import tn.esprit.spring.entity.Demenagement;
import tn.esprit.spring.interfaces.IDemenagement;
import tn.esprit.spring.interfaces.ITransporteur;

@CrossOrigin("*")
@Validated
@RestController
@RequestMapping("/demenagement")
public class DemenagementController {

	
	@Autowired
	IDemenagement demenagementService;
	ITransporteur transporteurService;
	
	// http://localhost:8089/SpringMVC/demenagement/ 	
		@GetMapping("/retrieve-all-demenagement")
		@ResponseBody
		public List<Demenagement> getDemenagement() {
			List<Demenagement> list = demenagementService.retrieveAllDemenagement();
			return list;
		}
		
		// http://localhost:8089/SpringMVC/demenagement/retrieve-demenagement/8
				@GetMapping("/retrieve-demenagement/{demenagement-id}")
				@ResponseBody
				public Demenagement retrieveDemenagement(@PathVariable("demenagement-id") Long demenagementId) {
					return demenagementService.retrieveDemenagement(demenagementId);
				}
				
				// http://localhost:8089/SpringMVC/demenagement/add-demenagement
				@PostMapping("/add-demenagement")
				@ResponseBody
				public Demenagement addDemenagement(@RequestBody Demenagement d) {
					Demenagement demenagement = demenagementService.addDemenagement(d);
					return demenagement;
				}
				
				// http://localhost:8089/SpringMVC/demenagement/remove-demenagement/{demenagement-id}
				@DeleteMapping("/remove-demenagement/{demenagement-id}")
				@ResponseBody
				public void removeDemenagement(@PathVariable("demenagement-id") Long demenagementId) {
					demenagementService.deleteDemenagement(demenagementId);
				}
				
				// http://localhost:8089/SpringMVC/demenagement/modify-demenagement
				@PutMapping("/modify-demenagement")
				@ResponseBody
				public Demenagement modifyDemenagement(@RequestBody Demenagement demenagement) {
					return demenagementService.updateDemenagement(demenagement);
				}
				
				
}
