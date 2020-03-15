import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ContentComponent } from './containers/content/content.component';
import { ExampleComponent } from './../shared/containers/example/example.component';
import { RunKeywordIfComponent } from './../shared/containers/run-keyword-if/run-keyword-if.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', redirectTo: 'content', pathMatch: 'full'
      },
      {
        path: 'content',
        component: ContentComponent
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
