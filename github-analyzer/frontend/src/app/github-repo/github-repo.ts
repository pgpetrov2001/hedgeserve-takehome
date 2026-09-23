import { Component, input } from '@angular/core';
import { GithubRepoModel } from '../github-user/github-repo.model';

@Component({
  selector: 'app-github-repo',
  imports: [],
  templateUrl: './github-repo.html',
  styleUrl: './github-repo.css',
})
export class GithubRepo {
  repoData = input.required<GithubRepoModel>();
}
