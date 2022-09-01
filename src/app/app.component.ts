import { Component } from "@angular/core";
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Router Demo";
  constructor( public router: Router,){
    router.events.subscribe((val) => {
      console.log("router value", val)
  });
  }
}
