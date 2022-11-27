import { Component, OnInit} from '@angular/core';
import {Demenagement} from "../module/demenagement";
import {DemenagementService} from "../services/demenagement.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {TransporteurService} from "../../transporteur/services/transporteur.service";
import {Transporteur} from "../../transporteur/module/transporteur";
import {CalendarServiceService} from "../../calendar/calendar-service.service";
import {Calendar} from "../../calendar/modalCalendar/calendar";

@Component({
  selector: 'app-create-demenagement',
  templateUrl: './create-demenagement.component.html',
  styleUrls: ['./create-demenagement.component.css']
})
export class CreateDemenagementComponent implements OnInit {
  listTransporteur: any;
  listDemenagement: any;
  form: boolean = false;
  idt: any;
  demenagement!: Demenagement;
  calender : Calendar;
  isSuccessful=false;


  constructor(private  calendarService : CalendarServiceService,private transporteurservice: TransporteurService,private demenagementservice: DemenagementService, private router: Router, private toast: NgToastService) {
  }

  ngOnInit(): void {
    this.calender = new Calendar();
    this.getAllTransporteur();
    this.getAlldemenagement();
    this.demenagement = {
      idDemenagement: null,
      villeDepart: null,
      villeArrive: null,
      dateDemenagement: null,
      tranporteur:null,



    }
  }

  getAllTransporteur() {
    this.transporteurservice.getAlltransporteur().subscribe(res => this.listTransporteur = res);
    console.log(this.listTransporteur);
  }

  getAlldemenagement() {
    this.demenagementservice.getAlldemenagement().subscribe(res => this.listDemenagement = res)

  }

  adddemenagement(d: any) {
    this.demenagementservice.adddemenagement(d).subscribe(() => {
      this.getAlldemenagement();
      this.form = false;
      this.toast.success({detail: "SUCCESS", summary: 'demenagement est ajouté', duration: 5000});
      this.router.navigate(['/affichetransporteur']);
    })



  }
  add1demenagement(d: any, idTransporteur:Transporteur) {
    this.transporteurservice.affecterTransporteurToDemenagement(d,idTransporteur).subscribe(() => {
      this.getAlldemenagement();
      this.form = false;
      this.toast.success({detail: "SUCCESS", summary: 'demenagement est ajouté', duration: 5000});
    })
    this.calender.title=d.villeArrive +" "+ d.villeDepart;
    this.calender.start=d.dateDemenagement;
    this.calendarService.addcalendar(this.calender).subscribe(data=>Calendar);
    this.transporteurservice.assignTransporteurtToCalendar(this.calender,idTransporteur).subscribe();
    this.router.navigate(['/affichetransporteur']);


  }




}
