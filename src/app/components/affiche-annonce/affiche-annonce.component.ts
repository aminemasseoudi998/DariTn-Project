import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-affiche-annonce',
  templateUrl: './affiche-annonce.component.html',
  styleUrls: ['./affiche-annonce.component.css']
})
export class AfficheAnnonceComponent implements OnInit {
  annonces: Annonce[];
  p: number = 1;
  localisation: any;
  //test 

  constructor(private annonceservice: AnnonceService, private router: Router) { }

  
  ngOnInit(): void {
    this.getAnnonce();

  }

  private getAnnonce(){
    this.annonceservice.getAnnoncelist().subscribe(data => {
      this.annonces = data;
    });
  }

  deleteRow(val: any){
    
    if(this.annonceservice.delete(val).subscribe(data => {
      
   
    }))
    window.location.reload();
  
}
  
  update(id:any){
    this.router.navigate(['/update',id]);

  }

  create(){
    this.router.navigate(['/add']);

  }
  
}
