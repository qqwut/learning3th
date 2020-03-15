import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from "../../../../shared/services/transaction/transaction.service";
import { TransactionData } from "../../../../shared/services/transaction/models/Transaction.data";

@Component({
  selector: 'app-general-top-content-list',
  templateUrl: './general-top-content-list.component.html',
  styleUrls: ['./general-top-content-list.component.scss']
})
export class GeneralTopContentListComponent implements OnInit {
  transactionData: TransactionData;

  constructor(
    private router: Router,
    private transactionService: TransactionService<TransactionData>
  ) { }

  ngOnInit() {
    this.transactionData = this.transactionService.load();
  }

  view(data) {
    this.router.navigate(['/general/content/detail/' + '1']);
  }
}
