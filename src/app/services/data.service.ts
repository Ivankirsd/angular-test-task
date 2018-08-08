import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {pipe} from 'rxjs/util/pipe';

@Injectable()
export class DataService {

  url = 'http://localhost:3000/';
  api_tamle_1 = 'table_1';
  api_tamle_2 = 'table_2';

  constructor( private http: HttpClient) { }

  getDataTable1 (): Observable<any> {
    console.log('http request run')

    return this.http.get<any>(`${this.url}${this.api_tamle_1}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  getDataTable2 (): Observable<any> {
    console.log('http request run')

    return this.http.get<any>(`${this.url}${this.api_tamle_2}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return console.error(
      'Something bad happened; please try again later.');
  }
}
