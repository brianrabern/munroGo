from fastapi import APIRouter, Depends
from models import MunrosList
from queries.munros import MunrosQueries
from typing import List
from models import MunroParams

router = APIRouter()


@router.get("/api/munros", response_model=MunrosList)
def get_all_munros(munros: MunrosQueries = Depends()):
    return {"munros": munros.get_all()}


@router.post("/api/seed")
def seed_it(params_list: List[MunroParams]):
    return True
