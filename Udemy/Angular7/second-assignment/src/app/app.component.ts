import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-assignment';
  username = '';

  emptyString(){
    this.username = 'Hello';
  }


}
