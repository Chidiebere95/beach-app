import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { Consumer } from "../Context";
import Loading from './Loading'

export default function RoomsContainer() {
  return (
    <Consumer>
      {value => {
        const { rooms, sortedRooms, loading } = value;
        // console.log(value)
        if (loading){
          return <Loading/>
        }

        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} loading={loading} />
          </div>
        );
      }}
    </Consumer>
  );
}
