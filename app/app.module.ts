import { NgModule }  from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';
import {UserNotFoundComponent} from './not-found.component';

import {UserService} from './user.service';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },//can have multiple route params
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
  ];


@NgModule({
  imports: [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations:[AppComponent,UserListComponent,UserDetailComponent,NotFoundComponent],
  providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule{
}