import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, theme, type, children }) => {
    return (
        <button className={`button ${type && `button__${type}`} ${theme && `button${type && `__${type}`}--${theme}`}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Button;
