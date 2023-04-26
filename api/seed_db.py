from queries.munros import MunrosQueries
import csv

mqueries = MunrosQueries()
csv_file = open("munroData.csv", "r")
munro_reader = csv.DictReader(csv_file)


def seed():
    inserted_ids = []
    for dct in map(dict, munro_reader):
        clean_dct = {k.strip(): v.strip() for k, v in dct.items()}
        added = mqueries.create_one(clean_dct)
        inserted_ids.append(added.id)
    croun = len(inserted_ids)

    return {
        "added_ids": inserted_ids,
        "count": croun,
    }


if mqueries.get_all() == []:
    x = seed()
    print(x)
    print(
        """
            Wi' every peak ye conquor'd high,
            Anither Munro's addit tae yer sty,
            Guid yin! Ye've addit munros tae yer croun, sae spry!
        """
    )

else:
    print("Database already seeded.")
    print(
        """
            The Munro's vault o' data braw,
            Is fu' and brimmin' o'er, I saw;
            A modern wonder, wi' pride and awe.
        """
    )
