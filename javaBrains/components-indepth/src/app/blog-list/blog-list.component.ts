import { BlogPost } from './../blog-post';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { BlogPostTitleComponent } from '../blog-post-title/blog-post-title.component';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage: number;
  @ViewChildren('title') blogPostTitleComponents: QueryList<BlogPostTitleComponent>;

  constructor() { }

  ngOnInit() {

    this.currentPage = 0;

    this.blogPosts =
    [
      [
        {title: 'Post 1',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 2',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 3',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 4',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        }
      ],
      [
        {title: 'Post 5',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 6',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 7',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 8',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        }
      ],
      [
        {title: 'Post 9',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 10',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 11',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {title: 'Post 12',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        }
      ]
    ];
  }
  updatePage(newPage) {
    console.log('Event emmited and method executed');
    this.currentPage = newPage;
  }

  expandAll() {
    this.blogPostTitleComponents.forEach(e => e.showFullSummary());
  }


}
