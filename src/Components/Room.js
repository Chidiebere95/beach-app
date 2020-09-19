import React from "react";
import { Link } from "react-router-dom";
import defaultImg from '../images/defaultBcg.jpeg'
import PropTypes from 'prop-types'

export default function Room({ room }) {
  console.log(room);
  const { name, price, images, slug } = room;
    // console.log(images);


  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt={`img not availabel${name}`} />
        <div className="price-top">
          <h6>{`$${price}`}</h6>
          <p>per night</p>
        </div>
        <Link className="btn-primary room-link" to={`/rooms/${slug}`}>
          go to room
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
}
Room.propTypes={
  room:PropTypes.shape({
name:PropTypes.string.isRequired,
slug:PropTypes.string.isRequired,
images:PropTypes.arrayOf(PropTypes.string).isRequired,
price:PropTypes.number.isRequired

  })
}