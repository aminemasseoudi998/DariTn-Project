package tn.esprit.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Agent;
import tn.esprit.spring.service.AgentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AgentController {

	
	@Autowired
	private AgentService Agentservice;
	
	
	// get all Agents 
	@GetMapping("/Agents")
	public List<Agent> getAllAgents(){
		return Agentservice.getAllAgents();
		
	}
	
	// create Agent 
	@PostMapping("/Agents")
	public Agent createAgent(@RequestBody Agent u) {
		return Agentservice.saveAgent(u);
	}
	
	@GetMapping("/Agents/{id}")
	public ResponseEntity<Agent> getAgentById(@PathVariable Long id) {
		Agent u =Agentservice.getAgent(id);
		return ResponseEntity.ok(u);
	}
	
	@PutMapping("/Agents/{id}")
	public ResponseEntity<Agent> updateAgent(@PathVariable Long id,@RequestBody Agent r){
		Agent Agent = Agentservice.getAgent(id);
		Agent.setNom(r.getNom());
		Agent.setPrenom(r.getPrenom());
		Agent.setTelephone(r.getTelephone());
		//Agent.setIdAnnonce(r.getIdAnnonce());
		
		Agent updateAgent = Agentservice.updateAgent(Agent);
		return ResponseEntity.ok(updateAgent);
	}
	
	@GetMapping("/CalculerVenteAgent/{id}")
	public int Ventes(@PathVariable("id") Long id) {
		return Agentservice.Vente(id);
	}
	@GetMapping("/CalculerLocationAgent/{id}")
	public void Locations(@PathVariable("id") Long id) {
		System.out.println("location *************** :"+Agentservice.Location(id));
		System.out.println("**************");
	}

}
