import { BlogPost } from './../blog-post';
import { Component, OnInit, Input } from '@angular/core';
import { TuncatePipe } from '../tuncate.pipe';

@Component({
  selector: 'app-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.css']
})
export class BlogPostTitleComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;

  constructor(private tuncatePipe: TuncatePipe ) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.tuncatePipe.transform(this.post.summary, 20);
  }

  showFullSummary() {
    this.post.summary = this.fullSummary;
  }

  toggleFav() {
    this.post.isFave = !this.post.isFave;
  }

}
