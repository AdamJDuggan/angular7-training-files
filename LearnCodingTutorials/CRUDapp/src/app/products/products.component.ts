import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products; 

  selectedProduct: Product;

  constructor(private ProductService: ProductService) { }

  onSelectProduct(product){
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.selectedProduct = this.products[1];
    this.getProducts()
  }

  getProducts(): void {
    const products = this.ProductService.getProducts()
    this.products = products; 
  }

}
