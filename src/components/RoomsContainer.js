import React from "react";
import { withRoomConsumer } from "../context";
import RoomList from "./RoomList";
import RoomsFilter from "./RoomsFilter";
import Loading from "../components/Loading";
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading />;
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomContainer);
