import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceFetch } from 'src/app/model/annonce-fetch';
import { ImageVideo } from 'src/app/models/ImageVideo';
import { AnnonceService } from 'src/app/service/annonce.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
  val:any;
  annonces: Annonce[] = [];
  annonce:AnnonceFetch;
  currentuser:User;
  // IMAGEVIDEO
  image: string = '';
  imageSrc : ImageVideo[] = [];

  constructor(public route:ActivatedRoute, public router: Router,public annonceservice: AnnonceService) { }

  ngOnInit(){
    let sub=this.route.params.subscribe(params =>{
      this.val=params['id'];

    });
    console.log("id: "+ this.val);
    this.annonceservice.getUpdateAnnonce(this.val).subscribe(data => {
      this.annonce = data;
      for(var i=this.annonce.imageVideo.length-1;i>=0;i--){

        this.annonce.imageVideo.splice(i,1);
      }
      console.log(this.annonce.imageVideo);
      
   
    }
    )


  }


  update(){
    
    this.annonce.imageVideo = this.imageSrc;
    this.annonceservice.updateAnnonce(this.annonce).subscribe(data => {

    });
    this.router.navigate(['annonces']);
    this.getAnnonce();

  }



  getAnnonce() {
    this.annonceservice.getAnnoncelist().subscribe((response) => {
      this.annonces = response;
    });
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
        this.imageSrc[i].image = reader.result;
        console.log(this.imageSrc)
      };
    reader.readAsDataURL(file);
      }
  }


}
