import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './authentication.service';
import { TestBed, inject } from '@angular/core/testing';

import { RouteGuardService } from './route-guard.service';

class mockAuthenticationService { }

describe('RouteGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RouteGuardService,
                { provide: AuthenticationService, useClass: mockAuthenticationService }
            ],
            imports: [
                RouterTestingModule
            ]
        });
    });

    it('should be created', inject([RouteGuardService], (service: RouteGuardService) => {
        expect(service).toBeTruthy();
    }));
});