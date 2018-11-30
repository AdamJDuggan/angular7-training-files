import { Injectable } from '@angular/core';
import { Product } from './product';

const products = [
  {
    id: 1,
    name: 'I-phone',
    price: 650
  },
  {
    id: 2,
    name: 'MacBook Pro',
    price: 650
  },
  {
    id: 3,
    name: 'I-Pad',
    price: 200
  } 
]


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return products; 
  }

}
