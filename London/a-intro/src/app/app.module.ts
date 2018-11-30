// Logic/state define in ordinary ES6 class.

// On its own it behaves like a normal class.
// Decorate this class with
// HTML-tempalte-view-markup
// CSS styles
// tag-name
//Typescript annotation. This component decorating/wrapping class with
//additional meta-data that describes: HTML, CSS and tag-name

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//AppComponent is name of our component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
