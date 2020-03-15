import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralTopQaListComponent } from './general-top-qa-list/general-top-qa-list.component';
import { GeneralTopQaDetailComponent } from './general-top-qa-detail/general-top-qa-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list',
    component: GeneralTopQaListComponent
  },
  {
    path: 'detail/:id',
    component: GeneralTopQaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralTopQaRoutingModule { }
