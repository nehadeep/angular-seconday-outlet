import { Component } from "@angular/core";
import { Product } from "../models/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "product-list",
  templateUrl: "product-list.component.html"
})
export class ProductListComponent {
  public products: Product[] = [
    new Product(1, "Product 001"),
    new Product(2, "Product 002"),
    new Product(3, "Product 003"),
    new Product(4, "Product 004"),
    new Product(5, "Product 005"),
    new Product(6, "Product 006"),
    new Product(7, "Product 007"),
    new Product(8, "Product 008")
  ];

  constructor(private router: Router){

  }
  testurl(product){
    this.router.navigate([`/product/${product.id}`,{ outlets: {'chat': ['chat', product.id] } }]);
  }

  gotovci(product){
    this.router.navigate([`vci/${product.id}`,{ outlets: {'chat': ['chat', product.id] } }])
  }
}
