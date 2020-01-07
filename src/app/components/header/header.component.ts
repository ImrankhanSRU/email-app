import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private mailService: MailService) { }
  public isSideBarCollapse = false;
  public dropDownName = '';

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
