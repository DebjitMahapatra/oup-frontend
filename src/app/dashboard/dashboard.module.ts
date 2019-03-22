import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  MainViewComponent
} from './main-view/main-view.component';
import {
  DashboardRoutingModule
} from './dashboard-routing.module';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
