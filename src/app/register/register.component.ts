import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  formSubmitted: boolean = false;
  constructor(private router: Router, private fb: FormBuilder) { }
  register() {
    this.formSubmitted=true;
    if(this.registerform.valid){
      this.router.navigate(['login']);
    }
    console.log(this.registerform)
  }
  
  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      mobileno: [null, [Validators.required,Validators.maxLength(10)]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]]
    })
    
  }

}
