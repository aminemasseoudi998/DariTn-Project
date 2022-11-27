package tn.esprit.spring.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import tn.esprit.spring.entity.RDV;
import tn.esprit.spring.service.RDVService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class RDVController {
	
	@Autowired
	private RDVService RDVservice;
	
	// get all RDVs 
	@GetMapping("/RDVs")
	public List<RDV> getAllRDVs(){
		return RDVservice.getAllRDVs();
		
	}
	
	// create RDV 
	@PostMapping("/RDVs/{idUser}/{idAnnonce}")
	public RDV createRDV(@RequestBody RDV u,@PathVariable("idUser") Long idUser,
			@PathVariable("idAnnonce") Long idAnnonce) {
		return RDVservice.saveRDV(u,idUser,idAnnonce);
	}
	
	@GetMapping("/RDVs/{id}")
	public ResponseEntity<RDV> getRDVById(@PathVariable Long id) {
		RDV u =RDVservice.getRDV(id);
		return ResponseEntity.ok(u);
	}
	
	@PutMapping("/RDVs/{id}")
	public ResponseEntity<RDV> updateRDV(@PathVariable Long id,@RequestBody Date dateRDV){
		RDV rdv = RDVservice.getRDV(id);
		
		
		rdv.setDateRDV(dateRDV);
		
		RDV updateRDV = RDVservice.updateRDV(rdv);
		return ResponseEntity.ok(updateRDV);
	}
	
	@DeleteMapping("/DeleteRDV/{RdvID}")
	@ResponseBody
	public void DeleteRDV(@PathVariable("RdvID") Long RdvID)
	{
		RDVservice.deleteRDVById(RdvID);
	}


}
