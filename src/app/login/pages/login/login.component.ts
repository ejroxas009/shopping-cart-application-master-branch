import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, EMPTY, switchMap } from 'rxjs';

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
    let account : User[]
    // this.loginService.login(login.email, login.password).subscribe(res => {
    //   body = {...res.body}
    //   status = res.status
    // if(status === 200){
    //   alert("Login successful")
    //   localStorage.setItem('token', body.accessToken)
    // //   this.loginService.getUser(login.email).subscribe(data => {account = data})
    // // //this.loginService.getUser(login.email).subscribe(data => console.log(data))
    // //   // localStorage.setItem('userType', account.userType)
    // //  console.log(account)
    // }
    // },
    // (error) => {
    //   if(error.status === 400){
    //     alert("Wrong Email or Password. Please Try again!")
    //   }
    //   else{
    //     alert("Something went wrong")
    //   }
    // }

    // )
    // if(localStorage.getItem('token')){
    //   let account
    //   this.loginService.getUser(login.email).subscribe(data => console.log(data))
     
    // }

    this.loginService.login(login.email, login.password).pipe(
      switchMap((res)=>{
        body = {...res.body}
        status = res.status
          localStorage.setItem('token', body.accessToken)
          alert("Login Successful")
          return this.loginService.getUser(login.email)
        
      }),
      switchMap((data) =>{
        account = data
        console.log(account[0].userType)
        localStorage.setItem('userType', account[0].userType)
        return EMPTY
      }),
      catchError((err) => {
           if(err.status === 400){
        alert("Wrong Email or Password. Please Try again!")
      }
      else{
        alert("Something went wrong")
      }
      return EMPTY
      })
      
    ).subscribe()
  }
}
