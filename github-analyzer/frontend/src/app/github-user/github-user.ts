import { Component, input } from '@angular/core';
import { GithubUserModel } from './github-user.model';
import { GithubRepo } from '../github-repo/github-repo';

@Component({
  selector: 'app-github-user',
  imports: [GithubRepo],
  templateUrl: './github-user.html',
  styleUrl: './github-user.css',
})
export class GithubUser {
 userData = input.required<GithubUserModel>(); 
}
