import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.componant';
import{NgModule} from '@angular/core';
//ngModule takes some config properties...
@ngModule(){
  //by using import Angualr knows the application will be used for the web browser and
  //will pack the browser module when Angualr piles our application
  imports: [BrowserModule]
}

//exporting it to use in our main.ts file. It needs meta data.
export class AppModule{

}

