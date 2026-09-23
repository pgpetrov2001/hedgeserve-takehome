import { Component, input } from '@angular/core';
import { GithubUserModel } from './github-user.model';

@Component({
  selector: 'app-github-user',
  imports: [],
  templateUrl: './github-user.html',
  styleUrl: './github-user.css',
})
export class GithubUser {
 userData = input.required<GithubUserModel>(); 
}
