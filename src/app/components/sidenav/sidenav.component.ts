import { Component } from '@angular/core';
import { ApiService, LayoutService, StateService } from '../../services';

@Component({
    moduleId: module.id,
    selector: 'app-sidenav',
    template: `
        <nav>
            app-sidenav
        </nav>
    `
})
export class AppSidenavComponent {

    constructor(
        public layout: LayoutService,
        public api: ApiService,
        private state: StateService,
    ) {
    }

}
