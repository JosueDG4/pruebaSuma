import { Component, OnInit } from '@angular/core';
import { PeticionEnvio } from '../model/peticionEnvio';
import { PersonaService } from '../model/persona-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {

  peticionenvio: PeticionEnvio[]= [];

  constructor(private personaService:PersonaService, private router:Router, private route:ActivatedRoute) {

   }

   ngOnInit():void {
     this.personaService.obtenerSumas
   }

  

}
