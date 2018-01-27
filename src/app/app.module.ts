import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { RoutingModule } from './routing.module';
import { SharedModule } from "./components/shared/shared.module";
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* AngularFire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* Modules related to Google analytics*/
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

/* from angular material*/
import { MaterialModule } from './material.module';
/* from angular flex layout*/
import { FlexLayoutModule } from "@angular/flex-layout";
/* page components*/
import { HomePageComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { EventsPageComponent } from './pages/events/events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { RelativeDatePipe } from './core/pipes/relative-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NotFoundPageComponent,
    EventsPageComponent,
    EventDetailComponent,
    RelativeDatePipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule,
    BrowserAnimationsModule,
    /*from angular flex layout*/
    FlexLayoutModule,
    /*from angular material*/
    MaterialModule,
    /*from angular modules related to google analytics*/
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
