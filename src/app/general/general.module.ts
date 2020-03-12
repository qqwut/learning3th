import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { GeneralRoutingModule } from './general-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
// import { MenuComponent } from "./../share/menu/menu.component";
import { ContentComponent } from "./containers/content/content.component";

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

@NgModule({
  declarations: [DashboardComponent, ContentComponent],
  imports: [
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

