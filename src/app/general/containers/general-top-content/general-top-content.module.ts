import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralTopContentRoutingModule } from './general-top-content-routing.module';
import { GeneralTopContentListComponent } from './general-top-content-list/general-top-content-list.component';
import { GeneralTopContentDetailComponent } from './general-top-content-detail/general-top-content-detail.component';
import { GeneralTopConteByUserComponent } from './general-top-conte-by-user/general-top-conte-by-user.component';
import { GeneralTopContentCreateComponent } from './general-top-content-create/general-top-content-create.component';


// PRIMENG
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [GeneralTopContentListComponent, GeneralTopContentDetailComponent, GeneralTopConteByUserComponent, GeneralTopContentCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RadioButtonModule,
    GeneralTopContentRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    AccordionModule
  ]
})
export class GeneralTopContentModule { }
