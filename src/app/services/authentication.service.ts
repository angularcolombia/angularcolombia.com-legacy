import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {

  private userSource = new Subject<any>();
  user$ = this.userSource.asObservable();

  private _user: firebase.User;

  constructor(public angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) {
    angularFireAuth.authState.subscribe(user => {
      this.userSource.next(user);
      this.user = user;
    });
  }

  get user(): firebase.User {
    return this._user;
  }

  set user(value: firebase.User) {
    this._user = value;
  }

  get authenticated(): boolean {
    return this._user !== null;
  }

  get id(): string {
    return this.authenticated ? this.user.uid : '';
  }

  signInWithGoogle(): Promise<any> {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => {
        this.userSource.next(response.user);
        this.user = response.user;
        const databaseObject = this.angularFireDatabase.object(`/users/${response.user.uid}`)
        const databaseObjectObservable = databaseObject.snapshotChanges();
        databaseObjectObservable.subscribe(user => {
          if (!user.payload.exists()) {
            let { displayName, email, emailVerified, photoURL, uid } = response.user;
            this.angularFireDatabase.object(`/users/${response.user.uid}`).set({
              displayName,
              email,
              emailVerified,
              photoURL,
              uid
            });
          }
        });
      })
      .catch(err => {
        console.error('Auth error');
      });
  }

  signOut(): void {
    this.angularFireAuth.auth.signOut().then(_ => {
      this.userSource.next(null);
    }).catch(_ => {
      this.userSource.next(null);
    });
  }

}
