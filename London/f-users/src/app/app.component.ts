
import { Component,OnInit } from '@angular/core';
import { DataService } from "./services/data.service";
import { createPureExpression } from '@angular/core/src/view/pure_expression';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loaded:boolean = false;

  users = [];

  RANDOM_USERS: string = "https://randomuser.me/api/?results=4" ;

  constructor( private ds:DataService ) {}

  ngOnInit() {
    this.ds.getData( this.RANDOM_USERS ).subscribe( data => this.createPeople(data))
    this.loaded = true;
  }

  createPeople = data => this.users = data.results.map( person => this.createPerson( person ));

  createPerson( p ) {

    // destructuring
    let {first,last} = p.name;
    let {city} = p.location;
    let {medium} = p.picture;
    let {email} = p;

    return { first,last,city,medium,email }
  }

}
