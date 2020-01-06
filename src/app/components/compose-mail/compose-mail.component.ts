import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../services/inbox-service/inbox.service'
@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent implements OnInit {
  to;
  subject;
  cc;
  showCc = false;
  message;
  // showCompose = true
  constructor(private inboxService : InboxService) { }

  ngOnInit() {
  }

  hideCompose(e) {
    this.inboxService.hideComposeMail()
  }

  showCcDiv() {
    this.showCc = !this.showCc
  }

  sendMail = () => {
    console.log(this.to)
    console.log(this.cc)
    console.log(this.message)
  }

}
