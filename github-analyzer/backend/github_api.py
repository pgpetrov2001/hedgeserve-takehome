from http import HTTPStatus

import requests
from fastapi import HTTPException
from schemas import GithubRepoData, GithubReposResponse, GithubUserData

BASE_URL = "https://api.github.com"


def get_user_data(username: str) -> GithubUserData | None:
    """
    Gets GitHub user data from the GitHub API

    - username: username of the user you want to fetch data for

    Returns:
    GithubUser | None
    """
    resp = requests.get(f"{BASE_URL}/users/{username}")
    if resp.ok:
        return GithubUserData.model_validate(resp.json())
    elif resp.status_code == 404:
        return None
    elif resp.status_code == 403 and "rate limit exceeded" in resp.text():
        raise HTTPException(
            HTTPStatus.CONFLICT, detail="Rate limit to GitHub API exceeded"
        )
    resp.raise_for_status()


def get_user_repos(username: str) -> list[GithubRepoData]:
    """
    Gets GitHub user repo data from the GitHub API

    - username: username of the user you want to fetch repos for

    Returns:
    list[GithubUser] | None
    """
    per_page = 30
    page = 1
    repos: list[GithubRepoData] = []

    # Read pages from the repos list from the API
    while True:
        resp = requests.get(
            f"{BASE_URL}/users/{username}/repos?per_page={per_page}&page={page}"
        )
        if resp.status_code == 404:
            return None
        if not resp.ok:
            resp.raise_for_status()
        parsed_resp = GithubReposResponse.model_validate(resp.json())
        repos.extend(parsed_resp.root)
        if len(parsed_resp.root) < per_page:
            break
        page += 1

    return repos
