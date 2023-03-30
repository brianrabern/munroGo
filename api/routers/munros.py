from fastapi import APIRouter, Depends
from models.munros import MunrosList
from queries.munros import Munro, MunrosQueries
from queries.accounts import AccountQueries
from authenticator import authenticator
import wikipedia

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


@router.put("/api/munros/{munro_id}", response_model=Munro)
def add_review(
    munro_id: str,
    comment: str,
    rating: int,
    munros: MunrosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    review = {
        "comment": comment,
        "rating": rating,
        "user": account_data["full_name"],
    }
    return munros.create_review(munro_id=munro_id, review=review)


@router.get("/api/dashboard/")
def get_user_dashboard(
    users: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return users.get_user(account_id=account_data["id"])


@router.put("/api/munros/{munro_id}/wiki")
def get_munro_wiki(munro_id: str, munros: MunrosQueries = Depends()):
    munro = munros.get_one(munro_id=munro_id)
    hillname = munro.hillname
    summary = wikipedia.summary(hillname)
    images = wikipedia.page(hillname).images
    return {hillname: {"summary": summary, "images": images}}
