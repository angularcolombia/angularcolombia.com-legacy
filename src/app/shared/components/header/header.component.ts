import { environment } from './../../../../environments/environment';
import { MeetupService } from './../../../core/services/meetup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  nextEvent;

  /**
   * @param meetupService {MeetupService} Injection of MeetupService
   */
  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetupService.getNextEvents().subscribe((eventResponse) => {
      const event = eventResponse[0];
      const staticMapsUrl = `https://maps.googleapis.com/maps/api/staticmap`;
      const staticMapsUrlProps = [
        ['center', `${event.venue.lat},${event.venue.lon}`],
        ['zoom', '17'],
        ['markers', `color:red|${event.venue.lat},${event.venue.lon}`],
        ['size', '300x300'],
        ['key', environment.staticMapsKey],
      ].reduce((acc, elem) => acc += encodeURI(`${elem[0]}=${elem[1]}&`), '?');
      
      event.mapPic = staticMapsUrl + staticMapsUrlProps;

      this.nextEvent = event;
    });
  }

}
