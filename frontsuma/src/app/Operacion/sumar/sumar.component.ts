import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {ServiceService} from '../../Service/service.service';
import  {Operacion} from 'src/app/Modelo/Operacion';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  operaciones:Operacion[];
  constructor(private http:HttpClient, private service:ServiceService, private router:Router) { }

  ngOnInit() {
    let resp = this.http.get("http://localhost:8080/resultSuma/resul");
    resp.subscribe((data)=>console.log(data));
  }

  Guardar(operacion:Operacion){
    this.service.getOperaciones(operacion)
    .subscribe(data=>{
      alert("Sumado con Exito...!");
      this.router.navigate(["sumar"]);
    })
  }

}
