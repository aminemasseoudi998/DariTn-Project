import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { rdvs } from '../models/RDV';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})

export class RendezVousComponent implements OnInit {
  idannonce: number;
  localisation:any;
  RDV = new rdvs();
  currentUser: any;
  rdvDate: any;
  UserRDV = new rdvs();
  ErrorRDV: any = null;
  constructor(public modal: NgbActiveModal, public token: TokenStorageService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.currentUser.id;
    console.log("azeaez");

  }
  calculateDiff(dateSent: any, currentDate: any) {
    currentDate = new Date(currentDate);
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }

  onSubmit() {
    this.userService.getUserByUsername(this.currentUser.username).subscribe(data => {
     console.log("rds length");
     
      console.log(data.rdvs.length);
      
      
      
      //test if rdv is empty
      if (data.rdvs.length>0){
      data.rdvs.forEach(r => {
       // console.log("diff en heure");
//console.log((this.calculateDiff(r.dateRDV,this.RDV.dateRDV)+24)-1);
console.log("heureeeees a prender");
console.log( new Date(this.RDV.dateRDV).getHours());
console.log("heureeeees prix");
console.log( new Date(r.dateRDV).getHours()-1);

// RP = rdv pris
let RP= new Date(r.dateRDV).getHours();
// RAP = rdv a prendre
let RAP = new Date(this.RDV.dateRDV).getHours();





console.log(this.localisation);
console.log(r.annonce.localisation);
console.log("resultas");

console.log(RAP-RP);


        if (RAP-(RP-1) <1  && this.calculateDiff(r.dateRDV,this.RDV.dateRDV)==0 && this.localisation!=r.annonce.localisation)
          {
            
            
            this.ErrorRDV = "Desolé "+data.username+", mais ce jour meme vous avez un autre rendez vous a "+r.annonce.localisation+
            " , et le temps pourrait ne pas être suffisants, Merci de choisir une autre heure !";
          return;
        }
        else {
          this.userService.SaveRDV(this.RDV, this.currentUser.id, this.idannonce).subscribe(data => {

            this.modal.close('Yes');

          })
        }
      })
    }
    else{
      this.userService.SaveRDV(this.RDV, this.currentUser.id, this.idannonce).subscribe(data => {

        this.modal.close('Yes');

      })
    }
    })


  }

  closeRDV() {
    this.modal.close('Cancel');
  }

}
