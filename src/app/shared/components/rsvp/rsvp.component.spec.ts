import { AngularFireDatabase } from 'angularfire2/database';
import { AuthenticationService } from './../../../core/services/authentication.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpComponent } from './rsvp.component';

class mockAngularFireDatabase {}
class mockAuthenticationService {}

describe('RsvpComponent', () => {
  let component: RsvpComponent;
  let fixture: ComponentFixture<RsvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpComponent ],
      providers: [
        { provide: AngularFireDatabase, useClass: mockAngularFireDatabase },
        { provide: AuthenticationService, useClass: mockAuthenticationService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
