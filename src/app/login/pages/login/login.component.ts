import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from 'src/app/user/models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  constructor(private fb : FormBuilder, private loginService : LoginService) { 

    this.loginForm = this.fb.group({
    email : [''],
    password : ['']
    })
  }

  ngOnInit(): void {
  }

  login(){
    const login = this.loginForm.value as User
    console.log(login)
    let body :any
    let headers : any
    let status : any
    this.loginService.login(login.email, login.password).subscribe(res => {
      body = {...res.body}
      status = res.status
    if(status === 200){
      alert("Login successful")
      localStorage.setItem('token', body.accessToken)
     // this.loginService.getUser(login.email).subscribe(data => console.log(data))
     //console.log(JSON.parse(atob((body.accessToken).split('.')[1])))
    }
    },
    (error) => {
      if(error.status === 400){
        alert("Wrong Email or Password. Please Try again!")
      }
      else{
        alert("Something went wrong")
      }
    }

    )
  }
}
