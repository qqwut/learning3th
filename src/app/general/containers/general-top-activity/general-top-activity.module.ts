import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralTopActivityRoutingModule } from './general-top-activity-routing.module';
import { GeneralTopActivityListComponent } from './general-top-activity-list/general-top-activity-list.component';
import { GeneralTopActivityDetailComponent } from './general-top-activity-detail/general-top-activity-detail.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [GeneralTopActivityListComponent, GeneralTopActivityDetailComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    GeneralTopActivityRoutingModule
  ]
})
export class GeneralTopActivityModule { }
