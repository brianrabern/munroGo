from queries.client import Queries

# import csv
from models import Munro, MunroParams
from bson import ObjectId

# from bson.objectid import ObjectId
from typing import List


class MunrosQueries(Queries):
    COLLECTION = "munros"

    def get_all(self) -> List[Munro]:
        munros = []
        for munro in self.collection.find():
            munro["id"] = str(munro["_id"])
            munros.append(Munro(**munro))
        return munros

    def get_one(self, munro_id: str) -> Munro:
        munro = self.collection.find_one({"_id": ObjectId(munro_id)})
        munro["id"] = str(munro["_id"])
        return Munro(**munro)

    # def get(self, username: str):
    #     result = self.collection.find_one({"username": username})
    #     if result is None:
    #         return None
    #     result["id"] = str(result["_id"])
    #     return AccountOutWithPassword(**result)

    # def seed_database(self, params_list: List[MunroParams]) -> List[Munro]:

    #     csvFile = open("munroData.csv", "r")
    #     munro_reader = csv.DictReader(csvFile)

    #     munro_list = []

    #     for dct in map(dict, munro_reader):
    #         clean_dct = {k.strip(): v.strip() for k, v in dct.items()}
    #         clean_dct["reviews"] = []
    #         munro_list.append(clean_dct)

    #     result = self.collection.insert_many(munro_list)
    #     inserted_ids = [str(id_) for id_ in result.inserted_ids]

    #     x = len(result.inserted_ids)
    #     print(f"Guid yin! Ye've addit {x} munros tae yer croun!")

    #     return inserted_ids
