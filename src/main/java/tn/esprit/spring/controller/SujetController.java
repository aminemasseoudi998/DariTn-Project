//remerge
package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.Sujet;
import tn.esprit.spring.interfaces.SujetInterface;

import java.util.List;

@RestController
@RequestMapping("/sujet")
public class SujetController {
		
		@Autowired
		SujetInterface sujetInterface;
		
		// http://localhost:8089/SpringMVC/sujet/retrieve-all-sujets
		@GetMapping("/retrieve-all-sujets")
		@ResponseBody
		public List<Sujet> getSujets() {
			List<Sujet> listsujets = sujetInterface.retrieveAllSujets();
			return listsujets;
		}

		
		// http://localhost:8089/SpringMVC/sujet/retrieve-sujet/8
		@GetMapping("/retrieve-sujet/{sujet-id}")
		@ResponseBody
		public Sujet retrieveSujet(@PathVariable("sujet-id") Long idSujet) {
			return sujetInterface.retrieveSujet(idSujet);
		}
		
		// http://localhost:8089/SpringMVC/sujet/add-sujet
		@PostMapping("/add-sujet")
		@ResponseBody
		public Sujet addSujet(@RequestBody Sujet s)
		{
			
			return sujetInterface.addSujet(s);
		}
		
		
		
		// http://localhost:8089/SpringMVC/sujet/remove-sujet/{sujet-id}
		@DeleteMapping("/remove-sujet/{sujet-id}")
		@ResponseBody
		public void removeSujet(@PathVariable("sujet-id") Long idSujet) {
			sujetInterface.removeSujet(idSujet);
		}
		
		
		// http://localhost:8089/SpringMVC/sujet/modify-sujet
		@PutMapping("/modify-sujet")
		@ResponseBody
		public Sujet modifySujet(@RequestBody Sujet s) {
			return sujetInterface.updateSujet(s);
		}
			
		// http://localhost:8089/SpringMVC/fournisseur/assignSecteurActiviteToFournisseur/{fournisseur-id}/{secteurA-id}
		
		//@RequestMapping(value = "/assignCommentaireToSujet/{sujet-id}/{commentaire-id}", produces = "application/json", method = {RequestMethod.GET, RequestMethod.PUT})
		@PutMapping("/addAndAssignCommentaireToSujet/{sujet-id}")
		@ResponseBody
		public void assignCommentaireToSujet(@PathVariable("sujet-id") Long sujetId,@RequestBody Commentaire commentaire) {
			sujetInterface.assignCommentaireToSujet(sujetId, commentaire);
		}	
	
}
