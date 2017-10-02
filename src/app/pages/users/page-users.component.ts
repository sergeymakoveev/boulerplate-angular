import * as R from 'ramda';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/Rx' ;

import {
    ApiService,
    StateService,
} from '../../services';

@Component({
    moduleId: module.id,
    selector: 'page-users[page]',
    templateUrl: 'page-users.component.html',
    styleUrls: ['page-users.component.scss']
})

export class PageUsersComponent implements OnInit {

    content = {
        users: []
    };

    observers = {
        main$: new Observable(),
        filters$: new BehaviorSubject({}),
        sorting$: new BehaviorSubject({}),
        pagination$: new BehaviorSubject({})
    };

    constructor(
        public api: ApiService,
        public state: StateService,
        public router: Router
    ) {

    }

    ngOnInit() {
        const { filters$, sorting$, pagination$ } = this.observers;
        this.observers.main$ = Observable.combineLatest(filters$, sorting$, pagination$);
        this.observers.main$
            .debounceTime(1500)
            .subscribe(([filters, sorting, pagination]) => {
                this.api.users
                    .list({
                        ...sorting,
                        ...pagination,
                        filters
                    })
                    .subscribe(response => {
                        console.warn({ response });
                        this.content.users = response;
                    });
            });
    }

}
