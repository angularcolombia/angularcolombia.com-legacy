import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { RoutingModule } from './routing.module';
import { SharedModule } from "./components/shared/shared.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*from angular material*/
import { MaterialModule } from './material.module';
/*from angular flex layout*/
import { FlexLayoutModule } from "@angular/flex-layout";
/*custom components*/
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
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
