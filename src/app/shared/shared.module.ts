import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { EventComponent } from './components/event/event.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { MissingUserDataComponent } from './components/missing-user-data/missing-user-data.component';
import { AttendeesListComponent } from './components/attendees-list/attendees-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    EventComponent,
    RsvpComponent,
    MissingUserDataComponent,
    AttendeesListComponent,
    
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    EventComponent,
    RsvpComponent,
    MissingUserDataComponent,
    AttendeesListComponent
  ]
})
export class SharedModule { }
