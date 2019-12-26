import React, { useContext } from "react";
import Hero from "../ui_components/hero_component";
import Banner from "../ui_components/Banner";
import { DataContext } from "../../state_managment/context";

const Rooms = _ => {
  const [rooms] = useContext(DataContext);

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="OUR ROOMS" subtitle="Checkout our available rooms" />
      </Hero>
    </>
  );
};

export default Rooms;
