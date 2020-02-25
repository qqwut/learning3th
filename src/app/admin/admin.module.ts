
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from "./../share/menu/menu.component";
import { ContentComponent } from './content/content.component';

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
import { RunKeywordIfComponent } from './run-keyword-if/run-keyword-if.component';
import { ExampleComponent } from "./example/example.component";
@NgModule({
  declarations: [DashboardComponent, MenuComponent, ContentComponent, ExampleComponent, RunKeywordIfComponent],
  imports: [
    AdminRoutingModule,
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
export class AdminModule { }

