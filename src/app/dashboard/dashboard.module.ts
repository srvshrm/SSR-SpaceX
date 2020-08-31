import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LaunchCardComponent } from '../launch-card/launch-card.component';
import { FilterComponent } from '../filter/filter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FilterComponent,
    LaunchCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
