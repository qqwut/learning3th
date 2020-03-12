import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TransactionService } from "./../../share/services/transaction.service";
import { TransactionData } from "../../share/services/models/Transaction.data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  transactionData: TransactionData;
  user: string;
  password: string;

  constructor(
    private router: Router,
    private transactionService: TransactionService<TransactionData>
  ) { }

  ngOnInit() {
    this.transactionData = this.transactionService.load();
  }

  login() {
    const type = this.user;
    if (type && type.toLocaleLowerCase() == 'admin') {
      this.router.navigate(['/admin']);
      this.transactionData.role = 'admin';
      this.transactionData.customer = {
        id: 'A0001',
        name: 'admin'
      };

    } else if (type && type.toLocaleLowerCase() == 'general') {
      this.router.navigate(['/general']);
      this.transactionData.role = 'general';
      this.transactionData.customer = {
        id: 'G0001',
        name: 'general'
      };

    } else {
      this.router.navigate(['/admin']);
      this.transactionData.role = 'admin';
      this.transactionData.customer = {
        id: 'A0001',
        name: 'admin'
      };
    }
    this.transactionService.update(this.transactionData);
  }
}
