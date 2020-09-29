import { Component } from '@angular/core';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  years: string[] = ['2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  yearFlag: boolean[] = [false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false];

  launch: string[] = ['True', 'False'];

  launchFlag: boolean[] = [false, false];

  land: string[] = ['True', 'False'];

  landFlag: boolean[] = [false, false];
  temp: any;

  constructor(private coreService: CoreService) { }

  /**
   * @param filter: string
   * @param value: string
   * @returns Observable
   * @description Apply filter params in API
   */

  applyFilter(filter: string, value: string, index: number) {
    if (filter === 'launch_year') {
      if (this.yearFlag[index] === false) {
        if (this.yearFlag.indexOf(true) === -1) {
        this.yearFlag[index] = true;
        this.coreService.setFilterParams(filter, value).subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
      else {
        this.temp = this.yearFlag.indexOf(true);
        this.yearFlag[this.temp] = false;
        this.yearFlag[index] = true;
        this.coreService.setFilterParams(filter, value).subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
      }
      else {
        this.yearFlag[index] = false;
        this.coreService.setFilterParams(filter, '').subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
    }

    if (filter === 'launch_success') {
      if (this.launchFlag[index] === false) {
        if (this.launchFlag.indexOf(true) === -1) {
        this.launchFlag[index] = true;
        this.coreService.setFilterParams(filter, value).subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
      else {
        this.temp = this.launchFlag.indexOf(true);
        this.launchFlag[this.temp] = false;
        this.launchFlag[index] = true;
        this.coreService.setFilterParams(filter, value).subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
      }
      else {
        this.launchFlag[index] = false;
        this.coreService.setFilterParams(filter, '').subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
    }

    if (filter === 'land_success') {
      if (this.landFlag[index] === false) {
        if (this.landFlag.indexOf(true) === -1) {
        this.landFlag[index] = true;
        this.coreService.setFilterParams(filter, value).subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
      else {
        this.temp = this.landFlag.indexOf(true);
        this.landFlag[this.temp] = false;
        this.landFlag[index] = true;
        this.coreService.setFilterParams(filter, value).subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
      }
      else {
        this.landFlag[index] = false;
        this.coreService.setFilterParams(filter, '').subscribe((data) => {
          this.coreService.setDataRefresh(data);
        });
      }
    }
  }

}
