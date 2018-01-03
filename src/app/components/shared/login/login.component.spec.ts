import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  const mockAFAuth = {user: null};
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ {provide: AngularFireAuth, useValue: mockAFAuth} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login button when a user is provided by Firebase Auth', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.login').textContent).toContain('Login');
  }));
  
  it('should have a logout button when NO user is provided by Firebase Auth', async(() => {
    
    component.afAuth.authState = new Observable(observer => observer.next({}));

    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.logout').textContent).toContain('Logout');
  }));

});
