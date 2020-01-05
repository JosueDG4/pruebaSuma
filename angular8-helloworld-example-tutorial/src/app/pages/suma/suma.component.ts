import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from 'src/app/service/hello-world.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  title = 'frontend-spring-boot-angular-hello-world-example';
  val1:number;
  val2:number;
  rta:number;

  constructor( private service: HelloWorldService ) { }

  ngOnInit() {
  }

  Sumaa(){
    this.service.executeHelloWorldService2(this.val1, this.val2).subscribe(data => {
      this.rta = data;
    });
  }

}
