import { AuthenticationService } from './../../../core/services/authentication.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-missing-user-data',
  templateUrl: './missing-user-data.component.html',
  styleUrls: ['./missing-user-data.component.styl']
})
export class MissingUserDataComponent implements OnInit {
  document: {type: string; number: string} = {type: 'cc', number: ''};
  userData = {};
  user;

  @Input() userStoredData;

  constructor(
    private authenticationService: AuthenticationService,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.authenticationService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['userStoredData']) {
      if(changes['userStoredData'].currentValue) {
        this.userData = changes['userStoredData'].currentValue;
      }
    }
  }

  public setUserDocument() {
    const userDataRef: firebase.database.Reference = this.angularFireDatabase.app.database().ref(`/users/${this.user.uid}`);
    userDataRef.update({
      document: this.document.type,
      documentType: this.document.number
    });
    this.userData = {type: this.document.type, document: this.document.number};
  }

  private setUserMissingData() {

  }
}
