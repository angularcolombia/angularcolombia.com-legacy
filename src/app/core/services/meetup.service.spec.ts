import { TestBed, inject } from '@angular/core/testing';

import { MeetupService } from './meetup.service';
import { Observable } from 'rxjs/Observable';

class mockMeetupService {
  getNextEvents() {
    return new Observable(observer => observer.next({response: {a: 2}}));
  }
}

describe('MeetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: MeetupService, useClass: mockMeetupService}]
    });
  });

  it('should be created', inject([MeetupService], (service: MeetupService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should receive a response object and process it', inject([MeetupService], (service: MeetupService) => {
    service.getNextEvents().subscribe(data => {
      expect(data).toEqual({response: {a:2}});
    })
  }));

});