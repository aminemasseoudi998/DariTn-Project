import { Component, OnInit } from '@angular/core';
import {Sujet} from "../modelSujet/sujet";
import {SujetService} from "../serviceSujet/sujet.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import {TokenStorageService} from "../../_services/token-storage.service";
import {User} from "../../models/user";
@Component({
  selector: 'app-create-sujet',
  templateUrl: './create-sujet.component.html',
  styleUrls: ['./create-sujet.component.css'],
  providers: [DatePipe]
})
export class CreateSujetComponent implements OnInit {

  user : User;
  myDate : Date = new Date();
  sujet:Sujet;
  a : any ;
  constructor( private serviceSujet:SujetService,private router: Router,private datePipe: DatePipe,private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(  ): void {
    this.sujet = new Sujet();
  }
  add() {
    console.log(this.sujet);
    const usertest = this.tokenStorageService.getUser();
   // this.user.id =  usertest.getId();
   // this.user.username =  usertest.username;
    this.sujet.user =usertest.username;
    this.sujet.user.roles= this.a;
    console.log(usertest);
    var file : string =this.sujet.image.toString();
    this.myDate =  new Date(Date.now());
    this.sujet.dateAjout= this.myDate;
    // @ts-ignore
    var filename = file.split('\\').pop().split('/').pop().toString();
    this.sujet.image=filename;
    this.serviceSujet.save(this.sujet).subscribe(data=>Sujet);
    this.router.navigate(['/forum']);
  }
}
