import { TestService } from './test.service';
import { ViewModule } from './view/view.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view-component/view.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  // imports is basiclly you establishing a dependancy on other modules. If this was an addressbook module I might
  // import a addresscard module into this
  imports: [
    BrowserModule,
    HttpClient,
    ViewModule
  ],
  // this is where we add a service into a module...
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
