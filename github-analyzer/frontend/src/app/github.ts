import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GithubUserModel } from './github-user/github-user.model';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class Github {

    private apiUrl = 'http://127.0.0.1:8000/api/user';
    private userCache: Map<string, GithubUserModel> = new Map();

    constructor(private http: HttpClient) {}

    getUser(username: string): Observable<GithubUserModel> {
        if (this.userCache.has(username)) {
            return of(this.userCache.get(username)!);
        }
        return this.http.get<GithubUserModel>(`${this.apiUrl}?username=${username}`).pipe(
            tap((userData: GithubUserModel) => {
                this.userCache.set(username, userData);
            }),
            catchError((err: HttpErrorResponse) => {
                if (err.status == 404) {
                    throw new Error(`User with username ${username} not found!`); 
                }
                throw new Error(`Unexpected API error ocurred: ${err.message}`);
            }),
        );
    }
}