import React, { Component } from "react";
import { Context } from "../../src/Context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = Context;

  render() {
    const { featuredRooms, loading } = this.context;
    console.log(featuredRooms);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />

        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            featuredRooms.map((item) => <Room room={item} key={item.id} />)
          )}
        </div>
      </section>
    );
  }
}
