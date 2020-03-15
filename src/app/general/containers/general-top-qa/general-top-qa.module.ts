import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralTopQaRoutingModule } from './general-top-qa-routing.module';
import { GeneralTopQaListComponent } from './general-top-qa-list/general-top-qa-list.component';
import { GeneralTopQaDetailComponent } from './general-top-qa-detail/general-top-qa-detail.component';

@NgModule({
  declarations: [GeneralTopQaListComponent, GeneralTopQaDetailComponent],
  imports: [
    CommonModule,
    GeneralTopQaRoutingModule
  ]
})
export class GeneralTopQaModule { }
