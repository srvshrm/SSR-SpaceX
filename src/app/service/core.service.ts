import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  private _url = 'https://api.spaceXdata.com/v3/launches?limit=100';
  private _launch_success = '';
  private _land_success = '';
  private _launch_year = '';

  private _dataRefresh$ = new Subject<any>();

  /**
   * @returns Observable<any>
   * @description Get call to API
   */

  getData() {
    return this.http.get(this._url);
  }

  /**
   * @param filter: string
   * @param value: string
   * @returns Observable<any>
   * @description Generate the filter url
   */

  setFilterParams(filter: string, value: string) {
    if (filter === 'launch_success') {
      this._launch_success = value;
    } else if (filter === 'land_success') {
      this._land_success = value;
    } else if (filter === 'launch_year') {
      this._launch_year = value;
    }
    return this.getData();
  }

  /**
   * @returns string
   * @description Get filter params
   */

  getFilterParams() {
    return [this._launch_success, this._land_success, this._launch_year];
  }

  /*---------------------------Utility Methods-------------------------------*/

  setDataRefresh(acc: any) {
    this._dataRefresh$.next(acc);
  }

  getDataRefresh(): Observable<any> {
    return this._dataRefresh$.asObservable();
  }

}
