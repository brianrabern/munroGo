import React from "react";
import { Link } from "react-router-dom";
import { useGetMunrosQuery } from "./services/munros";
import styles from "./index.css";

const Munros = () => {
  const { data, isLoading } = useGetMunrosQuery();

  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No munros</div>;

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

return (
  <div className="flex flex-col">
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
            <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <div className="hidden sm:block">Filters</div>
              </span>
            </button>
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
                  Longitude
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                >
                  Latitude
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((munro) => {
                return (
                  <tr key={munro.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      <Link to={`/munros/${munro.id}`} key={munro.id}>
                        {munro.hillname}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {region_names[munro.region.slice(0, -1)]}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {munro.metres}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {munro.feet}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {munro.longitude}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {munro.latitude}
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
}

//     {/* <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2">


//       <h1 className="flex items-center font-sans font-bold break-normal text-indigo-500 px-2 py-8 text-xl md:text-2xl">
//          Table
//       </h1>



//       <div id="recipients" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

//         <table id="example" className="stripe hover" style={{ width: "100%", paddingTop: "1em", paddingBottom: "1em" }}>
//           <thead>
//             <tr>
//               <th key="hillname">Hillname</th>
//               <th key="Region">Region</th>
//               <th key="Metres">Metres</th>
//               <th key="Feet">Feet</th>
//               <th key="longitude">Longitude</th>
//               <th key="latitude">Latitude</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((munro) => {
//               return (
//                 <tr< key={munro.id}>
//                   td>
//                     <Link to={`/munros/${munro.id}`} key={munro.id}>
//                       {munro.hillname}
//                     </Link>
//                   </td>
//                   <td>{region_names[munro.region.slice(0, -1)]}</td>
//                   <td>{munro.metres}</td>
//                   <td>{munro.feet}</td>
//                   <td>{munro.longitude}</td>
//                   <td>{munro.latitude}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//       </div>


//     </div> */}








// // const people = [
// //   {
// //     name: 'Leslie Alexander',
// //     email: 'leslie.alexander@example.com',
// //     role: 'Co-Founder / CEO',
// //     imageUrl:
// //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// //     lastSeen: '3h ago',
// //     lastSeenDateTime: '2023-01-23T13:23Z',
// //   },
// //   {
// //     name: 'Michael Foster',
// //     email: 'michael.foster@example.com',
// //     role: 'Co-Founder / CTO',
// //     imageUrl:
// //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// //     lastSeen: '3h ago',
// //     lastSeenDateTime: '2023-01-23T13:23Z',
// //   },
// //   {
// //     name: 'Dries Vincent',
// //     email: 'dries.vincent@example.com',
// //     role: 'Business Relations',
// //     imageUrl:
// //       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// //     lastSeen: null,
// //   },
// //   {
// //     name: 'Lindsay Walton',
// //     email: 'lindsay.walton@example.com',
// //     role: 'Front-end Developer',
// //     imageUrl:
// //       'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// //     lastSeen: '3h ago',
// //     lastSeenDateTime: '2023-01-23T13:23Z',
// //   },
// //   {
// //     name: 'Courtney Henry',
// //     email: 'courtney.henry@example.com',
// //     role: 'Designer',
// //     imageUrl:
// //       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// //     lastSeen: '3h ago',
// //     lastSeenDateTime: '2023-01-23T13:23Z',
// //   },
// //   {
// //     name: 'Tom Cook',
// //     email: 'tom.cook@example.com',
// //     role: 'Director of Product',
// //     imageUrl:
// //       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// //     lastSeen: null,
// //   },
// // ]

// // export default function Example() {
// //   return (
// //     <ul role="list" className="divide-y divide-gray-100">
// //       {people.map((person) => (
// //         <li key={person.email} className="flex justify-between gap-x-6 py-5">
// //           <div className="flex gap-x-4">
// //             <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
// //             <div className="min-w-0 flex-auto">
// //               <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
// //               <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
// //             </div>
// //           </div>
// //           <div className="hidden sm:flex sm:flex-col sm:items-end">
// //             <p className="text-sm leading-6 text-gray-900">{person.role}</p>
// //             {person.lastSeen ? (
// //               <p className="mt-1 text-xs leading-5 text-gray-500">
// //                 Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
// //               </p>
// //             ) : (
// //               <div className="mt-1 flex items-center gap-x-1.5">
// //                 <div className="flex-none rounded-full bg-emerald-500/20 p-1">
// //                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
// //                 </div>
// //                 <p className="text-xs leading-5 text-gray-500">Online</p>
// //               </div>
// //             )}
// //           </div>
// //         </li>
// //       ))}
// //     </ul>
// //   )
// // }

// // };

export default Munros;









// {/* <table className="table table-striped">
//   <thead>
//     <tr>
//       <th key="hillname">Hillname</th>
//       <th key="Region">Region</th>
//       <th key="Metres">Metres</th>
//       <th key="Feet">Feet</th>
//       <th key="longitude">Longitude</th>
//       <th key="latitude">Latitude</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((munro) => {
//       return (
//         <tr key={munro.id}>
//           <td>
//             <Link to={`/munros/${munro.id}`} key={munro.id}>
//               {munro.hillname}
//             </Link>
//           </td>
//           <td>{region_names[munro.region.slice(0, -1)]}</td>
//           <td>{munro.metres}</td>
//           <td>{munro.feet}</td>
//           <td>{munro.longitude}</td>
//           <td>{munro.latitude}</td>
//         </tr>
//       );
//     })}
//   </tbody>
// // </table>; */} 

