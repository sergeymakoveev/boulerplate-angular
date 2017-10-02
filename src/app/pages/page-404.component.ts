import { Component } from '@angular/core';


@Component({
    template: '<h1>Страница не найдена</h1>',
    styles: [`
        :host {
            display: flex;
            height: 100%;
            justify-content: center;
            flex-direction: column;
        }
        h1 {
            text-align: center;
            padding-bottom: 100px;
        }
    `]
})
export class Page404Component {}
