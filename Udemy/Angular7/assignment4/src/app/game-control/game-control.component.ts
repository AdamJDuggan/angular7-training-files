import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //this output is a new EventEmitter of type number 
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  // This is the click functon
  onStartGame() {
    //define an interval 
    this.interval = setInterval(() => {
      //here is where we draw on the 
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  //this function 
  onPauseGame() {
    clearInterval(this.interval);
  }

}
