package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Transporteur;

@Repository
public interface TransporteurRepository  extends JpaRepository <Transporteur, Long> {
	@Query("SELECT t FROM Transporteur t WHERE t.nom LIKE %:nom%")
    List<Transporteur> TransporteurByName(@Param("nom") String nom);
	
	@Query("SELECT t FROM Transporteur t ORDER BY t.nom ASC ")
    List<Transporteur> TrierTransporteurASC();
	
	@Query("SELECT t FROM Transporteur t ORDER BY t.nom ASC ")
    List<Transporteur> TrierTransporteurDESC();

}
