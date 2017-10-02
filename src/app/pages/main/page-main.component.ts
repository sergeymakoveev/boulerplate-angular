import * as R from 'ramda';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { ApiService, StateService } from '../../services';


@Component({
    moduleId: module.id,
    selector: 'page-main[page]',
    templateUrl: 'page-main.component.html',
    styleUrls: ['page-main.component.scss']
})
export class PageMainComponent {

    constructor(
        public api: ApiService,
        public state: StateService
    ) {
    }

}
