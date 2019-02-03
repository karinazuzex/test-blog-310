import React from "react";
import PropTypes from "prop-types";

const Col = ({ className, children }) => {
    const classNameExpanded = className.split(" ").map(item => `col-${item} `).join(" ");
    return (
        <div className={classNameExpanded}>
            {children}
        </div>
    );
};

Col.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Col;
