import { GithubRepoModel } from "./github-repo.model";

export type GithubUserModel = {
    id: number;
    login: string;
    name: string | null;
    html_url: string;
    repos_url: string;
    followers: number;
    public_repos: number;
    company: string | null;
    created_at: string;
    reposList: GithubRepoModel[];
    mostUsedLanguage: string | null;
};