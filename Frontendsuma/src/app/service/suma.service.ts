import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SumaService {

  url: string = `http://localhost:8080/resultSuma`;

  constructor(private http: HttpClient) { }

  executeService(numero1: number, numero2: number) {
    return this.http.get<number>(`${this.url}/getSuma?numero1=${numero1}&numero2=${numero2}`);
}
}
