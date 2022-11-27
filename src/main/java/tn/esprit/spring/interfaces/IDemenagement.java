package tn.esprit.spring.interfaces;
import java.util.List;

import tn.esprit.spring.entity.Demenagement;
public interface IDemenagement {
	List<Demenagement> retrieveAllDemenagement();

	Demenagement addDemenagement (Demenagement d);

	void deleteDemenagement (Long id);

	Demenagement updateDemenagement (Demenagement d);

	Demenagement retrieveDemenagement (Long id);
	
	

}
