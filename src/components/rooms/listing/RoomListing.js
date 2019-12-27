import React from "react";
import RenderRooms from "../../home/RenderRooms";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../ui_components/loader/LoadingSpinner";

export default function RoomListing({ r, loading }) {
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="roomslist">
          <div className="roomslist-center">
            {r.map((room, i) => (
              <div key={i}>
                <RenderRooms room={room} Link={Link} path="/room/" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
