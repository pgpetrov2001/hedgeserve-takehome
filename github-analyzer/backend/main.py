from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from github_api import get_user_data, get_user_repos
from github_user import GitHubUser

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/user")
def get_user(username: str):
    """
    Fetch the user with his information.
    """
    user_data = get_user_data(username)
    if user_data is None:
        raise HTTPException(404, detail=f"User with username {username} not found.")
    repos = get_user_repos(username)
    user = GitHubUser(user_data=user_data, repos=repos)
    return user.serialize()
