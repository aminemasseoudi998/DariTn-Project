package tn.esprit.spring.repository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Mobilier;


@Repository
public interface MobilierRepository extends JpaRepository<Mobilier, Long> {

    @Query(value = "select DATE_FORMAT(date_vendu,'%Y-%m-%d') , COUNT(*) from mobilier where status = false group by DATE_FORMAT(date_vendu,'%Y-%m-%d') ; ", nativeQuery = true)
    List<Object[]> findAllByStatusFalseAndGroupByLocalDate();

}
