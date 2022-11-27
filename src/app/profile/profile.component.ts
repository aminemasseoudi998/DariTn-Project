import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageVideo } from '../models/ImageVideo';
import {  rdvs } from '../models/RDV';
import { User } from '../models/user';
import { EditUserComponent } from '../popup/edit-user/edit-user.component';
import { AnnonceService } from '../service/annonce.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user = new User();
  ListAnnonce :any[];
CountAnnonce:any;
Countrdv:any;

Userstatus:any;
image: string = '';
  imageSrc : ImageVideo[] = [];
ListRDV:rdvs[];
x:any;
y:Date=new Date();
diff:any;
alerts:Array<String>=[];
alert:String;
  constructor(private token: TokenStorageService,
                private userService: UserService,
                private modaleservice:NgbModal,
                private annonceService:AnnonceService) { }
  ngOnInit(): void {
    console.log("azeazeae");
      
    console.log(this.alerts);
    this.currentUser = this.token.getUser();
console.log(this.y);


    this.userService.getUserByUsername(this.currentUser.username).subscribe(data => {
      this.user = data;
      this.ListAnnonce=data.annonces;
      this.ListRDV=data.rdvs;
      console.log(data.rdvs);
      
      console.log(this.y);
      
      this.ListRDV.forEach(r=> {
        
        
       if(r.dateRDV > this.y)
       {
       this.diff= -this.calculateDiff(r.dateRDV);
       /*if (this.diff<=5){
         this.alert="Vous avez un rendez vous a "+r.annonce.localisation +" dans "+this.diff+"jours"
         console.log(this.alert);
       }*/
       if (this.diff<=2){
        this.alert="Demain vous avez un rendez vous  a "+r.annonce.localisation+
        " pour visiter la "+r.annonce.titre;
        this.alerts.push(this.alert);
        console.log(this.alert);
       }
           
         
       } 
      })
      
      




      
      
      this.CountAnnonce=data.annonces.length;
      this.Countrdv=data.rdvs.length;
    }
      )

    
      
  }

  calculateDiff(dateSent:any){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
}

  update(user:User){
    const ref= this.modaleservice.open(EditUserComponent,{ centered: true });
    ref.componentInstance.user = user;

    ref.result.then((yes)=>{
      console.log("ok click");
      
    },
    (cancel)=>{
console.log("Cancel click");

    })
  }

  ModeDECO(){
    this.Userstatus ="connected";
    if (window.localStorage.getItem("connected")=="connected"){
    window.localStorage.setItem("connected","disconnected");  
    this.Userstatus="disconnected";
    }
    else{
    window.localStorage.setItem("connected","connected");  
    this.Userstatus="connected";
  }
}

imageLoad(e: any) {
  var reader ;

  for (let i = 0; i < e.target.files.length; i++) {


    var file = e.dataTransfer ? e.dataTransfer.files[i] : e.target.files[i];
    var pattern = /image-*/;
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader =  new FileReader();
    reader.onload = e => {
      let reader = e.target;
      this.imageSrc[i] = new ImageVideo();
      // @ts-ignore
      this.user.image= reader.result;
     // console.log(this.user.image)
      this.userService.SetUserImage(this.user.id,this.user.image).subscribe(data => {
        
      }
        )
    };
    reader.readAsDataURL(file);
  }


}

deleteRDV(id:any){
  console.log(id);
  
  if(this.userService.deleteRDV(id).subscribe(data => {
      
   
  }))
  window.location.reload();

}

reschedule(id:any){
  
}
close(alert: any) {
  this.alerts.splice(this.alerts.indexOf(alert), 1);
}

supprimerAnnonce(idannonce:number){
     console.log("delete");
  if(this.annonceService.delete(idannonce).subscribe(data => {
      

   
  }))
  window.location.reload();
}
}