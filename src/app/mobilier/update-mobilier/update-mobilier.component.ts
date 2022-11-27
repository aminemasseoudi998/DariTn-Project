import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MobilierService} from "../services/mobilier.service";
import {Mobilier} from "../model/mobilier";
import {ImageVideo} from "../../shared/model/imageVideo";

@Component({
  selector: 'app-update-mobilier',
  templateUrl: './update-mobilier.component.html',
  styleUrls: ['./update-mobilier.component.css']
})
export class UpdateMobilierComponent implements OnInit {

  mobilier: Mobilier = new Mobilier();
  image: string = '';
  imageSrc : ImageVideo[] = [];

  constructor(
    private service: MobilierService,
    private dialogRef: MatDialogRef<UpdateMobilierComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.mobilier = response;
    })
  }


  update() {
    this.mobilier.imageVideo = this.imageSrc;
    // @ts-ignore
    this.mobilier.vendeur = JSON.parse(localStorage.getItem('auth-user'));
    // @ts-ignore
    this.mobilier.vendeur.roles = [];
  this.service.update(this.mobilier).subscribe(r => this.dialogRef.close())
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
  _handleReaderLoaded(e: any) {

    console.log(this.imageSrc)
  }
}
