import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MeetupService {

  constructor(private http: HttpClient) { }

  /**
   * @returns { HttpResponse } The Meetup API's next event data
   */
  public getNextEvents() {
    /*return this.http.get<any>(environment.meetupApi);*/
    return this.http.get<any>(`${environment.meetupApi}/v3/events/next`);
  }

  /**
   * @returns { HttpResponse } The Meetup API's rsvp action
   */
  public rsvp(uid: string, eventId: string | number) {
    return this.http.post<any>(`${environment.functionsUrl}/rsvp`, { uid, eventId });
  }

  /**
  * @returns { HttpResponse } The Meetup API's all event data
  */
  public getAllEvents() {
    return this.http.get<any>(`${environment.meetupApi}/v3/events`);
  }

  /**
  * @returns { HttpResponse } The Meetup API's selected event data using event id.
  */
  public getEventDetails(eventId: string) {
    return this.http.get<any>(`${environment.meetupApi}/v3/events/${eventId}`);
  }

  /**
  * @returns { HttpResponse } The Meetup API's selected event data using event id.
  */
  public getEventHosts(eventId: string) {
    return this.http.get<any>(`${environment.meetupApi}/v3/events/${eventId}/hosts`);
  }

}
