import React from "react";
import PropTypes from "prop-types";

const Container = ({ className = "", children, theme }) => {
    const themeExpanded = theme ? theme.split(" ").map(item => `container--${item} `).join(" ") : "";
    return (
        <div className={`container ${className} ${themeExpanded}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Container;
