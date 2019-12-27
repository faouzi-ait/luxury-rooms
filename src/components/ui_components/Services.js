import React, { useState } from "react";
import { FaCocktail, FaRunning, FaCarSide, FaBeer } from "react-icons/fa";
import Title from "./Title";

const Services = _ => {
  const [icon] = useState([
    {
      icon: <FaCocktail />,
      title: "Some text goes here!",
      info: "More dummy text goes here so it looks really nice and stuff"
    },
    {
      icon: <FaRunning />,
      title: "Some text goes here!",
      info: "More dummy text goes here so it looks really nice and stuff"
    },
    {
      icon: <FaCarSide />,
      title: "Some text goes here!",
      info: "More dummy text goes here so it looks really nice and stuff"
    },
    {
      icon: <FaBeer />,
      title: "Some text goes here!",
      info: "More dummy text goes here so it looks really nice and stuff"
    }
  ]);
  return (
    <>
      {" "}
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {icon.map((item, i) => (
            <article key={i} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
