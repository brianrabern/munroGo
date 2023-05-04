from fastapi import APIRouter, Depends
from models.munros import MunrosList, MunroWithData
from queries.munros import MunrosQueries
from authenticator import authenticator
import wikipedia


router = APIRouter()


@router.get("/api/munros", response_model=MunrosList, tags=["Munros"])
def get_all_munros(
    munros: MunrosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"munros": munros.get_all()}


@router.get(
    "/api/munros/{munro_id}", response_model=MunroWithData, tags=["Munros"]
)
def get_one_munro(
    munro_id: str,
    munros: MunrosQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    munro = munros.get_one(munro_id=munro_id)
    hillname = munro.hillname
    summary = ""
    images = []
    try:
        summary = wikipedia.summary(hillname)
        images = wikipedia.page(hillname).images
    except Exception as e:
        print(f"Error fetching data from Wikipedia: {e}")
        summary = """"Lang may yer lum reek" as ye climb a Munro
        in the Scottish highlands, a hill that's at least 3,000ft (914m) high.
        It's a bonnie challenge for hillwalkers, a chance tae tak' in the
        heather, bens and lochs o' the great outdoors, wi' a wee dram o'
        whisky at the summit. So dinna be afeared, and gie it laldy!"""
    weather = munros.get_weather(munro_id)
    munro_data = munro.dict()
    munro_data["summary"] = summary
    munro_data["images"] = images
    munro_data["weather"] = weather
    return munro_data
