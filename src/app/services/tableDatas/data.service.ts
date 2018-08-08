import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  apiTableOne = 'api/dataTableOne';
  apiTableTwo = 'api/dataTableTwo';

  constructor( private http: HttpClient) { }

  getDataTableOne (): Observable<any> {
    // console.log('http request run')
    return this.http.get(this.apiTableOne);

  }

  getDataTableTwo (): Observable<any> {
    // console.log('http request run')
    return this.http.get(this.apiTableTwo);

  }
}
