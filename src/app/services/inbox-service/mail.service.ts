import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  userId = 2;
  emails = [];
  showComposeMail = false
  count = {inbox: 0, drafts: 7}
  constructor() {
    let mails = [{senderId: 1, receiverId: 2, subject: "Testing mail", SenderEmail:"demo@gmail.com", senderName:"Demo",  body: "This is a mail", isRead: 0, time: new Date()},{senderId: 2, receiverId: 2, subject: "Testing mail 1", SenderEmail:"demo1@gmail.com", senderName:"Demo1",  body: "This is a mail1", isRead: 0, time: new Date()}];
    localStorage.setItem("mails", JSON.stringify(mails));
    // this.userId = (localStorage.getItem('loggedInUserId'))
    this.emails = JSON.parse(localStorage.getItem('mails'));
    if(this.emails) {
    this.emails = this.emails.filter(item => item.receiverId == this.userId);
    this.count.inbox = this.emails.filter(item => !item.isRead).length;
    }
    else {
      this.emails = [];
    }
  }
  getEmails = () => {
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
    localStorage.setItem('mails', JSON.stringify(this.emails));
    if (this.count.inbox && !this.emails[index].isRead) {
      this.emails[index].isRead = 1
      this.count.inbox--;
    }
  }

  sendMail = (data) => {
    this.emails.push(data)
    localStorage.setItem('mails', JSON.stringify(this.emails));
  }

}
