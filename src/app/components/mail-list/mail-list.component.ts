import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'
import { users } from '../mockData.json'

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  emails;
  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.emails = this.mailService.getEmails()
    this.emails.map(item => {
      item.senderName = users.filter(user => user.id == item.senderId )[0].name
      if(new Date(item.time).toLocaleDateString() == new Date().toLocaleDateString()) {
        item.time = new Date(item.time).toLocaleTimeString()
      }
      else {
        item.time = new Date(item.time).toDateString()
      }
    })
  }

  readMail = (i) => {
    this.mailService.decreaseUnReadCount(i)
  }

}
