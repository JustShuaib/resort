import React from "react";
import { useContext } from "react";
import Title from "./Title";
import { RooomContext } from "../context";

function RoomsFilter({ rooms }) {
  const context = useContext(RooomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get unique values
  const getUnique = (array, value) => [
    ...new Set(array.map((item) => item[value])),
  ];
  // Get unique types
  let types = getUnique(rooms, "type");
  // Add 'all' types
  types = ["all", ...types];
  // Map to JSX
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  // Get unique capacities
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types}
          </select>
        </div>
        {/* End of Select type */}

        {/* Select guest */}
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {people}
          </select>
        </div>
        {/* End of guest */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price ${price}
            <input
              className="form-control"
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              step="100"
              onChange={handleChange}
            />
          </label>
        </div>
        {/* end of room price */}

        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End of Size */}

        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* End of extras */}
      </form>
    </section>
  );
}

export default RoomsFilter;
