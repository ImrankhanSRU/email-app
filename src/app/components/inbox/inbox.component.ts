import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private mailService: MailService) { }

  public isReadMail = false;
  readMailData = {};
  ngOnInit() {
  }
  passMessageToViewMail(data){
    this.readMailData = data;
    this.isReadMail = true;
  }
  getInboxList(event){
    this.isReadMail = event;
  }
}
