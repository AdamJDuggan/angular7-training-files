
// TS compile-time custom type.

interface FruitVeg {
  name:string;
  price:number;
  quantity:number;
  discount:number;
  id?:string;
}

export {FruitVeg}

// JS class : exists at run-time

// class FruitVeg{

//     constructor( public name:string, public price:number ) {

//       if( typeof price !== "number" ) {
//         console.log("PRICE is not a number");
//       }
//     }
// }

// export {FruitVeg}
