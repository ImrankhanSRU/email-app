import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  userId;
  emails;
  showComposeMail = false
  count = {inbox: 0, drafts: 7}
  constructor() {
    this.userId = (localStorage.getItem('loggedInUserId'));
    this.emails = JSON.parse(localStorage.getItem('mails')).filter(item => item.receiverId == this.userId);
    console.log(this.userId)
    this.count.inbox = this.emails.filter(item => !item.isRead).length;
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

}
