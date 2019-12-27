import React from "react";
import RenderRoom from "./RenderRooms";
import { Link } from "react-router-dom";

const FeaturedRooms = ({ list }) => {
  const getFeaturedRooms = array => {
    return array.filter(room => room.fields.featured === true);
  };

  return (
    <>
      {getFeaturedRooms(list).map((room, i) => (
        <div key={i}>
          <RenderRoom room={room} Link={Link} i={i} path="/room/" />
        </div>
      ))}
    </>
  );
};

export default FeaturedRooms;
