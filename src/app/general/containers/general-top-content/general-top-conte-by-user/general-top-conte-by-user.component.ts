import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from "../../../../shared/services/transaction/transaction.service";
import { TransactionData } from "../../../../shared/services/transaction/models/Transaction.data";
import * as moment from "moment";

@Component({
  selector: 'app-general-top-conte-by-user',
  templateUrl: './general-top-conte-by-user.component.html',
  styleUrls: ['./general-top-conte-by-user.component.scss']
})
export class GeneralTopConteByUserComponent implements OnInit {

  transactionData: TransactionData;
  dateNow:any;

  constructor(
    private router: Router,
    private transactionService: TransactionService<TransactionData>
  ) { }

  ngOnInit() {
    this.transactionData = this.transactionService.load();
    this.dateNow = moment(new Date()).format('DD-MM-YYYY HH:mm:ss')
  }

}
