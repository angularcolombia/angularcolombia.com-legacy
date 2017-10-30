import { AuthenticationService } from './../../../core/services/authentication.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-attendees-list',
  templateUrl: './attendees-list.component.html',
  styleUrls: ['./attendees-list.component.css']
})
export class AttendeesListComponent implements OnInit, OnChanges {

  attendees;
  selectedEvent: number;
  @Input() eventId;

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  private getAttendees() {
    if (this.authenticationService.authenticated) {
      this.angularFireDatabase.list(`/events/${this.selectedEvent}/assistants`).valueChanges().
        subscribe(attendees => {
          this.attendees = attendees;
        });
    }
  }



  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventId']) {
      if (changes['eventId'].currentValue) {
        this.selectedEvent = changes['eventId'].currentValue;
        this.getAttendees();
      }
    }
  }

}
