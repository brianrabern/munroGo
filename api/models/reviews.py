from pydantic import BaseModel
from typing import List
from datetime import datetime


class ReviewParams(BaseModel):
    munro_id: str
    comment: str
    rating: int
    date: datetime = datetime.now()
    account_id: str



class Review(ReviewParams):
    id: str


class ReviewsList(BaseModel):
    reviews: List[Review]
