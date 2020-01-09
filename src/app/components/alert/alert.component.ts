import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input()
  public alertData;
  @Output()
  public closeAlert = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  closeAlertMessage = () => {
    this.closeAlert.emit(false)
  }

}
