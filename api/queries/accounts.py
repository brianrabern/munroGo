from pydantic import BaseModel
from queries.client import Queries
from jwtdown_fastapi.authentication import Token


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries(Queries):
    def get(self, email: str) -> AccountOutWithPassword:
        pass

    def create(
        self, info: AccountIn, hashed_passowrd: str
    ) -> AccountOutWithPassword:
        pass


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str
