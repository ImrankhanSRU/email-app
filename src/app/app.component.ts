import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'email-app';
  constructor(private router: Router) { }
  ngOnInit() {
    let mails = []
    if (!localStorage.getItem('inboxMails')) {
      mails = [{ id: 1, senderId: 2, receiverId: 1, subject: "Testing mail", body: "This is a mail", isRead: 0, time: new Date() }]
      mails[0].isRead = 1
      localStorage.setItem("inboxMails", JSON.stringify(mails))
      localStorage.setItem('sentMails', JSON.stringify(mails))
    }
    if (localStorage.getItem('loggedUserId')) {
      this.router.navigate(['/dashboard'])
    }
  }
}
