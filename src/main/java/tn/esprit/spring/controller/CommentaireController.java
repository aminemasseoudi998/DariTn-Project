//remerge
package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.ReactionCommentaire;
import tn.esprit.spring.interfaces.CommentaireInterface;

import java.util.List;

@RestController
@RequestMapping("/commentaire")
public class CommentaireController {

    @Autowired
    CommentaireInterface commentaireInterface;

    // http://localhost:8089/SpringMVC/sujet/retrieve-all-sujets
    @GetMapping("/commentaire")
    @ResponseBody
    public List<Commentaire> getCommentaire() {
        List<Commentaire> listStocks = commentaireInterface.retrieveAllCommentaires();
        return listStocks;
    }


    // http://localhost:8089/SpringMVC/sujet/retrieve-sujet/8
    @GetMapping("/retrieve-commentaire/{commentaire-id}")
    @ResponseBody
    public Commentaire retrieveCommentaire(@PathVariable("sujet-id") Long idCommentaire) {
        return commentaireInterface.retrieveCommentaire(idCommentaire);
    }

    // http://localhost:8089/SpringMVC/stock/add-sujet
    @PostMapping("/add-commentaire")
    @ResponseBody
    public Commentaire addCommentaire(@RequestBody Commentaire s) {
        return commentaireInterface.addCommentaire(s);
    }


    // http://localhost:8089/SpringMVC/stock/remove-stock/{stock-id}
    @DeleteMapping("/remove-commentaire/{commentaire-id}")
    @ResponseBody
    public void removeCommentaire(@PathVariable("commentaire-id") Long idCommentaire) {
        commentaireInterface.removeCommentaire(idCommentaire);
    }

    // http://localhost:8089/SpringMVC/stock/modify-stock
    @PutMapping("/modify-commentaire")
    @ResponseBody
    public Commentaire modifyCommentaire(@RequestBody Commentaire s) {
        return commentaireInterface.updateCommentaire(s);
    }

    @PutMapping("/addAndAssignReactionCommentaireToCommentaire/{commentaire-id}")
    @ResponseBody
    public void addAndAssignReactionCommentaireToCommentaire(@PathVariable("commentaire-id") Long commentaireId, @RequestBody ReactionCommentaire reactionCommentaire) {


        commentaireInterface.addAndAssignReactionCommentaireToCommentaire(commentaireId, reactionCommentaire);


    }
}
