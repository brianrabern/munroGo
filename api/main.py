from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os
from routers import accounts, munros, climbs, reviews


app = FastAPI()
origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None),
    os.environ.get("PUBLIC_URL", None),
    os.environ.get("REACT_APP_SAMPLE_SERVICE_API_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(munros.router)
app.include_router(climbs.router)
app.include_router(reviews.router)
