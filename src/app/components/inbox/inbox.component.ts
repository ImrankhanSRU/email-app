import { Component, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  emails = []
  data = {"text": "Inbox", emails: []}
  @Input() public headingText;
  constructor(public mailService: MailService) { }
  sentMails = []
  public isReadMail = false;
  public isShowSendMail = false
  readMailData = {};
  ngOnChanges() {
    this.data.text = this.headingText
    if (this.headingText == "Sent Mails") {
      this.getSentMails()
    }
    else {
      this.getEmails()
    }
  }
  ngOnInit() {
    this.getEmails()
    // this.getSentMails()
  }

  getEmails = () => {
    this.emails = this.mailService.getEmails()
    this.data.emails = this.emails
  }

  getSentMails = () => {
    this.emails = this.mailService.getSentMails()
    this.sentMails = this.emails
    this.data.emails = this.emails
    this.emails.map(item => {
      if (new Date(item.time)) {

        if (new Date(item.time).toLocaleDateString() == new Date().toLocaleDateString()) {
          item.time = new Date(item.time).toLocaleTimeString()
        } else {
          item.time = new Date(item.time).toDateString()
        }
      }
    })
  }

  passMessageToViewMail(data) {
    this.readMailData = data;
    this.isReadMail = true;
  }
  getInboxList(event) {
    this.isReadMail = event;
  }

  // passSendMailsToMailList = (data) => {
  //   this.text = data
  // }

}
