import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../services/inbox-service/inbox.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSideBarCollapse = false;
  public dropDownName = '';
  constructor(private inboxService: InboxService) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.isSideBarCollapse =! this.isSideBarCollapse;
    if(this.isSideBarCollapse){
      this.dropDownName = '';
    }
  }
  openDropdown(menu) {
    if(menu != this.dropDownName) {
      this.dropDownName = menu;
    } else {
      this.dropDownName = '';
    }

}
}
