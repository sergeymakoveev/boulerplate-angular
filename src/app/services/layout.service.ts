
import { EventEmitter } from '@angular/core';



export class LayoutService {
    private state = {
        coverflow: false,
        sidenav: false,
        onCoverflowToggle: new EventEmitter<boolean>()
    };

    get sidenav() {
        return this.state.sidenav;
    }

    get coverflow() {
        return this.state.coverflow;
    }

    toggleCoverflow(state: boolean = !this.state.coverflow) {
        this.state.coverflow = !!state;
        this.state.onCoverflowToggle.emit(!!state);
    }

    get onCoverflowToggle() {
        return this.state.onCoverflowToggle;
    }

    toggleSidenav(state: boolean = !this.state.sidenav) {
        this.state.sidenav = !!state;
    }
}
