import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class RouteGuardService implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        return this.authenticationService.angularFireAuth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['']);
                }
            });
    }

}