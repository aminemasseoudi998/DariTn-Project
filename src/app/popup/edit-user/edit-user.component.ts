import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User;
  editForm: UntypedFormGroup;
  isLoading = false;
  isSuccessful = false;
  isSignUpFailed = false;

  errorMessage = '';

  constructor(public modal: NgbActiveModal,private userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
     console.log(this.user);
    
  }

  

  onSubmit(){

    this.userService.updateUser(this.user.id,this.user)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.errorMessage = res.message ? res.message : 'This tutorial was updated successfully!';
        this.isLoading = false;
        this.modal.close('Yes');
        this.user.username=res.username;
        
        
      },
      error: (e) => console.error(e)
    });
console.log(this.user);

  }

}
