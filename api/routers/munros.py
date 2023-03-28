from fastapi import APIRouter, Depends
from models import MunrosList
from queries.munros import MunrosQueries

router = APIRouter()


@router.get("/api/munros", response_model=MunrosList)
def get_all_munros(munros: MunrosQueries = Depends()):
    return {"munros": munros.get_all()}
