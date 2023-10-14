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
  
  
}