import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  formSubmitted: boolean = false;
  constructor(private router: Router, private fb: FormBuilder,private userService:UserService) { }
  register() {
    this.formSubmitted=true;
    if(this.registerform.valid){
      this.router.navigate(['login']);
      this.userService.user=this.registerform.value
    }
    console.log(this.registerform)
  }
  
  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstname: [null, [Validators.required,Validators.minLength(3)]],
      lastname: [null, [Validators.required,Validators.minLength(3)]],
      mobileno: [null, [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$",)]]
    })
    
  }

}
