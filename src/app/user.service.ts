import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:any;
 emp:any[]=[];
 currindex!:number;
 isEdit:boolean=false;
 isDelete:boolean=false;
  constructor() { }
}
