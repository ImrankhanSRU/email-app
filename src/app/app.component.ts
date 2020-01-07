import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'email-app';

  ngOnInit() {
    // let mails = [{senderId: 1, receiverId: 2, subject: "Testing mail", body: "This is a mail", isRead: 0, time: new Date()}]
    // localStorage.setItem("mails", JSON.stringify(mails))
  }
}
