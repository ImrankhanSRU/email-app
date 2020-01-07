import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  userId;
  emails;
  showComposeMail = false
  count = {inbox: 0, drafts: 7}
  constructor() {
<<<<<<< HEAD:src/app/services/inbox-service/mail.service.ts
    this.userId = (localStorage.getItem('loggedInUserId'))
    this.emails = JSON.parse(localStorage.getItem('mails')).filter(item => item.receiverId == this.userId)
    this.count.inbox = this.emails.filter(item => !item.isRead).length
=======
    this.userId = (localStorage.getItem('loggedInUserId'));
    this.emails = JSON.parse(localStorage.getItem('mails')).filter(item => item.receiverId == this.userId);
    console.log(this.userId)
    this.count.inbox = this.emails.filter(item => !item.isRead).length;
>>>>>>> 89a54cf82a7ee8aa3fa13f4cb5414ab2837905c8:src/app/services/inbox-service/inbox.service.ts
  }

  getEmails = () => {

    return this.emails
  }

  getUnReadCount = () => {
    return this.emails.filter(item => !item.isRead).length
  }

  popupComposeMail = () => {
    this.showComposeMail = true
  }

  hideComposeMail = () => {
    this.showComposeMail = false
  }

  decreaseUnReadCount = (index) => {
    localStorage.setItem('mails', JSON.stringify(this.emails))
    if (this.count.inbox && !this.emails[index].isRead) {
      this.emails[index].isRead = 1
      this.count.inbox--;
    }
  }

  sendMail = (data) => {
    this.emails.push(data)
    localStorage.setItem('mails', JSON.stringify(this.emails))
  }

}
