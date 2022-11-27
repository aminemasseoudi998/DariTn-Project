import { Component, OnInit } from '@angular/core';
import {SujetService} from "../serviceSujet/sujet.service";
import {Sujet} from "../modelSujet/sujet";
import {User} from "../../models/user";
import {TokenStorageService} from "../../_services/token-storage.service";
@Component({
  selector: 'app-list-sujet',
  templateUrl: './list-sujet.component.html',
  styleUrls: ['./list-sujet.component.css']
})
export class ListSujetComponent implements OnInit {

  listSujet:Sujet[];
  user : User;
  sujet:Sujet;
  userlogged : User;
  constructor(private sujetService:SujetService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.sujetService.findAll().subscribe( (data: Sujet[] )=>{ this.listSujet = data;
    console.log(data);
    } );
    const usertest = this.tokenStorageService.getUser();
    this.userlogged=usertest;
  }
  deleteSujet(id : any){
   this.sujetService.delete(id).subscribe(r => this.ngOnInit());
  }



}
