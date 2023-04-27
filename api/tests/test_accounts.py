from fastapi.testclient import TestClient
from queries.munros import MunrosQueries
from main import app
from tests.utils import fake_munro, fake_munros_list
from authenticator import authenticator
from routers.accounts import AccountToken
from models.accounts import AccountOut
from unittest import TestCase
from models.munros import MunrosList, Munro

client = TestClient(app)
test_account = AccountOut(id="1234567890", username="fake", password="password", full_name="fake")
test_account_token = AccountToken(access_token="0987654321", type="Bearer", account=test_account)


async def fake_get_token():
    return test_account.dict()


class TestGetAllMunros:
    def get_all(self):
        munro = [fake_munro]
        print(munro)
        return munro
        # return [fake_munro]


def test_get_all_munros():

    # Arrange
    app.dependency_overrides[MunrosQueries] = TestGetAllMunros
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_token

    # Act
    response = client.get("/api/munros")

    # Clean up
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == fake_munros_list

# class ClimbsQueriesMock:
#     def create_one(
#         self, account_id: str, munro_id: str, climb: ClimbParams
#     ) -> Climb:

#         climb_dict = climb.dict()
#         climb_dict["account_id"] = account_id
#         climb_dict["munro_id"] = munro_id
#         self.collection.insert_one(climb_dict)
#         climb_dict["id"] = str(climb_dict["_id"])
#         return Climb(**climb_dict)
    
    # def get_all_by_munro(self, munro_id: str) -> List[Climb]:
    #     climbs = []
    #     climbs_cursor = self.collection.find({"munro_id": munro_id})
    #     for climb in climbs_cursor:
    #         climb["id"] = str(climb["_id"])
    #         climbs.append(Climb(**climb))
    #     return climbs

    # def delete_one(self, climb_id: str) -> bool:
    #     result = self.collection.delete_one({"_id": ObjectId(climb_id)})
    #     return result.deleted_count == 1



# def test_create_climb():
#     overrides = {
#         ClimbsQueries: ClimbsQueriesMock,
#         authenticator.get_current_account_data: fake_get_current_account_data
#     }
#     app.dependency_overrides = overrides
#     climb = {
#         "datetime": "2023-04-27T16:30:25.567Z",
#         "duration": "string",
#         "difficulty": 0,
#         "weather": "string",
#         "notes": "string",
#         "image": "string"
#     }
#     res = client.post('/api/munros/{munro_id}/climbs/', response_model=Climb)
#     data = res.json()
#     assert data['id'] == '1337'
#     assert data['user_id'] == 'fakeuser'

#     app.dependency_overrides = {}


# def test_get_all_things():
#     overrides = {
#         ThingsQueries: ThingQueriesMock,
#         authenticator.get_current_account_data: fake_get_current_account_data
#     }
#     app.dependency_overrides = overrides
#     res = client.get('/api/things')
#     data = res.json()
#     assert len(data['things']) == 1
#     assert data['things'][0]['user_id'] == 'fakeuser'
#     app.dependency_overrides = {}

