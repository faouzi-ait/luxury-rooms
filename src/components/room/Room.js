import React, { useState, useContext, useEffect } from "react";
import Banner from "../ui_components/Banner";
import { Link } from "react-router-dom";
import { DataContext } from "../../state_managment/context";
import RoomList from "./RoomList";
import StyledHero from "../ui_components/StylesHero";

const Room = ({ match }) => {
  const [rooms] = useContext(DataContext);
  const [slug, setSlug] = useState("");

  const getSingleRoom = (array, slug) =>
    array.filter(room => room.fields.slug === slug);

  useEffect(
    _ => {
      setSlug(match.params.id);
    },
    [slug, match.params.id]
  );

  return (
    <>
      {
        <div>
          <StyledHero img={`../.${rooms[0].fields.images[1].fields.file.url}`}>
            <Banner title={slug} subtitle="">
              <Link to="/" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </StyledHero>
          <RoomList list={getSingleRoom(rooms, slug)} />
        </div>
      }
    </>
  );
};

export default Room;
