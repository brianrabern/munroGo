from queries.client import Queries
from queries.client import Queries

from models.reviews import Review, ReviewsList, ReviewParams
from bson import ObjectId
from typing import List


class ReviewsQueries(Queries):
    COLLECTION = "reviews"

    def get_all_by_munro(self, munro_id: str) -> List[Review]:
        reviews = []
        for review in self.collection.find({"munro_id": munro_id}):
            review["id"] = str(review["_id"])
            reviews.append(Review(**review))
        return reviews


    def get_all_by_account(self, account_id: str) -> List[Review]:
            reviews = []
            for review in self.collection.find({"account_id": account_id}):
                review["id"] = str(review["_id"])
                reviews.append(Review(**review))
            return reviews


    def create_one(self, review: ReviewParams) -> Review:
        self.collection.insert_one(review)
        review["id"] = str(review["_id"])
        return Review(**review)


    def update_review(self, review_id: str, review_params: ReviewParams) -> Review:
        self.collection.update_one({"_id": ObjectId(review_id)}, {"$set": review_params})
        review = self.collection.find_one({"_id": ObjectId(review_id)})
        review["id"] = str(review["_id"])
        return Review(**review)

    def delete_one(self, review_id: str) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(review_id)})
        return result.deleted_count == 1

