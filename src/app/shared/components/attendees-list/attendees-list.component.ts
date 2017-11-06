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
  userAuthenticated = false;
  @Input() eventId;

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  private getAttendees() {
    this.authenticationService.user$.subscribe(user => {
      if(user) {
        this.userAuthenticated = true;
        this.angularFireDatabase.list(`/events/${this.selectedEvent}/attendees`).valueChanges().
          subscribe(attendees => {
            this.attendees = attendees;
          });
      }else {
        this.attendees = [];
        this.userAuthenticated = false;
      }
    })
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
