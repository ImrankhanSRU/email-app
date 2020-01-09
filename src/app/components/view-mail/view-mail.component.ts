import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { users } from '../mockData.json'
@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.scss']
})
export class ViewMailComponent implements OnInit {
  @Input()
  public viewMailDetails;
  @Output()
  public goBackToList = new EventEmitter<any>();
  public senderName;
  public senderEmail;
  constructor() { }

  ngOnInit() {
    this.senderName = users.filter(item => item.id = this.viewMailDetails.senderId)[0].name
    this.senderEmail = users.filter(item => item.id = this.viewMailDetails.senderId)[0].userName

  }
  goBacktoMailList(){
    this.goBackToList.emit(false);
  }
}
