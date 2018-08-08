import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit {

  sideBarIsOpen = false;

  constructor() { }

  ngOnInit() { }

  onSideBarOpen () {
    this.sideBarIsOpen = !this.sideBarIsOpen;
  }

  onSideBarClose () {
    this.sideBarIsOpen = false;
  }
}
