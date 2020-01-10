import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() public text;
  @Input() public type;

  labelColors = {
    unRead: "rgb(251, 160, 48)",
    notification: "#2eb79a",
    documents: "#EF5463",
    ad: "#09C6C9"
  }

  constructor() { }

  ngOnInit() {
    
  }

}
