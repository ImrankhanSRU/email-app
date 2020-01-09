import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private mailService: MailService, private loginService: LoginService) { }
  public isSideBarCollapse = false;
  public dropDownName = '';
  text = "Inbox"
  ngOnInit() {
    this.mailService.getEmails()
    
  }

  toggleSideNav() {
    this.isSideBarCollapse = !this.isSideBarCollapse;
    this.mailService.isSideBarCollapse = this.isSideBarCollapse
    if (this.isSideBarCollapse) {
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
