import React from "react";
import { useGetMunrosQuery } from "./services/munros";


const Munros = () => {
  const { data, isLoading } = useGetMunrosQuery();
  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No munros :(</div>;
  return (
    <ul>
      {data.map((munro) => (
        <li key={munro.id}>{munro.hillname}</li>
      ))}
    </ul>
  );
};

export default Munros;
