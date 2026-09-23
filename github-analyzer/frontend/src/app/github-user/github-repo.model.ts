export type GithubRepoModel = {
    id: number;
    name: string;
    full_name: string;
    forks_count: number;
    language: string | null;
};