import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";

import {Mobilier} from "../model/mobilier";
import {MobilierService} from "../services/mobilier.service";

import {CreateMobilierComponent} from "../create-mobilier/create-mobilier.component";

import {UpdateMobilierComponent} from "../update-mobilier/update-mobilier.component";

@Component({
  selector: 'app-list-mobilier',
  templateUrl: './list-mobilier.component.html',
  styleUrls: ['./list-mobilier.component.css']
})
export class ListMobilierComponent implements OnInit {

  mobiliers: Mobilier[] = [];
  // @ts-ignore
  user = JSON.parse(localStorage.getItem('auth-user'));
  constructor(
    private dialog: MatDialog,
    private service: MobilierService
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.mobiliers = data;
      // @ts-ignore
      this.mobiliers.forEach(m => m.imageVideo?.length > 0 ?  m.placeholder = m.imageVideo[0].image: m.placeholder = '/assets/img/property-1.jpg' )
    })
  }



  openAddDialog() {
    const dialogRef = this.dialog.open(CreateMobilierComponent, {
      width: '500px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdateMobilierComponent, {
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
    if (confirm('voulez vous vraiment supprimer ?')) {
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }
  }

}
