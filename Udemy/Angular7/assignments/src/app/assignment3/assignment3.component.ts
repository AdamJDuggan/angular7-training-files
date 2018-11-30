import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: [
    './assignment3.component.css'
  ],

})

export class Assignment3Component implements OnInit {

  isCollapsed = true;
  count = [];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.count.push(this.count.length + 1);
  }

  // getColor(){
  //   return this.count <= 5 ? 'white' : 'blue';
  // }



  constructor() {

  }

  ngOnInit() {
  }

}
