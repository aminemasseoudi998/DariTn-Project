import { Component, OnInit } from '@angular/core';
import {Transporteur} from "../module/transporteur";
import {TransporteurService} from "../services/transporteur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-transporteur',
  templateUrl: './update-transporteur.component.html',
  styleUrls: ['./update-transporteur.component.css']
})
export class UpdateTransporteurComponent implements OnInit {

  listTransporteur: any;
  form:boolean=false;
  transporteur!:Transporteur;
  closeResult!: string;

  constructor(private transporteurservice:TransporteurService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTransporteur()
    this.transporteur={
      idTransporteur: null,
      nom: null,
      prenom: null,
      num: null,
      cin: null,
      etat: null,
      imageVideo : null,
      placeholder : null
    }
  }
  getAllTransporteur() {
    this.transporteurservice.getAlltransporteur().subscribe(res => this.listTransporteur = res)
  }

  updatetransporteur(transporteur:Transporteur){
      this.transporteurservice.updatetransporteur(transporteur).subscribe();
  }

  }
