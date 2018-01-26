import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

class mockAngularFireAuth {
  authState = new Observable(observer => observer.next());
}

class mockAngularFireDatabase {}

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        {provide: AngularFireAuth, useClass: mockAngularFireAuth},
        {provide: AngularFireDatabase, useClass: mockAngularFireDatabase}
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
