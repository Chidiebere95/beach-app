import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link className="btn-primary" to="/">
          return home
        </Link>
      </Banner>
    </Hero>
  );
}
