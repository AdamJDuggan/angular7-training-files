import { Component } from '@angular/core';
import {User} from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//this is the component which is using the address-card component
export class AppComponent {

  //here User is the class in user.module.ts which defines the
  // state of the user object
  user: User;
  inputText: string = "Initial Value";

  constructor(){
    this.user = new User();
    this.user.name = "Adam Duggan";
    this.user.designation = "Web Developer";
    this.user.address="14 St Cuthmans Close, Brighton, BN25HW";
    this.user.phone = "07504191871";
  }
}
