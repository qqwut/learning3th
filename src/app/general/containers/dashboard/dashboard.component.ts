import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../shared/services/authentication/authentication.service";
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TransactionService } from "../../../shared/services/transaction/transaction.service";
import { TransactionData } from "../../../shared/services/transaction/models/Transaction.data";

import { MENU_GENERAL, MENU_USER } from "../../../shared/constants/data.constant";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  routerCurrent: any;
  currentUser: any;
  menuBar: MenuItem[];
  items: MenuItem[];
  transactionData: TransactionData;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private transactionService: TransactionService<TransactionData>,
  ) {
  }

  ngOnInit() {
    this.menuBar = MENU_GENERAL;
    this.items = MENU_USER;
    this.currentUser = this.authenticationService.currentUserValue;

    setInterval(() => {
      this.routerCurrent = this.router.url;
    }, 100);

  }

  clickMenu(_event) {
    let nameNav = document.getElementsByClassName('side-nav');
    nameNav[0]['style'].display = "block";
    nameNav[0]['style'].zIndex = 3;

    let nameLogo = document.getElementsByClassName('logo');
    nameLogo[0]['style'].width = "100%";
  }

  updateUrl() {

  }

}
