import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  goBacktoMailList(){
    this.goBackToList.emit(false);
  }
}
