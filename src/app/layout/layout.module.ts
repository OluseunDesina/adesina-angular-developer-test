import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule,
  ],
  exports: [
    DashboardLayoutComponent
  ]
})
export class LayoutModule { }
