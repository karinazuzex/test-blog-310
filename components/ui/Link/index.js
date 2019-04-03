import React from "react";
import PropTypes from "prop-types";

import TagProvider from "components/TagProvider";

const Link = ({ className, theme, children, as, ...rest }) => (
    <TagProvider
        {...rest}
        defaultTag="a"
        as={as}
        className={`link ${className ? className : ""} ${theme ? `link--${theme}` : ""}`}
    >
        {children}
    </TagProvider>
);

Link.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    as: PropTypes.string,
};

export default Link;
