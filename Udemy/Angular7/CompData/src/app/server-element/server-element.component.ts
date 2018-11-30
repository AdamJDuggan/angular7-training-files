import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})

export class ServerElementComponent implements OnInit, OnChanges{

  // this represents our server. Type is a JS object
  @Input('SvrElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('constructor called')
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOChanges called');
    console.log('changes');
  }

  ngOnInit() {
    console.log('ngOnInit called')

  }

}
