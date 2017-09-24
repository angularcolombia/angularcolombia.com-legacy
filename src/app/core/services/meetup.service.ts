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
    return this.http.get<any>(environment.meetupApi);
  }
}
