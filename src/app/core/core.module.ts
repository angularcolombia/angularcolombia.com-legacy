import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './services/authentication.service';
import { MeetupService } from './services/meetup.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    AuthenticationService,
    MeetupService
  ],
  declarations: []
})
export class CoreModule { }
