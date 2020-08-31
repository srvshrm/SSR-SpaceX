import { Component } from '@angular/core';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  years: string[] = ['2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  values: string[] = ['True', 'False'];

  constructor(private coreService: CoreService) { }

  /**
   * @param filter: string
   * @param value: string
   * @returns Observable
   * @description Apply filter params in API
   */

  applyFilter(filter: string, value: string) {
    this.coreService.setFilterParams(filter, value).subscribe((data) => {
      this.coreService.setDataRefresh(data);
    });
  }

}
