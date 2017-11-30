import { AuthenticationService } from './../../../core/services/authentication.service';
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

  user;
  isScroll: boolean;


  constructor(private authenticationService: AuthenticationService) { }

  login() {
    return this.authenticationService.signInWithGoogle()
  }

  

  logout() {
    this.authenticationService.signOut();
    this.user = null;
  }

  ngOnInit() {
    this.authenticationService.user$.subscribe(user => {
      this.user = user      
    });
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
      if(document.documentElement.scrollTop > 100){
        this.isScroll = true;
      }else {
        this.isScroll = false;
      }
    };

}
