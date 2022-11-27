package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Demenagement;

@Repository
public interface DemenagementRepository extends  JpaRepository <Demenagement, Long>{

}
