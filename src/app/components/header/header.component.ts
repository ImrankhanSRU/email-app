import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'
import { LoginService } from '../../services/login/login.service'
import { users } from '../mockData.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public mailService: MailService, protected loginService: LoginService) { }
  public isSideBarCollapse = false;
  public dropDownName = '';
  private name;
  text = "Inbox"
  ngOnInit() {
    this.mailService.getEmails()
    let id = parseInt(localStorage.getItem("loggedUserId"))
    this.name = users[id - 1].name
  }

  toggleSideNav() {
    this.isSideBarCollapse = !this.isSideBarCollapse;
    this.mailService.isSideBarCollapse = this.isSideBarCollapse
    if (!this.isSideBarCollapse) {
      this.dropDownName = '';
    }
  }
  openDropdown(menu) {
    if (menu != this.dropDownName) {
      this.dropDownName = menu;
    } else {
      this.dropDownName = '';
    }

  }

  logout = () => {
    this.loginService.logout()
  }
  passSendMailData = (e) => {
    this.text = e
  }
}
