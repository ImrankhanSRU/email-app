import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'
import { users } from '../mockData.json'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})

export class ComposeMailComponent implements OnInit {
  @ViewChild('alert', { static: true }) public btn: HTMLButtonElement;

  to;
  subject;
  cc;
  showCc = false;
  message;
  showAlert = false;
  status = "Success"
  alertText = "Mail sent"
  // showCompose = true
  userName;
  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.userName = users[this.mailService.userId - 1].userName
  }

  hideCompose() {
    this.mailService.hideComposeMail()
  }

  showCcDiv() {
    this.showCc = !this.showCc
  }

  sendMail() {
    if (!this.to) {
      alert("Please specify atleast on recipient")
    }
    else {
      let receiver = users.filter(item => item.userName == this.to)
      let subject = this.subject;
      if (receiver.length) {
        this.status = "Success"
        this.alertText = "Mail sent"
        if (!subject) {
          subject = "(no subject)"
        }
        let mail = {
          senderId: this.mailService.userId,
          receiverId: receiver[0].id,
          subject: this.subject,
          body: this.message,
          isRead: 0,
          time: new Date()
        }
        this.mailService.sendMail(mail)
      }

      else {
        this.status = "Error"
        this.alertText = "Mail id not found"
      }
      this.showAlert = true
      setTimeout(() => {
        this.closeAlert()
      }, 1000)
    }
  }

  closeAlert = () => {
    this.showAlert = false
  }

}
