import React, { useContext } from "react";
import Hero from "../ui_components/hero_component";
import Banner from "../ui_components/Banner";
import Services from "../ui_components/Services";
import { Link } from "react-router-dom";
import Title from "../ui_components/Title";
import LoadingSpinner from "../ui_components/loader/LoadingSpinner";
import FeaturedRooms from "./FeaturedRooms";
import { DataContext } from "../../state_managment/context";

const Home = _ => {
  const [rooms, , loading] = useContext(DataContext);

  return (
    <>
      <Hero>
        <Banner title="top class rooms" subtitle="highest standards from 1599$">
          <Link to="/rooms" className="btn-primary">
            Available Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Title title="featured" />
      <div className="featured-rooms">
        <div className="featured-rooms-center">
          {loading ? <LoadingSpinner /> : <FeaturedRooms list={rooms} />}
        </div>
      </div>
    </>
  );
};

export default Home;
