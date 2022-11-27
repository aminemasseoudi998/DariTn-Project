import { Component, OnInit } from '@angular/core';
import {Demenagement} from "../module/demenagement";
import {DemenagementService} from "../services/demenagement.service";
import {Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransporteurService} from "../../transporteur/services/transporteur.service";
import {Calendar} from "../../calendar/modalCalendar/calendar";
import {Transporteur} from "../../transporteur/module/transporteur";

@Component({
  selector: 'app-list-demenagement',
  templateUrl: './list-demenagement.component.html',
  styleUrls: ['./list-demenagement.component.css']
})
export class ListDemenagementComponent implements OnInit {
  listTransporteur: any;
  listDemenagement: any;
  form: boolean = false;
  demenagement!: Demenagement
  demenagements!:Demenagement[];
  transporteur:Transporteur;
  calender : Calendar;
  closeResult!: string;
  SearchVal: string = '';

  constructor(private demenagementservice: DemenagementService,private transporteurservice: TransporteurService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.calender = new Calendar();
    this.getAllTransporteur();
    this.getAllDemenagement()
    this.demenagement={
      idDemenagement: null,
      villeDepart: null,
      villeArrive: null,
      dateDemenagement:null,
      tranporteur: null,


    }
  }
  getAllTransporteur() {
    this.transporteurservice.getAlltransporteur().subscribe(res => this.listTransporteur = res);
    console.log(this.listTransporteur);
  }
getAllDemenagement(){
    this.demenagementservice.getAlldemenagement().subscribe(res=>this.listDemenagement=res)

}
  deletedemenagement(idDemenagement: any) {

      this.demenagementservice.deletedemenagement(idDemenagement).subscribe(() => this.getAllDemenagement())

  }
  getOne(idTransporteur:any){
    return this.transporteurservice.getOnetransporteur(idTransporteur).subscribe(c =>{
      this.transporteur=c
      console.log(this.transporteur);
      return "ok";
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
