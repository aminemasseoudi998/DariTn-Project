package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import tn.esprit.spring.entity.Annonce;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Long> {
	@Query(value = "Select Max(id) from Annonce", nativeQuery = true)
	int LastID();
	
	@Query(value="select * from Annonce A where A.localisation= :localisation"
			+ " and A.prix Between :prix-100 And :prix+100 and A.nbchambre Between :NBchambre-1 and :NBchambre+1 and A.type_annonce= :Typeannonce and A.id!=:id",nativeQuery = true)
	List<Annonce> AnnonceSimilaires(String localisation,double prix,int NBchambre, String Typeannonce,long id);
	
	


	@Query(value="SELECT * FROM `annonce` WHERE  coupon_id IS NOT NULL ORDER BY coupon_id DESC ",nativeQuery = true )
	List<Annonce> Annonces();	

	@Query(value="SELECT user_id FROM Annonce a WHERE a.id=:idannonce",nativeQuery = true )
	Long getUserFromAnnonce(Long idannonce);

	
	@Query(value="SELECT coupon_id FROM Annonce a WHERE a.id=:idannonce",nativeQuery = true )
	Long checkCoupon(Long idannonce);

	@Query(value="DELETE * FROM image_video WHERE annonce_id=:idannonce",nativeQuery = true )
	void ReplaceImage(Long idannonce);
	
	@Query(value="SELECT `etat` FROM `coupon` WHERE `code`=:code",nativeQuery = true )
	Boolean VerifEtatCoupon(String code);
		
	@Query(value="SELECT COUNT(*) FROM `annonce` WHERE coupon_id is not null",nativeQuery = true )
	int AnnonceBooster();
	
	@Query(value="SELECT COUNT(*) FROM `annonce` WHERE coupon_id is  null",nativeQuery = true )
	int AnnonceNonBooster();

}