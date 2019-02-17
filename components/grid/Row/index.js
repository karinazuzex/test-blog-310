import React from "react";
import PropTypes from "prop-types";

const Row = ({ className = "", children, theme }) => {
    const themeExpanded = theme ? theme.split(" ").map(item => `row--${item} `).join(" ") : "";
    return (
        <div className={`row ${className} ${themeExpanded}`}>
            {children}
        </div>
    );
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    theme: PropTypes.string,
};

export default Row;
