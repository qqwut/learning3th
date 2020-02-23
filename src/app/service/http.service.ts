import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';
import { AuthenticationService } from './authentication/authentication.service';
// import { AuthenticationService } from './../module/login/_services';

// import { Observable, of, from } from 'rxjs';
@Injectable()
export class httpServices {
    constructor(
        private authenticationService: AuthenticationService,
        private http: HttpClient,
    ) {

    }

    get(url, params): Promise<any> {
        let token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token,
            }),
            params: params
        };

        return this.http.get(url, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            // debugger
            throw err;
        })
    }

    post(url, data): Promise<any> {
        let token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        // var url = '/api/product/add';
        return this.http.post(url, data, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            // debugger
            throw err;
        })
    }

    put(url, data): Promise<any> {
        let token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put(url, data, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            // debugger
            throw err;
        })
    }

    delete(url): Promise<any> {
        let token = this.authenticationService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.delete(url, httpOptions).toPromise().then(response => {
            return response;
        }).catch((err) => {
            // debugger
            throw err;
        })
    }

    refresh(): Promise<any> {
        // let token = this.authenticationService.getToken();
        const httpOptions = {
            // headers: new HttpHeaders({
            //     'Content-Type': 'application/json',
            //     'Authorization': token
            // })
        };
        var url = '/auth/refresh';
        return this.http.post(url, { id: '' }, httpOptions).toPromise().then(response => {
            if (response['result_code'] == 20000) {
                // this.authenticationService.setToken(response);
            } else {
                // this.authenticationService.removeToken();
            }
            return response;
        }).catch((err) => {
            // debugger
            throw err;
        })
    }
}