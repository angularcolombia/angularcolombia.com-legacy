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

  constructor(private authenticationService: AuthenticationService, private angularFireDatabase: AngularFireDatabase) { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes['eventId']) {
      this.selectedEvent = changes['eventId'].currentValue;
    }
  }
  
  going() {
    if(this.selectedEvent) {
      const {uid, email, displayName, photoURL} = this.authenticationService.user;
      this.angularFireDatabase.list(`/events/${this.selectedEvent}/assistants`)
      .push({uid, email, displayName, photoURL, timeStamp: firebase.database.ServerValue.TIMESTAMP});
    }
  }

}
