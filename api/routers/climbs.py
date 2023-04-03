from fastapi import APIRouter, Depends
from models.climbs import ClimbsList
from queries.climbs import Climb, ClimbsQueries
from queries.accounts import AccountQueries
from authenticator import authenticator
import wikipedia

router = APIRouter()


@router.get("/api/climbs", response_model=ClimbsList)
def get_all_climbs(
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account_id = str(account_data["id"])
    return climbs.get_all_by_account(account_id)


@router.get("/api/climbs/{climb_id}", response_model=Climb)
def get_one_climb(
    climb_id: str,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return climbs.get_one(climb_id=climb_id)

@router.post("/api/climbs", response_model=Climb)
