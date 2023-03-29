from fastapi import APIRouter, Depends
from models import MunrosList
from queries.munros import Munro, MunrosQueries
from queries.accounts import User, AccountQueries
from authenticator import authenticator
from typing import List

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
    }
    return munros.create_review(munro_id=munro_id, review=review)


@router.get("/api/dashboard/{account_id}", response_model=User)
def get_user_data(
    account_id: str,
    users: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return users.get_user(account_id=account_id)


@router.get("/api/dashboards/{account_id}", response_model=User)
def get_user_data1(
    account_id: str,
    current_user: User = Depends(authenticator.get_current_user),
    users: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return users.get_user(account_id=account_id)


# @app.get("/dashboards/{dashboard_id}", response_model=Dashboard)
# def get_dashboard(
#     dashboard_id: str,
#     current_user: User = Depends(get_current_user),
#     db: MongoClient = Depends(get_database),
# ):
#     dashboard = db.dashboards.find_one({"_id": ObjectId(dashboard_id)})
#     if dashboard["user_id"] != str(current_user.id):
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN,
#             detail="You are not authorized to access this dashboard",
#         )
#     return Dashboard(**dashboard)


# @router.get("/api/munros/name/{hillname}", response_model=Munro)
# def get_one_by_name(
#     hillname: str,
#     munros: MunrosQueries = Depends(),
#     account_data: dict = Depends(authenticator.get_current_account_data),
# ):
#     return munros.get_one_munro_name(hillname=hillname)
