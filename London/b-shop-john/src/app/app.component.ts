
import { Component,ViewEncapsulation } from '@angular/core';
import { FruitVeg } from "./app.fruitveg.type" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation : ViewEncapsulation.None;
})

export class AppComponent {

    private basket:FruitVeg[] = [] ;

    private shop : string = "Cheapside Organics";

    private addr = {
      street   : "14 Cheapside",
      postcode : "EC4 2VZ"
    }

    private fruitVeg:FruitVeg[]  = [

      // quantity:0
      // Display FADED : CSS
      // Unbuyable
      { name:"Carrots", price:0.45,quantity:10, discount:0.2 },
      { name:"Plums", price:0.85, quantity:0,discount:0.1 },
      { name:"Oranges", price:0.75, quantity:4,discount:0.2 },
      { name:"Brocolli", price:0.50, quantity:0,discount:0.1 }

    ]

    getAddr = () => this.addr.street + ", " + this.addr.postcode + "." ;

    buyItem = item => {
      let copy = {...item , id:this.createUniqueId( item.name ) } ;
      this.basket.push( copy );
    }

    createUniqueId = name => name.toLowerCase() + "-" + Math.floor( Math.random() * 10000 );

    getTotal = () => this.basket.map( item => item.price ).reduce((a,b) => a+b,0 )

    empty = () => this.basket = [];

    removeItem = selected => this.basket = this.basket.filter( item => item.id !== selected.id )


}
