import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralTopContentRoutingModule } from './general-top-content-routing.module';
import { GeneralTopContentListComponent } from './general-top-content-list/general-top-content-list.component';
import { GeneralTopContentDetailComponent } from './general-top-content-detail/general-top-content-detail.component';
import { GeneralTopConteByUserComponent } from './general-top-conte-by-user/general-top-conte-by-user.component';

@NgModule({
  declarations: [GeneralTopContentListComponent, GeneralTopContentDetailComponent, GeneralTopConteByUserComponent],
  imports: [
    CommonModule,
    GeneralTopContentRoutingModule
  ]
})
export class GeneralTopContentModule { }
