import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontsuma';

  constructor(private router:Router){}
  Sum(){
    this.router.navigate(["sumar"]);
  }
}
