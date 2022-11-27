package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Agent;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Long> {

}
