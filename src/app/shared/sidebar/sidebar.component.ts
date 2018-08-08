import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sideBarIsOpen: boolean;
  @Output() sideBarClose = new EventEmitter();

  sideBarPagesMenuIsOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSideBarPagesMenuOpen() {
    this.sideBarPagesMenuIsOpen = !this.sideBarPagesMenuIsOpen;
  }

  onSideBarClose () {
    this.sideBarClose.emit();
  }

}
