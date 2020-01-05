import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SumaService {

  private signUpURL="http://localhost:8080/resultSuma/resul";
  constructor(private http: HttpClient) { }

  signUpUser(user){
    return this.http.get<any>(this.signUpURL, user)
  }
}
