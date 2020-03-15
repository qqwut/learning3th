import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralTopActivityListComponent } from './general-top-activity-list/general-top-activity-list.component';
import { GeneralTopActivityDetailComponent } from './general-top-activity-detail/general-top-activity-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list',
    component: GeneralTopActivityListComponent
  },
  {
    path: 'detail/:id',
    component: GeneralTopActivityDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralTopActivityRoutingModule { }
