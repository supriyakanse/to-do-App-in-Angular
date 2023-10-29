import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router) {}
dashboard(){
  this.router.navigate(['register']);
}
toDo: string[] = [];
  newTask = "";
  elem="";
  isEdit:boolean=false;
  currentIndex:number=0;
  add(newTask: string) {
    if (newTask == '') {
      alert("Please enter a task");
    }
    else if (newTask.startsWith(" ")) {
      alert("task cant be blank");
    }
    else {

      this.toDo.push(newTask.trim());
    }
    this.newTask='';
  }
  remove(){
    if(this.toDo.length==0){
      alert("No task to remove");  
    }  
    else{
      alert(this.toDo.pop()+' Removed from toDo List');
    }
  }
  removeSpecific(index:number){
    this.toDo.splice(index,1);
  }
  edit(index:number){
    this.currentIndex=index;
    this.isEdit=true;
    this.newTask=this.toDo[index];
  }
  save(){
    this.toDo[this.currentIndex]=this.newTask;
    this.isEdit=false;
    this.newTask='';
  }
  cancelEdit(){
    this.isEdit=false;
    this.newTask='';
  }



}