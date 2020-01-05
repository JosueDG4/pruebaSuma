import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PersonasComponent } from './personas/personas.component';
import { SumaComponent } from './pages/suma/suma.component';

const routes: Routes = [
  {path: 'suma', component: SumaComponent},
  { path: '', redirectTo: 'suma', pathMatch: 'full'} 
  // {path: '', component: HelloWorldComponent},
  // {path: 'hello-world', component: HelloWorldComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }