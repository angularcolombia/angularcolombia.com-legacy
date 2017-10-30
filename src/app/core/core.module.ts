import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { MeetupService } from './services/meetup.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MeetupService,
    AuthenticationService,
    UserService
  ],
})
export class CoreModule { }
