from fastapi import APIRouter, Depends
from models.reviews import Review, ReviewParams, ReviewsList, ReviewParamsWithAccountWithId
from queries.reviews import ReviewsQueries
from authenticator import authenticator


router = APIRouter()


@router.get("/api/munros/{munro_id}/reviews", response_model=ReviewsList, tags=["Reviews"])
def get_all_reviews_by_munro(
    munro_id: str,
    reviews: ReviewsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"reviews": reviews.get_all_by_munro(munro_id)}


@router.get("/api/account/reviews/", response_model=ReviewsList, tags=["Reviews"])
def get_reviews_for_account(
    reviews: ReviewsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account_id = str(account_data["id"])
    reviews = reviews.get_all_by_account(account_id)
    return {"reviews": reviews}


@router.post(
    "/api/munros/{munro_id}/reviews/", response_model=Review, tags=["Reviews"]
)
def create_review(
    content: ReviewParams,
    munro_id: str,
    reviews: ReviewsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = account_data["id"]
    munro = munro_id
    return reviews.create_one(account, munro, content)


@router.put(
    "/api/munros/{munro_id}/reviews/{review_id}/",
    response_model=Review,
    tags=["Reviews"]
)
def update_review(
    content: ReviewParams,
    munro_id: str,
    review_id: str,
    reviews: ReviewsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    # munro = munro_id
    return reviews.update_review(review_id, content)


@router.delete(
    "/api/munros/{munro_id}/reviews/{review_id}/",
    response_model=bool,
    tags=["Reviews"],
)
def delete_review(
    review_id: str,
    reviews: ReviewsQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return reviews.delete_one(review_id)
