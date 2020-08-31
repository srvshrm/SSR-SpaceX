import { Component, OnInit } from '@angular/core';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit {

  launchData: any = [];
  serverError: any;
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getData().subscribe(
      (data) => {
        this.launchData = data;
      },
      (err) => {
        console.log(err);
        this.serverError = err;
      }
    );
    this.coreService.getDataRefresh().subscribe((data) => {
      this.launchData = data;
    });
  }

}
