//remege
package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.spring.entity.Sujet;
@Repository
public interface SujetRepository extends JpaRepository<Sujet, Long>{

}
