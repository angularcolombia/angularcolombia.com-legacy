import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { RoutingModule } from './routing.module';
import { SharedModule } from "./components/shared/shared.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* AngularFire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/*from angular material*/
import { MaterialModule } from './material.module';
/*from angular flex layout*/
import { FlexLayoutModule } from "@angular/flex-layout";
/*custom components*/
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
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
