import { Component, input } from '@angular/core';
import { GithubRepoModel } from './github-repo.model';
import { LanguageIcon } from '../language-icon/language-icon';

@Component({
  selector: 'app-github-repo',
  imports: [LanguageIcon],
  templateUrl: './github-repo.html',
  styleUrl: './github-repo.css',
})
export class GithubRepo {
  repoData = input.required<GithubRepoModel>();
}
