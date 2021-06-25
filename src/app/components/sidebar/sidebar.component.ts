import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  links: {path: string, title: string, icon: string}[] = [
    {
      path: "/patient-list",
      title: "Patient List",
      icon: "groups"
    },
    {
      path: "/patient-create",
      title: "Register Patient",
      icon: "person_add_alt"
    },
  ];

  constructor() {}

  ngOnInit() {}
}
