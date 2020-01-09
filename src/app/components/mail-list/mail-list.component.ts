import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'
import { users } from '../mockData.json'

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  // emails;

  selectedIndeices = []
  sendReadMailDetails = {};
  @Output()
  passMesaageDetails = new EventEmitter<any>();
  @Input()
  public data;
  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    this.getMails()
  }

  getMails = () => {
    // this.emails = this.mailService.getEmails()
    this.selectedIndeices.length = this.data.emails.length
    this.data.emails.map(item => {
      item.senderName = users[item.senderId - 1].name
    })
  }

  getMailsAfterDelete = () => {
    this.data.emails = this.mailService.getEmails()
    this.data.emails.map(item => {
      item.senderName = users[item.senderId - 1].name
    })
  }

  getSentMails = () => {
    this.data.emails = this.mailService.getSentMails()
  }

  readMail = (i) => {
    if (!this.data.emails[i].isRead) {
      this.mailService.decreaseUnReadCount(i);
    }
    this.sendReadMailDetails = this.data.emails[i];
    this.passMesaageDetails.emit(this.sendReadMailDetails);
  }

  storeSelectedStatus = (i, e) => {
    this.selectedIndeices[i] = e.target.checked
  }

  deleteMails = () => {
    if (this.data.text == "Inbox") {
      this.mailService.deleteMails(this.selectedIndeices)
      // this.mailService.deleteMails(this.selectedIndeices)
      this.getMailsAfterDelete()
    }
    else {
      this.mailService.deleteSentMails(this.selectedIndeices)
      // this.mailService.deleteMails(this.selectedIndeices)
      this.getSentMails()
    }
    this.selectedIndeices = []
  }
}
