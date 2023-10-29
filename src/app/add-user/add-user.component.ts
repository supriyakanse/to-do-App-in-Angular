import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit{
  constructor(private router:Router,private fb:FormBuilder,public userService:UserService){}
  userForm!:FormGroup;
  editForm!:FormGroup;
  isEdit!:boolean;
  addedit(){
    this.userService.emp[this.userService.currindex]=this.userForm.value
    console.log("done")
    console.log(this.userService.emp[this.userService.currindex])
    this.router.navigate(['dashboard'])
    this.userService.isEdit=false
    this.userForm.reset
  }
  canceledit(){
    this.router.navigate(['dashboard'])
    this.userService.isEdit=false
    this.userForm.reset

  }
  addemp(){
    if(this.userForm.valid){
      this.userService.emp.push(this.userForm.value)
      this.router.navigate(['dashboard'])
      console.log(this.userService.emp)
    }
  }
  ngOnInit(){
      this.userForm=this.fb.group({
        firstname:this.fb.control('',[Validators.required]),
        lastname:this.fb.control('',Validators.required),
        designation:this.fb.control('',Validators.required),
        salary:this.fb.control('',[Validators.required,Validators.maxLength(10)])
      })
      if(this.userService.isEdit){
        this.editForm=this.userService.emp[this.userService.currindex]
        console.log("here in edit")
        console.log(this.editForm)
        this.userForm.setValue(this.editForm)
      }
     
      
  }
}
