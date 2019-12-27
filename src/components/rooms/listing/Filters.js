import React, { useContext } from "react";
import Title from "../../ui_components/Title";
import { DataContext } from "../../../state_managment/context";

// TO BE OPTIMIZED
const getUniqueTypes = items => {
  return [...new Set(items.map(item => item.fields.type))];
};

const getUniqueGuest = items => {
  return [...new Set(items.map(item => item.fields.capacity))];
};

export default function Filters() {
  const [rooms, , , , allFilters, handleChange] = useContext(DataContext);
  console.log(allFilters);

  // FILTER BY TYPES
  let uniqueTypes = getUniqueTypes(rooms);
  uniqueTypes = ["all", ...uniqueTypes];

  uniqueTypes = uniqueTypes.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  // FILTER BY GUEST
  let uniqueGuest = getUniqueGuest(rooms);
  uniqueGuest = uniqueGuest.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Refine your Search" />
      <form className="filter-form">
        {/* SELECT TYPE DROPDOWN */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
          >
            {uniqueTypes}
          </select>
        </div>
        {/* END SELECT TYPE DROPDOWN */}

        {/* SELECT GUEST DROPDOWN */}
        <div className="form-group">
          <label htmlFor="guest">guest</label>
          <select
            name="guest"
            id="guest"
            onChange={handleChange}
            className="form-control"
          >
            {uniqueGuest}
          </select>
        </div>
        {/* END SELECT GUEST DROPDOWN */}

        {/* SELECT GUEST DROPDOWN */}
        <div className="form-group">
          <label htmlFor="price">room price: {allFilters.byPrice.get}</label>
          <input
            type="range"
            name="price"
            min={allFilters.byMinPrice.get}
            max={allFilters.byMaxPrice.get}
            value={allFilters.byPrice.get}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* END SELECT GUEST DROPDOWN */}
      </form>
    </section>
  );
}
