import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
// import {UIModule} from 'ui';

import {AppRoutingModule} from './app-routing.module';

import {
    ApiService,
    AuthService,
    LayoutService,
    StateService
} from './services';

import { AppComponent } from './app.component';
import {
    AppLayoutComponent,
    AppContentComponent,
    AppSidenavComponent,
    AppToolbarComponent,
} from './components';

import {
    Page404Component,
    PageUsersComponent,
    PageMainComponent
} from './pages';

import {
    tcsCurrency,
    tcsUrl,
} from './pipes';

@NgModule({
    declarations: [
        AppComponent,
        AppLayoutComponent,
        AppContentComponent,
        AppSidenavComponent,
        AppToolbarComponent,
        PageMainComponent,
        Page404Component,
        PageUsersComponent,
        tcsCurrency,
        tcsUrl,
    ],
    imports: [
        // UIModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        ApiService,
        AuthService,
        LayoutService,
        StateService,
        // PermisionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
