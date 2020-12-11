import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [InicioComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
