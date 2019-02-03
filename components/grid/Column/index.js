import React from "react";
import PropTypes from "prop-types";

const Column = ({ className, children }) => (
    <div className={`column ${className}`}>
        {children}
    </div>
);

Column.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Column;
