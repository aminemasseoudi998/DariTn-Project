package tn.esprit.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Annonce;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.AnnonceRepository;
import tn.esprit.spring.repository.ImageVideoRepository;
import tn.esprit.spring.service.AnnonceService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController

@RequestMapping("/api/v1")
public class AnnonceController {

	@Autowired
	private AnnonceService annonceService;
	

	@Autowired
	private ImageVideoRepository im;
	
	@Autowired
	private AnnonceRepository AR;
	
	@GetMapping("/AfficheAnnonce")
	public List<Annonce> AfficheAnnonce (){
		return annonceService.getAllAnnonces();
		}
	@GetMapping("/AfficheAnnonceCoupon")
	public List<Annonce> AfficheAnnonceCoupon (){
		return AR.Annonces();
		}
	
	@PostMapping("/AjoutAnnonce/{idUser}")

	public Annonce AjoutAnnonce(@RequestBody Annonce A, @PathVariable("idUser") Long idUser){
		return annonceService.saveAnnonce(A, idUser);
		}
	
	@GetMapping("/AfficheAnnonce/{id}")
	public ResponseEntity<Annonce> AfficheAnnonceById(@PathVariable Long id){
		Annonce A= annonceService.getAnnonce(id) ;
		return ResponseEntity.ok(A); //cast 
		}
	
	@PutMapping("/ModifierAnnonce/{id}")
	public Annonce ModifierAnnonce(@RequestBody Annonce A, @PathVariable Long id){
		
		
		return annonceService.updateAnnonce(A);
		
		}

	@PutMapping("/AcheterAnnonce/{idAnnonce}/{idUser}")
	public void acheterAnnonce(@PathVariable("idAnnonce") Long idAnnonce, @PathVariable("idUser") Long idUser) {
		annonceService.acheterAnnonce(idAnnonce, idUser);
		
	}
	
	@PutMapping("/AffecterCoupon/{idAnnonce}/{codeCoupon}")
	public void AffecterCoupon(@PathVariable("idAnnonce") Long idAnnonce, @PathVariable("codeCoupon") String code) {
		annonceService.AffecterAnnonce(idAnnonce, code);
		
	}
		
		
	@PutMapping("/AffecterAgent/{idAnnonce}/{idAgent}")
	public void AffecterAgent(@PathVariable("idAnnonce") Long idAnnonce, @PathVariable("idAgent") Long idAgent) {
		annonceService.affecterAgent(idAnnonce, idAgent);
	}
	
	@DeleteMapping("/deleteAnnonce/{idAnnonce}")
	@ResponseBody
	public void deleteAnnonce(@PathVariable("idAnnonce") Long idAnnonce)
	{
		annonceService.deleteAnnonceById(idAnnonce);
	}
	
	@GetMapping("/AS/{idAnnonce}")
	public  List<Annonce>  AnnonceSimilaires(@PathVariable Long idAnnonce){
		Annonce A= annonceService.getAnnonce(idAnnonce) ;
		System.out.println(A.getTypeAnnonce());
	return AR.AnnonceSimilaires(A.getLocalisation(),A.getPrix(),A.getNbchambre(),A.getTypeAnnonce().toString(),A.getId());
	}
	
	@GetMapping("/getuserfromannonce/{idAnnonce}")
	public Long getUserFromAnnonce(@PathVariable("idAnnonce") Long idAnnonce) {
	return annonceService.getUserFromAnnonce(idAnnonce);
	}
	
	@GetMapping("/checkCoupon/{idAnnonce}")
	public Long CheckCoupon(@PathVariable("idAnnonce") Long idAnnonce) {
	return annonceService.checkCoupon(idAnnonce);
	}
	
	@GetMapping("/FetchAnnonce/{id}")
	public ResponseEntity<Annonce> FetchAnnonce(@PathVariable Long id){
		Annonce A= annonceService.getAnnonce(id) ;
		A.getImageVideo().forEach(i->{
			im.delete(i);
		});
		return ResponseEntity.ok(A); //cast 
		}
	
	@GetMapping("/verifEtatCoupon/{code}")
	public Long verifEtatCoupon(@PathVariable("code") String code) {
	return annonceService.verifEtatCoupon(code);
	}
	
	@GetMapping("/AnnonceBooster")
	public int AnnonceBooster() {
	return annonceService.AnnonceBooster();
	}
	@GetMapping("/AnnonceNonBooster")
	public int AnnonceNonBooster() {
	return annonceService.AnnonceNonBooster();
	}
}

