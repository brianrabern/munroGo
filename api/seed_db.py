from queries.munros import MunrosQueries
import csv

queries = MunrosQueries()

csv_file = open("munroData.csv", "r")
munro_reader = csv.DictReader(csv_file)


for dct in map(dict, munro_reader):
    clean_dct = {k.strip(): v.strip() for k, v in dct.items()}
    clean_dct["reviews"] = []
    # if queries.get_one(clean_dct["hillname"]) is None:
    queries.create_one(clean_dct)


# inserted_ids = [str(id_) for id_ in result.inserted_ids]


# from queries.munros import MunrosQuerie

# def seed_database(self):
#     csvFile = open("munroData.csv", "r")
#     munro_reader = csv.DictReader(csvFile)

#     munro_list = []

#     for dct in map(dict, munro_reader):
#         clean_dct = {k.strip(): v.strip() for k, v in dct.items()}
#         clean_dct["reviews"] = []
#         munro_list.append(clean_dct)

# result = self.collection.insert_many(munro_list)
# inserted_ids = [str(id_) for id_ in result.inserted_ids]

# x = len(result.inserted_ids)

# return {
#     "message": f"Guid yin! Ye've addit {x} munros tae yer croun!",
#     "added_ids": inserted_ids,
# }


# def seed_it():
#     munros = MunrosQueries()
#     check = munros.collection.find()
#     if check is None:
#         result = munros.seed_database()
#     else:
#         result = {
#             "message": burns_fail,
#             "added_ids": None,
#         }
#     print(burns_success)
#     return result


# seed_it()


# burns_success = """
#             Wi' every peak ye conquor'd high,
#             Anither Munro's addit tae yer sty,
#             Guid yin! Ye've addit munros tae yer croun, sae spry!
#             """

# burns_fail = """
#             The Munro's vault o' data braw,
#             Is fu' and brimmin' o'er, I saw;
#             A modern wonder, wi' pride and awe.
#             """
