import os
import pymongo

MONGO_URL = os.environ.get("MONGO_URL", "TEST")
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client["munros"]
        return db[self.COLLECTION]
