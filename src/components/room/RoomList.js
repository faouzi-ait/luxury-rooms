import React from "react";

export default function RoomList({ list }) {
  return (
    <>
      {list.map((item, i) => (
        <div key={i}>
          <div className="single-room">
            <div className="single-room-images">
              {item.fields.images.map(data => (
                <img src={`../.${data.fields.file.url}`} alt="room" />
              ))}
              <div className="single-room-info">
                <article className="desc">
                  <h3>Details</h3>
                  <p>{item.fields.description}</p>
                </article>
                <article className="info">
                  <h3>Info</h3>
                  <h6>Price: {item.fields.price}$</h6>
                  <h6>Size: {item.fields.size} SQFT</h6>
                  <h6>Max Capacity: {item.fields.capacity} people</h6>
                  <h6>
                    {item.fields.pets ? "Pets Allowed" : "Pets Not Allowed"}{" "}
                  </h6>
                  <h6>
                    {item.fields.breakfast
                      ? "Free Breakfast Included"
                      : "Free Breakfast Not Included"}
                  </h6>
                </article>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
