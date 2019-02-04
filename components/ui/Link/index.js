import React from "react";
import PropTypes from "prop-types";

const Link = ({ className, theme, children }) => (
    <a className={`link ${className ? className : ""} ${theme ? `link--${theme}` : ""}`}>
        {children}
    </a>
);

Link.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Link;
