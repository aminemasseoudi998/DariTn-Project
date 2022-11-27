import { Component, OnInit } from '@angular/core';
import {Sujet} from "../../sujet/modelSujet/sujet";
import {CommentaireService} from "../serviceCommentaire/commentaire.service";
import {SujetService} from "../../sujet/serviceSujet/sujet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Commentaire} from "../modelCommentaire/commentaire";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-create-commentaire',
  templateUrl: './create-commentaire.component.html',
  styleUrls: ['./create-commentaire.component.css'],
  providers: [DatePipe]
})
export class CreateCommentaireComponent implements OnInit {

  myDate : Date = new Date();
  a :any;
  commentaire:Commentaire  ;
  constructor(private tokenStorageService: TokenStorageService,private serviceSujet:SujetService,private router: Router,private datePipe: DatePipe,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.commentaire = new Commentaire();
    console.log(this.route.snapshot.queryParamMap.get('id'))
  }
  add() {
    //console.log(this.sujet);
   // var file : string =this.sujet.image.toString();
    const usertest = this.tokenStorageService.getUser();
    // this.user.id =  usertest.getId();
    // this.user.username =  usertest.username;
    this.commentaire.iduser =usertest.id;
    //console.log()
    //this.commentaire.user.roles= this.a;
    this.myDate =  new Date(Date.now());
    this.commentaire.dateAjout= this.myDate;
    // @ts-ignore
    this.serviceSujet.addComment( this.route.snapshot.paramMap.get('id'),this.commentaire).subscribe(data=>Commentaire);
   /* let currentUrl = this.router.url;
    this.router.navigateByUrl('/forum', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });*/


    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
