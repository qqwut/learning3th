import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralTopNewsRoutingModule } from './general-top-news-routing.module';
import { GeneralTopNewsListComponent } from './general-top-news-list/general-top-news-list.component';
import { GeneralTopNewsDetailComponent } from './general-top-news-detail/general-top-news-detail.component';

@NgModule({
  declarations: [GeneralTopNewsListComponent, GeneralTopNewsDetailComponent],
  imports: [
    CommonModule,
    GeneralTopNewsRoutingModule
  ]
})
export class GeneralTopNewsModule { }
