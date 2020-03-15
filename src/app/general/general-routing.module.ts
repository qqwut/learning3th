import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ExampleComponent } from './../shared/containers/example/example.component';
import { RunKeywordIfComponent } from './../shared/containers/run-keyword-if/run-keyword-if.component';
import { GeneralHomeComponent } from './containers/general-home/general-home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: GeneralHomeComponent
      },
      {
        path: 'qa',
        loadChildren: './containers/general-top-qa/general-top-qa.module#GeneralTopQaModule'
      },
      {
        path: 'content',
        loadChildren: './containers/general-top-content/general-top-content.module#GeneralTopContentModule'
      },
      {
        path: 'news',
        loadChildren: './containers/general-top-news/general-top-news.module#GeneralTopNewsModule'
      },
      {
        path: 'activity',
        loadChildren: './containers/general-top-activity/general-top-activity.module#GeneralTopActivityModule'
      },
      {
        path: 'run-keyword-if',
        component: RunKeywordIfComponent
      },
      {
        path: 'example',
        component: ExampleComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
