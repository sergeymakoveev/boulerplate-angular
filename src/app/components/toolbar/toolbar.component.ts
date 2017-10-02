import { Component } from '@angular/core';

import * as R from 'ramda';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import {
    LayoutService,
    StateService,
    // PermisionService,
    ApiService,
} from '../../services';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class AppToolbarComponent {

    constructor(
        private activatedRoute: ActivatedRoute,
        public layout: LayoutService,
        // private permision: PermisionService,
        private router: Router,
        private state: StateService,
    ) {
    }

}
