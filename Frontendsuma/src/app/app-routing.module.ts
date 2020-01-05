import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';

const routes: Routes = [
  {path: 'suma', component: SumaComponent},
  //Reenviar a localhost:4202/suma dentro de la URL
  { path: '', redirectTo: 'suma', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
