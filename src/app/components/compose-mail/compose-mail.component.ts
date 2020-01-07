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
  @ViewChild('alert' ,{static: true}) public btn: HTMLButtonElement;

  to;
  subject;
  cc;
  showCc = false;
  message;
  showAlert = false;
  status = "Success"
  alertText = "Mail sent"
  // showCompose = true

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  hideCompose(e) {
    this.mailService.hideComposeMail()
  }

  showCcDiv() {
    this.showCc = !this.showCc
  }

  sendMail() {
    let mail = {
      senderId: this.mailService.userId
    }
    let receiver = users.filter(item => item.userName == this.to)
    if (receiver.length) {
      this.status = "Success"
      this.alertText = "Mail sent"
    }

    else {
      this.status = "Error"
      this.alertText = "Mail id not found"
    }
    this.showAlert = true
    setTimeout(() => {
      this.closeAlert()
    }, 2000);
  }

  closeAlert = () => {
    console.log(this.btn)
    this.showAlert = false;
  }

}
