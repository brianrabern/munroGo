from fastapi import APIRouter, Depends
from models.climbs import ClimbsList
from queries.climbs import Climb, ClimbsQueries
from authenticator import authenticator


router = APIRouter()


@router.get("/api/munros/account/climbs/", response_model=ClimbsList, tags=["Climbs"])
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


@router.post("/api/munros/{munro_id}/climbs/", response_model=Climb, tags=["Climbs"])
def create_climb(
    munro_id: str,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    params = {"munro_id": munro_id, "account_id": str(account_data["id"])}
    return climbs.create_one(params)

@router.delete("/api/munros/climbs/{climb_id}/", response_model=bool, tags=["Climbs"])
def delete_one_climb(
    climb_id: str,
    climbs: ClimbsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return climbs.delete_one(climb_id)
