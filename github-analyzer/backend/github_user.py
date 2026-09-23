from collections import defaultdict
from typing import Any

from schemas import GithubRepoData, GithubUserData


class GitHubUser:
    def __init__(self, user_data: GithubUserData, repos: list[GithubRepoData]):
        self.user = user_data
        self.repos = repos
        self.lang_to_repos = defaultdict(int)
        for repo in self.repos:
            if repo.language:
                self.lang_to_repos[repo.language] += 1

    def get_most_used_language(self) -> str | None:
        """
        Finds the most used language by the user from all the repos of that user.
        """
        if not self.lang_to_repos:
            return None
        _, lang = max((cnt, lang or "") for lang, cnt in self.lang_to_repos.items())
        return lang or None

    def get_all_languages(self) -> list[str]:
        """
        Return a list of all languages used across all repos belonging to the user.
        """
        return sorted(
            (lang for lang in self.lang_to_repos if lang),
            key=lambda lang: self.lang_to_repos[lang],
            reverse=True,
        )

    def serialize(self) -> dict[str, Any]:
        return {
            **self.user.model_dump(),
            "reposList": self.repos,
            "mostUsedLanguage": self.get_most_used_language(),
            "allLanguages": self.get_all_languages(),
        }
