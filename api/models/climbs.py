from pydantic import BaseModel
from typing import List, Optional

from datetime import datetime


class ClimbParams(BaseModel):
    datetime: datetime
    duration: str
    difficulty: int
    weather: str
    notes: str


class ClimbParamsWithAccount(ClimbParams):
    account_id: str


class ClimbParamsWithAccountWithId(ClimbParamsWithAccount):
    munro_id: str


class Climb(ClimbParamsWithAccountWithId):
    id: str


class ClimbsList(BaseModel):
    climbs: List[Climb]
