import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})
export class TableComponent implements OnInit {
  @Input() tableHeaders: object;
  @Input() tableData;

  count = 1;
  page = 1;
  perPage = 10;
  someLoadingVar = false;

  constructor() { }

  ngOnInit() {
    this.count = this.tableData.length;
  }

  prevPage(): void {
    this.page--;
  }

  nextPage(): void {
    this.page++;
  }

  goToPage (n: number): void {
    this.page = n;
  }

  setPerPage (n: number) {
    this.perPage = n;
    this.page = 1;
  }
}
