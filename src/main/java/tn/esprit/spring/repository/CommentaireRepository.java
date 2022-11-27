//remege
package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.spring.entity.Commentaire;
@Repository
public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {

}
