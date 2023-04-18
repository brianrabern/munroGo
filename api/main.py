from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os
from routers import accounts, munros, climbs, reviews


app = FastAPI()
# origins = [
#     "https://localhost:3000",
#     "http://localhost:3000/",
#     "localhost:3000",
#     "localhost:8000",
#     "http://localhost:3000",
# ]
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    # allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(munros.router)
app.include_router(climbs.router)
app.include_router(reviews.router)
