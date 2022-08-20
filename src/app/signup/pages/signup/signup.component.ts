import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/user/models/user';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup
  constructor(private fb : FormBuilder, private signupservice : SignupService) {

    this.signUpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      gender: [''],
      email : [''],
      password: [''],
      userType : ['user'],
      active: [true]
    })
   }

  ngOnInit(): void {
  }

  signup(){
    const signup = this.signUpForm.value as User
    console.log(signup)
    this.signupservice.signup(signup).subscribe(data => console.log(data))

  }
}
