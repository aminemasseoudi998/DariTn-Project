package tn.esprit.spring.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Annonce;
import tn.esprit.spring.entity.RDV;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.AnnonceRepository;
import tn.esprit.spring.repository.RDVRepository;
import tn.esprit.spring.repository.UserRepository;

@Service
public class RDVServiceIMPL implements RDVService {
	
	@Autowired
	RDVRepository RDVRepo;
	@Autowired
	UserRepository UserRepo;
	@Autowired
	AnnonceRepository AnnRepo;
	@Override
	public RDV saveRDV(RDV u,Long IdUser,Long IdAnnonce) {
		
		Annonce annonce = AnnRepo.findById(IdAnnonce).orElse(null);
		User user= UserRepo.findById(IdUser).orElse(null);
		u.setUser(user);
		u.setAnnonce(annonce);
		//u.setDateRDV(new Date(System.currentTimeMillis()));
		return RDVRepo.save(u);
	}

	@Override
	public RDV updateRDV(RDV u) {
		
		return RDVRepo.save(u);
	}

	@Override
	public void deleteRDV(RDV u) {
		// TODO Auto-generated method stub
		RDVRepo.delete(u);
	}

	@Override
	public void deleteRDVById(Long id) {
		// TODO Auto-generated method stub
		RDVRepo.deleteById(id);
	}

	@Override
	public RDV getRDV(Long id) {
		// TODO Auto-generated method stub
		return RDVRepo.findById(id).orElseThrow(null);
	}

	@Override
	public List<RDV> getAllRDVs() {
		// TODO Auto-generated method stub
		return RDVRepo.findAll();
	}
	

}
