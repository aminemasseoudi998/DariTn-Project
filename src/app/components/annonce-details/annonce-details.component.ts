import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarousel, NgbModal, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceFetch } from 'src/app/model/annonce-fetch';

import { RendezVousComponent } from 'src/app/rendez-vous/rendez-vous.component';

import { Coupon } from 'src/app/model/coupon';
import { User } from 'src/app/models/user';

import { AnnonceService } from 'src/app/service/annonce.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';
import { AffecterCouponComponent } from '../affecter-coupon/affecter-coupon.component';
import { CoorndonneesComponent } from '../coorndonnees/coorndonnees.component';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.component.html',
  styleUrls: ['./annonce-details.component.css']
})
export class AnnonceDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute, public router: Router,
    public annonceservice: AnnonceService,private modaleservice:NgbModal,
    public userservice:UserService,
    private token:TokenStorageService
    ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){


      return false;


      }
   }
  val:any;
  annonce:AnnonceFetch;
  annonces: Annonce[];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  nbannoncesimilaires:any;
  user:User;
  code:string;
  couponAffecte:any;
  hasCoupon: any;
  userid:any;
  annonceuser:User;
  currentUser:any;
  Proprietaire=false;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  ngOnInit(){


   
    let sub=this.route.params.subscribe(params =>{
      this.val=params['id'];

    });
    this.annonceservice.findByID(this.val).subscribe(data => {
      this.annonce = data;
      this.user=data.user;
      console.log(data.id);
      
      this.getAnnonceUser(data.id)
      console.log("veriiif");
      console.log(this.userid);
      
      
    }
    
      )

      this.AnnonceSimilaires();
      this.annonceservice.CheckCoupon(this.val).subscribe(data => {

        if(data!=0) {
          this.hasCoupon=true;
        }
        else
        this.hasCoupon=false;

      })
      
      console.log("user user hhh");
      
      console.log(this.annonceuser);
      


  }

  AnnonceSimilaires(){
    this.annonceservice.GetAnnonceSimilaires(this.val).subscribe(data => {
      this.annonces = data;
      this.nbannoncesimilaires=data.length;
      console.log(this.nbannoncesimilaires);

      this.annonces.forEach(m => m.imageVideo?.length > 0 ?  m.placeholder = m.imageVideo[0].image: m.placeholder = '/assets/img/property-1.jpg')
      }
      )
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  detailAnnonce(id:any){
    this.router.navigate(['/annonces',id]);


  }
affecterCoupon(idannonce:number){
  const ref= this.modaleservice.open(AffecterCouponComponent,{ centered: true });
  ref.componentInstance.idannonce = idannonce;


  ref.result.then((yes)=>{
    console.log("ok click");
    window.location.reload();

  },
  (cancel)=>{
console.log("Cancel click");


  })
  
}

recupererCoordonees(idannonce:number){
  const ref= this.modaleservice.open(CoorndonneesComponent,{ centered: true });
  ref.componentInstance.idannonce = idannonce;
  console.log(idannonce);
  ref.result.then((yes)=>{
    console.log("ok click");

  },
  (cancel)=>{
console.log("Cancel click");

  })
}

getAnnonceUser(idannonce:any){
  this.annonceservice.getUserByAnnonce(idannonce).subscribe(data => {
    this.userid=data;
    console.log("veriff2222");
    console.log(data);
    this.currentUser = this.token.getUser();
    if(this.currentUser.id==data)
    this.Proprietaire=true;
    

    
  });
}

PrendreRDV(idannonce:number,localisation:any){
  const ref= this.modaleservice.open(RendezVousComponent,{ centered: true });
  ref.componentInstance.idannonce = idannonce;
  ref.componentInstance.localisation=localisation;

  ref.result.then((yes)=>{
    console.log("ok click");
    
  },
  (cancel)=>{
console.log("Cancel click");

  })
}
}
