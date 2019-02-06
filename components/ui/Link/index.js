import React from "react";
import PropTypes from "prop-types";

import TagProvoder from "components/ui/TagProvider";

const Link = ({ className, theme, children, as }) => (
    <TagProvoder defaultTag="a" as={as} className={
        `link ${className ? className : ""} ${theme ? `link--${theme}` : ""}`
    }>
        {children}
    </TagProvoder>
);

Link.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    as: PropTypes.string,
};

export default Link;
