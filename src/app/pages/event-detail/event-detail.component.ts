import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetupService } from '../../core/services/meetup.service';
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
  eventHosts: any;
  eventHostsLength: number;
  firstHost: any;
  isDataAvailable = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  /* responsive photo album grid */
  public photoAlbumCols: number = 4;

  constructor(private activeRoute: ActivatedRoute,
    private meetupService: MeetupService) { }

  ngOnInit() {
    this.eventId = this.activeRoute.snapshot.params['event_id'];
    this.meetupService.getEventDetails(this.eventId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((event) => { this.eventInfo = event; this.isDataAvailable = true; });
    this.meetupService.getEventHosts(this.eventId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((eventHosts) => {
        this.eventHosts = eventHosts;
        this.eventHostsLength = eventHosts.length;
        this.firstHost = eventHosts[0]; 
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
