import { Component } from '@angular/core';
import {Observable, interval} from 'rxjs';
import{map, take} from 'rxjs/operations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sequence: Observable<number>;
    constructor(){this.alphapet();}
    alphapet(){
      this.sequence = interval(1250);
      this.sequence.subscribe(n => console.log(n))
    }
};
