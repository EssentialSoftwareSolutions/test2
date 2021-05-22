import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
    const body = new HttpParams()
    .set(`email`, username)
    .set(`password`, password);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post<any>(`${environment.apiUrl}/authenticate`,body.toString(),{headers: headers})
           .pipe(map(user => {
                // store user basic details in local storage to keep user logged in between page refreshes
             if (user.status){
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('key', user.token);

                this.currentUserSubject.next(user);
                return user;
             }
             else {
                return null;
             } 
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('key');
        this.currentUserSubject.next(null);
    }
}