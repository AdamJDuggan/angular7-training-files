import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.scss']
})

export class ItemComponent implements OnInit {

  //Defining a paramater to pass data in, giving it a name
  @Input()item;
  @Output() selectItem = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
