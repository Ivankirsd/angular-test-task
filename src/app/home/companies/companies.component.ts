import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/tableDatas/data.service';

@Component({
  selector: 'app-home-page-one',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  tableHeaders;
  tableData = [] ;

  constructor(private httpData: DataService) { }

  ngOnInit() {

    this.httpData.getDataTableOne().subscribe(data => {
      this.tableHeaders = data['table_headers'];
      this.tableData = data['table_data'];
    });
  }

}
