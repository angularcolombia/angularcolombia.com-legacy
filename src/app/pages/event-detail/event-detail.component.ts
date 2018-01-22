import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.styl']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  eventId: string;
  eventInfo: any;
  isDataAvailable = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private activeRoute: ActivatedRoute,
    private meetupService: MeetupService) { }

  ngOnInit() {
    this.eventId = this.activeRoute.snapshot.params['event_id'];
    this.meetupService.getEventDetails(this.eventId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((event) => { this.eventInfo = event; this.isDataAvailable = true; });
    this.meetupService.getEventHosts(this.eventId)
      .takeUntil(this.ngUnsubscribe)
      .do(x => console.log('event hosts', { item: x }))
      .map(data => data.slice(0, 5))
      .subscribe(event => this.eventInfo = event);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
