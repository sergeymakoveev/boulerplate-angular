import * as R from 'ramda';

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { DICTS } from './app.dicts';
import { LayoutService, StateService } from './services';



@Component({
    selector: 'app-root',
    template: `
        <app-sidenav
            (click)="layout.toggleSidenav(false)"
            [class.show]="layout.sidenav">
        </app-sidenav>
        <app-layout class="{{mainClass}}"></app-layout>
    `
})
export class AppComponent implements OnInit {
    mainClass: string = '';

    public isNewOrFilling: boolean;
    private status: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private Title: Title,
        public layout: LayoutService,
        private state: StateService,
        ) {
    }

    ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .map(route => R.pathOr('', ['value', 'title'], route.data))
            .subscribe(title => this.Title.setTitle(`${DICTS.TITLE}: ${title}`));

    }

}
