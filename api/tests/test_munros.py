from fastapi.testclient import TestClient
from queries.munros import MunrosQueries
from main import app
from tests.utils import fake_munro, fake_munros_list, fake_munro_data
from authenticator import authenticator
from routers.accounts import AccountToken, AccountOut
from models.munros import MunrosList, Munro, MunroWithData


client = TestClient(app)
test_account = AccountOut(
    id="1234567890", username="fake", password="password", full_name="fake"
)
test_account_token = AccountToken(
    access_token="0987654321", type="Bearer", account=test_account
)


async def fake_get_token():
    return test_account.dict()


class TestMunrosQueries:
    def get_all(self) -> MunrosList:
        munros = [fake_munro]
        return munros

    def get_one(self, munro_id: str) -> Munro:
        munro = fake_munro_data
        return Munro(**munro)

    def get_weather(self, munro_id: str) -> dict:
        return {"key": "string"}


def test_get_one_munro() -> MunroWithData:
    # Arrange
    app.dependency_overrides[MunrosQueries] = TestMunrosQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_token

    # Act

    response = client.get("/api/munros/643f0095ab5591a12a3a8c4b")
    data = response.json()
    data["summary"] = "string"
    data["images"] = ["string"]
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert data == fake_munro_data


def test_get_all_munros() -> MunrosList:

    # Arrange
    app.dependency_overrides[MunrosQueries] = TestMunrosQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_token

    # Act
    response = client.get("/api/munros")

    # Clean up
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == fake_munros_list
