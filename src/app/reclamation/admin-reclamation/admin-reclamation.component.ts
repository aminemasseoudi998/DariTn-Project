import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../model/reclamation";
import {MatDialog} from "@angular/material/dialog";
import {ReclamationService} from "../services/reclamation.service";
import {CreateReclamationComponent} from "../create-reclamation/create-reclamation.component";
import {UpdateReclamationComponent} from "../update-reclamation/update-reclamation.component";
import {AdminCreateReclamationComponent} from "../admin-create-reclamation/admin-create-reclamation.component";

@Component({
  selector: 'app-admin-reclamation',
  templateUrl: './admin-reclamation.component.html',
  styleUrls: ['./admin-reclamation.component.css']
})
export class AdminReclamationComponent implements OnInit {

  reclamations: Reclamation[] = [];
  // @ts-ignore
  user = JSON.parse(localStorage.getItem('auth-user'));
  constructor(
    private dialog: MatDialog,
    private service: ReclamationService
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.reclamations = data;
    })

  }


  openAddDialog(id: any) {
    const dialogRef = this.dialog.open(AdminCreateReclamationComponent, {
      width: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }


  supprimer(id: any) {


    if(confirm('voulez vous vraiment supprimer ?')){
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }

}

  openReponseDialog(id: any) {
    const dialogRef = this.dialog.open(AdminCreateReclamationComponent, {
      width: '400px',
      data: {
        id
      }
    });

  }
}
