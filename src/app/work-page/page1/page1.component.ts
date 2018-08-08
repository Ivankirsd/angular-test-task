import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  tableHeaders;
  tableData = [] ;

  // tableHeaders: object = {
  //   data1: 'Данные 1',
  //   data2: 'Данные 2',
  //   data3: 'Данные 3',
  //   data4: 'Данные 4',
  // }

  // tableData = [
    // {data1: 'value1', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value2', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value3', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value4', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value5', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value6', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value7', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value8', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value9', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value10', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value11', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value12', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value13', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value14', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value15', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value16', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value17', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value18', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value19', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value20', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value21', data2: 'value2', data3: 'data3', data4: 'data4'},
    // {data1: 'value22', data2: 'value2', data3: 'data3', data4: 'data4'},
  // ];

  constructor(private httpData: DataService) { }

  ngOnInit() {

    this.httpData.getDataTable1().subscribe(data => {
      this.tableHeaders = data['table_headers'];
      this.tableData = data['table_data'];
    });
  }

}
