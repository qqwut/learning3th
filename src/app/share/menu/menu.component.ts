import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'HOME',
        command: (event: any) => {
        }
      },
      {
        label: 'Learning',
        // icon: 'pi pi-pw pi-file'
      },
      {
        label: 'SeleniumLibrary',
        // icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Open Browser',
            // icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Open Browser2',
            // icon: 'pi pi-fw pi-refresh'
          },
          {
            label: 'Open Browser3',
            // icon: 'pi pi-fw pi-refresh'
          }
        ]
      },
      {
        label: 'BuiltIn',
        // icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Convert To String',
            // icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Run Keyword If',
            url: '/admin/run-keyword-if'
          },
          {
            label: 'Other',
            // icon: 'pi pi-pi pi-search'
          }
        ]
      },
      {
        label: 'Example',
        url: '/admin/example'
      }
    ];
  }
}
