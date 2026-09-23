from collections import defaultdict
from typing import Any

from schemas import GithubRepoData, GithubUserData


class GitHubUser:
    def __init__(self, user_data: GithubUserData, repos: list[GithubRepoData]):
        self.user = user_data
        self.repos = repos

    def get_most_used_language(self) -> str | None:
        """
        Finds the most used language by the user from all the repos of that user.
        """
        lang_to_repos = defaultdict(int)
        for repo in self.repos:
            lang_to_repos[repo.language] += 1
        if not lang_to_repos:
            return None
        _, lang = max((cnt, lang or "") for lang, cnt in lang_to_repos.items())
        return lang or None

    def serialize(self) -> dict[str, Any]:
        return {
            **self.user.model_dump(),
            "reposList": self.repos,
            "mostUsedLanguage": self.get_most_used_language(),
        }
