from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Climb(BaseModel):
    id: str 
    munro: str
    date: datetime = datetime.now()
    account: str
    duration: Optional[str]
    difficulty: Optional[int]
    weather: Optional[str]
    notes: Optional[str]


class ClimbsList(BaseModel):
    climbs: Optional[List[Climb]]

