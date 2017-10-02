import * as R from 'ramda';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserResponseInterface } from './index';


@Injectable()
export class StateService {
    private state = {
        user$: new BehaviorSubject(false),
        company$: new BehaviorSubject(false)
    };

    get user$(): BehaviorSubject<UserResponseInterface|{}> {
        return this.state.user$;
    }

    get user(): UserResponseInterface|{} {
        return this.user$.getValue();
    }

}
