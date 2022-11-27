package tn.esprit.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import tn.esprit.spring.entity.Reclamation;
import tn.esprit.spring.interfaces.IReclamationService;



@RestController 
@RequestMapping("/Reclamation")
@CrossOrigin("*")
public class ReclamationController {
	@Autowired 
	IReclamationService  iReclamationService ;
	
	// http://localhost:8089/SpringMVC/Reclamation/retrieveAllReclamation
		@GetMapping("/retrieveAllReclamation") 
		@ResponseBody
		public List<Reclamation> getReclamation() {
			List<Reclamation> listReclamation = iReclamationService.retrieveAllReclamation();
			return listReclamation;
			}
		
		// http://localhost:8085/SpringMVC/Reclamation/Add-Reclamation
		@PostMapping("/Add-Reclamation")  
		public Reclamation addReclamation(@RequestBody  Reclamation r)
		{
			return iReclamationService.addReclamation(r);
			
		}
		
		
		// http://localhost:8085/SpringMVC/Reclamation/update-Reclamation
		@PutMapping("/update-Reclamation") 
		@ResponseBody
		public  Reclamation updateReclamation(@RequestBody Reclamation r)
		{
			return iReclamationService.updateReclamation(r);
			 
		}
		
		// http://localhost:8085/SpringMVC/Reclamation/retrieve-Reclamation/{Reclamation-id}
		@GetMapping("/retrieve-Reclamation/{Reclamation-id}") 
		@ResponseBody
		public Reclamation getReclamation(@PathVariable("Reclamation-id") Long idReclamation ) {
		return iReclamationService.retrieveReclamation(idReclamation);
		
		}

		
		//http://localhost:8089/SpringMVC/Reclamation/removeReclamation/{Reclamation-id}
		@DeleteMapping("/removeReclamation/{Reclamation-id}")
		@ResponseBody
		public void removeReclamation(@PathVariable("Reclamation-id") Long idReclamation)
		{
			iReclamationService.removeReclamation(idReclamation);
		}



}
