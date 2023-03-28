from fastapi import APIRouter, Depends
from models import MunrosList
from queries.munros import Munro, MunrosQueries
from authenticator import authenticator

router = APIRouter()


@router.get("/api/munros", response_model=MunrosList)
def get_all_munros(
    munros: MunrosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"munros": munros.get_all()}


@router.get("/api/munros/{munro_id}", response_model=Munro)
def get_one_munro(
    munro_id: str,
    munros: MunrosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return munros.get_one(munro_id=munro_id)


@router.post("/api/seed")
def seed_it():
    munros = MunrosQueries()
    result = munros.seed_database()
    return result
