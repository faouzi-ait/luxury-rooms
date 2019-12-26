import React from "react";
import Hero from "../ui_components/hero_component";
import Banner from "../ui_components/Banner";
import { Link } from "react-router-dom";

const Error = _ => {
  return (
    <Hero>
      {" "}
      <Banner title="OH NO 404!" subtitle="We couldn't find your page">
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
