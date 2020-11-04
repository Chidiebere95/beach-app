import React from "react";
import RoomsList from "./RoomsList";
import Title from "./Title";
import { useContext } from "react";
import { Context } from "../Context";

export default function RoomsFilter({ rooms }) {
  const context = useContext(Context);
  // console.log(context);
  const {
    type,
    capacity,
    price,
    minPrice,
    maxSize,
    maxPrice,
    breakfast,
    pets,
    handleChange,
  } = context;
  // let{type,capacity,price,minPrice,maxSize,breakfast,pets,handleChange}=rooms;
  // console.log(rooms);
  // console.log(type)
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search forms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            <option value="all">all</option>
            <option value="single">single</option>
            <option value="double">double</option>
            <option value="family">family</option>
            <option value="presidential">presidential</option>
          </select>
        </div>

        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}

        {/* guests  */}
        <div className="form-group">
          <label htmlFor="price">Room price ${price}</label>
          <input
            type="range"
            onChange={handleChange}
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
          />
        </div>
        {/* end of guests */}
      </form>
    </section>
  );
}
