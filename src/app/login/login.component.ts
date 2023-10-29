import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private router: Router,private fb:FormBuilder) { }
  login() {
    //this.router.navigate(['dashboard']);
  console.log(this.loginForm);
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
