from fastapi.testclient import TestClient
from queries.climbs import ClimbsQueries
from main import app
from authenticator import authenticator
from models.accounts import AccountOut, AccountToken
from models.climbs import Climb, ClimbsList
from typing import List
from tests.utils import fake_climbs

client = TestClient(app)
test_account = AccountOut(
    id="1234567890", username="fake", password="password", full_name="fake"
)
test_account_token = AccountToken(
    access_token="0987654321", type="Bearer", account=test_account
)

async def fake_get_token():
    return test_account.dict()

class TestClimbsQueries:
    def get_all_by_account(self, account_id: str) -> List[Climb]:
      climbs = [fake_climbs]
      return climbs

    def get_all_by_munro(self, munro_id: str) -> List[Climb]:
       climbs = [fake_climbs]
       return climbs

    def get_one(self, climb_id: str) -> Climb:
        climb = fake_climbs
        return climb

def test_get_climbs_for_account() -> ClimbsList:

    # Arrange
    app.dependency_overrides[ClimbsQueries] = TestClimbsQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_token

    # Act
    response = client.get("/api/account/climbs")

    #Clean
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == {"climbs": [fake_climbs]}

def test_get_all_climbs_for_munro() -> ClimbsList:

    # Arrange
    app.dependency_overrides[ClimbsQueries] = TestClimbsQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_token

    # Act
    response = client.get("/api/munros/munro_id/climbs/")

    #Clean
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == {"climbs": [fake_climbs]}

def test_get_one_climb() -> Climb:
    # Arrange
    app.dependency_overrides[ClimbsQueries] = TestClimbsQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_token

    # Act
    response = client.get("/api/munros/climbs/climb_id/")

    #Clean
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == fake_climbs
