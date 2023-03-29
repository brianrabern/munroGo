from pydantic import BaseModel
from queries.client import Queries
from jwtdown_fastapi.authentication import Token
from typing import List, Optional
from bson import ObjectId


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str
    completed: List = []
    rank: str = "Beginner"
    climbed: int = 0
    miles: float = 0

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


class AccountQueries(Queries):
    COLLECTION = "accounts"

    def create(self, info: AccountIn, hashed_password: str):
        account = info.dict()
        account["hashed_password"] = hashed_password
        if self.get(account["username"]):
            raise DuplicateAccountError
        self.collection.insert_one(account)
        account["id"] = str(account["_id"])
        return AccountOutWithPassword(**account)

    def get(self, username: str):
        result = self.collection.find_one({"username": username})
        if result is None:
            return None
        result["id"] = str(result["_id"])
        return AccountOutWithPassword(**result)

    # def get_dashboard(self, username: str):
    #     result = self.collection.find_one({"username": username})
    #     if result is None:
    #         return None
    #     result["id"] = str(result["_id"])
    #     return User(**result)

    # def get_user(self, account_id: str) -> User:
    #     user = self.collection.find_one({"_id": ObjectId(account_id)})
    #     user["id"] = str(user["_id"])
    #     return User(**user)
