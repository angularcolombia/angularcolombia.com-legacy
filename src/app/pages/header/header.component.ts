import { Component, OnInit } from '@angular/core';
/*import details for authentication service*/
import { AuthenticationService } from '../../core/services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private authenticationService: AuthenticationService) { }

  login() {
    return this.authenticationService.signInWithGoogle();
  }

  logout() {
    this.authenticationService.signOut();
    this.user = null;
  }

  ngOnInit() {
    this.authenticationService.user$.subscribe(user => this.user = user);
  }

}
