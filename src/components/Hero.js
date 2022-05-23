import React from "react";
import PropTypes from "prop-types";
function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.propTypes = {
  hero: PropTypes.string,
};

Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
