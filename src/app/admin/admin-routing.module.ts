import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContentComponent } from "./content/content.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', redirectTo: 'content', pathMatch: 'full'
      },
      {
        path: 'content', component: ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
