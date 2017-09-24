import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) { 

    this.user = angularFireAuth.authState;
  }

  login() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(authResponse => {
      console.log(authResponse);
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
