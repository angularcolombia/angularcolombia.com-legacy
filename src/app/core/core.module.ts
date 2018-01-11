import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { MeetupService } from '../services/meetup.service';
import { HttpClientModule } from '@angular/common/http';

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
