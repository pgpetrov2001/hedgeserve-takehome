from datetime import datetime

from pydantic import BaseModel, RootModel


class GithubUserData(BaseModel):
    id: int
    login: str
    name: str | None = None
    html_url: str
    followers: int
    public_repos: int
    company: str | None = None
    created_at: datetime


class GithubRepoData(BaseModel):
    id: int
    html_url: str
    name: str
    full_name: str
    forks_count: int
    language: str | None = None


class GithubReposResponse(RootModel[list[GithubRepoData]]):
    pass
