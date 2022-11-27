package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Reclamation;
import tn.esprit.spring.entity.ReclamationStatus;

import java.util.List;


@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long> {

	
    List<Reclamation> findAllByStatusEquals(ReclamationStatus reclamationStatus);
}
