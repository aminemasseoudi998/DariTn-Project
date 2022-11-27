package tn.esprit.spring.controller;

import java.time.LocalDate;
import java.util.HashMap;
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

import tn.esprit.spring.entity.Mobilier;
import tn.esprit.spring.interfaces.IMobilierService;



@RestController 
@RequestMapping("/Mobilier")
@CrossOrigin("*")
public class MobilierController {

	@Autowired 
	IMobilierService  iMobilierService ;
	
	// http://localhost:8089/SpringMVC/Mobilier/retrieveAllMobilier
		@GetMapping("/retrieveAllMobilier") 
		@ResponseBody
		public List<Mobilier> getMobilier() {
			List<Mobilier> listMobilier = iMobilierService.retrieveAllMobilier();
			return listMobilier;
			}
		
		// http://localhost:8085/SpringMVC/Mobilier/Add-Mobilier
		@PostMapping("/Add-Mobilier")  
		public Mobilier addMobilier(@RequestBody  Mobilier r)
		{
			return iMobilierService.addMobilier(r);
			
		}
		
		
		// http://localhost:8085/SpringMVC/Mobilier/update-Mobilier
		@PutMapping("/update-Mobilier") 
		@ResponseBody
		public  Mobilier updateMobilier(@RequestBody Mobilier r)
		{
			return iMobilierService.updateMobilier(r);
			 
		}
		
		// http://localhost:8085/SpringMVC/Mobilier/retrieve-Mobilier/{Mobilier-id}
		@GetMapping("/retrieve-Mobilier/{Mobilier-id}") 
		@ResponseBody
		public Mobilier getMobilier(@PathVariable("Mobilier-id") Long idMobilier ) {
		return iMobilierService.retrieveMobilier(idMobilier);
		
		}

		
		//http://localhost:8089/SpringMVC/Mobilier/removeMobilier/{Mobilier-id}
		@DeleteMapping("/removeMobilier/{Mobilier-id}")
		@ResponseBody
		public void removeMobilier(@PathVariable("Mobilier-id") Long idMobilier)
		{
			iMobilierService.removeMobilier(idMobilier);
		}

		@GetMapping("vendu")
	public  List<Object[]>  findMobilierVenduByDate(){
		return iMobilierService.findMobilierVenduByDate();
	}

}
