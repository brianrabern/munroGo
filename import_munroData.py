import csv
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["munroGo"]
collection = db["munros"]

header = [
    "hillnumber",
    "hillname",
    "region",
    "parent",
    "classification",
    "metres",
    "feet",
    "gridref",
    "gridref10",
    "colgridref",
    "colheight",
    "drop",
    "feature",
    "observations",
    "survey",
    "revision",
    "comments",
    "map50",
    "map25",
    "xcoord",
    "ycoord",
    "latitude",
    "longitude",
    "country",
    "climbed",
    "tumponly",
    "Ma",
    "Ma=",
    "Hu",
    "Hu=",
    "Tu",
    "Sim",
    "5",
    "M",
    "MT",
    "F",
    "C",
    "G",
    "D",
    "DT",
    "Hew",
    "N",
    "Dew",
    "DDew",
    "HF",
    "4",
    "3",
    "2",
    "1",
    "0",
    "W",
    "WO",
    "B",
    "Sy",
    "Fel",
    "CoH",
    "CoA",
    "CoU",
    "CoL",
    "SIB",
    "sMa",
    "sHu",
    "sSim",
    "s5",
    "s4",
    "Mur",
    "CT",
    "GT",
    "DN",
    "BL",
    "Bg",
    "Y",
    "Cm",
    "T100",
    "xMT",
    "xC",
    "xG",
    "xN",
    "xDT",
    "O",
    "Un",
    "P600",
    "P500",
]

csvFile = open("munroData.csv", "r")
munro_reader = csv.DictReader(csvFile)


munro_list = []

for dct in map(dict, munro_reader):
    clean_dct = {k.strip(): v.strip() for k, v in dct.items()}
    clean_dct["reviews"] = []
    munro_list.append(clean_dct)

result = collection.insert_many(munro_list)

print(
    f"Guid yin! Ye've addit {len(result.inserted_ids)} munros tae yer croun!"
)

client.close()
