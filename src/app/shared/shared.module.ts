import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { EventComponent } from './components/event/event.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    EventComponent,
    RsvpComponent
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    EventComponent,
    RsvpComponent
  ]
})
export class SharedModule { }
