import {Component, Input, OnInit} from '@angular/core';
import {Commentaire} from "../modelCommentaire/commentaire";
import {User} from "../../models/user";
import {TokenStorageService} from "../../_services/token-storage.service";
import {SujetService} from "../../sujet/serviceSujet/sujet.service";
import {CommentaireService} from "../serviceCommentaire/commentaire.service";

import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-list-commentaire',
  templateUrl: './list-commentaire.component.html',
  styleUrls: ['./list-commentaire.component.css']
})
export class ListCommentaireComponent implements OnInit {
  @Input() commentslist : Commentaire[] =[];
  userlogged : User;
  constructor(private userService: UserService ,private tokenStorageService: TokenStorageService,private commentaireService:CommentaireService,private router: Router) { }

  ngOnInit(): void {
    const usertest = this.tokenStorageService.getUser();
    this.userlogged=usertest;
    console.log("aaa");
  console.log(this.commentslist);

    setTimeout(() => {
      this.getusers()
    console.log("hi");
      //  this.downloadMyFile();
    }, 100);

  }

  getusers(){
    for ( let i = 0; i < this.commentslist.length; i++){
      this.userService.getUserById(this.commentslist[i].iduser).subscribe((data :User)=> { this.commentslist[i].user = data;
        console.log(data);
      } );
    }
  }

  get sortData() {


    return this.commentslist.sort((b, a) => {
      return <any>new Date(b.dateAjout) - <any>new Date(a.dateAjout);
    });
  }

  deleteComment(id : any){
    this.commentaireService.delete(id).subscribe(r => this.ngOnInit());
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
