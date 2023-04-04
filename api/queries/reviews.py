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



#     def get_one(self, climb_id: str) -> Review:
#         review = self.collection.find_one({"_id": ObjectId(climb_id)})
#         review["id"] = str(review["_id"])
#         return Review(**review)

    def create_one(self, review: ReviewParams) -> Review:
        self.collection.insert_one(review)
        review["id"] = str(review["_id"])
        return Review(**review)

#     def delete(self, id: str) -> bool:
#         result = self.collection.delete_one({'_id': ObjectId(id)})
#         return result.deleted_count == 1
