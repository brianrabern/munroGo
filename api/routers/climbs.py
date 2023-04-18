from fastapi import APIRouter, Depends
from models.climbs import ClimbsList
from queries.climbs import Climb, ClimbsQueries
from authenticator import authenticator
from datetime import datetime
from pydantic import BaseModel

router = APIRouter()


@router.get("/api/account/climbs/", response_model=ClimbsList, tags=["Climbs"])
def get_climbs_for_account(
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account_id = str(account_data["id"])
    climbs = climbs.get_all_by_account(account_id)
    return {"climbs": climbs}


@router.get("/api/munros/{munro_id}/climbs/", response_model=ClimbsList, tags=["Climbs"])
def get_all_climbs_for_munro(
    munro_id: str,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    climbs = climbs.get_all_by_munro(munro_id=munro_id)

    return {"climbs": climbs}

class testModel(BaseModel):

    munro_id: str
    datetime: str
    duration: str
    difficulty: int
    weather: str
    notes: str

@router.post(
    "/api/munros/{munro_id}/climbs/", response_model=Climb, tags=["Climbs"]
)
# def create_climb(
#     content: testModel
# ):
    # print("TESTING:", **content)
def create_climb(
    content: testModel,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
   
    print(content.munro_id)
    params = {
        "munro_id": content.munro_id,
        "account_id": str(account_data["id"]),
        "duration": content.duration,
        "datetime": content.datetime,
        "difficulty": content.difficulty,
        "weather": content.weather,
        "notes": content.notes,
    }
    print("-----------:", params)
    return climbs.create_one(params)



@router.get(
    "/api/munros/climbs/{climb_id}/", response_model=Climb, tags=["Climbs"]
)
def get_one_climb(
    climb_id: str,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return climbs.get_one(climb_id)


@router.delete(
    "/api/climbs/{climb_id}/", response_model=bool, tags=["Climbs"]
)
def delete_one_climb(
    climb_id: str,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return climbs.delete_one(climb_id)
