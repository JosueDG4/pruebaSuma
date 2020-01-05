import { Component, OnInit } from '@angular/core';
import { SumaService } from 'src/app/service/suma.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  title = 'frontend-example';
  val1:number;
  val2:number;
  rta:number;

  constructor( private service: SumaService ) { }

  ngOnInit() {
  }

  Sumaa(){
    this.service.executeService(this.val1, this.val2).subscribe(data => {
      this.rta = data;
    });
  }
}
