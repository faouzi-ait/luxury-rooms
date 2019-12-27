import React from "react";

const nav_component = (Link, classname) => {
  return (
    <div>
      <ul className={classname}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    </div>
  );
};

export default nav_component;
