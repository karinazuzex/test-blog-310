import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, theme, type, children }) => {
    const themeExpanded = theme.split(" ").map(item => `button${type && `__${type}`}--${item} ${type ? `button--${item}` : ""}`).join(" ");
    return (
        <button className={`button ${className || ""} ${type && `button__${type}`} ${themeExpanded}`}>
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
