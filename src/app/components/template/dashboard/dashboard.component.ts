import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as feather from "feather-icons";
@Component({
  selector: "app-nav",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    feather.replace();
  }
}
