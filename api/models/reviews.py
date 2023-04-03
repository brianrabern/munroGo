from pydantic import BaseModel
from typing import List
from datetime import datetime


class Review(BaseModel):
    id: str
    comment: str
    rating: int
    date: datetime = datetime.now()
    account: str

class ReviewsList(BaseModel):
    reviews: List[Review]