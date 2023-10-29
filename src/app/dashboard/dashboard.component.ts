import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
    isEdit:boolean=false;
  constructor(private router:Router,public userService:UserService) {}
add(){
  this.router.navigate(['addUser']);
}
edit(index:number){
  this.userService.isEdit=true;
this.userService.currindex=index;
this.router.navigate(['addUser'])
}
delete(index:number){
  this.userService.emp.splice(index,1)
}
}
