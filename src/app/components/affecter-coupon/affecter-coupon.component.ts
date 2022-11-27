import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from 'src/app/model/coupon';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-affecter-coupon',
  templateUrl: './affecter-coupon.component.html',
  styleUrls: ['./affecter-coupon.component.css']
})
export class AffecterCouponComponent implements OnInit {

  code:any;
  coupon:Coupon;
  idannonce:number;
  etat:any;
  erreur:string;
  
  constructor(public modal: NgbActiveModal,public annonceservice:AnnonceService) { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.annonceservice.CheckEtatCoupon(this.code).subscribe(data => {
      this.etat=data;
      console.log(this.etat);
      if(this.etat!=0)
    this.annonceservice.affecterCoupon(this.idannonce,this.code).subscribe(data => {
      
      this.modal.close('Yes');
   
    })
    else this.erreur="Coupon Utilisé ! "
      
    })
    
  }
}
