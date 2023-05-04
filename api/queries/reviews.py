from queries.client import Queries
from models.reviews import Review, ReviewParams
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

    def create_one(
        self, account_id: str, munro_id: str, review: ReviewParams
    ) -> Review:
        review_dict = review.dict()
        review_dict["account_id"] = account_id
        review_dict["munro_id"] = munro_id
        self.collection.insert_one(review_dict)
        review_dict["id"] = str(review_dict["_id"])
        return Review(**review_dict)

    def update_review(
        self, review_id: str, review_params: ReviewParams
    ) -> Review:
        self.collection.update_one(
            {"_id": ObjectId(review_id)}, {"$set": review_params.dict()}
        )
        review = self.collection.find_one({"_id": ObjectId(review_id)})
        review["id"] = str(review["_id"])
        return Review(**review)

    def delete_one(self, review_id: str) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(review_id)})
        return result.deleted_count == 1
