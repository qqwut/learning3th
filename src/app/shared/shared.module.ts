import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'ngx-store';
import { TransactionService } from './services/transaction/transaction.service';
import { ExampleComponent } from "./containers/example/example.component";
import { RunKeywordIfComponent } from "./containers/run-keyword-if/run-keyword-if.component";
import {AccordionModule} from 'primeng/accordion';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: [ExampleComponent, RunKeywordIfComponent, LoginComponent],
  exports: [],
  providers: [TransactionService, LocalStorageService]
})
export class SharedModule { }

