import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-layout',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <app-toolbar></app-toolbar>
        <router-outlet></router-outlet>
    `
})
export class AppLayoutComponent {}
