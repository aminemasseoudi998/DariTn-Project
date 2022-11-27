import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  Users:User[];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserslist().subscribe(data => {
      this.Users = data;
    });
  }
  deleteRow(val: any){
    console.log(val);
    
    if(this.userService.delete(val).subscribe(data => {
      
   
    }))
    window.location.reload();
  
}
}