import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {
  

  private _user: firebase.User;
  
    constructor(public angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) {
      angularFireAuth.authState.subscribe(user => {
        console.log(user);
        this.user = user});  
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
  
    signInWithGoogle(): firebase.Promise<any> {
      return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(response => {
          this.angularFireDatabase.object(`/users/${response.user.uid}`)
            .subscribe(user => {
              if (!user.$exists()) {
                let {displayName, email, emailVerified, photoURL, uid} = response.user;
                this.angularFireDatabase.object(`/users/${response.user.uid}`).set({
                  displayName,
                  email,
                  emailVerified,
                  photoURL,
                  uid
                })
              }
            });
        })
        .catch(err => {
          console.error('Auth error');
        });
    }
  
    signOut(): void {
      this.angularFireAuth.auth.signOut();
    }
  
}
