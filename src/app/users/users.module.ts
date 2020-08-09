import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, UsersComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ]
})
export class UsersModule { }
