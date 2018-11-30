import { Component } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //using TS to define type of variable.
  //Class property: refer to it in any method using this
  //typescript does type-checking in command-line
  //at run time in the browser, TS does not exist.
  //TS is just there to
  storm:string = "Florence";
  constructor(){this.formatStorm();}
  formatStorm(){
    let prefix = "Storm";
    let city = "Blackpool"
    this.storm = prefix + this.storm.toUpperCase() + city;
  }
}
