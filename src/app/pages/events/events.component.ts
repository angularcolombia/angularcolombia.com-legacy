import { Component, OnInit, OnDestroy } from '@angular/core';
import { MeetupService } from '../../core/services/meetup.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-page-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.styl']
})
export class EventsPageComponent implements OnInit, OnDestroy {

  upcomingEvents: any[];
  pastEvents: any;
  isDataAvailable = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetupService.getAllEvents()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((events) => {
        this.pastEvents = events.filter(item => item.status === 'past');
        this.upcomingEvents = events.filter(item => item.status === 'upcoming');
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
