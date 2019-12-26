import React from "react";

export default function hero_component({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

hero_component.defaultProps = {
  hero: "defaultHero"
};
