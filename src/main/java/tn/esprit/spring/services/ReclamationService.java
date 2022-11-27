package tn.esprit.spring.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.stereotype.Service;

import tn.esprit.spring.interfaces.IReclamationService;
import tn.esprit.spring.entity.Reclamation;
import tn.esprit.spring.entity.ReclamationStatus;
import tn.esprit.spring.mail.EmailServiceImpl;
import tn.esprit.spring.repository.ReclamationRepository;


@Service
public class ReclamationService implements IReclamationService {
	@Autowired
	ReclamationRepository reclamationRepository;
	@Autowired
	EmailServiceImpl emailService;
	
	@Override
	public List<Reclamation> retrieveAllReclamation() {
		return reclamationRepository.findAll();
	}

	@Override
	public Reclamation addReclamation(Reclamation r) {
		r.setDate(LocalDate.now());
		r.setStatus(ReclamationStatus.EN_COURS);
		return reclamationRepository.save(r);
	}

	@Override
	public Reclamation updateReclamation(Reclamation r) {


		if(r.getReponse() != null){
			if (!r.getReponse().equals("") ) {
				Reclamation reclamation = reclamationRepository.findById(r.getId()).orElse(null);
				this.emailService.sendSimpleMessage(reclamation.getUser().getEmail(),
						"reclamation numero " + r.getId(),
						r.getReponse());
				r.setStatus(ReclamationStatus.TRAITEE);

			}


		}
		return reclamationRepository.save(r);
	}

	@Override
	public Reclamation retrieveReclamation(Long id) {
		return reclamationRepository.findById(id).orElse(null);
	}

	@Override
	public void removeReclamation(Long id) {
		reclamationRepository.deleteById(id);
		
	}

	
	
	@Override
	public List<Reclamation> findFixedReclamations() {
		return reclamationRepository.findAllByStatusEquals(ReclamationStatus.TRAITEE);
	}
	
	@Override
	public List<Reclamation> saveAll(List<Reclamation> reclamations) {
		return reclamationRepository.saveAll(reclamations);
	}
}
