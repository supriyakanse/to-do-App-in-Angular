import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  isErrorEmail:boolean=false;
  isErrorPassword:boolean=false;
  constructor(private router: Router,private fb:FormBuilder,private userService:UserService) { }
  login() {
    if(this.userService.user.email==this.loginForm.value.email && this.userService.user.password==this.loginForm.value.password){
    this.router.navigate(['dashboard']);
    }
    else if(this.userService.user.email!=this.loginForm.value.email){
      this.isErrorEmail=true
    }
     else if(this.userService.user.password!=this.loginForm.value.password){
      this.isErrorPassword=true
    }
    
  console.log(this.loginForm.value);
  }
  ngOnInit():void{
    this.loginForm=this.fb.group({
      gender:this.fb.control('',[Validators.required]),
      email:this.fb.control('',[Validators.required,Validators.email]),
      password:this.fb.control('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$",)]),
      firstname:this.fb.control('',[Validators.required,Validators.minLength(3)]),
      mobileno:this.fb.control('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)])
    })
  }
}
