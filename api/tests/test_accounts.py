from fastapi.testclient import TestClient
from queries.munros import MunrosQueries
from main import app
from tests.utils import fake_munro, fake_munros_list
from authenticator import authenticator
from routers.accounts import AccountToken
from models.accounts import AccountOut


from models.munros import MunrosList

client = TestClient(app)
test_account = AccountOut(
    id="1234567890", username="fake", password="password", full_name="fake"
)
test_account_token = AccountToken(
    access_token="0987654321", type="Bearer", account=test_account
)


async def fake_get_token():
    return test_account.dict()


class TestGetAllMunros:
    def get_all(self):
        munro = [fake_munro]
        return munro


def test_get_all_munros() -> MunrosList:

    # Arrange
    app.dependency_overrides[MunrosQueries] = TestGetAllMunros
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
