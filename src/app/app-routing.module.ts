import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path:'inicio', component:InicioComponent },
  { path:'login', component:LoginComponent },
  { path:'**', pathMatch:'full',redirectTo:'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
