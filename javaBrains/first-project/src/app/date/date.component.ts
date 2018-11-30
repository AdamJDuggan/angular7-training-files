import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  dateMessage: string;
  someNumber: number = 10;

  constructor() {
    setInterval(()=> {
      let currentDate = new Date();
  //TS does not let me assign date to a string (different type) and
  // so toDateString is used instead
  this.dateMessage = currentDate.toDateString() +
  ' ' + currentDate.toLocaleTimeString();
    },1000)

  }
  ngOnInit() {
  }
  addTwoNumbers(a: number, b: number){return a+b}

}
