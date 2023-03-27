from fastapi import APIRouter, Depends
from models import MunrosList
from queries.munros import MunrosQueries

router = APIRouter()


@router.get("/api/munros", response_model=MunrosList)
def get_all_things(repo: MunrosQueries = Depends()):
    return {"munros": repo.get_all()}


# @router.delete("/api/things/{thing_id}", response_model=bool)
# def delete_thing(thing_id: str, repo: ThingsQueries = Depends()):
#     return repo.delete(thing_id)


# @router.post("/api/things", response_model=Thing)
# def create_thing(params: ThingParams, repo: ThingsQueries = Depends()):
#     return repo.create(params)


# @app.get("/api/launch-details")
# def launch_details():
#     return {
#         "launch_details": {
#             "year": 2022,
#             "month": 12,
#             "day": "9",
#             "hour": 19,
#             "min": 0,
#             "tz:": "PST",
#         }
#     }
