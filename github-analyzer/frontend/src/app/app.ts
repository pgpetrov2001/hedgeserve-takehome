import { Component, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GithubUserModel } from './github-user/github-user.model';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { GithubUser } from './github-user/github-user';
import { Github } from './github';
import { Search } from './search/search';
import { toObservable } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, GithubUser, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

    githubUsername = signal('');
    userData = signal<GithubUserModel | null>(null);
    error = signal<string | null>(null);
    private username$ = toObservable(this.githubUsername);

    constructor(private readonly githubService: Github) {
      this.username$
        .pipe(
          filter((username) => !!username),
          switchMap((username) => this.githubService.getUser(username).pipe(
            catchError((err: Error) => {
              this.userData.set(null);
              this.error.set(err.message);
              return EMPTY;
            })
          )),
        )
        .subscribe((user) => {
          this.error.set(null);
          this.userData.set(user);
        })
    }

    search(username: string) {
      this.githubUsername.set(username);
    }
}
