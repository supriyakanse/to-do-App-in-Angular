import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*name: string='supriya';
  name2: string='kanse';
  data: number=0;
  itsvalue:string='property binding';
  var1:number=30;
  var2:number=20;
  

  add(){
      this.data=(this.var1+this.var2);  
  }
  
  consolePrint(event:Event){
    console.log( (event.target as HTMLInputElement).value);
  }*/
/*
  num1=10;
  num2=10;
  ans=0;
  today='tuesday';
  total(){
    this.ans=this.num1+this.num2;
  }*/
  user="";
  pass="";
  ans="";
  checker="";
  check(){
    this.user=this.user.trim();
    this.pass=this.pass.trim();
  if(this.user=='' && this.pass==''){
    //this.ans='both fields empty';
    this.checker='bothNA';
  }
  else if(this.pass==''){
    //this.ans='password field is empty';
    this.checker='passNA';
  }  
  else if(this.user==''){
    //this.ans='username is empty';
    this.checker='userNA';
  }
  else if(this.user!='admin' && this.pass!='admin'){
    //this.ans='both fields entered are invalid'
    this.checker='bothInvalid';
  }
  else if(this.user!='admin'){
    //this.ans='invalid username';
    this.checker='userInvalid';
  }
  else if(this.pass!='admin'){
    //this.ans='invalid password'
    this.checker='passInvalid';
  }
  else{
    //this.ans='valid login';
    this.checker='valid';
  }}
}