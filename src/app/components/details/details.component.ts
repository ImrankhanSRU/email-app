import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output()
  sendMail = new EventEmitter<any>();
  constructor(private mailService: MailService) { }

  ngOnInit() {

    this.folders = folders
    this.categories = categories
    this.labels = labels
  }

  toggleComposeMail = () => {
    this.mailService.popupComposeMail()
  }

  goToSendMails = (name) => {
    if (name == "Send Mail") {
      this.sendMail.emit("Sent Mails");
    }
    else if (name == "Inbox") {
      this.sendMail.emit("Inbox");
    }
  }


}
