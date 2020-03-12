import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../service/authentication/authentication.service";
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TransactionService } from "../../../share/services/transaction.service";
import { TransactionData } from "../../../share/services/models/Transaction.data";

import { MENU_ADMIN, MENU_USER } from "../../../share/constants/data.constant";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  currentUser: any;
  menuBar: MenuItem[];
  items: MenuItem[];
  transactionData: TransactionData;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private transactionService: TransactionService<TransactionData>,
  ) { }

  ngOnInit() {
    this.menuBar = MENU_ADMIN;
    this.items = MENU_USER;
    this.currentUser = this.authenticationService.currentUserValue;
    this.transactionData = this.transactionService.load();
  }

  clickMenu(_event) {
    let nameNav = document.getElementsByClassName('side-nav');
    nameNav[0]['style'].display = "block";
    nameNav[0]['style'].zIndex = 3;

    let nameLogo = document.getElementsByClassName('logo');
    nameLogo[0]['style'].width = "100%";
  }

}
