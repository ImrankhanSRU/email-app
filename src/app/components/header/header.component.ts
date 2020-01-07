import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  toggleSideNav(e) {
    console.log(e)
  }

}
