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

/*from angular material*/
import { MaterialModule } from './material.module';
/*from angular flex layout*/
import { FlexLayoutModule } from "@angular/flex-layout";
/*page components*/
import { HomePageComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { EventsPageComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NotFoundPageComponent,
    EventsPageComponent
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
	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
