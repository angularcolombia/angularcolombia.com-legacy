import { EventComponent } from './../event/event.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import { MeetupService } from './../../../core/services/meetup.service';
import { Observable } from 'rxjs/Observable';

const mockResponse = [{"created":1506012660000,"id":"243551995","name":"test event title","status":"upcoming","time":1506751200000,"updated":1506012688000,"utc_offset":-18000000,"waitlist_count":0,"yes_rsvp_count":1,"venue":{"id":24547706,"name":"Edificio Microsoft Colombia","lat":4.673872947692871,"lon":-74.04839324951172,"repinned":false,"address_1":"Calle 92 No. 11 - 51","city":"Bogotá","country":"co","localized_country_name":"Colombia"},"group":{"created":1417366466000,"name":"Angular Colombia","id":18223068,"join_mode":"open","lat":4.630000114440918,"lon":-74.08999633789062,"urlname":"Angular-Colombia","who":"Desarrolladores Angular","localized_location":"Bogotá, Colombia","region":"en_US"},"link":"https://www.meetup.com/Angular-Colombia/events/243551995/","description":"<p><b>Test headline</b></p> <p>Test test</p> <p>adsdsa.</p> <p>\n\n\ndasdasd.</p> <p>\n\n\nasdasdsad.</p> <p>kghkjfdhgjdkfghjfdhgkjdfhgjkdfghfk.</p> <p>adsdasda.</p> <p>\n\n\nPor: test // <a href=\"https://www.te.st/test\">@test</a></p> ","visibility":"public"}]


class mockMeetupService {
  getNextEvents () {
    return new Observable(observer => observer.next(mockResponse));
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let meetupService: MeetupService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: MeetupService, useClass: mockMeetupService},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    meetupService = TestBed.get(MeetupService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call meetup service\'s getNextEvents', async(() => {
    const getNextEventsSpy = spyOn(meetupService, 'getNextEvents').and.callThrough();

    component.ngOnInit();

    expect(getNextEventsSpy).toHaveBeenCalled();

  }));

});
