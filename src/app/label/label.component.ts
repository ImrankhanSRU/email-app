import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() private text;
  @Input() private type;

  labelColors = {
    unRead: "rgb(251, 160, 48)",
    notification: "#2eb79a",
    documents: "red",
    ad: "blue"
  }

  constructor() { }

  ngOnInit() {
    
  }

}
