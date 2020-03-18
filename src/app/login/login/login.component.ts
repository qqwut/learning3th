import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TransactionService } from "../../shared/services/transaction/transaction.service";
import { TransactionData } from "../../shared/services/transaction/models/Transaction.data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  transactionData: TransactionData;
  user: string;
  password: string;
  register: boolean = false;

  constructor(
    private router: Router,
    private transactionService: TransactionService<TransactionData>
  ) { }

  ngOnInit() {
    this.user = 'general';
    this.transactionData = this.transactionService.load();
    this.transactionData.url = "";
    this.transactionData.customer = null;
    this.transactionData.transactionId = "";
    this.transactionData.role = "";
    this.transactionService.update(this.transactionData);
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
      // this.router.navigate(['/general/content/by-user']);
      this.router.navigate(['/general']);
      this.transactionData.role = 'general';
      this.transactionData.customer = {
        id: 'G0001',
        name: 'kachain'
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
