import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import { TokenStorageService } from '../_services/token-storage.service';

import { UserService } from '../_services/user.service';

import {Router} from "@angular/router";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
  imageUser:String;


  constructor(private tokenStorageService: TokenStorageService,private userService:UserService,private router: Router) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {

      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
      if(user.roles.indexOf('ROLE_ADMIN') >= 0){
        this.router.navigateByUrl('/dashboard');
      }
      console.log(user.image);


    }

    this.userService.getUserByUsername(this.username).subscribe(data => {
      this.imageUser=data.image
    })

  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  ModeDeco(){
    window.localStorage.setItem("connected","disconnected");
  }


}
