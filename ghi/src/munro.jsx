import React from "react";
import { useGetMunrosQuery } from "./services/munros";


const Munros = () => {
  const { data, isLoading } = useGetMunrosQuery();

  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No munros</div>;



const region_names = {

    '01':  'Firth of Clyde to Strathtay',
    '02': 'Loch Rannoch to Loch Tay',
    '03': 'Loch Leven to Glen Lochy',
    '04': 'Fort William to Loch Ericht',
    '05': 'Loch Ericht to Glen Garry',
    '06': 'Forest of Atholl to Blairgowrie',
    '07': 'Braemar to Montrose',
    '08': 'The Cairngorms',
    '09': 'Spean Bridge to Elgin',
    '10': 'Glen Shiel to Glenfinnan',
    '11': 'Loch Duich to Loch Ness',
    '12': 'Kyle of Lochalsh to Inverness',
    '13': 'Loch Carron to Loch Maree',
    '14': 'Loch Maree to Garve',
    '15': 'Ullapool to the Moray Firth',
    '16': 'The Far North',
    '17': 'Skye and Mull',
};



  return (  <table className="table table-striped">
            <thead>
                <tr>
                    <th key="hillname">Hillname</th>
                     <th key="Region">Region</th>
                    <th key="Metres">Metres</th>
                    <th key="Feet">Feet</th>
                     <th key="longitude">Longitude</th>
                     <th key="latitude">Latitude</th>
                </tr>
            </thead>
            <tbody>
                {data.map(munro => {
                    return (
                        <tr key={munro.id}>
                            <td>{munro.hillname}</td>
                            <td>{region_names[munro.region.slice(0, -1)]}</td>
                            <td>{munro.metres}</td>
                            <td>{munro.feet}</td>
                            <td>{munro.longitude}</td>
                            <td>{munro.latitude}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
  );
};

export default Munros;
