import {Injectable} from '@angular/core';
import { PeticionEnvio} from '../model/peticionEnvio';
import { DataService } from './data-service';

@Injectable()
export class PersonaService {

    peticionenvio: PeticionEnvio[]=[];
    constructor(private dataservice:DataService){

    }

    setPeticionEnvio(peticionenvio:PeticionEnvio[]){
        this.peticionenvio =peticionenvio;
    }

    obtenerSumas(){
        return this.dataservice.urlBase;
    }
    agregarSuma(peticionenvio:PeticionEnvio){
        console.log("Sumas a resolver = "+peticionenvio.val2);
        this.dataservice.resolverSuma(peticionenvio)
        .subscribe(
            (peticionenvio: PeticionEnvio) =>{
                //Recuperamos objeto persona
                console.log("numero insertado = "+peticionenvio.val2);
                this.peticionenvio.push(peticionenvio);
            }
        );
    }

}