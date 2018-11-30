import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pageinator',
  templateUrl: './pageinator.component.html',
  styleUrls: ['./pageinator.component.css']
})
export class PageinatorComponent implements OnInit {

  @Input() numberOfPages;
  @Output() pageNumberClick = new EventEmitter<number>();
  pages: number[];

  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);
  }
  pageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber);
  }
}
