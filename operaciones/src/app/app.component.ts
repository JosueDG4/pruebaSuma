import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'operaciones';
  val1:number;
  val2:number;
  rta:number;

  Operacion(){
    this.rta=this.val1+this.val2;
  }
}
