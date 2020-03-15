import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./../shared/shared.module";

// PRIMENG
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';

// COMPONENT
import { GeneralRoutingModule } from './general-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { GeneralHomeComponent } from './containers/general-home/general-home.component';

@NgModule({
  declarations: [DashboardComponent, GeneralHomeComponent],
  imports: [
    SharedModule,
    GeneralRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelMenuModule,
    MenuModule,
    StepsModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    FileUploadModule,
    CheckboxModule,
    DialogModule
  ],
  providers: [
  ]
})
export class GeneralModule { }

