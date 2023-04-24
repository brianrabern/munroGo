from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class ReviewParams(BaseModel):
    comment: str
    rating: int
    full_name: Optional[str]
    date: datetime = datetime.now()


class ReviewParamsWithAccount(ReviewParams):
    account_id: str


class ReviewParamsWithAccountWithId(ReviewParamsWithAccount):
    munro_id: str


class Review(ReviewParamsWithAccountWithId):
    id: str


class ReviewsList(BaseModel):
    reviews: List[Review]
