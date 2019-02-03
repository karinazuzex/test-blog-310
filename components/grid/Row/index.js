import React from "react";
import PropTypes from "prop-types";

const Row = ({ className, children, noCol = false }) => (
    <div className={`row ${className} ${noCol && "row--no-col"}`}>
        {children}
    </div>
);

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    noCol: PropTypes.bool,
};

export default Row;
