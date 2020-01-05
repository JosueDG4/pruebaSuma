import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from '../model/Message';
import {AppComponent} from '../app.component';
import { NgModule } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
  val1:number=0;
  url:String ='http://localhost:8080/resultSuma';
  
    constructor(public http: HttpClient ) {
     
    }
    
    executeHelloWorldService() {
        return this.http.get<MessageModel>('http://localhost:8080/resultSuma/greeting?name='+this.val1);
    }

    executeHelloWorldService2(numero1:number, numero2:number) {
      return this.http.get<number>(`${this.url}/greeting?numero1=${numero1}&numero2=${numero2}`);
  }
}