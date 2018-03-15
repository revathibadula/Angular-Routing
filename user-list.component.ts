import {Component) from '@angular/core';
import {UserService} from './user.service';


@Component({
  moduleId:module.id,
  selector: 'user-list',
  templateUrl:'./user-list.component.html'

  })
export class UserListComponent{
  
  userList:any =[];
  constructor(private userService: UserService){
     userService.getUsers()
     .subscribe(
       users =>this.userList = users,
       error =>console.log(error)
       );
  }
  
}