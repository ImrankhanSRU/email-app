import { Component, OnInit } from '@angular/core';
import { folders, categories, labels } from '../mockData.json'
import { MailService } from '../../services/inbox-service/mail.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  folders;
  emails;
  categories;
  show = false
  labels;
  constructor(private mailService : MailService) { }

  ngOnInit() {
    let mails = [{senderId: 1, receiverId: 2, subject: "Testing mail", body: "This is a mail", isRead: 0, time: new Date()}]
    localStorage.setItem("mails", JSON.stringify(mails))
    this.folders = folders
    this.categories = categories
    this.labels = labels
  }

  toggleComposeMail = () => {
    this.mailService.popupComposeMail()
  }

  
  

}