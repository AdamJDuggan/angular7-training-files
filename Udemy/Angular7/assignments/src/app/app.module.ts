import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { BlueComponent } from './assignment1/blue/blue.component';
import { RedComponent } from './assignment1/red/red.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GamecomponentComponent } from './assignment4/gamecomponent/gamecomponent.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    BlueComponent,
    RedComponent,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    GamecomponentComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
