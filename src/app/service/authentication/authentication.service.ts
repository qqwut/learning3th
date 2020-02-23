import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public token: string;
    constructor(
        private router: Router,
        private http: HttpClient,
        // public userService: userService
    ) {
        // var token = localStorage.getItem('currentUser');
        // if (token != 'undefined' && token != undefined && token != 'null' && token != null) {
        //     this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(token));
        //     let profile = this.currentUserSubject['_value'];
        //     this.currentUser = this.currentUserSubject.asObservable();
        //     let tokenValue = localStorage.getItem('Authorization');
        //     this.refreshToken(profile, tokenValue);
        // } else {
        //     this.currentUserSubject = new BehaviorSubject<User>(JSON.parse("0"));
        //     this.currentUser = this.currentUserSubject.asObservable();
        //     this.router.navigate(['/login']);
        // }
        this.currentUserValue
    }

    // config: any = routeUrl;

    public get currentUserValue(): User {
        var token = localStorage.getItem('currentUser');
        if (token != 'undefined' && token != undefined && token != 'null' && token != null) {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(token));
            let profile = this.currentUserSubject['_value'];
            this.currentUser = this.currentUserSubject.asObservable();
            let tokenValue = localStorage.getItem('Authorization');
            this.refreshToken(profile, tokenValue);
        } else {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse("0"));
            this.currentUser = this.currentUserSubject.asObservable();
        }
        return this.currentUserSubject.value;
    }

    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('Authorization') || '0';
        }
        return this.token;
    }

    login(username: string, password: string) {
        try {
            return this.http.post<any>('/api/auth', { username: username, password: password })
                .pipe(map(result => {
                    if (result.result_header && result.result_header.result_code != 20000) throw result.more_info;
                    let data = result.result_data;
                    this.token = data.token;
                    let profile = jwt_decode(this.token);
                    localStorage.setItem('currentUser', JSON.stringify(profile));
                    localStorage.setItem('Authorization', this.token);
                    this.currentUserSubject.next(profile);
                    return profile;
                }));
        } catch (error) {
            throw error;
        }
    }

    refreshToken(profile: any, token: string) {
        try {
            // let tokenDecode = nJwt.verify(token, 'DFTMockup');
            let tokenDecode = jwt_decode(token);
            localStorage.setItem('currentUser', JSON.stringify(tokenDecode));
            localStorage.setItem('Authorization', token);
            // this.userService.setUser(profile);
            this.currentUserSubject.next(profile);
            return profile;
        } catch (error) {
            throw error;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // localStorage.removeItem('Authorization');
        // localStorage.setItem('cart', JSON.stringify([{ orderDetail: [] }]));
        this.currentUserSubject.next(null);
    }

    getUser(){
        this.currentUserValue
    }
}