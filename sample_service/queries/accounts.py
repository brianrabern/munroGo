from pydantic import BaseModel


class AccountIn(BaseModel):
    name: str
    email: str
    password: str


class AccountOut(BaseModel):
    id: str
    name: str
    email: str


