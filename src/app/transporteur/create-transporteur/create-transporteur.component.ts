import {Component, NgModule, OnInit} from '@angular/core';
import {Transporteur} from "../module/transporteur";
import {TransporteurService} from "../services/transporteur.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {FormGroup} from "@angular/forms";
import { ImageVideo } from 'src/app/models/ImageVideo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-transporteur',
  templateUrl: './create-transporteur.component.html',
  styleUrls: ['./create-transporteur.component.css']
})
export class CreateTransporteurComponent implements OnInit {

  listTransporteur: any;
  isSuccessful=false;
  form: boolean = false;
  transporteur!: Transporteur;
  closeResult!: string;
  imageInfos?: Observable<any>;
  // IMAGEVIDEO
   image: string = '';
   imageSrc : ImageVideo[] = [];
   selectedFiles?: FileList;
   progressInfos: any[] = [];
   message: string[] = [];
   previews: string[] = [];
   errorMessage='';
  constructor(private transporteurservice: TransporteurService, private router: Router, private toast: NgToastService) {
  }

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

  getAllTransporteur() {
    this.transporteurservice.getAlltransporteur().subscribe(res => this.listTransporteur = res)

  }



  addtransporteur(){
    this.transporteur.imageVideo = this.imageSrc;
    this.transporteurservice.addtransporteur(this.transporteur).subscribe({
      next: (data: any) => {
       
        this.transporteur=data;
        this.isSuccessful = true;
       
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = true;
        this.router.navigate(['/affichetransporteur']);

      }
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
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }



}
