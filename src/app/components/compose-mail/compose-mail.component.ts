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

  to;
  subject;
  cc;
  showCc = false;
  message;
  isShowAlert = false;
  isShowCompose = true;
  alertData = {
    status: '',
    alertText: ''
  }
  // showCompose = true
  userName;
  constructor(private mailService: MailService) { }

  ngOnInit() {
    let userId = parseInt(localStorage.getItem('loggedUserId'))
    this.userName = users[userId - 1].userName
  }

  hideCompose() {
    this.mailService.hideComposeMail()
  }

  showCcDiv() {
    this.showCc = !this.showCc
  }

  checkConditions() {
    let senderId = parseInt(localStorage.getItem('loggedUserId'))
    if (!this.to) {
      alert("Please specify atleast on recipient")
    }
    else {
      let receiver = users.filter(item => item.userName == this.to)
      let cc = users.filter(item => item.userName == this.cc)
      console.log(cc)
      let subject = this.subject;
      if (receiver.length) {
        if ((!this.showCc) || cc.length) {
          this.alertData = {
            status: "Success",
            alertText: "Mail sent"
          }
          if (!subject) {
            subject = "(no subject)"
          }
          let mail = {
            senderId,
            receiverId: receiver[0].id,
            subject: subject,
            body: this.message,
            isRead: 0,
            time: new Date()
          }
          this.sendMail(mail)
          if (cc.length) {
            let ccMail = {...mail}
            ccMail.receiverId = cc[0].id
          }
        }
        
        else {
          this.alertData = {
            status: "Error",
            alertText: "CC Mail id not found"
          }
          this.isShowAlert = true
        }
      }

      else {

        this.alertData = {
          status: "Error",
          alertText: "Receiver Mail id not found"
        }
        this.isShowAlert = true

      }

    }

  }

  sendMail = (mail) => {
    this.mailService.sendMail(mail)
    this.isShowAlert = true
    this.isShowCompose = false
    setTimeout(() => {
      this.closeAlert(false)
      this.mailService.showComposeMail = false
    }, 2000);
  }


  closeAlert = (e) => {
    this.isShowAlert = e
  }

}
