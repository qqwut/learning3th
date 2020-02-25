import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContentComponent } from "./content/content.component";
import { RunKeywordIfComponent } from './run-keyword-if/run-keyword-if.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', redirectTo: 'content', pathMatch: 'full'
      },
      {
        path: 'content', component: ContentComponent
      },
      {
        path: 'run-keyword-if', component: RunKeywordIfComponent
      },
      {
        path: 'example', component: ExampleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
