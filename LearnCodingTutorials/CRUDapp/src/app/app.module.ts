import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  
  providers: [
    ProductService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
