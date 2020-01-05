import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumarComponent } from './Operacion/sumar/sumar.component';


const routes: Routes = [
  {path:'sumar', component:SumarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
