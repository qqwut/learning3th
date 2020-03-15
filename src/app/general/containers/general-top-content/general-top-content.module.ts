import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralTopContentRoutingModule } from './general-top-content-routing.module';
import { GeneralContentListComponent } from './general-content-list/general-content-list.component';
import { GeneralContentDetailComponent } from './general-content-detail/general-content-detail.component';

@NgModule({
  declarations: [GeneralContentListComponent, GeneralContentDetailComponent],
  imports: [
    CommonModule,
    GeneralTopContentRoutingModule
  ]
})
export class GeneralTopContentModule { }
