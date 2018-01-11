import { TestBed, inject } from '@angular/core/testing';

import { MeetupService } from './meetup.service';

describe('MeetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetupService]
    });
  });

  it('should be created', inject([MeetupService], (service: MeetupService) => {
    expect(service).toBeTruthy();
  }));
});
