import React from "react";
import PropTypes from "prop-types";

const Burger = ({ className, ...rest }) => (
    <button className={`burger button ${className}`} {...rest}>
        <span className="burger__body" />
    </button>
);

Burger.propTypes = {
    className: PropTypes.string,
};

export default Burger;
