import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'g-pipes';
  hols={
    city: 'Vancouver',
    temp: 20,
    price: 2000,
    description: "  The greatest"
  }
}
