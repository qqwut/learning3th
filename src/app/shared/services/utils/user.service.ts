import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { User } from '../../../service/models/user';
import * as jwt_decode from "jwt-decode";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

@Injectable()
export class userService {
	observableItems: Observable<User[]>;
	profile: User[] = [];
	selectedItem: User[] = [];
	errorMessage: string;
	display: any;

	constructor(
		private http: Http
	) {
		// this.observableItems = this.http.get('/api/auth').pipe(map((res: Response) => res.json()));
		// this.observableItems.subscribe(
		// 	data => {
		// 		let token = localStorage.getItem('Authorization');
		// 		let profile = jwt_decode(token);
		// 		this.profile = [];
		// 		this.profile.push(profile);
		// 	},
		// 	error => this.errorMessage = <any>error);
	}

	getSelectedItems(): User[] {
		return this.selectedItem;
	}

	addItem(id: number) {

	}

	setUser(data) {
		this.clearUser();
		this.profile.push(data);
		this.selectedItem.push(data);

	}

	clearUser() {
		this.profile.forEach((element) => {
			this.profile.splice(0, 1);
		});
		for (let i = 0; i < this.selectedItem.length; i++) {
			this.selectedItem.splice(0, 1);
		}
	}

}