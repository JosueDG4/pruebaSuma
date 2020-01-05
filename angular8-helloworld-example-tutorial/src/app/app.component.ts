import { Component } from '@angular/core';
import {HelloWorldService} from './service/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-spring-boot-angular-hello-world-example';
  val1:number;
  val2:number;
  rta:number;
  rta4:number;

  constructor(private service: HelloWorldService){

  }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  

   Sumaa2(){
 
    this.rta=this.val1+this.val2;
    this.rta4=this.val2;
  }
  Sumaa(){
 
    this.service.executeHelloWorldService2(this.val1, this.val2).subscribe(data=>{
      this.rta=data;
    });
    this.rta4=this.val2;
  }
}