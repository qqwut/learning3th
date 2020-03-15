import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'ngx-store';
import { TransactionService } from './services/transaction/transaction.service';
import { ExampleComponent } from "./containers/example/example.component";
import { RunKeywordIfComponent } from "./containers/run-keyword-if/run-keyword-if.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleComponent, RunKeywordIfComponent],
  exports: [],
  providers: [TransactionService, LocalStorageService]
})
export class SharedModule { }

