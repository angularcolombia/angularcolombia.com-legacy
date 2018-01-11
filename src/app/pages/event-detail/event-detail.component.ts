import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.styl']
})
export class EventDetailComponent implements OnInit {

  eventId: string;
  eventInfo: any;

  constructor(private activeRoute: ActivatedRoute,
    private meetupService: MeetupService) { }

  ngOnInit() {
    this.eventId = this.activeRoute.snapshot.params['event_id'];
    this.meetupService.getEventDetails(this.eventId)
      .subscribe(event => this.eventInfo = event);
  }

}
