import * as R from 'ramda';
import UrlParse from 'url-parse';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/zip';

import { Http, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Inject, forwardRef } from '@angular/core';

import {
    StateService,
    ResponseInterface,
    RequestListInterface,
    UserResponseInterface,
    UsersResponseInterface,
} from './index';

const
    BASE = '/api',
    options = (): RequestOptionsArgs => ({
        headers: new Headers({ RedirectMeTo: location.href }),
        withCredentials: true
    }),
    uploaderOptions = () => {
        return R.merge(
            options(),
            {
                headers: new Headers({
                    Accept: 'application/json',
                    enctype: 'multipart/form-data',
                    RedirectMeTo: location.href
                })
            }
        );
    },

    prepare = response => ({
        ...response,
        body: JSON.parse(response._body)
    }),
    prepareSuccess = response =>
        prepare(response).body,
    prepareError = response => {
        const error = prepare(response);
        return (error.status === 401)
            ? location.href = error.body.authorizationUrl
            : Observable.throw(error);
    };


class HttpRequest {

    constructor(public http: Http) {
    }

    get(url: string, params?: {}): Observable<any> {
        return this.http
            .get(url, { ...options(), params })
            .map(prepareSuccess)
            .catch(prepareError)
            .share();
    }

    post(url: string, request: any, customOptions?: any): Observable<any> {
        return this.http
            .post(url, request, customOptions || options())
            .map(prepareSuccess)
            .catch(prepareError)
            .share();
    }

    delete(url: string, params?: {}): Observable<any> {
        return this.http
            .delete(url, {...options(), params})
            .map(prepareSuccess)
            .catch(prepareError)
            .share();
    }

}


@Injectable()
export class ApiService {

    public auth;
    public users;

    constructor(
        http: Http,
        @Inject(forwardRef(() => StateService)) state: StateService
    ) {
        this.auth = new ApiAuth(http);
        this.users = new ApiUsers(http);
    }

}


class ApiAuth extends HttpRequest {

    constructor(http: Http) {
        super(http);
    }

    authorize(): Observable<UserResponseInterface> {
        return this.get(`${BASE}/authorise`);
    }

    logout(): Observable<any> {
        return this.get(`${BASE}/logout`);
    }

}


class ApiUsers extends HttpRequest {

    constructor(http: Http) {
        super(http);
    }

    list(request: RequestListInterface): Observable<UsersResponseInterface> {
        return this.get(`${BASE}/users`, request);
    }

    item(id: number): Observable<UserResponseInterface> {
        return this.get(`${BASE}/users/${id}`);
    }

}
