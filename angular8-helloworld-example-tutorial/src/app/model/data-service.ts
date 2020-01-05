import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { PeticionEnvio } from './peticionEnvio';

@Injectable()
export class DataService {

    constructor(private httpClient:HttpClient){

    }

    urlBase= 'http://localhost:8080/resultSuma/greeting';

    resolverSuma(peticionenvio: PeticionEnvio){
        return this.httpClient.post(this.urlBase, peticionenvio);
    }
}
