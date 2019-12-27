import React from "react";

const RenderRooms = ({ room, Link, path }) => {
  return (
    <div className="room">
      <article className="img-container">
        <img src={room.fields.images[0].fields.file.url} alt="rooms" />
        <div className="price-top">
          <h6>${room.fields.price}</h6>
          <p>Per night</p>
          <Link
            to={`${path}${room.fields.slug}`}
            className="btn-primary room-link"
          >
            View Room
          </Link>
        </div>
        <p className="room-info">{room.fields.name}</p>
      </article>
    </div>
  );
};

export default RenderRooms;
