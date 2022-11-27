import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Sujet} from "../modelSujet/sujet";
import {SujetService} from "../serviceSujet/sujet.service";

@Component({
  selector: 'app-show-sujet',
  templateUrl: './show-sujet.component.html',
  styleUrls: ['./show-sujet.component.css']
})
export class ShowSujetComponent implements OnInit {
  id: any ;
  d : any ;
  constructor( private route: ActivatedRoute, private serviceSujet:SujetService ) { }
  sujet = new Sujet();
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.serviceSujet.findById(this.id).subscribe( data => { this.sujet = data });
  }
 // this.sujetService.findAll().subscribe( (data: Sujet[] )=> this.listSujet = data);
}
