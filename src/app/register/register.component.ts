import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
 /* form: any = {
    username: null,
    email: null,
    password: null
  };*/
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router:Router) { }
  ngOnInit(): void {
    if (this.tokenStorageService.getToken())
    {
      this.router.navigate(['/home'])
    }

  }
  onSubmit(): void {
   // const { username, email, password ,telephone} = this.form;
    this.authService.register(this.user.username, this.user.email, this.user.password,this.user.telephone).subscribe({
      next: (data: any) => {

        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
