import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, LoginComponent, HttpClientModule
  ],
  exports: [
    LoginComponent, HttpClientModule
  ]
})
export class LoginModule { }
