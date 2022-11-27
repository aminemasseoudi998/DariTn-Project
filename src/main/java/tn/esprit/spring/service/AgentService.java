package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.Agent;

public interface AgentService {
	Agent saveAgent(Agent u);
	Agent updateAgent(Agent u);
	void deleteAgent(Agent u);
	void deleteAgentById(Long id);
	Agent getAgent(Long id);
	List<Agent> getAllAgents();
	int Vente(Long idAgent);
	int Location(Long idAgent);
	
	
}
