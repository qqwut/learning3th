import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralTopContentListComponent } from './general-top-content-list/general-top-content-list.component';
import { GeneralTopContentDetailComponent } from './general-top-content-detail/general-top-content-detail.component';
import { GeneralTopConteByUserComponent } from './general-top-conte-by-user/general-top-conte-by-user.component';
import { GeneralTopContentCreateComponent } from './general-top-content-create/general-top-content-create.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'create',
    component: GeneralTopContentCreateComponent
  },
  {
    path: 'list',
    component: GeneralTopContentListComponent
  },
  {
    path: 'detail/:id',
    component: GeneralTopContentDetailComponent
  },
  {
    path: 'by-user',
    component: GeneralTopConteByUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralTopContentRoutingModule { }
