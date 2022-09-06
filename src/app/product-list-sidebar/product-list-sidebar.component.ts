import { Component } from "@angular/core";
import { Product } from "../models/product";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "product-list-sidebar",
  templateUrl: "product-list-sidebar.component.html"
})
export class ProductListSidebarComponent {

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log("pramses", params)
    });
  }
}
