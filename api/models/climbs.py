from pydantic import BaseModel
from typing import List

# from typing import List, Optional
# from datetime import datetime


class ClimbParams(BaseModel):
    munro_id: str
    account_id: str
    # date: datetime = datetime.now()
    # duration: Optional[str]
    # difficulty: Optional[int]
    # weather: Optional[str]
    # notes: Optional[str]


class Climb(ClimbParams):
    id: str


class ClimbsList(BaseModel):
    climbs: List[Climb]
