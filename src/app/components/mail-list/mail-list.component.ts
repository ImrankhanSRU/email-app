import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../services/inbox-service/inbox.service'
import { users } from '../mockData.json'

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  emails;
  constructor(private inboxService: InboxService) { }

  ngOnInit() {
    this.emails = this.inboxService.getEmails()
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
    this.inboxService.decreaseUnReadCount(i)
  }

}
