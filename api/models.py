from pydantic import BaseModel
from typing import List
from datetime import datetime


class Review(BaseModel):
    id: str
    comment: str
    rating: int
    date: datetime


class MunroParams(BaseModel):
    hillnumber: str
    hillname: str
    region: str
    parent: str
    classification: str
    metres: str
    feet: str
    gridref: str
    gridref10: str
    colgridref: str
    colheight: str
    drop: str
    feature: str
    observations: str
    survey: str
    revision: str
    comments: str
    map50: str
    map25: str
    xcoord: str
    ycoord: str
    latitude: str
    longitude: str
    country: str
    climbed: str
    tumponly: str
    Ma: str
    MaE: str
    Hu: str
    HuE: str
    Tu: str
    Sim: str
    V5: str
    M: str
    MT: str
    F: str
    C: str
    G: str
    D: str
    DT: str
    Hew: str
    N: str
    Dew: str
    DDew: str
    HF: str
    V4: str
    V3: str
    V2: str
    V1: str
    V0: str
    W: str
    WO: str
    B: str
    Sy: str
    Fel: str
    CoH: str
    CoA: str
    CoU: str
    CoL: str
    SIB: str
    sMa: str
    sHu: str
    sSim: str
    s5: str
    s4: str
    Mur: str
    CT: str
    GT: str
    DN: str
    BL: str
    Bg: str
    Y: str
    Cm: str
    T100: str
    xMT: str
    xC: str
    xG: str
    xN: str
    xDT: str
    O: str
    Un: str
    P600: str
    P500: str
    reviews: List[Review]


class Munro(MunroParams):
    id: str


class MunrosList(BaseModel):
    munros: List[Munro]
