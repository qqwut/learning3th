import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component'


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'example',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: ExampleComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
