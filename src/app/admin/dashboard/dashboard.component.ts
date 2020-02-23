import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../../service/authentication/authentication.service";
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  items: MenuItem[];
  currentUser: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'View', icon: '' },
      { label: 'Edit', icon: '' },
      {
        label: 'Sign Out', routerLink: ['/login'],
        // command: (event: any) => {
        // }
      }
    ];
    this.currentUser = this.authenticationService.currentUserValue;
  }

  clickMenu(event) {
    let nameNav = document.getElementsByClassName('side-nav');
    nameNav[0]['style'].display = "block";
    nameNav[0]['style'].zIndex = 3;

    let nameLogo = document.getElementsByClassName('logo');
    nameLogo[0]['style'].width = "100%";
  }

}
