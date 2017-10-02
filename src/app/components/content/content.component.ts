import { Component, ElementRef, Renderer, Inject } from '@angular/core';

import { LayoutService } from '../../services';


@Component({
    selector: 'app-content',
    template: '<ng-content></ng-content>'
})
export class AppContentComponent {

    constructor(
        @Inject(ElementRef) private element: ElementRef,
        private renderer: Renderer,
        public layout: LayoutService
    ) {
        this.layout.onCoverflowToggle
            .subscribe( state =>
                this.renderer.setElementClass(this.element.nativeElement, 'halfsize', state)
            );
    }

}
