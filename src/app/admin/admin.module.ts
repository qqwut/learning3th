import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from "./../share/menu/menu.component";

// PRIMENG
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PanelMenuModule
  ]
})
export class AdminModule { }
