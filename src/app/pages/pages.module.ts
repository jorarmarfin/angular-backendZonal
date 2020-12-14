import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HermanosComponent } from './hermanos/hermanos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PagosComponent } from './pagos/pagos.component';
import { GruposComponent } from './grupos/grupos.component';
import { AcuerdosComponent } from './acuerdos/acuerdos.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [LoginComponent, UsuariosComponent, HermanosComponent, CalendarioComponent, PagosComponent, GruposComponent, AcuerdosComponent, InicioComponent],
  exports: [LoginComponent, UsuariosComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
