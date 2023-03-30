from queries.client import Queries
from bson import ObjectId
from models.accounts import AccountIn, AccountOut, AccountOutWithPassword, DuplicateAccountError


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

    def get_user(self, account_id: str) -> AccountOut:
        user = self.collection.find_one({"_id": ObjectId(account_id)})
        if user is None:
            return None
        user["id"] = str(user["_id"])
        return AccountOut(**user)

    def completed_munro(self, account_id: str, munro_id: str) -> AccountOut:
        user = self.collection.find_one({"_id": ObjectId(account_id)})
        print(user)
        # user["completed"].append(munro_id)
        self.collection.update_one(
            {"_id": ObjectId(account_id)}, {"$push": {"completed": munro_id}}
        )
        user["id"] = str(user["_id"])
        return AccountOut(**user)

