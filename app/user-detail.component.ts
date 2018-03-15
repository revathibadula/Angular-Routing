import {Component) from '@angular/core';
import {UserService} from './user.service';


@Component({
  moduleId:module.id,
  templateUrl:'./user-detail.component.html'

  })
export class UserDetailComponent{
  
  user : any = {};
  constructor(private userService: UserService){
    /* userService.getUsers()
     .subscribe(
       users =>this.userList = users,
       error =>console.log(error)
       );*/
  }
  
}