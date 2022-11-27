import { Component, OnInit } from '@angular/core';
import {TransporteurService} from "../services/transporteur.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Transporteur} from "../module/transporteur";

@Component({
  selector: 'app-front-transporteur',
  templateUrl: './front-transporteur.component.html',
  styleUrls: ['./front-transporteur.component.css']
})
export class FrontTransporteurComponent implements OnInit {
  a: Transporteur;
  listTransporteur: any;
  form: boolean = false;
  transporteur!: Transporteur;
  t : any ; 

  SearchVal: string = '';

  constructor(private transporteurservice: TransporteurService, private modalService: NgbModal, private router: Router  ) { }

  ngOnInit(): void {
    this.getAllTransporteur()
    this.transporteur = {
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



  getAllTransporteur(){
    this.transporteurservice.getAlltransporteur().subscribe(data => {
      this.listTransporteur = data;
      this.listTransporteur.forEach(m => m.imageVideo?.length > 0 ?  m.placeholder = m.imageVideo[0].image: m.placeholder = '/assets/img/property-1.jpg')
    });
  }
  Search() {
    if (this.SearchVal === '') {
      this.getAllTransporteur();
    } else {
      this.transporteurservice.SearchTransporteurByName(this.SearchVal).subscribe((res) => {
        this.listTransporteur = res;
      });
    }
  }
  create(){
    this.router.navigate(['/create']);

  }
  demenagement(){
    this.router.navigate(['/ajout']);
  }

}
