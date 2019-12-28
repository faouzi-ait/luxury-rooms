import React, { useEffect, useState, createContext } from "react";
import API from "../api/API";

export const DataContext = createContext();

/* 
  1 - Create the states for the rooms
  2 - Create the states for the filtered rooms
      - Pass the rooms as default values in the effect hook after the states declarations
  2 - Set the max price & size values
  3 - Create the handleChange() method
  4 - Pass the handleMethod as props

  Optional:
  1 - Create an object container for the states
  2 - Pass the object as props
*/

export const DataProvider = props => {
  // ACTIONS TO BE DONE UPON COMPONENT LOADING
  useEffect(_ => {
    getAllRooms();
  }, []);

  // MAIN DATA FOR ROOM LISTING, SORTED LISTING & LOADER
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1 - DEFAULT VALUES FOR FILTERING
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  const maxPriceDefault = Math.max(...rooms.map(item => item.fields.price));
  const maxSizeDefault = Math.max(...rooms.map(item => item.fields.size));

  // SORTED ROOM STATE TO BE PASSED IN THE ROOM LIST TO BE DISPLAYED
  useEffect(
    _ => {
      setSortedRooms(rooms);
      setMaxPrice(Number(maxPriceDefault));
      setMaxSize(Number(maxSizeDefault));
    },
    [rooms, maxPriceDefault, maxSizeDefault]
  );

  const handleChange = e => {
    let tempRooms = [...rooms];
    const valueType = e.target.value;

    // FILTER BY TYPE
    if (e.target.name === "type") {
      tempRooms = tempRooms.filter(room => room.fields.type === valueType);
      valueType !== "all" ? setSortedRooms(tempRooms) : setSortedRooms(rooms);
    }

    // FILTER BY CAPACITY
    if (e.target.name === "guest") {
      tempRooms = tempRooms.filter(
        room => room.fields.capacity === Number(valueType)
      );
      setSortedRooms(tempRooms);
    }

    // FILTER BY PRICE
    if (e.target.name === "price") {
      setPrice(e.target.value);
      tempRooms = tempRooms.filter(room => room.fields.price <= e.target.value);
      setSortedRooms(tempRooms);
    }

    // FILTER BY BREAKFAST
    if (e.target.name === "breakfast") {
      setBreakfast(breakfast => (breakfast = !breakfast));

      if (breakfast) {
        tempRooms = tempRooms.filter(room => room.fields.breakfast === true);
        setSortedRooms(tempRooms);
      } else {
        tempRooms = tempRooms.filter(room => room.fields.breakfast === false);
        setSortedRooms(tempRooms);
      }
    }

    // FILTER BY PETS
    if (e.target.name === "pets") {
      setPets(pets => (pets = !pets));

      if (pets) {
        tempRooms = tempRooms.filter(room => room.fields.pets === true);
        setSortedRooms(tempRooms);
      } else {
        tempRooms = tempRooms.filter(room => room.fields.pets === false);
        setSortedRooms(tempRooms);
      }
    }
  };

  // MAKING THE FILTER STATES & METHODS AVAILABLE
  const allFilters = {
    byType: { get: type, set: setType },
    byCapacity: {
      get: capacity,
      set: setCapacity
    },
    byPrice: { get: price, set: setPrice },
    byMinPrice: {
      get: minPrice,
      set: setMinPrice
    },
    byMaxPrice: {
      get: maxPrice,
      set: setMaxPrice
    },
    byMinSize: {
      get: minSize,
      set: setMinSize
    },
    byMaxSize: {
      get: maxSize,
      set: setMaxSize
    },
    byBreakfast: {
      get: breakfast,
      set: setBreakfast
    },
    byPets: { get: pets, set: setPets }
  };

  const getAllRooms = async _ => {
    setLoading(true);

    const request = await API("data.json");
    const response = await request.data.rooms;

    setLoading(false);
    setRooms(response);
    return;
  };

  return (
    <DataContext.Provider
      value={[rooms, setRooms, sortedRooms, loading, allFilters, handleChange]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
