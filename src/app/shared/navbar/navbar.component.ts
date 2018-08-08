import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() sideBarIsOpen: boolean;
  @Output() sideBarOpenEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSideBarOpen() {
    this.sideBarOpenEvent.emit();
  }
}
