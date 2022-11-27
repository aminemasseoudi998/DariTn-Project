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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestBody;

import tn.esprit.spring.entity.Calendar;
import tn.esprit.spring.entity.Demenagement;
import tn.esprit.spring.entity.Transporteur;
import tn.esprit.spring.interfaces.ITransporteur;

@CrossOrigin("*")
@Validated
@RestController
@RequestMapping("/transporteur")
public class TransporteurController {
	
	@Autowired
	ITransporteur transporteurService;
	

	// http://localhost:8089/SpringMVC/transporteur/retrieve-all-transporteur
	@GetMapping("/retrieve-all-transporteur")
	@ResponseBody
	public List<Transporteur> getTransporteurs() {
		List<Transporteur> list = transporteurService.retrieveAllTransporteur();
		return list;
	}
	
	// http://localhost:8089/SpringMVC/transporteur/retrieve-transporteur/8
		@GetMapping("/retrieve-transporteur/{transporteur-id}")
		@ResponseBody
		public Transporteur retrieveTransporteur(@PathVariable("transporteur-id") Long transporteurId) {
			return transporteurService.retrieveTransporteur(transporteurId);
		}
	
		// http://localhost:8081/SpringMVC/transporteur/add-transporteur
		@PostMapping("/add-transporteur")
		@ResponseBody
		public Transporteur addTransporteur(@RequestBody Transporteur t) {
			Transporteur transporteur = transporteurService.addTransporteur(t);
			return transporteur;
		}
		
		// http://localhost:8089/SpringMVC/transporteur/remove-transporteur/{transproteur-id}
		@DeleteMapping("/remove-transporteur/{transporteur-id}")
		@ResponseBody
		public void removeTransporteur(@PathVariable("transporteur-id") Long transporteurId) {
			transporteurService.deleteTransporteur(transporteurId);
		}
		
		// http://localhost:8089/SpringMVC/transporteur/modify-transporteur
		@PutMapping("/modify-transporteur")
		@ResponseBody
		public Transporteur modifyTransporteur(@RequestBody Transporteur transporteur) {
			return transporteurService.updateTransporteur(transporteur);
		}
		
		@PutMapping("/assignDemenagementToTransporteur/{transporteur-id}")
		@ResponseBody	
		public void assignDemenagementToTransporteur(@PathVariable("transporteur-id") Long transporteurId,@RequestBody Demenagement demenagement)
		{
			transporteurService.assignDemenagementToTransporteur(transporteurId, demenagement);
		}
		
		@PutMapping("/assignTransporteurtToCalendar/{transporteur-id}")
		@ResponseBody	
		public void assignTransporteurtToCalendar(@PathVariable("transporteur-id") Long transporteurId,@RequestBody Calendar calendar)
		{
			transporteurService.assignTransporteurtToCalendar(transporteurId, calendar);
		}
		
		
		// http://localhost:8089/SpringMVC/servlet/transporteur/retrieve-transporteurByNom
		@GetMapping("/retrieve-transporteurByNom/{transporteur-nom}")
		public List <Transporteur> retrieveTransporteurByNom(@PathVariable("transporteur-nom") String name) {
			return transporteurService.retrieveTransporteursByName(name);
		}

		// http://localhost:8089/SpringMVC/servlet/transporteur/retrieve-transporteurASC
		@GetMapping("/retrieve-transporteurASC")
		public List <Transporteur> retrieveTransporteurASC() {
			return transporteurService.TrierTransporteurASC();
		}

		// http://localhost:8089/SpringMVC/servlet/transporteur/retrieve-transporteurDESC
		@GetMapping("/retrieve-transporteurDESC")
		public List <Transporteur> retrieveTransporteurDESC() {
			return transporteurService.TrierTransporteurDESC();
		}

		
}
