from queries.client import Queries
from models.munros import Munro
from bson import ObjectId
from typing import List
import requests


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

    def get_one_munro_name(self, hillname: str) -> Munro:
        munro = self.collection.find_one({"hillname": hillname})
        munro["id"] = str(munro["_id"])
        return Munro(**munro)

    def create_one(self, munro: dict) -> Munro:
        self.collection.insert_one(munro)
        munro["id"] = str(munro["_id"])
        return Munro(**munro)

    def create_review(self, munro_id: str, review: dict) -> Munro:
        munro = self.collection.find_one({"_id": ObjectId(munro_id)})
        # munro["reviews"].append(review)
        self.collection.update_one(
            {"_id": ObjectId(munro_id)}, {"$push": {"reviews": review}}
        )
        munro["id"] = str(munro["_id"])
        return Munro(**munro)

    def get_weather(self, munro_id: str) -> dict:
        munro = self.get_one(munro_id)
        lat = munro.latitude
        lon = munro.longitude
        key = "74a28f89443c989f6b03c52fea23cb18"  # os.environ["OPEN_WEATHER_API_KEY"]
        url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}"
        data = requests.get(url)
        weather_data = data.json()

        return weather_data
