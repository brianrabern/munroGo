from fastapi import APIRouter, Depends
from models import MunrosList
from queries.munros import MunrosQueries

router = APIRouter()


@router.get("/api/munros", response_model=MunrosList)
def get_all_things(repo: MunrosQueries = Depends()):
    return {"munros": repo.get_all()}
