import { Component, input } from '@angular/core';
import { GithubUserModel } from './github-user.model';
import { GithubRepo } from '../github-repo/github-repo';
import { LanguageIcon } from '../language-icon/language-icon';

@Component({
  selector: 'app-github-user',
  imports: [GithubRepo, LanguageIcon],
  templateUrl: './github-user.html',
  styleUrl: './github-user.css',
})
export class GithubUser {
 userData = input.required<GithubUserModel>(); 
}
