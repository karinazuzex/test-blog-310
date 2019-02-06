import React from "react";
import PropTypes from "prop-types";

const Icon = ({ className = "", theme = "", type = "", children }) => {
    const themeExpanded = theme.split(" ").map(item => `icon${type && `__${type}`}--${item} ${type ? `icon--${item}` : ""}`).join(" ");
    return (
        <div className={`icon ${className} ${type && `icon__${type}`} ${themeExpanded}`}>
            {children}
        </div>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Icon;
