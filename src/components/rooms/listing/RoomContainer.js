import React, { useContext } from "react";
import Filters from "./Filters";
import RoomListing from "./RoomListing";
import { DataContext } from "../../../state_managment/context";

export default function RoomContainer() {
  const [rooms, , sortedRooms, loading] = useContext(DataContext);

  return (
    <>
      <Filters r={rooms} />

      {sortedRooms.length !== 0 ? (
        <RoomListing r={sortedRooms} loading={loading} />
      ) : (
        <div
          style={{
            width: "40%",
            margin: "6rem auto",
            textAlign: "center"
          }}
        >
          <h3>No rooms to display</h3>
        </div>
      )}
    </>
  );
}
