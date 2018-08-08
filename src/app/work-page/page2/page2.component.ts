import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  tableHeaders;
  tableData = [] ;

  constructor(private httpData: DataService) { }

  ngOnInit() {
    this.httpData.getDataTable2().subscribe(data => {
      this.tableHeaders = data['table_headers'];
      this.tableData = data['table_data'];
    });
  }

}
