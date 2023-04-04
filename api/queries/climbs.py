from queries.client import Queries
from models.climbs import ClimbParams, Climb
from typing import List


class ClimbsQueries(Queries):
    COLLECTION = "climbs"

    def get_all_by_account(self, account_id: str) -> List[Climb]:
        climbs = []
        climbs_cursor = self.collection.find({"account_id": account_id})
        for climb in climbs_cursor:
            climb["id"] = str(climb["_id"])
            climbs.append(Climb(**climb))
        return climbs

    def get_all_by_munro(self, munro_id: str) -> List[Climb]:
        climbs = []
        climbs_cursor = self.collection.find({"munro_id": munro_id})
        for climb in climbs_cursor:
            climb["id"] = str(climb["_id"])
            climbs.append(Climb(**climb))
        return climbs

    def create_one(self, climb: ClimbParams) -> Climb:
        self.collection.insert_one(climb)
        climb["id"] = str(climb["_id"])
        return Climb(**climb)

    # def get_one(self, climb_id: str) -> Climb:
    #     climb = self.collection.find_one({"_id": ObjectId(climb_id)})
    #     climb["id"] = str(climb["_id"])
    #     return Climb(**climb)

    # def delete(self, id: str) -> bool:
    #     result = self.collection.delete_one({"_id": ObjectId(id)})
    #     return result.deleted_count == 1
