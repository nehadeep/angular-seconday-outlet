import {Component, OnInit} from '@angular/core';
import { Product } from "../models/product";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "product-list-sidebar",
  templateUrl: "product-list-sidebar.component.html"
})
export class ProductListSidebarComponent implements OnInit {

  id:number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log("pramses", params)
      this.id = params.id;
    });
  }
}
