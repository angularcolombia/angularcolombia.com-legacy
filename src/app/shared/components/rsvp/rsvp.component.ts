import { Router } from '@angular/router';
import { MeetupService } from './../../../core/services/meetup.service';
import { UserService } from './../../../core/services/user.service';
import { AuthenticationService } from './../../../core/services/authentication.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.styl']
})
export class RsvpComponent implements OnInit, OnChanges {
  @Input() eventId: number;
  selectedEvent: number;
  userDataRef: firebase.database.Reference;
  userStoredData;
  userHasDocument: boolean;
  rsvpd: boolean;
  userAuthenticated = false;

  constructor(
    private authenticationService: AuthenticationService,
    private angularFireDatabase: AngularFireDatabase,
    private userService: UserService,
    private meetupService: MeetupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.user$.subscribe(user => {
      if(user) {
        this.userAuthenticated = true;
        this.userDataRef = this.angularFireDatabase.app.database().ref(`/users/${user.uid}`);
        
        this.userDataRef.on('value', snapshot => {
          this.userStoredData = snapshot.val();
          const eventsObj = this.userStoredData.events;
          if(this.userStoredData.events) {
            this.rsvpd = Object.keys(eventsObj).filter(eventKey => eventsObj[eventKey].eventId === this.eventId).length > 0;
          }
        });

        this.userService.hasDocumentRegistered(user.uid).subscribe(response => {
          this.userHasDocument = response.exists;
        }, err => {
          this.userHasDocument = false;
        });
      }else {
        this.userAuthenticated = false;
      }
    });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes['eventId']) {
      this.selectedEvent = changes['eventId'].currentValue;
    }
  }
  
  going() {
    if(this.userAuthenticated) {
      // invocar lógica de login
    }

    if(this.selectedEvent) {
      this.meetupService.rsvp(this.authenticationService.user.uid, this.selectedEvent).subscribe(response => {
        this.rsvpd = response.rsvpd;
      });
    }
  }

}
