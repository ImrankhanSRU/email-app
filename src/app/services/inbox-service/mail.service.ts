import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  userId;
  emails = [];
  isSideBarCollapse;
  showComposeMail = false
  count = { inbox: 0, drafts: 7 }
  constructor() {
    // let mails = [{senderId: 1, receiverId: 2, subject: "Testing mail", body: "This is a mail", isRead: 0, time: new Date()}]
    // localStorage.setItem("mails", JSON.stringify(mails))
    // this.userId = (localStorage.getItem('loggedInUserId'))
    this.formatEmails()
  }

  formatEmails = () => {
    this.emails = JSON.parse(localStorage.getItem('inboxMails'))
    this.userId = parseInt(localStorage.getItem('loggedUserId'))
    if (this.emails) {
      this.emails = this.emails.filter(item => item.receiverId == this.userId);
      this.count.inbox = this.emails.filter(item => !item.isRead).length;
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
    else {
      this.emails = [];
    }
    this.getSentMails()

  }
  getEmails = () => {
    this.formatEmails()
    return this.emails;
  }

  getUnReadCount = () => {
    return this.emails.filter(item => !item.isRead).length;
  }

  popupComposeMail = () => {
    this.showComposeMail = true;
  }

  hideComposeMail = () => {
    this.showComposeMail = false;
  }

  decreaseUnReadCount = (index) => {

    if (this.count.inbox && !this.emails[index].isRead) {
      this.emails[index].isRead = 1
      this.count.inbox--;
      let allEmails = JSON.parse(localStorage.getItem('inboxMails'))
      if (allEmails) {
        allEmails.map((item, i) => {
          if (item.id == this.emails[index].id) {
            allEmails[i].isRead = 1
          }
        })
      }
      // allEmails[this.emails[index].id - 1].isRead = 1
      localStorage.setItem('inboxMails', JSON.stringify(allEmails))
    }
  }

  sendMail = (data) => {
    let id;
    let preMails = JSON.parse(localStorage.getItem('inboxMails'))
    if (!preMails) {
      preMails = []
      id = 1
      preMails.push(data)
    }
    else {
      id = preMails.length + 1
      preMails.splice(0, 0, data)
    }
    data.id = id
    let cc;
    localStorage.setItem('inboxMails', JSON.stringify(preMails))
    let sentMails = JSON.parse(localStorage.getItem('sentMails'))
    let sendMailData = { ...data }
    sendMailData.isRead = 1
    if (!sentMails) {
      sentMails = []
      sentMails.push(sendMailData)
    }
    else {
      sentMails.splice(0, 0, sendMailData)
    }
    localStorage.setItem('sentMails', JSON.stringify(sentMails))
    this.formatEmails()
  }

  deleteMails = (arr) => {
    let allMails = JSON.parse(localStorage.getItem('inboxMails'))
    arr.map((item, i) => {
      if (item) {
        let index = allMails.findIndex(element => element.id == i);
        allMails.splice(index, 1)
      }
    })
    localStorage.setItem('inboxMails', JSON.stringify(allMails))
    this.formatEmails()
  }

  deleteSentMails = (arr) => {
    let allMails = JSON.parse(localStorage.getItem('sentMails'))
    arr.map((item, i) => {
      if (item) {
        let index = allMails.findIndex(element => element.id == i);
        allMails.splice(index, 1)
      }
    })
    localStorage.setItem('sentMails', JSON.stringify(allMails))
    this.formatEmails()
  }

  getSentMails = () => {
    let allSentMails = JSON.parse(localStorage.getItem('sentMails'))
    if (allSentMails) {
      let sentMails = allSentMails.filter(item => item.senderId == this.userId);

      return sentMails
    }
  }

}
