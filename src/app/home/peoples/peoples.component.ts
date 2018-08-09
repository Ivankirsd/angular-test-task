import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/tableDatas/data.service';

@Component({
  selector: 'app-app-home-page-two',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  tableHeaders;
  tableData = [] ;

  constructor(private httpData: DataService) { }

  ngOnInit() {

    this.httpData.getDataTableTwo().subscribe(data => {
      this.tableHeaders = data['table_headers'];
      this.tableData = data['table_data'];
    });
  }

}
