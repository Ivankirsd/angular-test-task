import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/tableDatas/data.service';

@Component({
  selector: 'app-app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.css']
})
export class HomePageTwoComponent implements OnInit {
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
