from pydantic import BaseModel
from queries.client import Queries
from jwtdown_fastapi.authentication import Token


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    username: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


class AccountQueries(Queries):
    def get(self, username: str) -> AccountOutWithPassword:
        pass

    def create(
        self, info: AccountIn, hashed_passowrd: str
    ) -> AccountOutWithPassword:
        pass
