import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcuerdosComponent } from './pages/acuerdos/acuerdos.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { HermanosComponent } from './pages/hermanos/hermanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
  { path:'inicio', component:InicioComponent },
  { path:'login', component:LoginComponent },
  { path:'acuerdos', component:AcuerdosComponent },
  { path:'calendario', component:CalendarioComponent },
  { path:'grupos', component:GruposComponent },
  { path:'hermanos', component:HermanosComponent },
  { path:'pagos', component:PagosComponent },
  { path:'usuarios', component:UsuariosComponent },
  { path:'**',pathMatch:'full', redirectTo:'inicio' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
