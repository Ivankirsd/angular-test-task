import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
