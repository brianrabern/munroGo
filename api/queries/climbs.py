from queries.client import Queries

from models.climbs import Climb, ClimbsList
from bson import ObjectId
from typing import List


class ClimbsQueries(Queries):
    COLLECTION = "climbs"

    def get_all(self) -> ClimbsList:
        climbs = []
        for climb in self.collection.find():
            climb["id"] = str(climb["_id"])
            climbs.append(Climb(**climb))
        return 
    
    def get_all_by_account(self, account_id:str) -> ClimbsList:
        climbs = []
        for climb in self.collection.find({"_id": ObjectId(account_id)}):
            climb["id"] = str(climb["_id"])
            climbs.append(Climb(**climb))
        return climbs

    def get_one(self, climb_id: str) -> Climb:
        climb = self.collection.find_one({"_id": ObjectId(climb_id)})
        climb["id"] = str(climb["_id"])
        return Climb(**climb)

    def create_one(self, climb: dict) -> Climb:
        self.collection.insert_one(climb)
        climb["id"] = str(climb["_id"])
        return Climb(**climb)
    
    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
    
    