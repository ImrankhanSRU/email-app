import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/inbox-service/mail.service'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private mailService: MailService) { }
  ngOnInit() {
  }

}
