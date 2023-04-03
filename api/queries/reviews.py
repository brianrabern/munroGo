from queries.client import Queries

from models.reviews import Review, ReviewsList
from bson import ObjectId
from typing import List


class ReviewsQueries(Queries):
    COLLECTION = "reviews"

    def get_all(self) -> ReviewsList:
        reviews = []
        for review in self.collection.find():
            review["id"] = str(review["_id"])
            reviews.append(Review(**review))
        return reviews

    def get_one(self, climb_id: str) -> Review:
        review = self.collection.find_one({"_id": ObjectId(climb_id)})
        review["id"] = str(review["_id"])
        return Review(**review)

    def create_one(self, review: dict) -> Review:
        self.collection.insert_one(review)
        review["id"] = str(review["_id"])
        return Review(**review)
    
    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1