import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../services/inbox-service/inbox.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private inboxService: InboxService) { }

  ngOnInit() {
  }

  toggleSideNav(e) {
    console.log(e)
  }

}
