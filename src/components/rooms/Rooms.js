import React from "react";
import Hero from "../ui_components/Hero";
import Banner from "../ui_components/Banner";
import RoomContainer from "./listing/RoomContainer";

const Rooms = _ => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="OUR ROOMS" subtitle="Checkout our available rooms" />
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
