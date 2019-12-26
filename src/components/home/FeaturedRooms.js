import React from "react";
import { Link } from "react-router-dom";

const FeaturedRooms = ({ list }) => {
  const getFeaturedRooms = array => {
    return array.filter(room => room.fields.featured === true);
  };

  return (
    <>
      {getFeaturedRooms(list).map((room, i) => (
        <div className="room" key={i}>
          <article className="img-container">
            <img src={room.fields.images[0].fields.file.url} alt="rooms" />
            <div className="price-top">
              <h6>${room.fields.price}</h6>
              <p>Per night</p>
              <Link
                to={`/room/${room.fields.slug}`}
                className="btn-primary room-link"
              >
                View Room
              </Link>
            </div>
            <p className="room-info">{room.fields.name}</p>
          </article>
        </div>
      ))}
    </>
  );
};

export default FeaturedRooms;
