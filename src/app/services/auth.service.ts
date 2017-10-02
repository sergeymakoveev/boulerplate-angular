import * as R from 'ramda';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Inject, forwardRef } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { ApiService, StateService } from './index';


@Injectable()
export class AuthService implements CanActivate {

    constructor(
        private router: Router,
        @Inject(forwardRef(() => StateService)) private state: StateService,
        private api: ApiService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        routerstate: RouterStateSnapshot
    ): Observable<boolean> {

        const auth$ = this.api.auth.authorize();

        auth$.subscribe(this.state.user$);

        return auth$.map(
            R.both(
                R.is(Object),
                R.complement(R.isEmpty)
            )
        );

    }

}
