import { Component } from "@angular/core";
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "Angular Router Demo";
  constructor( public router: Router,){
    router.events.subscribe((val) => {
      console.log("router value", val)
  });
  }
}
