package tn.esprit.spring.interfaces;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

import tn.esprit.spring.entity.Mobilier;


public interface IMobilierService {

	
	List<Mobilier> retrieveAllMobilier();
	Mobilier addMobilier (Mobilier r);
	Mobilier updateMobilier (Mobilier r);
	Mobilier retrieveMobilier (Long id);
	void removeMobilier (Long id);
	public  List<Object[]>  findMobilierVenduByDate();
}
