import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'ngx-store';
import { TransactionService } from './services/transaction.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [TransactionService, LocalStorageService]
})
export class SharedModule { }

