import React from "react";
import PropTypes from "prop-types";

const Col = ({ className = "", children, attributes }) => {
    const attributesExpanded = attributes ? attributes.split(" ").map(item => `col-${item} `).join(" ") : "";
    return (
        <div className={`${className} ${attributesExpanded}`}>
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
    attributes: PropTypes.string,
};

export default Col;
