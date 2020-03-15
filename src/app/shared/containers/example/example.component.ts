import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from "./../../services/transaction/transaction.service";
import { TransactionData } from "./../../services/transaction/models/Transaction.data";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  transactionData: TransactionData;
  constructor(
    private router: Router,
    private transactionService: TransactionService<TransactionData>
  ) { }

  ngOnInit() {
    this.transactionData = this.transactionService.load();
  }

}
