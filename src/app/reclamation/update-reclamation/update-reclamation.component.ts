import {Component, Inject, OnInit} from '@angular/core';
import {Reclamation} from "../model/reclamation";
import {ReclamationService} from "../services/reclamation.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../models/user";

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();

  constructor(
    private service: ReclamationService,
    private dialogRef: MatDialogRef<UpdateReclamationComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.reclamation = response;
    })
  }


  update() {
    // @ts-ignore
    let user =JSON.parse(localStorage.getItem('auth-user'));
    this.reclamation.user = new User();
    // @ts-ignore
    this.reclamation.user.id = user.id;
    this.service.update(this.reclamation).subscribe(r => this.dialogRef.close())
  }
}
