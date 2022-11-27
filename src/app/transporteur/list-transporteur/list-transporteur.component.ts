import { Component, OnInit } from '@angular/core';
import {TransporteurService} from "../services/transporteur.service";
import {Router} from "@angular/router";
import {Transporteur} from "../module/transporteur";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgToastService} from "ng-angular-popup";
import {CalendarServiceService} from "../../calendar/calendar-service.service";
import {Calendar} from "../../calendar/modalCalendar/calendar";

@Component({
  selector: 'app-list-transporteur',
  templateUrl: './list-transporteur.component.html',
  styleUrls: ['./list-transporteur.component.css']
})
export class ListTransporteurComponent implements OnInit {
  a: Transporteur;
  listTransporteur: any;
  form: boolean = false;
  transporteur!: Transporteur;
  closeResult!: string;
  SearchVal: string = '';
  listevent2 : Calendar[];


  constructor(private calendarService : CalendarServiceService,private transporteurservice: TransporteurService, private modalService: NgbModal, private router: Router,  private toast: NgToastService) {
  }

  c:boolean = false;
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
    this.getevent();
    setTimeout(()=>{
  console.log(this.listevent2);
      this.c=true;
    },1000)
  }

  getevent(){
    this.calendarService.getAllcalendar().subscribe((data : Calendar[])=>{this.listevent2 = data;
      console.log(this.listevent2);
    });
  }

  getAllTransporteur() {
    this.transporteurservice.getAlltransporteur().subscribe(res => this.listTransporteur = res)

  }

  deletetranporteur(idTransporteur: any) {
    let conf=confirm("Etes-vous de supprimer ce transporteur?")
    if (conf) {
      this.transporteurservice.deletetransporteur(idTransporteur).subscribe(() => this.getAllTransporteur())
      this.toast.info({detail: "INFO", summary: 'transporteur est effacé', sticky: true});
    }
  }

  updatetransporteur(transporteur: Transporteur) {
    this.transporteurservice.updatetransporteur(transporteur).subscribe();
    this.router.navigate(['/affiche']);
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
  triASC(){
    this.transporteurservice.TriTransporteurASC().subscribe((res)=> {
      this.listTransporteur =res;
    });
  }
  triDESC(){
    this.transporteurservice.TriTransporteurDESC().subscribe((res)=> {
      this.listTransporteur =res;
    });
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
  }


