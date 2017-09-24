import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.styl']
})
export class EventComponent implements OnInit {
  @Input() public eventData;

  constructor() { }

  ngOnInit() {
  }

}
