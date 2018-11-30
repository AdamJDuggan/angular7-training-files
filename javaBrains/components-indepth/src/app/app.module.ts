import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostTitleComponent } from './blog-post-title/blog-post-title.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TuncatePipe } from './tuncate.pipe';
import { PageinatorComponent } from './pageinator/pageinator.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTitleComponent,
    BlogListComponent,
    TuncatePipe,
    PageinatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  // you can dependency inject pipes
    TuncatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
