package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Agent;
import tn.esprit.spring.repository.AgentRepository;
import tn.esprit.spring.repository.AnnonceRepository;

@Service
public class AgentServiceIMPL implements AgentService {

	@Autowired
	AgentRepository AgentRepo;
	@Autowired
	AnnonceRepository annonceRepo;
	@Override
	public Agent saveAgent(Agent A) {

		return AgentRepo.save(A);
	}

	@Override
	public Agent updateAgent(Agent A) {
		// TODO Auto-generated method stub
		return AgentRepo.save(A);
	}

	@Override
	public void deleteAgent(Agent A) {
		// TODO Auto-generated method stub
		AgentRepo.delete(A);
	}

	@Override
	public void deleteAgentById(Long id) {
		// TODO Auto-generated method stub
		AgentRepo.deleteById(id);
	}

	@Override
	public Agent getAgent(Long id) {
		// TODO Auto-generated method stub
		return AgentRepo.findById(id).orElseThrow(null);
	}

	@Override
	public List<Agent> getAllAgents() {
		// TODO Auto-generated method stub
		return AgentRepo.findAll();
	}

	@Override
	public int Vente(Long idAgent) {
		
		return AgentRepo.findById(idAgent).orElse(null).getVentes();
	}

	@Override
	public int Location(Long idAgent) {
		return AgentRepo.findById(idAgent).orElse(null).getLocations();
	}
	
}
