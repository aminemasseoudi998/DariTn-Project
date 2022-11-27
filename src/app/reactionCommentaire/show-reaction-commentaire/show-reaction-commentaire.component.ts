import { Component,Input, OnInit } from '@angular/core';
import {ReactionCommentaire} from "../modelReactionCommentaire/reactionCommentaire";
import {Commentaire} from "../../commentaire/modelCommentaire/commentaire";
import {TokenStorageService} from "../../_services/token-storage.service";
import {CommentaireService} from "../../commentaire/serviceCommentaire/commentaire.service";
import {Router} from "@angular/router";
import {SujetService} from "../../sujet/serviceSujet/sujet.service";

@Component({
  selector: 'app-show-reaction-commentaire',
  templateUrl: './show-reaction-commentaire.component.html',
  styleUrls: ['./show-reaction-commentaire.component.css']
})
export class ShowReactionCommentaireComponent implements OnInit {
  @Input() commentaire : Commentaire;
  reactionCommentaire : ReactionCommentaire ;
  nblike : number =0 ;
  nbdislike : number = 0;
  constructor(private tokenStorageService:TokenStorageService,private router: Router,private serviceCommentaire:CommentaireService) { }

  ngOnInit(): void {
    this.reactionCommentaire = new ReactionCommentaire();

    this.calculenb();



  }


  calculenb(){
    for(let i=0;i< this.commentaire.reactions.length;i++){
      if (this.commentaire.reactions[i].reaction==true){
        this.nblike=  this.nblike+1;
      }
      if (this.commentaire.reactions[i].reaction==false){
        this.nbdislike=  this.nbdislike +1;
      }
      //console.log(this.commentaire.reactions[i].reaction==true);
     // console.log(  this.nblike);
    }

  }

  dislike(){


    const usertest = this.tokenStorageService.getUser();
    this.reactionCommentaire.iduser =usertest.id;
    //  this.myDate =  new Date(Date.now());
    //  this.commentaire.dateAjout= this.myDate;
    this.reactionCommentaire.reaction = false;
    // @ts-ignore
    this.serviceCommentaire.addReaction(this.commentaire.id  ,this.reactionCommentaire).subscribe(data=>ReactionCommentaire);

    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  like(){

 // console.log
    const usertest = this.tokenStorageService.getUser();
    this.reactionCommentaire.iduser =usertest.id;
    //  this.myDate =  new Date(Date.now());
    //  this.commentaire.dateAjout= this.myDate;
    this.reactionCommentaire.reaction = true;
    // @ts-ignore
    this.serviceCommentaire.addReaction(this.commentaire.id  ,this.reactionCommentaire).subscribe(data=>ReactionCommentaire);

    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }



}
