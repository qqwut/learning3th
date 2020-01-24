import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMenu(event) {
    let nameNav = document.getElementsByClassName('side-nav');
    nameNav[0]['style'].display = "block";
    nameNav[0]['style'].zIndex = 3;

    let nameLogo = document.getElementsByClassName('logo');
    nameLogo[0]['style'].width = "100%";
  }

}
