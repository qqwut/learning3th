import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralTopNewsListComponent } from './general-top-news-list/general-top-news-list.component';
import { GeneralTopNewsDetailComponent } from './general-top-news-detail/general-top-news-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list',
    component: GeneralTopNewsListComponent
  },
  {
    path: 'detail/:id',
    component: GeneralTopNewsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralTopNewsRoutingModule { }
