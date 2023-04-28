import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetMunrosQuery } from "../services/munros";
import LoadingBar from "./LoadingBar";
import NewClimbClick from "./NewClimbClick";
import { useGetClimbsQuery } from "../services/climbs";

const Munros = () => {
  const { data, error, isLoading } = useGetMunrosQuery();
  const [searchInput, setSearchInput] = useState(" ");
  const [searchFilter, setSearchFilter] = useState("hillname");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMunro, setSelectedMunro] = useState(null);
  const navigate = useNavigate();
  const { data: myClimbs, isLoading: isLoadingClimbs } = useGetClimbsQuery();
  if (error) {
    navigate("/");
  }

  if (isLoading || isLoadingClimbs)
    return <LoadingBar increment={20} interval={50} />;

  if (data?.length === 0) return <div>Somethin's amiss.</div>;

  const region_names = {
    "01": "Firth of Clyde to Strathtay",
    "02": "Loch Rannoch to Loch Tay",
    "03": "Loch Leven to Glen Lochy",
    "04": "Fort William to Loch Ericht",
    "05": "Loch Ericht to Glen Garry",
    "06": "Forest of Atholl to Blairgowrie",
    "07": "Braemar to Montrose",
    "08": "The Cairngorms",
    "09": "Spean Bridge to Elgin",
    10: "Glen Shiel to Glenfinnan",
    11: "Loch Duich to Loch Ness",
    12: "Kyle of Lochalsh to Inverness",
    13: "Loch Carron to Loch Maree",
    14: "Loch Maree to Garve",
    15: "Ullapool to the Moray Firth",
    16: "The Far North",
    17: "Skye and Mull",
  };

  const climbsIdList = myClimbs.map((climb) => climb.munro_id);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const searchedData = () => {
    if (searchInput === " ") {
      return data;
    } else {
      return data.filter((munro) => {
        return munro[searchFilter]
          .toLowerCase()
          .includes(searchInput.toLowerCase().trim());
      });
    }
  };

  return (
    <div className="flex flex-col">
      {isModalOpen ? (
        <div className="fixed top-0 left-0 h-full w-full overflow-y-scroll bg-white z-50 modal-box">
          <NewClimbClick munro_id={selectedMunro} />
          <label
            htmlFor="test"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              setSelectedMunro(null);
              setIsModalOpen(!isModalOpen);
            }}
          >
            x
          </label>
        </div>
      ) : (
        <></>
      )}

      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInput}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <select
                defaultValue="filter"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSearchFilter}
              >
                <option disabled value="filter">
                  Filters
                </option>
                <option value="hillname"> Hillname</option>
                <option value="region">Region</option>
                <option value="metres">Metres</option>
                <option value="feet">Feet</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Hillname
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Region
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Metres
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Feet
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Climbed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {searchedData().map((munro) => {
                  return (
                    <tr key={munro.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <Link to={`/munros/${munro.id}`} key={munro.id}>
                          {munro.hillname}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.region}:{" "}
                        {region_names[munro.region.slice(0, -1)]}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.metres}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.feet}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {climbsIdList.includes(munro.id) ? (
                          <input
                            type="checkbox"
                            checked
                            className="checkbox checkbox-md checkbox-success"
                            disabled
                          />
                        ) : (
                          <button
                            id={munro.id}
                            onClick={() => {
                              setSelectedMunro(munro.id);
                              setIsModalOpen(!isModalOpen);
                            }}
                            className="btn btn-xs btn-square btn-outline"
                          ></button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Munros;
