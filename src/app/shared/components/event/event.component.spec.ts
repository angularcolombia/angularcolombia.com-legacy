import { AngularFireDatabase } from 'angularfire2/database';
import { AuthenticationService } from './../../../core/services/authentication.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';

class mockAuthenticationService {}
class mockAngularFireDatabase {}
describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponent],
      providers: [
        {provide: AuthenticationService, useClass: mockAuthenticationService},
        {provide: AngularFireDatabase, useClass: mockAngularFireDatabase}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
