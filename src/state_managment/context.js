import React, { useEffect, useState, createContext } from "react";
import API from "../api/API";

export const DataContext = createContext();

export const DataProvider = props => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(_ => {
    getAllRooms();
  }, []);

  const getAllRooms = async _ => {
    setLoading(true);

    const request = await API("data.json");
    const response = await request.data.rooms;

    setLoading(false);
    return setRooms(response);
  };

  return (
    <DataContext.Provider value={[rooms, setRooms, loading]}>
      {props.children}
    </DataContext.Provider>
  );
};
