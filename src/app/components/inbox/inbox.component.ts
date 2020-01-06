import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../services/inbox-service/inbox.service'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private inboxService: InboxService) { }
  ngOnInit() {
  }

}
