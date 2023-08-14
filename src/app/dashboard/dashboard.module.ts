import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
