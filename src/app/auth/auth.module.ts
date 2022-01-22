import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SuccessComponent } from './success/success.component';
import { DeniedComponent } from './denied/denied.component';
import { DynamicmsgComponent } from './dynamicmsg/dynamicmsg.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpassComponent,
    SuccessComponent,
    DeniedComponent,
    DynamicmsgComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    ForgetpassComponent,
    SuccessComponent,
    DeniedComponent,
    DynamicmsgComponent
  ]
})
export class AuthModule { }
