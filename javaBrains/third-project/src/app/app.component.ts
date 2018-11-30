import { TestService } from './test.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';
  // this lets Angular pass in an instance of this service and it will get the HTTP client and inject it
  constructor(private svc: TestService, private http: HttpClient){
    svc.printToConsole( "Got the service" );
  }

  ngOnInit() {
    const obs = this.http.get('https://api.github.com/users/AdamDuggan')
    obs.subscribe((responce) => console.log(responce));
    
  }
}
