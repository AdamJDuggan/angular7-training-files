import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-vuew',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private svc: TestService) {
      svc.printToConsole('From inner module / component')
   }

  ngOnInit() {
  }

}
