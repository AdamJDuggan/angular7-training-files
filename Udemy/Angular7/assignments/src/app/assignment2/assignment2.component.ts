import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component{

  title = 'second-assignment';
  username = '';

  emptyString() {
    this.username = 'I should appear when button is clicked to reset input box';
  }


}
