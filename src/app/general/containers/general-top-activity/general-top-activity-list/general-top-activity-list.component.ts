import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-top-activity-list',
  templateUrl: './general-top-activity-list.component.html',
  styleUrls: ['./general-top-activity-list.component.scss']
})
export class GeneralTopActivityListComponent implements OnInit {
  map: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.map = true;
  }

}
