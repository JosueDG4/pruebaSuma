import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Operacion } from '../Modelo/Operacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/resultSuma/resul';

  getOperaciones(operacion:Operacion){
    return this.http.post<Operacion[]>(this.Url, operacion) 
  }
}
