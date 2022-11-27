package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.RDV;

@Repository
public interface RDVRepository extends JpaRepository<RDV, Long> {

}
