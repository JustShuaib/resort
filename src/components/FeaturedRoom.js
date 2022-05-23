import React, { Component } from "react";
import { RooomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import Loading from "./Loading";
export default class FeaturedRoom extends Component {
  static contextType = RooomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured-rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
