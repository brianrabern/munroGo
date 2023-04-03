from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token
from typing import List


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str
    rank: str = "Beginner"
    # climbed: int = 0
    # miles: float = 0


class AccountOut(AccountIn):
    id: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str
