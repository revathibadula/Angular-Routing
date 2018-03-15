import {Component) from '@angular/core';
import {  ActivatedRoute } from '@angular/router';


@Component({
  moduleId:module.id,
  template : <h1>404 Not Found </h1>

  })
export class NotFoundComponent{
  
 user:any ={};
 constructor(private route: ActivatedRoute,private userService: UserService){
   this.route.params()
       .subscribe
       (params => console.log(params)
       );
  }
 
}